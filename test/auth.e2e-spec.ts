import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AuthController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/auth/register (POST)', async () => {
    const user = { username: 'test', password: 'test' };
    return request(app.getHttpServer())
      .post('/auth/register')
      .send(user)
      .expect(201)
      .expect((res) => {
        expect(res.body.username).toBe(user.username);
      });
  });

  it('/auth/login (POST)', async () => {
    const user = { username: 'test', password: 'test' };
    return request(app.getHttpServer())
      .post('/auth/login')
      .send(user)
      .expect(201)
      .expect((res) => {
        expect(res.body.access_token).toBeDefined();
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
