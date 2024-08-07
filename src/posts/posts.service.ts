// Mengimpor dekorator Injectable dan kelas NotFoundException dari NestJS
import { Injectable, NotFoundException } from '@nestjs/common';

// Mengimpor dekorator InjectRepository dari NestJS TypeORM
import { InjectRepository } from '@nestjs/typeorm';

// Mengimpor kelas Repository dari TypeORM
import { Repository } from 'typeorm';

// Mengimpor kelas Post yang akan digunakan sebagai entitas
import { Post } from './post.entity';

// Membuat dekorator Injectable untuk kelas PostsService
@Injectable()

// Membuat kelas PostsService yang akan menghandle bisnis logic
export class PostsService {
  
  // Membuat constructor untuk menginject repository Post
  constructor(
    // Menggunakan dekorator InjectRepository untuk menginject repository Post
    @InjectRepository(Post)
    // Membuat properti postsRepository yang akan digunakan untuk mengakses repository Post
    private postsRepository: Repository<Post>,
  ) {}

  // Membuat method findAll yang akan mengembalikan semua post
  findAll(): Promise<Post[]> {
    // Menggunakan method find pada repository Post untuk mengembalikan semua post
    // dengan relasi user
    return this.postsRepository.find({ relations: ['user'] });
  }

  // Membuat method findOne yang akan mengembalikan satu post berdasarkan id
  async findOne(id: number): Promise<Post> {
    // Menggunakan method findOne pada repository Post untuk mengembalikan satu post
    // dengan relasi user dan kondisi id
    const post = await this.postsRepository.findOne({ where: { id }, relations: ['user'] });
    // Jika post tidak ditemukan, maka akan melempar NotFoundException
    if (!post) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    // Mengembalikan post yang ditemukan
    return post;
  }

  // Membuat method create yang akan membuat post baru
  create(post: Post): Promise<Post> {
    // Menggunakan method save pada repository Post untuk membuat post baru
    return this.postsRepository.save(post);
  }

  // Membuat method remove yang akan menghapus post berdasarkan id
  async remove(id: number): Promise<void> {
    // Menggunakan method delete pada repository Post untuk menghapus post
    await this.postsRepository.delete(id);
  }
}