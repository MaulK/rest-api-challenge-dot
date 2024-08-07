// Mengimpor dekorator Injectable dari @nestjs/common
import { Injectable } from '@nestjs/common';

// Membuat dekorator Injectable untuk kelas AppService
@Injectable()

// Membuat kelas AppService yang dapat diinjeksi ke dalam komponen lain
export class AppService {
  
  // Membuat metode getHello yang mengembalikan string
  getHello(): string {
    
    // Mengembalikan string "Hello World!"
    return 'Hello World!';
  }
}