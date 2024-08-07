// Mengimpor fungsi Test dan kelas TestingModule dari @nestjs/testing untuk melakukan testing
import { Test, TestingModule } from '@nestjs/testing';

// Mengimpor kelas AppController dari direktori lokal
import { AppController } from './app.controller';

// Mengimpor kelas AppService dari direktori lokal
import { AppService } from './app.service';

// Membuat blok testing untuk kelas AppController
describe('AppController', () => {
  
  // Deklarasi variabel appController untuk menyimpan instance AppController
  let appController: AppController;

  // Membuat fungsi beforeEach untuk melakukan setup sebelum setiap testing
  beforeEach(async () => {
    
    // Membuat instance TestingModule dengan menggunakan fungsi createTestingModule
    const app: TestingModule = await Test.createTestingModule({
      
      // Mendaftarkan controller AppController
      controllers: [AppController],
      
      // Mendaftarkan provider AppService
      providers: [AppService],
    }).compile();

    // Mengambil instance AppController dari TestingModule
    appController = app.get<AppController>(AppController);
  });

  // Membuat blok testing untuk metode root
  describe('root', () => {
    
    // Membuat testing untuk metode getHello
    it('should return "Hello World!"', () => {
      
      // Mengharapkan hasil dari metode getHello adalah "Hello World!"
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});