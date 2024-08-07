// Mengimpor dekorator dan kelas dari NestJS
import { 
  Controller, 
  Get, 
  Post as PostMethod, 
  Body, 
  Param, 
  Delete 
} from '@nestjs/common';

// Mengimpor kelas PostsService yang akan digunakan untuk menghandle bisnis logic
import { PostsService } from './posts.service';

// Mengimpor kelas Post yang akan digunakan sebagai entitas
import { Post } from './post.entity';

// Membuat dekorator Controller untuk kelas PostsController
// dengan prefix 'posts' untuk semua route
@Controller('posts')

// Membuat kelas PostsController yang akan menghandle request dan response
export class PostsController {
  
  // Membuat constructor untuk menginject kelas PostsService
  constructor(private readonly postsService: PostsService) {}

  // Membuat method findAll dengan dekorator Get
  // yang akan menghandle request GET untuk semua post
  @Get()
  findAll(): Promise<Post[]> {
    // Mengembalikan hasil dari method findAll pada kelas PostsService
    return this.postsService.findAll();
  }

  // Membuat method findOne dengan dekorator Get
  // yang akan menghandle request GET untuk satu post berdasarkan id
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Post> {
    // Mengkonversi id dari string ke number
    // dan mengembalikan hasil dari method findOne pada kelas PostsService
    return this.postsService.findOne(+id);
  }

  // Membuat method create dengan dekorator PostMethod
  // yang akan menghandle request POST untuk membuat post baru
  @PostMethod()
  create(@Body() createPostDto: Post): Promise<Post> {
    // Mengembalikan hasil dari method create pada kelas PostsService
    return this.postsService.create(createPostDto);
  }

  // Membuat method remove dengan dekorator Delete
  // yang akan menghandle request DELETE untuk menghapus post
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    // Mengkonversi id dari string ke number
    // dan mengembalikan hasil dari method remove pada kelas PostsService
    return this.postsService.remove(+id);
  }
}