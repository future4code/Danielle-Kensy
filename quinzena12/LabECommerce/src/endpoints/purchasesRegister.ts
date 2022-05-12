import { Request, Response } from "express";
import { connection } from "../data/connection";
import { v4 as uuidv4 } from 'uuid';

export const PurchaseRegister = async(req: Request,res: Response): Promise<void> =>{
    try {

        const {userID, productID, quantity} = req.body

        if(!userID || !productID || !quantity) {
            throw new Error("Faltando parâmetro")
        }
        
        const price = await connection("labecommerce_products")
        .select('price')
        .where('id', productID)

        await connection("labecommerce_purchases")
        .insert({
            id: uuidv4(),
            user_id: req.body.userID,
            product_id: req.body.productID,
            quantity: req.body.quantity,
            total_price: (quantity * price[0].price)
        })

 
       res.status(200).send("Compra Feita✅")
       
    } catch (err) {
       res.send(err)
    }
 }