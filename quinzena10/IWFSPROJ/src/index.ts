import express, {Response, Request, response} from 'express'
import cors from 'cors'
import { usersList } from "./data"

const app = express()
app.use(express.json())
app.use(cors())

//MÉTODO DE TESTE
app.get("/ping", (req: Request, res: Response) => {          
    res.send("Pong! 🏓")
    console.log("funfou")
})

const Errors: { [chave: string]: { status: number, message: string } } = {
    ACCOUNT_NOT_FOUND: {status: 404, message: "⚠️Conta não encontrada, verificar nome e cpf⚠️"},
    CPF_EXISTS: {status: 409, message: "⚠️Esse CPF já esta registrado⚠️"},
    MISSING_PARAMETERS: {status: 422, message: "⚠️Alguma informação está faltando. Consulte a documentação.⚠️"},
    UNDER_AGE: {status: 403, message: "⚠️Menores de idade não podem abrir conta⚠️"},
    WITHOUT_BALANCE: {status: 406, message: "⚠️Você não possui saldo suficiente para essa operação⚠️"},
    SOMETHING_WENT_WRONG: {status: 500, message: "⚠️Algo deu errado⚠️"}
}

//MÉTODO PARA VERIFICAR TODAS AS CONTAS
app.get("/contas", (req: Request, res: Response) => {
    res.send(usersList)
    console.log("funfou✅")
})

//MÉTODO PARA VERIFICAR SALDO
app.get("/saldo/:CPF/:nome", (req: Request, res: Response) => {
    try {
     
        const {CPF, nome} = req.params

        if(!CPF || !nome) {
            throw new Error(Errors.MISSING_PARAMETERS.message)
        }

        const saldofilter = usersList.map((user) => {
            if(CPF === user.CPF && nome === user.nome) {
                return user.saldo
            }
        })

        const arraySaldo= saldofilter.filter((saldo) => {
            if(saldo !== undefined) {
                return saldo
            }
        })

        res.send("Seu saldo é: R$" + arraySaldo + ",00 🤑")
        console.log("Saldo Encontrado✅")

    } catch(error:any) {
        switch(error.message) {
            case Errors.MISSING_PARAMETERS.message:
                res.status(Errors.MISSING_PARAMETERS.status).send(Errors.MISSING_PARAMETERS.message)
                break
            case Errors.ACCOUNT_NOT_FOUND.message:
                res.status(Errors.ACCOUNT_NOT_FOUND.status).send(Errors.ACCOUNT_NOT_FOUND.message)
                break
            default:
                res.status(Errors.SOMETHING_WENT_WRONG.status).send(Errors.SOMETHING_WENT_WRONG.message)
        }
    }
})

//CRIAÇÃO DE CONTA
app.post("/criar", (req: Request, res: Response) => {
    try {
        //valores que serão passados no body
        const {CPF, nome, anoNascimento, saldo, extrato} = req.body    
        
        //confere se algum dos valores veio vazio
        if(!CPF || !nome || !anoNascimento || !extrato) {
            throw new Error(Errors.MISSING_PARAMETERS.message)
        }

        //Confere se é maior de idade
        let currentTime = new Date()
        let year = currentTime.getFullYear()
        const idade = year - req.body.anoNascimento 
        if (idade < 18) {
            throw new Error(Errors.UNDER_AGE.message)
        }

        //confere se o cpf já existe
        usersList.map((user) => {
            if(user.CPF === CPF) {
                throw new Error(Errors.CPF_EXISTS.message)
            }
        })

        //objeto que cria nova tarefa
        const newUser = {
            CPF: CPF,
            nome: nome,
            anoNascimento: anoNascimento,
            saldo: saldo,
            extrato: extrato
        }
        //adicionar a nova tarefa na lista
        usersList.push(newUser)
        res.status(201).send(usersList)
        console.log("Conta criada✅")

    } catch(error: any) {
        switch(error.message) {
            case Errors.MISSING_PARAMETERS.message:
                res.status(Errors.MISSING_PARAMETERS.status).send(Errors.MISSING_PARAMETERS.message)
                break;
            case Errors.UNDER_AGE.message:
                res.status(Errors.UNDER_AGE.status).send(Errors.UNDER_AGE.message)
                break;
            case Errors.CPF_EXISTS.message:
                res.status(Errors.CPF_EXISTS.status).send(Errors.CPF_EXISTS.message)
                break;
            default:
                res.status(Errors.SOMETHING_WENT_WRONG.status).send(Errors.SOMETHING_WENT_WRONG.message)
        }
    }
})

//ADICIONA SALDO
app.put("/add", (req: Request, res: Response) => {
    try {
        const {CPF, nome, valor} = req.body

        if(!CPF || !nome || !valor) {
            throw new Error(Errors.MISSING_PARAMETERS.message)
        }

        const saldofilter = usersList.map((user) => {
            if(CPF === user.CPF && nome === user.nome) {
                return user.saldo = user.saldo + valor
            }
        })

        const saldo = saldofilter.filter((saldo) => {
            if(saldo !== undefined) {
                return saldo
            }
        })

        res.send("Seu saldo atualizado: " + saldo + " 💰 ")
        console.log("Saldo adicionado✅")

    } catch(error:any) {
        switch(error.message) {
            case Errors.MISSING_PARAMETERS.message:
                res.status(Errors.MISSING_PARAMETERS.status).send(Errors.MISSING_PARAMETERS.message)
                break
            case Errors.ACCOUNT_NOT_FOUND.message:
                res.status(Errors.ACCOUNT_NOT_FOUND.status).send(Errors.ACCOUNT_NOT_FOUND.message)
                break
            default:
                res.status(Errors.SOMETHING_WENT_WRONG.status).send(Errors.SOMETHING_WENT_WRONG.message)
        }
    }
})

//PAGA CONTA 
app.put("/pagar", (req: Request, res: Response) => {
    try {
        let {CPF, valor, data, descricao} = req.body

        if(!CPF || !valor|| !descricao) {
            throw new Error(Errors.MISSING_PARAMETERS.message)
        }

        usersList.map((user) => {
            if( user.saldo < valor) {
                throw new Error(Errors.WITHOUT_BALANCE.message)
            }
        })

        //se a data estiver vazia
        if(!data) {
            data = new Date() 
            data.toLocaleDateString()
            usersList.map((user) => {
                if( user.CPF === CPF && user.saldo >= valor) {
                    return user.saldo -= valor
                }
            })
        }

        //objeto que cria nova tarefa
        const newTransacao = {
            valor: valor,
            data: data,
            descricao: descricao,
        }
        //adicionar a nova tarefa na lista
        const extrato = usersList.find((user) => {
            return user.extrato.push(newTransacao)
        })
        res.status(201).send(extrato)
        console.log("Conta paga✅")

    } catch(error:any) {
        switch(error.message) {
            case Errors.MISSING_PARAMETERS.message:
                res.status(Errors.MISSING_PARAMETERS.status).send(Errors.MISSING_PARAMETERS.message)
                break
            case Errors.WITHOUT_BALANCE.message:
                res.status(Errors.WITHOUT_BALANCE.status).send(Errors.WITHOUT_BALANCE.message)
                break
            case Errors.ACCOUNT_NOT_FOUND.message:
                res.status(Errors.ACCOUNT_NOT_FOUND.status).send(Errors.ACCOUNT_NOT_FOUND.message)
                break
            default:
                res.status(Errors.SOMETHING_WENT_WRONG.status).send(Errors.SOMETHING_WENT_WRONG.message)
        }

    }
})

//TRANSFERÊNCIA INTERNA
app.put("/transferir", (req: Request, res: Response) => {
    try{
        const {CPF, nome, CPF1, nome1, valor} = req.body


        if(!CPF || !nome || !valor || !CPF1 || !nome1) {
            throw new Error(Errors.MISSING_PARAMETERS.message)
        }

        usersList.map((user) => {
            if(user.saldo < valor){
                throw new Error(Errors.WITHOUT_BALANCE.message)
            }
        })

        usersList.find((user) => {
            if(user.CPF === CPF && user.nome === nome) {
                return user.saldo -= valor
            } 
        })

        usersList.find((user) => {
            if(user.CPF === CPF1 && user.nome === nome1) {
                return user.saldo += valor
            } 
        })

        res.status(201).send(usersList)
        console.log("Tranfêrencia feita✅")

    } catch(error:any) {
        switch(error.message) {
            case Errors.MISSING_PARAMETERS.message:
                res.status(Errors.MISSING_PARAMETERS.status).send(Errors.MISSING_PARAMETERS.message)
                break
            case Errors.WITHOUT_BALANCE.message:
                res.status(Errors.WITHOUT_BALANCE.status).send(Errors.WITHOUT_BALANCE.message)
                break
            case Errors.ACCOUNT_NOT_FOUND.message:
                res.status(Errors.ACCOUNT_NOT_FOUND.status).send(Errors.ACCOUNT_NOT_FOUND.message)
                break
            default:
                res.status(Errors.SOMETHING_WENT_WRONG.status).send(Errors.SOMETHING_WENT_WRONG.message)
        }
    }
})

app.listen(3003, () => {
    console.log("a mãe tá on http://localhost:3003")
})