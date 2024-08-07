// Mengimpor kelas Test dan TestingModule dari NestJS untuk melakukan testing
import { Test, TestingModule } from '@nestjs/testing';

// Mengimpor kelas AuthService yang akan diuji
import { AuthService } from './auth.service';

// Membuat blok describe untuk mengelompokkan test case
describe('AuthService', () => {
  
  // Deklarasi variabel service yang akan diisi dengan instance AuthService
  let service: AuthService;

  // Membuat blok beforeEach yang akan dijalankan sebelum setiap test case
  beforeEach(async () => {
    
    // Membuat instance TestingModule menggunakan Test.createTestingModule
    const module: TestingModule = await Test.createTestingModule({
      
      // Mendaftarkan provider AuthService
      providers: [AuthService],
    }).compile();

    // Mengambil instance AuthService dari module
    service = module.get<AuthService>(AuthService);
  });

  // Membuat test case untuk memastikan bahwa service telah diinisialisasi
  it('should be defined', () => {
    
    // Menggunakan expect dari Jest untuk memastikan bahwa service tidak null atau undefined
    expect(service).toBeDefined();
  });
});