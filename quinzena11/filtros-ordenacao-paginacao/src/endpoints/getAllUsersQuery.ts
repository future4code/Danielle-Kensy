import { Request, Response } from "express";
import { off } from "process";
import { connection } from "../data/connection";;

export const getAllUsersQuery = async(req: Request,res: Response): Promise<void> =>{
    try {

      let nome = req.query.nome;

      if(!nome){
         nome ="%"
       }

       const users = await connection("aula48_exercicio")
       .select()
       .where("name", "like", `%${nome}%`)
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No recipes found")
       }
 
       res.status(200).send(users)
       
    } catch (err) {
       console.log(err)
    }
 }