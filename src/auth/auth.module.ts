// Mengimpor kelas Module dari NestJS untuk membuat modul
import { Module } from '@nestjs/common';

// Mengimpor kelas AuthService yang akan digunakan untuk authentikasi
import { AuthService } from './auth.service';

// Mengimpor kelas AuthController yang akan menghandle authentikasi
import { AuthController } from './auth.controller';

// Mengimpor modul UsersModule yang akan digunakan untuk menghandle user
import { UsersModule } from '../users/users.module';

// Mengimpor modul PassportModule yang akan digunakan untuk authentikasi
import { PassportModule } from '@nestjs/passport';

// Mengimpor modul JwtModule yang akan digunakan untuk authentikasi menggunakan JWT
import { JwtModule } from '@nestjs/jwt';

// Mengimpor kelas JwtStrategy yang akan digunakan untuk authentikasi menggunakan JWT
import { JwtStrategy } from './jwt.strategy';

// Mengimpor kelas LocalStrategy yang akan digunakan untuk authentikasi lokal
import { LocalStrategy } from './local.strategy';

// Membuat dekorator Module untuk kelas AuthModule
@Module({
  
  // Membuat array imports untuk mengimport modul lain
  imports: [
    
    // Mengimport modul UsersModule
    UsersModule,
    
    // Mengimport modul PassportModule
    PassportModule,
    
    // Mengimport modul JwtModule dan mengkonfigurasi secret key dan sign options
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'secretKey', // Menggunakan secret key dari environment variable atau default 'secretKey'
      signOptions: { expiresIn: '60s' }, // Mengatur masa berlaku token menjadi 60 detik
    }),
  ],
  
  // Membuat array providers untuk mengregister provider lain
  providers: [
    
    // Mengregister AuthService sebagai provider
    AuthService,
    
    // Mengregister LocalStrategy sebagai provider
    LocalStrategy,
    
    // Mengregister JwtStrategy sebagai provider
    JwtStrategy,
  ],
  
  // Membuat array controllers untuk mengregister controller lain
  controllers: [
    
    // Mengregister AuthController sebagai controller
    AuthController,
  ],
})

// Membuat kelas AuthModule yang akan menghandle authentikasi
export class AuthModule {}