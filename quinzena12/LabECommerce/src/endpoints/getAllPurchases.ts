import { Request, Response } from "express";
import { connection } from "../data/connection";


export const GetPurchases = async(req: Request,res: Response): Promise<void> =>{
   try {

         const userId = req.params

         if(!userId) {
            throw new Error("favor informe o id do usuário")
        }

         const purchases = await connection("labecommerce_purchases")
         .select('*')
         .where('labecommerce_purchases.user_id', req.params.user_id)
 
         if(!purchases.length){
             res.statusCode = 404
            throw new Error("No purchases Found")
         }
 
         res.status(200).send(purchases)
       
      } catch (err) {
         res.send(err)
   }
}