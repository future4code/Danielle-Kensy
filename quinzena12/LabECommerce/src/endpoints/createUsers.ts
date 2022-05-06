import { Request, Response } from "express";
import { connection } from "../data/connection";
import { v4 as uuidv4 } from 'uuid';

export const CreateUsers = async(req: Request,res: Response): Promise<void> =>{
    try {

        const {name, email, password} = req.body

        if(!name || !password || !email) {
            throw new Error("Faltando parâmetro")
        }
        
        await connection("labecommerce_users")
        .insert({
            id: uuidv4(),
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
 
       res.status(200).send("Usuário criado✅")
       
    } catch (err) {
       res.send(err)
    }
 }