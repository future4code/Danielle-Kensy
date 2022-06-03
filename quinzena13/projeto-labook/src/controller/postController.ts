import { Request, Response } from "express"
import { PostBusiness } from "../business/postBusiness"
import { PostInputDTO } from "../model/post"

export class PostController {
    //método para busca de post via id
    public getPost = async (
        req: Request,
        res: Response
    ) => {
        try {
            const {id}  = req.params

            const postBusiness = new PostBusiness()
            const postInfo = await postBusiness.getPost(id)
            
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

            const postBusiness = new PostBusiness
            postBusiness.createPost(input)
            
            res.status(201).send({ message: "Post criado!" })

        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}