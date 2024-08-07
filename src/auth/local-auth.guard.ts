// File local-auth.guard.ts, berisi kelas LocalAuthGuard yang digunakan untuk autentikasi lokal

// Mengimpor dekorator Injectable dari NestJS untuk membuat kelas LocalAuthGuard
import { Injectable } from '@nestjs/common';

// Mengimpor kelas AuthGuard dari NestJS untuk membuat kelas LocalAuthGuard
import { AuthGuard } from '@nestjs/passport';

// Membuat kelas LocalAuthGuard dengan dekorator Injectable
@Injectable()

// Membuat kelas LocalAuthGuard yang extends dari AuthGuard dengan nama strategi 'local'
export class LocalAuthGuard extends AuthGuard('local') {}