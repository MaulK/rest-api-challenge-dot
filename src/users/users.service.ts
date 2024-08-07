// Mengimpor dekorator Injectable dan NotFoundException dari @nestjs/common
import { Injectable, NotFoundException } from '@nestjs/common';

// Mengimpor dekorator InjectRepository dari @nestjs/typeorm
import { InjectRepository } from '@nestjs/typeorm';

// Mengimpor kelas Repository dari typeorm
import { Repository } from 'typeorm';

// Mengimpor kelas User dari direktori lokal
import { User } from './user.entity';

// Membuat dekorator Injectable untuk kelas UsersService
@Injectable()

// Membuat kelas UsersService yang akan menangani operasi CRUD pada tabel users
export class UsersService {
  
  // Membuat konstruktor untuk kelas UsersService dengan parameter usersRepository
  constructor(
    
    // Menggunakan dekorator InjectRepository untuk menginjeksi repository User
    @InjectRepository(User)
    
    // Deklarasi variabel usersRepository dengan tipe Repository<User>
    private usersRepository: Repository<User>,
  ) {}

  // Membuat metode findAll untuk mengambil semua data user
  findAll(): Promise<User[]> {
    
    // Menggunakan metode find pada repository untuk mengambil semua data user
    // dengan relasi posts
    return this.usersRepository.find({ relations: ['posts'] });
  }

  // Membuat metode findOne untuk mengambil data user berdasarkan ID
  async findOne(id: number): Promise<User> {
    
    // Menggunakan metode findOne pada repository untuk mengambil data user
    // dengan ID yang diberikan dan relasi posts
    const user = await this.usersRepository.findOne({ where: { id }, relations: ['posts'] });
    
    // Jika user tidak ditemukan, maka throw NotFoundException
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    
    // Mengembalikan data user yang ditemukan
    return user;
  }

  // Membuat metode findOneByUsername untuk mengambil data user berdasarkan username
  async findOneByUsername(username: string): Promise<User> {
    
    // Menggunakan metode findOne pada repository untuk mengambil data user
    // dengan username yang diberikan
    const user = await this.usersRepository.findOne({ where: { username } });
    
    // Jika user tidak ditemukan, maka throw NotFoundException
    if (!user) {
      throw new NotFoundException(`User with username ${username} not found`);
    }
    
    // Mengembalikan data user yang ditemukan
    return user;
  }

  // Membuat metode create untuk membuat data user baru
  create(user: User): Promise<User> {
    
    // Menggunakan metode save pada repository untuk membuat data user baru
    return this.usersRepository.save(user);
  }

  // Membuat metode remove untuk menghapus data user berdasarkan ID
  async remove(id: number): Promise<void> {
    
    // Menggunakan metode delete pada repository untuk menghapus data user
    await this.usersRepository.delete(id);
  }
}