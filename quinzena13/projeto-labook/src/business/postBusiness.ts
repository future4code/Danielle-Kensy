import { PostDatabase } from "../data/postDatabase";
import { MissingParameters, MissingPostID } from "../error/customError";
import { post, PostInputDTO } from "../model/post";
import { generateId } from "../services/generateID";

export class PostBusiness {
    //método para busca de post via id
    public getPost = async (id: string):Promise <post[]> => {
        try{
            if (!id) {
                throw new MissingPostID()
            }

            const postDatabase = new PostDatabase()
            const post = await postDatabase.getPost(id)
            
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

            const postDatabase = new PostDatabase()
            await postDatabase.insertPost({
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