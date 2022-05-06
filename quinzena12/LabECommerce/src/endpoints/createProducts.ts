import { Request, Response } from "express";
import { connection } from "../data/connection";
import { v4 as uuidv4 } from 'uuid';


export const CreateProducts = async(req: Request,res: Response): Promise<void> =>{
    try {

        const {name, price, imageUrl} = req.body

        if(!name || !imageUrl || !price) {
            throw new Error("Faltando parâmetro")
        }
        
        await connection("labecommerce_products")
        .insert({
            id: uuidv4(),
            name: req.body.name,
            price: req.body.price,
            image_url: req.body.imageUrl
        })
 
       res.status(200).send("Produto criado✅")
       
    } catch (err) {
       res.send(err)
    }
 }