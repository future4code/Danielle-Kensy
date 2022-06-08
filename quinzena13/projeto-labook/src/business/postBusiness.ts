import { PostDatabase } from "../data/postDatabase";
import { MissingParameters, MissingPostID } from "../error/customError";
import { post, PostInputDTO } from "../model/post";
import { generateId } from "../services/generateID";
import { PostRepository } from "./postRepository";

export class PostBusiness {

    constructor(
        private postDatabase: PostRepository
    ){}

    //método para busca de todos os post
    public getAllPosts = async ():Promise <post[]> => {
        try{
            
            return await this.postDatabase.getAllPost()

        } catch (error:any) { 
            throw new Error(error.message)
        }
    }

    //método para busca de post via id
    public getPost = async (id: string):Promise <post[]> => {
        try{
            if (!id) {
                throw new MissingPostID()
            }

            const post = await this.postDatabase.getPost(id)
            
            return post
            
        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    //método criação de post
    public createPost = async (input: PostInputDTO) => {
        try{
            const { photo, description, type, createdAt, authorId } = input

            if (!photo || !description || !authorId) {
                throw new MissingParameters()
            }

            const id: string = generateId()

            await this.postDatabase.insertPost({
                id,
                photo,
                description,
                type,
                createdAt,
                authorId
            })

        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}