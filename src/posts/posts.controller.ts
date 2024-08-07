import { Controller, Get, Post as PostMethod, Body, Param, Delete } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post } from './post.entity';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll(): Promise<Post[]> {
    return this.postsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Post> {
    return this.postsService.findOne(+id);
  }

  @PostMethod()
  create(@Body() createPostDto: Post): Promise<Post> {
    return this.postsService.create(createPostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.postsService.remove(+id);
  }
}
