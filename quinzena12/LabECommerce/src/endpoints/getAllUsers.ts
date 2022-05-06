import { Request, Response } from "express";
import { connection } from "../data/connection";


export const GetAllUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
       const users = await connection("labecommerce_users")
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No Users Found")
       }
 
       res.status(200).send(users)
       
    } catch (err) {
       res.send(err)
    }
 }