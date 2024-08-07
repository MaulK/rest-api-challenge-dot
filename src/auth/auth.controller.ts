// Mengimpor dekorator Controller, Request, Post, dan UseGuards dari NestJS
import { Controller, Request, Post, UseGuards } from '@nestjs/common';

// Mengimpor kelas AuthService yang akan digunakan untuk authentikasi
import { AuthService } from './auth.service';

// Mengimpor kelas LocalAuthGuard yang akan digunakan untuk authentikasi lokal
import { LocalAuthGuard } from './local-auth.guard';

// Mengimpor kelas JwtAuthGuard yang akan digunakan untuk authentikasi menggunakan JWT
import { JwtAuthGuard } from './jwt-auth.guard';

// Membuat dekorator Controller untuk kelas AuthController dengan path 'auth'
@Controller('auth')

// Membuat kelas AuthController yang akan menghandle authentikasi
export class AuthController {
  
  // Membuat constructor untuk menginject AuthService
  constructor(private authService: AuthService) {}

  // Membuat method login yang akan digunakan untuk authentikasi lokal
  @UseGuards(LocalAuthGuard) // Menggunakan LocalAuthGuard untuk authentikasi lokal
  @Post('login') // Membuat endpoint POST untuk login
  async login(@Request() req) { // Mengambil request dari client
    // Menggunakan AuthService untuk melakukan login dan mengembalikan hasil
    return this.authService.login(req.user);
  }

  // Membuat method register yang akan digunakan untuk registrasi user
  @Post('register') // Membuat endpoint POST untuk registrasi
  async register(@Request() req) { // Mengambil request dari client
    // Menggunakan AuthService untuk melakukan registrasi dan mengembalikan hasil
    return this.authService.register(req.body);
  }

  // Membuat method getProfile yang akan digunakan untuk mengambil profil user
  @UseGuards(JwtAuthGuard) // Menggunakan JwtAuthGuard untuk authentikasi menggunakan JWT
  @Post('profile') // Membuat endpoint POST untuk mengambil profil
  getProfile(@Request() req) { // Mengambil request dari client
    // Mengembalikan user yang telah diotentikasi
    return req.user;
  }
}