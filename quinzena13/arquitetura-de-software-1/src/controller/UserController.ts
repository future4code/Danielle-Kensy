import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";


export class UserController {

   public getUser = async (
      req: Request,
      res: Response
   ) : Promise<void> => {
      try {

         const userBusiness = new UserBusiness
         const users = await userBusiness.getUser();
         res.send(users).status(200);

      } catch (error:any) {
         res.status(400).send(error.message)
      }
   } 

  public createUser = async (
      req: Request,
      res: Response
   ): Promise<void> => {
      try {
         const { name, nickname, email, password } = req.body
   
         const input = {
            name,
            nickname,
            email,
            password
         }
   
         const userBusiness = new UserBusiness
         userBusiness.createUser(input)
   
         res.status(201).send({ message: "Usuário criado!" })
      } catch (error:any) {
         res.status(400).send(error.message)
      }
   }

   public deleteUser = async (
      req: Request,
      res: Response
   ): Promise<void> => {

      const id = req.params

      const input = {
         id
      }

      const userBusiness = new UserBusiness
      userBusiness.deleteUser(input.id)
      res.status(201).send({ message: "Usuário apagado com sucesso!" })

   }

}
