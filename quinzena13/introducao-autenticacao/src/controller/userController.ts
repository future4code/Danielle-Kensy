import { UserBusiness } from "../business/userBusiness"
import { Request, Response } from "express";
import { UserInputDTO } from "../model/user"

export class UserController {
    public signup = async (
        req: Request,
        res: Response
     ): Promise<void> => {
        try {
            const { email, password } = req.body
     
           const input: UserInputDTO = {
              email,
              password
           }
     
           const userBusiness = new UserBusiness
           const token = userBusiness.createUser(input)
     
           res.send({ message: "token gerado pelo jwt!", token })
        } catch (error:any) {
           res.send(error.message)
        }
     }
}