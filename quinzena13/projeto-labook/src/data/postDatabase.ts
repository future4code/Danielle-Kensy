import { post } from "../model/post";
import { BaseDatabase } from "./baseDatabase";

export class PostDatabase extends BaseDatabase {
    //método para busca de post via id
    public getPost = async(
        id: string
    ): Promise <post[]> => {
        try{
           const post = await PostDatabase.connection
            .select('*')
            .where({id})
            .from('labook_posts')
            return post
        } catch (error:any) {
            throw new Error(error.message)
        }
    }
    
    //método para criação de post
    public insertPost = async(
        post: post
    ) => {
        try{
            await PostDatabase.connection.insert({
                id: post.id,
                photo: post.photo,
                description: post.description,
                type: post.type,
                created_at: post.createdAt,
                author_id: post.authorId
            }).into('labook_posts')

        } catch(error:any) {
            throw new Error(error.message)
        }
    }
}