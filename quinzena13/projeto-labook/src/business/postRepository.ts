import { post } from "../model/post";

export interface PostRepository {
    getAllPost(): Promise <post[]>
    getPost( id: string ): Promise <post[]>
    insertPost (post: post): Promise<void>
}