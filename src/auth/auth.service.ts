// Mengimpor dekorator Injectable dari NestJS untuk membuat kelas AuthService
import { Injectable } from '@nestjs/common';

// Mengimpor kelas JwtService dari NestJS untuk menghandle token JWT
import { JwtService } from '@nestjs/jwt';

// Mengimpor kelas UsersService untuk menghandle user
import { UsersService } from '../users/users.service';

// Mengimpor library bcrypt untuk menghandle enkripsi password
import * as bcrypt from 'bcrypt';

// Membuat kelas AuthService dengan dekorator Injectable
@Injectable()
export class AuthService {
  
  // Membuat constructor untuk menginisialisasi dependency injection
  constructor(
    
    // Menginisialisasi UsersService sebagai private property
    private usersService: UsersService,
    
    // Menginisialisasi JwtService sebagai private property
    private jwtService: JwtService
  ) {}

  // Membuat metode validateUser untuk memvalidasi user
  async validateUser(username: string, pass: string): Promise<any> {
    
    // Mencari user berdasarkan username menggunakan UsersService
    const user = await this.usersService.findOneByUsername(username);
    
    // Membandingkan password yang diberikan dengan password yang tersimpan
    if (user && await bcrypt.compare(pass, user.password)) {
      
      // Mengembalikan user tanpa password
      const { password, ...result } = user;
      return result;
    }
    
    // Mengembalikan null jika user tidak ditemukan atau password salah
    return null;
  }

  // Membuat metode login untuk menggenerate token JWT
  async login(user: any) {
    
    // Membuat payload untuk token JWT
    const payload = { username: user.username, sub: user.userId };
    
    // Menggenerate token JWT menggunakan JwtService
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  // Membuat metode register untuk mendaftarkan user baru
  async register(user: any) {
    
    // Mengenkripsi password menggunakan bcrypt
    const hashedPassword = await bcrypt.hash(user.password, 10);
    
    // Membuat user baru dengan password yang telah dienkripsi
    return this.usersService.create({ ...user, password: hashedPassword });
  }
}