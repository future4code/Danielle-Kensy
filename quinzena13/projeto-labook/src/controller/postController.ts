import { Request, Response } from "express"
import { PostBusiness } from "../business/postBusiness"
import { PostInputDTO } from "../model/post"

export class PostController {

    constructor(
        private postBusiness: PostBusiness
    ){}

    //método para busca de todos os post
    public getAllPosts = async (
        req: Request,
        res: Response
    ) => {
        try {
            
            const posts = await this.postBusiness.getAllPosts()

            res.send(posts).status(200)

        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    //método para busca de post via id
    public getPost = async (
        req: Request,
        res: Response
    ) => {
        try {
            const {id}  = req.params

            const postInfo = await this.postBusiness.getPost(id)
            
            res.send(postInfo).status(200)

        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    //método para criação de usuário
    public createPost = async (
        req: Request,
        res: Response
    ): Promise<void> => {
        try {
            const { photo, description, type, createdAt, authorId } = req.body

            const input: PostInputDTO = {
                photo, 
                description, 
                type, 
                createdAt, 
                authorId
            }

            this.postBusiness.createPost(input)
            
            res.status(201).send({ message: "Post criado!" })

        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}