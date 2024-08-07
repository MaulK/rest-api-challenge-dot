// Mengimpor kelas Test dan TestingModule dari NestJS untuk testing
import { Test, TestingModule } from '@nestjs/testing';

// Mengimpor kelas AuthController yang akan diuji
import { AuthController } from './auth.controller';

// Membuat blok describe untuk mengelompokkan test case
describe('AuthController', () => {
  
  // Membuat variabel controller untuk menyimpan instance AuthController
  let controller: AuthController;

  // Membuat blok beforeEach untuk menjalankan kode sebelum setiap test case
  beforeEach(async () => {
    
    // Membuat instance TestingModule menggunakan Test.createTestingModule
    const module: TestingModule = await Test.createTestingModule({
      
      // Mendaftarkan controller AuthController ke dalam module
      controllers: [AuthController],
    }).compile();

    // Mengambil instance AuthController dari module
    controller = module.get<AuthController>(AuthController);
  });

  // Membuat test case untuk memastikan controller telah didefinisikan
  it('should be defined', () => {
    
    // Menggunakan expect dari Jest untuk memastikan controller telah didefinisikan
    expect(controller).toBeDefined();
  });
});