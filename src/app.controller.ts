// Mengimpor dekorator Controller dan Get dari @nestjs/common
import { Controller, Get } from '@nestjs/common';

// Mengimpor kelas AppService dari direktori lokal
import { AppService } from './app.service';

// Membuat dekorator Controller untuk kelas AppController
@Controller()

// Membuat kelas AppController yang akan menangani request HTTP
export class AppController {
  
  // Membuat konstruktor untuk kelas AppController dengan parameter appService
  constructor(private readonly appService: AppService) {}
  
  // Membuat metode getHello dengan dekorator Get untuk menangani request GET
  @Get()
  
  // Membuat metode getHello yang mengembalikan string
  getHello(): string {
    
    // Mengembalikan hasil dari metode getHello pada kelas AppService
    return this.appService.getHello();
  }
}