import { Request, Response } from "express";
import { connection } from "../data/connection";


export const GetAllProducts = async(req: Request,res: Response): Promise<void> =>{
    try {
       const products = await connection("labecommerce_products")
 
       if(!products.length){
          res.statusCode = 404
          throw new Error("No products Found")
       }
 
       res.status(200).send(products)
       
    } catch (err) {
       res.send(err)
    }
 }