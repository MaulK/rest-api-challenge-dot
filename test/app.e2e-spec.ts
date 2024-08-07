// Mengimpor modul testing dari NestJS
import { Test, TestingModule } from '@nestjs/testing';

// Mengimpor interface INestApplication dari NestJS
import { INestApplication } from '@nestjs/common';

// Mengimpor modul request dari supertest untuk melakukan request HTTP
import * as request from 'supertest';

// Mengimpor AppModule yang merupakan modul utama dari aplikasi
import { AppModule } from './../src/app.module';

// Membuat deskripsi untuk test AppController
describe('AppController (e2e)', () => {
  // Mendeklarasikan variabel app dengan tipe INestApplication
  let app: INestApplication;

  // Fungsi yang dijalankan sebelum setiap test
  beforeEach(async () => {
    // Membuat modul testing dengan mengimpor AppModule
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    // Membuat aplikasi NestJS dari modul testing
    app = moduleFixture.createNestApplication();
    // Menginisialisasi aplikasi
    await app.init();
  });

  // Test untuk endpoint / dengan method GET
  it('/ (GET)', () => {
    // Melakukan request GET ke endpoint /
    return request(app.getHttpServer())
      .get('/')
      // Mengharapkan response dengan status code 200
      .expect(200)
      // Mengharapkan response body memiliki teks "Hello World!"
      .expect('Hello World!');
  });

});