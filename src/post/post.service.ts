import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
    posts: any[];

    constructor() {
        this.posts = [
            {
                id: 1,
                text: "Nest.js Nima"
            },
            {
                id: 2,
                text: "Nest.js kirish"
            },
            {
                id: 3,
                text: "Nest.js CLI ni ornatamiz"
            }
        ]
    }

    async getAllPost() {
        return this.posts
    }

    async getById(id) {
        return this.posts.find(p => p.id == Number(id))
    }

    async addPost(dto) {
        return [...this.posts, dto]
    }
    
    async updatePost(dto){
        let post = this.posts.find(p => p.id == dto.id)
        post.text = dto.text;
        return this.posts
    }
    async removePost(id){
        this.posts.filter(p => p.id !== id)
        return `Delete post ${id}`
    }
}
