import express, {Response, Request} from 'express'
import cors from 'cors'
import connection from "./connection"
import { AddressInfo } from "net";

const app = express()
app.use(express.json())
app.use(cors())

//MÉTODO DE TESTE
app.get("/ping", (req: Request, res: Response) => {          
    res.send("Pong! 🏓")
    console.log("funfou")
})

//Exercício 1
//a) Quando usamos o raw ele retorna vários dados além das tabelas.

app.get("/actor/:name", async (req: Request, res: Response): Promise<void> => {
    try {
        const name = req.params

        if(!name) {
            throw new Error("favor informar nome")
        }

        const result = await connection("Actor") 
        .select("*")
        .from("Actor")
        .where({name})

        res.send(result)
        console.log("Actor encontrado ✅")

    } catch(err:any) {
        res.send(err.message)
    }
})

app.get("/actor/:gender", async (req: Request, res: Response): Promise<void> => {
    try {
        const gender = req.params

        if(!gender) {
            throw new Error("favor informar nome")
        }

        const result = await connection("Actor") 
        .select ("*")
        .groupBy('count')
        .from("Actor")
        .where({gender})

        res.send(result)
        console.log("Actor encontrado ✅")

    } catch(err:any) {
        res.send(err.message)
    }
})

app.put("/user/:id", async (req: Request, res: Response): Promise<void> => {
    try {
        const salary = req.body

        if(!salary) {
            throw new Error("salário faltando")
        }
        
        await connection("Actor") 
        .update({
            salary: req.body.salary
        })
        .where({id: Number(req.params.id)})

        res.send("Ator Atualizado✅")

    } catch(err:any) {
        res.send(err.message)
    }
})

app.delete("/user/:id", async (req: Request, res: Response): Promise<void> => {
    try {
        
        await connection("Actor") 
        .delete()
        .where({id: Number(req.params.id)})

        res.send("Ator deletado✅")

    } catch(err:any) {
        res.send(err.message)
    }
})

app.get("/actor/:id", async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params

        if(!id) {
            throw new Error("favor informar o id")
        }

        const result = await connection("Actor") 
        .select("*")
        .from("Actor")
        .where({id})

        res.send(result)
        console.log("Actor encontrado ✅")

    } catch(err:any) {
        res.send(err.message)
    }
})


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`a mãe tá on aqui http://localhost: ${address.port}`);
    } else {
       console.error(`deu ruim ein`);
    }
})