import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body,
} from '@nestjs/common';

import { PostDto } from './dto/post.dto';
import { updatePostDto } from './dto/postUpdate.dto';
import { PostService } from './post.service';
@Controller('post')
export class PostController {
    constructor(private readonly PostService: PostService) { }

    @Get()
    async getAll() {
        return this.PostService.getAllPost();
    }

    @Get(':id')
    async getById(@Param('id') id: string) {
        return this.PostService.getById(id);
    }

    @Post()
    async createPost(@Body() dto: PostDto) {
        return this.PostService.addPost(dto);
    }
    @Put()
    async updatePost(@Body() dto: updatePostDto) {
        return this.PostService.updatePost(dto)
    }
    @Delete(':id')
    async DeletePost(@Param('id') id: string) {
        return this.PostService.removePost(id);
    }   
}
