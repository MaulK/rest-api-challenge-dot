// Mengimpor modul testing dari NestJS
import { Test, TestingModule } from '@nestjs/testing';

// Mengimpor interface INestApplication dari NestJS
import { INestApplication } from '@nestjs/common';

// Mengimpor modul request dari supertest untuk melakukan request HTTP
import * as request from 'supertest';

// Mengimpor AppModule yang merupakan modul utama dari aplikasi
import { AppModule } from '../src/app.module';

// Membuat deskripsi untuk test AuthController
describe('AuthController (e2e)', () => {
  // Mendeklarasikan variabel app dengan tipe INestApplication
  let app: INestApplication;

  // Fungsi yang dijalankan sebelum semua test
  beforeAll(async () => {
    // Membuat modul testing dengan mengimpor AppModule
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    // Membuat aplikasi NestJS dari modul testing
    app = moduleFixture.createNestApplication();
    // Menginisialisasi aplikasi
    await app.init();
  });

  // Test untuk endpoint /auth/register dengan method POST
  it('/auth/register (POST)', async () => {
    // Membuat data user untuk dijadikan payload
    const user = { username: 'test', password: 'test' };
    // Melakukan request POST ke endpoint /auth/register dengan payload user
    return request(app.getHttpServer())
      .post('/auth/register')
      .send(user)
      // Mengharapkan response dengan status code 201
      .expect(201)
      // Mengharapkan response body memiliki properti username yang sama dengan payload
      .expect((res) => {
        expect(res.body.username).toBe(user.username);
      });
  });

  // Test untuk endpoint /auth/login dengan method POST
  it('/auth/login (POST)', async () => {
    // Membuat data user untuk dijadikan payload
    const user = { username: 'test', password: 'test' };
    // Melakukan request POST ke endpoint /auth/login dengan payload user
    return request(app.getHttpServer())
      .post('/auth/login')
      .send(user)
      // Mengharapkan response dengan status code 201
      .expect(201)
      // Mengharapkan response body memiliki properti access_token
      .expect((res) => {
        expect(res.body.access_token).toBeDefined();
      });
  });

  // Fungsi yang dijalankan setelah semua test
  afterAll(async () => {
    // Menutup aplikasi
    await app.close();
  });
});