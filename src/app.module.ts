// Mengimpor modul Module dari @nestjs/common
import { Module } from '@nestjs/common';

// Mengimpor modul TypeOrmModule dari @nestjs/typeorm untuk menghubungkan ke database
import { TypeOrmModule } from '@nestjs/typeorm';

// Mengimpor modul ConfigModule dari @nestjs/config untuk mengatur konfigurasi aplikasi
import { ConfigModule } from '@nestjs/config';

// Mengimpor modul UsersModule dari direktori users untuk mengatur fitur pengguna
import { UsersModule } from './users/users.module';

// Mengimpor modul PostsModule dari direktori posts untuk mengatur fitur posting
import { PostsModule } from './posts/posts.module';

// Mengimpor modul AuthModule dari direktori auth untuk mengatur fitur autentikasi
import { AuthModule } from './auth/auth.module';

// Membuat dekorator Module untuk kelas AppModule
@Module({
  
  // Membuat array imports untuk mengimpor modul-modul lain
  imports: [
    
    // Mengimpor ConfigModule dengan opsi untuk membuatnya global
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    
    // Mengimpor TypeOrmModule dengan konfigurasi database
    TypeOrmModule.forRoot({
      
      // Mengatur jenis database sebagai postgres
      type: 'postgres',
      
      // Mengatur host database dari environment variable DB_HOST atau default ke localhost
      host: process.env.DB_HOST || 'localhost',
      
      // Mengatur port database dari environment variable DB_PORT atau default ke 5432
      port: parseInt(process.env.DB_PORT) || 5432,
      
      // Mengatur username database dari environment variable DB_USERNAME atau default ke postgres
      username: process.env.DB_USERNAME || 'postgres',
      
      // Mengatur password database dari environment variable DB_PASSWORD atau default ke postgres
      password: process.env.DB_PASSWORD || 'postgres',
      
      // Mengatur nama database dari environment variable DB_NAME atau default ke test
      database: process.env.DB_NAME || 'test',
      
      // Mengatur autoLoadEntities untuk memuat entitas secara otomatis
      autoLoadEntities: true,
      
      // Mengatur synchronize untuk membuat perubahan schema database secara otomatis (set to false in production)
      synchronize: true, 
    }),
    
    // Mengimpor UsersModule
    UsersModule,
    
    // Mengimpor PostsModule
    PostsModule,
    
    // Mengimpor AuthModule
    AuthModule,
  ],
})

// Membuat kelas AppModule yang akan menjadi modul utama aplikasi
export class AppModule {}