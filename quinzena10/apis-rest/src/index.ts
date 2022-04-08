import express, {Response, Request} from 'express'
import cors from 'cors'
import { users } from "./data"
import { send } from 'process'

const app = express()
app.use(express.json())
app.use(cors())

//MÉTODO DE TESTE
app.get("/ping", (req: Request, res: Response) => {          
    res.send("Pong! 🏓")
    console.log("funfou")
})

//EXERCICIO 1
//a. get
//b. /users
app.get("/users", (req: Request, res: Response) => {
    res.send(users)
    console.log("funfou")
})

//Exercício 2
//a) com params pois get não possui body
//b. usando validação
app.get("/users/:type", (req: Request, res: Response) => {
    try {

        if(!req.params.type) {
            throw new Error("Favor informe o tipo")
        }

        const usersFilter = users.filter((user) => {
             if(user.type === "ADMIN" && req.params.type === "ADMIN") {
                return(user)
             } else if (user.type === "NORMAL" && req.params.type === "NORMAL") {
                return(user)
             }
        })
        res.send(usersFilter)
        console.log("funfou")

    } catch(error:any) {
        res.send(error.message)

    }
})

//Exercício 3
//a) query
//b) feito
app.get("/nome", (req: Request, res: Response) => {
    try {
        
        const filterNome = users.filter((user) => {
            if(user.name === req.query.name) {
                return user
            } else if (user.name != req.query.name) {
                throw new Error("Usuário não encontrado")
            }
        })

        res.send(filterNome)
        console.log("funfou")

    } catch(error:any) {
        res.send(error.message)
    }
})

//Exercício 4
//a) nada!
//b) prefiro o post para criação acho o put mais apropriado para edições 

app.put("/criar", (req: Request, res: Response) => {
    const {id, name, email, type, age} = req.body

    let newUser = {
        id: id,
        name: name,
        email: email,
        type: type,
        age: age
    }

    users.push(newUser)
    res.send(users)
    console.log("funfou")
})

app.listen(3003, () => {
    console.log("a mãe tá on http://localhost:3003")
})