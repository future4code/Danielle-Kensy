import { Request, Response } from "express"
import { UserBusiness } from "../business/userBusiness"
import { UserFriendshipInputDTO, UserInputDTO } from "../model/user"

export class UserController {
    //inversão de dependências
    constructor(
        private userBusiness: UserBusiness
    ){}

    //método para criação de usuário
    public createUser = async (
        req: Request,
        res: Response
    ): Promise<void> => {
        try {
            const { name, email, password } = req.body

            const input: UserInputDTO = {
                name,
                email,
                password
            }

            this.userBusiness.createUser(input)
            
            res.status(201).send({ message: "Usuário criado!" })

        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    //método para criação de amizade
    public createUserFriendship = async (
        req: Request,
        res: Response
    ): Promise<void> => {
        try {
            const { idUser, idFriend } = req.body

            const input: UserFriendshipInputDTO = {
                idUser, 
                idFriend
            }

            this.userBusiness.createUserFriendship(input)
            
            res.status(201).send({ message: "Amizade Criada!" })

        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    //método para exclusão da amizade
    public deleteFriendship = async (
        req: Request,
        res: Response
    ): Promise<void> => {
        try {
            const { idUser } = req.params
            const { idFriend } = req.body

            // const { idUser, idFriend } = req.body
            
            const input: UserFriendshipInputDTO = {
                idUser, 
                idFriend
            }

            
            await this.userBusiness.deleteFriendship(input)
            
            res.status(201).send({ message: "Amizade Deletada!" })

        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}