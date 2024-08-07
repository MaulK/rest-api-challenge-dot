// Mengimpor kelas Module dari NestJS
import { Module } from '@nestjs/common';

// Mengimpor kelas TypeOrmModule dari NestJS TypeORM
import { TypeOrmModule } from '@nestjs/typeorm';

// Mengimpor kelas PostsService yang akan digunakan sebagai provider
import { PostsService } from './posts.service';

// Mengimpor kelas PostsController yang akan digunakan sebagai controller
import { PostsController } from './posts.controller';

// Mengimpor kelas Post yang akan digunakan sebagai entitas
import { Post } from './post.entity';

// Membuat dekorator Module untuk kelas PostsModule
@Module({
  
  // Mengimpor modul TypeOrmModule untuk fitur Post
  // yang akan membuat koneksi ke database untuk entitas Post
  imports: [TypeOrmModule.forFeature([Post])],
  
  // Mendaftarkan provider PostsService yang akan digunakan oleh controller
  providers: [PostsService],
  
  // Mendaftarkan controller PostsController yang akan menghandle request
  controllers: [PostsController],
})

// Membuat kelas PostsModule yang akan menjadi modul untuk menghandle post
export class PostsModule {}
