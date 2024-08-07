// Mengimpor kelas Strategy dari passport-local untuk membuat strategi autentikasi lokal
import { Strategy } from 'passport-local';

// Mengimpor kelas PassportStrategy dari NestJS untuk membuat kelas LocalStrategy
import { PassportStrategy } from '@nestjs/passport';

// Mengimpor dekorator Injectable dan kelas UnauthorizedException dari NestJS
import { Injectable, UnauthorizedException } from '@nestjs/common';

// Mengimpor kelas AuthService dari file auth.service untuk digunakan dalam kelas LocalStrategy
import { AuthService } from './auth.service';

// Membuat kelas LocalStrategy dengan dekorator Injectable
@Injectable()

// Membuat kelas LocalStrategy yang extends dari PassportStrategy dengan nama strategi 'local'
export class LocalStrategy extends PassportStrategy(Strategy) {

  // Konstruktor kelas LocalStrategy, digunakan untuk menginisialisasi AuthService
  constructor(private authService: AuthService) {
    // Memanggil konstruktor parent dengan konfigurasi default
    super();
  }

  // Metode validate yang digunakan untuk memverifikasi kredensial pengguna
  async validate(username: string, password: string): Promise<any> {
    // Memanggil metode validateUser dari AuthService untuk memverifikasi kredensial pengguna
    const user = await this.authService.validateUser(username, password);
    
    // Jika pengguna tidak ditemukan, maka melempar UnauthorizedException
    if (!user) {
      throw new UnauthorizedException();
    }
    
    // Jika pengguna ditemukan, maka mengembalikan objek pengguna
    return user;
  }
}