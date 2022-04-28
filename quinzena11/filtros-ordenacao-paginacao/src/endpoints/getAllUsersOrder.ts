import { Request, Response } from "express";
import { off } from "process";
import { connection } from "../data/connection";;

export const getAllUsersOrder = async(req: Request,res: Response): Promise<void> =>{
   try {

     let sort = req.query.sort as string
     let order = req.query.order as string
     let page = Number(req.query.page)
     let size = 5
     let offset = size*(page-1)

      if(sort !== "name" && sort !== "type") {
         sort = "email"
       }

      if( !order || order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC" ){
         order = "ASC"
      }

      if(isNaN(page) || page < 1) {
         page = 1
       }
   
       if(isNaN(size) || size < 1) {
         size = 5
       }

      const users = await connection("aula48_exercicio")
      .select()
      .orderBy(sort, order)
      .limit(size)
      .offset(offset)

      if(!users.length){
         res.statusCode = 404
         throw new Error("No recipes found")
      }

      res.status(200).send(users)
      
   } catch (err) {
      console.log(err)
   }
}