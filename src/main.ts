// Mengimpor modul NestFactory dari @nestjs/core
import { NestFactory } from '@nestjs/core';

// Mengimpor AppModule yang merupakan modul utama dari aplikasi
import { AppModule } from './app.module';

// Membuat fungsi bootstrap yang akan menjalankan aplikasi
async function bootstrap() {
  // Membuat instance aplikasi NestJS dengan mengimpor AppModule
  const app = await NestFactory.create(AppModule);
  
  // Menjalankan aplikasi dan membuatnya listen pada port 3000
  await app.listen(3000);
}

// Memanggil fungsi bootstrap untuk menjalankan aplikasi
bootstrap();