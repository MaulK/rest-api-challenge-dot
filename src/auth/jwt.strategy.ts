// Mengimpor dekorator Injectable dari NestJS untuk membuat kelas JwtStrategy
import { Injectable } from '@nestjs/common';

// Mengimpor kelas PassportStrategy dari NestJS untuk membuat kelas JwtStrategy
import { PassportStrategy } from '@nestjs/passport';

// Mengimpor kelas ExtractJwt dan Strategy dari passport-jwt untuk digunakan dalam kelas JwtStrategy
import { ExtractJwt, Strategy } from 'passport-jwt';

// Mengimpor konstanta jwtConstants dari file constants untuk digunakan dalam kelas JwtStrategy
import { jwtConstants } from './constants';

// Membuat kelas JwtStrategy dengan dekorator Injectable
@Injectable()

// Membuat kelas JwtStrategy yang extends dari PassportStrategy dengan nama strategi 'jwt'
export class JwtStrategy extends PassportStrategy(Strategy) {

  // Konstruktor kelas JwtStrategy, digunakan untuk menginisialisasi strategi JWT
  constructor() {
    // Memanggil konstruktor parent dengan konfigurasi strategi JWT
    super({
      // Mengambil token JWT dari header Authorization dengan nama 'Bearer'
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      
      // Menentukan apakah akan mengabaikan masa berlaku token JWT
      ignoreExpiration: false,
      
      // Menggunakan kunci rahasia dari konstanta jwtConstants untuk verifikasi token JWT
      secretOrKey: jwtConstants.secret,
    });
  }

  // Metode validate yang digunakan untuk memverifikasi payload token JWT
  async validate(payload: any) {
    // Mengembalikan objek dengan properti userId dan username dari payload token JWT
    return { userId: payload.sub, username: payload.username };
  }
}