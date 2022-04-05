import express, {Response, Request} from 'express'
import cors from 'cors'
import { productList } from "./data"

const app = express()
app.use(express.json())
app.use(cors())

//MÉTODO DE TESTE
app.get("/ping", (req: Request, res: Response) => {          
    res.send("Pong! 🏓")
    console.log("funfou✅")
})

const Errors: { [chave: string]: { status: number, message: string } } = {
    MISSING_PARAMETERS: {status: 422, message: "⚠️Alguma informação está faltando. Consulte a documentação.⚠️"},
    SOMETHING_WENT_WRONG: {status: 500, message: "⚠️Algo deu errado⚠️"},
    WRONG_TYPE: {status: 422, message: "⚠️O tipo passado está incorreto, Consulte a documentação.⚠️"},
    DONT_EXIST: {status: 400, message: "⚠️O produto passado não existe⚠️"}
}

//CADASTRA PRODUTO
app.post("/add", (req: Request, res: Response) => {
    try {
        console.log(typeof "")
        //valores que serão passados no body
        const {id, name, price} = req.body

        //confere se algum deles está vazio
        if(!id || !name || !price) {
            throw new Error(Errors.MISSING_PARAMETERS.message)
        }

        //conferindo se nome é tipo string
        if(name !== typeof ""){
            throw new Error(Errors.WRONG_TYPE.message) 
        }

        //conferindo se price é tipo number
        if(price !== typeof 1 || price <= 0) {
            throw new Error(Errors.WRONG_TYPE.message) 
        }

        const newProduct = {
            id: id,
            name: name,
            price: price
        }

        productList.push(newProduct)
        res.send(productList)
        console.log("Produto Criado✅")

    }catch(err: any){
        switch(err.message){
            case Errors.MISSING_PARAMETERS.message:
                res.status(Errors.MISSING_PARAMETERS.status).send(Errors.MISSING_PARAMETERS.message)
                break
            case Errors.WRONG_TYPE.message:
                res.status(Errors.WRONG_TYPE.status).send(Errors.WRONG_TYPE.message)
                break
            default:
                res.status(Errors.SOMETHING_WENT_WRONG.status).send(Errors.SOMETHING_WENT_WRONG.message)
        }
    }
})

//Retorna produtos
app.get("/all", (req: Request, res: Response) => {
    res.send(productList)
    console.log("Produtos✅")

})

//deleta produto
app.delete ("/del", (req: Request, res: Response) => { 
    try{
        productList.filter((product) => {
            if(req.body.id !== product.id) {
                throw new Error(Errors.DONT_EXIST.message)
            }
        })

        productList.filter((product) => {
            if(Number(req.body.id) === Number(product.id)) {
                return productList.splice(Number(product.id) -1, 1)
            }
        })
        res.send(productList)
        console.log("Produto deletado✅")
    }catch(err: any){
        switch(err.message){
            case Errors.DONT_EXIST.message:
                res.status(Errors.DONT_EXIST.status).send(Errors.DONT_EXIST.message)
                break
            default:
                res.status(Errors.SOMETHING_WENT_WRONG.status).send(Errors.SOMETHING_WENT_WRONG.message)
        }
    }
})

app.listen(3003, () => {
    console.log("a mãe tá on http://localhost:3003")
})