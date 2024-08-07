// File users.module.ts

// Mengimpor kelas Module dari @nestjs/common
import { Module } from '@nestjs/common';

// Mengimpor kelas TypeOrmModule dari @nestjs/typeorm
import { TypeOrmModule } from '@nestjs/typeorm';

// Mengimpor kelas UsersService dari direktori lokal
import { UsersService } from './users.service';

// Mengimpor kelas UsersController dari direktori lokal
import { UsersController } from './users.controller';

// Mengimpor kelas User dari direktori lokal
import { User } from './user.entity';

// Membuat dekorator Module untuk kelas UsersModule
@Module({

  // Membuat array imports untuk mengimpor modul lain
  imports: [
    
    // Mengimpor TypeOrmModule untuk fitur User
    TypeOrmModule.forFeature([User]),
  ],

  // Membuat array providers untuk mengimpor provider lain
  providers: [
    
    // Mengimpor UsersService sebagai provider
    UsersService,
  ],

  // Membuat array controllers untuk mengimpor controller lain
  controllers: [
    
    // Mengimpor UsersController sebagai controller
    UsersController,
  ],

  // Membuat array exports untuk mengekspor provider lain
  exports: [
    
    // Mengekspor UsersService agar dapat diakses dari luar modul
    UsersService, // Export the UsersService
  ],
})

// Membuat kelas UsersModule yang akan menangani operasi CRUD pada tabel users
export class UsersModule {}