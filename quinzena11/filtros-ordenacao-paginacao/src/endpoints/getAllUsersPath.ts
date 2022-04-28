import { Request, Response } from "express";
import { off } from "process";
import { connection } from "../data/connection";;

export const getAllUsersPath = async(req: Request,res: Response): Promise<void> =>{
    try {

      let tipo = req.params.tipo;

      if(!tipo){
         tipo ="%"
       }

       const users = await connection("aula48_exercicio")
       .select()
       .where("type", "like", `%${tipo}%`)
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No recipes found")
       }
 
       res.status(200).send(users)
       
    } catch (err) {
       console.log(err)
    }
 }