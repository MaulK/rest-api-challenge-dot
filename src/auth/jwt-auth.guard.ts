// File jwt-auth.guard.ts, berisi kelas JwtAuthGuard yang digunakan untuk autentikasi JWT

// Mengimpor dekorator Injectable dari NestJS untuk membuat kelas JwtAuthGuard
import { Injectable } from '@nestjs/common';

// Mengimpor kelas AuthGuard dari NestJS untuk membuat kelas JwtAuthGuard
import { AuthGuard } from '@nestjs/passport';

// Membuat kelas JwtAuthGuard dengan dekorator Injectable
@Injectable()

// Membuat kelas JwtAuthGuard yang extends dari AuthGuard dengan nama strategi 'jwt'
export class JwtAuthGuard extends AuthGuard('jwt') {}

// Note: Komentar di atas baris terakhir tidak perlu karena tidak ada kode lagi setelahnya