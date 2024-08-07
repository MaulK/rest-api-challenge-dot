// Mengimpor dekorator dan kelas dari @nestjs/common
import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Param, 
  Delete 
} from '@nestjs/common';

// Mengimpor kelas UsersService dari direktori lokal
import { UsersService } from './users.service';

// Mengimpor kelas User dari direktori lokal
import { User } from './user.entity';

// Membuat dekorator Controller untuk kelas UsersController dengan path 'users'
@Controller('users')

// Membuat kelas UsersController yang akan menangani operasi CRUD pada tabel users
export class UsersController {
  
  // Membuat konstruktor untuk kelas UsersController dengan parameter usersService
  constructor(private readonly usersService: UsersService) {}

  // Membuat metode findAll dengan dekorator Get untuk mengambil semua data user
  @Get()
  findAll(): Promise<User[]> {
    
    // Menggunakan metode findAll pada usersService untuk mengambil semua data user
    return this.usersService.findAll();
  }

  // Membuat metode findOne dengan dekorator Get untuk mengambil data user berdasarkan ID
  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    
    // Menggunakan metode findOne pada usersService untuk mengambil data user berdasarkan ID
    // dengan mengkonversi id dari string ke number
    return this.usersService.findOne(+id);
  }

  // Membuat metode create dengan dekorator Post untuk membuat data user baru
  @Post()
  create(@Body() createUserDto: User): Promise<User> {
    
    // Menggunakan metode create pada usersService untuk membuat data user baru
    return this.usersService.create(createUserDto);
  }

  // Membuat metode remove dengan dekorator Delete untuk menghapus data user berdasarkan ID
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    
    // Menggunakan metode remove pada usersService untuk menghapus data user berdasarkan ID
    // dengan mengkonversi id dari string ke number
    return this.usersService.remove(+id);
  }
}