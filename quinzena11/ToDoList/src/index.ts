import express, {Response, Request} from 'express'
import cors from 'cors'
import connection from "./connection"
import { AddressInfo } from "net";
import moment from 'moment';

const app = express()
app.use(express.json())
app.use(cors())

//MÉTODO DE TESTE
app.get("/ping", (req: Request, res: Response) => {          
    res.send("Pong! 🏓")
    console.log("funfou")
})

//ERROS
const Errors: { [chave: string]: { status: number, message: string } } = {
    USER_NOT_FOUND: {status: 404, message: "⚠️Usuário não encontrado, verificar o ID⚠️"},
    MISSING_PARAMETERS: {status: 422, message: "⚠️Alguma informação está faltando. Consulte a documentação.⚠️"},
    SOMETHING_WENT_WRONG: {status: 500, message: "⚠️Algo deu errado⚠️"}
}

//MÉTODO PEGAR TODOS USUÁRIOS
app.get("/user/all", async (req: Request, res: Response): Promise<void> => {
    try {

        const result = await connection("TodoListUser")
        res.send(result)

    } catch (err: any) {
        res.send(err.message)
    }
})

//MÉTODO PEGAR USER VIA ID
app.get("/user/:id", async (req: Request, res: Response): Promise<void> => {
    try {
        const {id} = req.params

        if(!id) {
            throw new Error(Errors.MISSING_PARAMETERS.message)
        }

        const result = await connection("TodoListUser") 
        .select("id", "name")
        .from("TodoListUser")
        .where({id})

        if(result === []) {
            throw new Error(Errors.USER_NOT_FOUND.message)
        }

        res.send(result)
        console.log("user encontrado ✅")

    } catch(err:any) {
        switch(err.message) {
            case Errors.MISSING_PARAMETERS.message:
                res.status(Errors.MISSING_PARAMETERS.status).send(Errors.MISSING_PARAMETERS.message)
                break
            case Errors.USER_NOT_FOUND.message:
                res.status(Errors.USER_NOT_FOUND.status).send(Errors.USER_NOT_FOUND.message)
                break
            default:
                res.status(Errors.SOMETHING_WENT_WRONG.status).send(Errors.SOMETHING_WENT_WRONG.message)
        }
    }
})

//MÉTODO PEGAR Tarefa VIA ID tarefa
app.get("/task/:id", async (req: Request, res: Response): Promise<void> => {
    try {

        if(!req.params.id) {
            throw new Error(Errors.MISSING_PARAMETERS.message)
        }

        const result = await connection("TodoListTask")
        .join('TodoListUser', 'TodoListTask.creator_user_id', 'TodoListUser.id')
        .select("TodoListTask.*", "TodoListUser.id as creatorUserId", "TodoListUser.nickname as creatorUserNickname" )
        .where('TodoListTask.id', Number(req.params.id))

        if(result === []) {
            throw new Error(Errors.USER_NOT_FOUND.message)
        }

        res.send(result)
        console.log("tarefa encontrada✅")

    } catch(err:any) {
        switch(err.message) {
            case Errors.MISSING_PARAMETERS.message:
                res.status(Errors.MISSING_PARAMETERS.status).send(Errors.MISSING_PARAMETERS.message)
                break
            case Errors.USER_NOT_FOUND.message:
                res.status(Errors.USER_NOT_FOUND.status).send(Errors.USER_NOT_FOUND.message)
                break
            default:
                res.status(Errors.SOMETHING_WENT_WRONG.status).send(Errors.SOMETHING_WENT_WRONG.message)
        }
    }
})

//Pegar tarefas criadas por um usuário
app.get("/task", async (req: Request, res: Response): Promise<void> => {
    try {

        if(!req.query.creatorUserId) {
            throw new Error(Errors.MISSING_PARAMETERS.message)
        }

        const result = await connection("TodoListTask")
        .join('TodoListUser', 'TodoListTask.creator_user_id', 'TodoListUser.id')
        .select("TodoListTask.*", "TodoListUser.nickname as creatorUserNickname" )
        .where('TodoListUser.id', Number(req.query.creatorUserId))

        if(result === []) {
            throw new Error(Errors.USER_NOT_FOUND.message)
        }

        res.send(result)
        console.log("tarefa encontrada✅")

    } catch(err:any) {
        switch(err.message) {
            case Errors.MISSING_PARAMETERS.message:
                res.status(Errors.MISSING_PARAMETERS.status).send(Errors.MISSING_PARAMETERS.message)
                break
            case Errors.USER_NOT_FOUND.message:
                res.status(Errors.USER_NOT_FOUND.status).send(Errors.USER_NOT_FOUND.message)
                break
            default:
                res.status(Errors.SOMETHING_WENT_WRONG.status).send(Errors.SOMETHING_WENT_WRONG.message)
        }
    }
})

//MÉTODO PEGAR USUÁRIOS VIA QUERY
app.get("/user", async (req: Request, res: Response): Promise<void> => {
    try {

        if(!req.query.name) {
            throw new Error(Errors.MISSING_PARAMETERS.message)
        }

        const result = await connection("TodoListUser")
        .select("id", "nickname", "email")
        .from("TodoListUser")
        .whereLike('nickname', `%${req.query.name}%`)
        .orWhereLike('email', `%${req.query.name}%`)

        res.send(result)

    } catch (err: any) {
        res.status(Errors.MISSING_PARAMETERS.status).send(Errors.MISSING_PARAMETERS.message)
    }
})

//Pegar usuários responsáveis por uma tarefa
app.get("/task/:id/responsible", async (req: Request, res: Response): Promise<void> => {
    try {

        if(!req.params.id) {
            throw new Error(Errors.MISSING_PARAMETERS.message)
        }

        const result = await connection("TodoListResponsibleUserTaskRelation")
        .join('TodoListUser', 'TodoListResponsibleUserTaskRelation.responsible_user_id', 'TodoListUser.id')
        .join('TodoListTask', 'TodoListResponsibleUserTaskRelation.task_id', 'TodoListTask.id')
        .select("TodoListTask.id as Taskid", "TodoListTask.title as taskTitle", "TodoListUser.nickname as ResponsibleUserNickname")
        .where('TodoListResponsibleUserTaskRelation.task_id', Number(req.params.id))

        if(result === []) {
            throw new Error(Errors.USER_NOT_FOUND.message)
        }

        res.send(result)
        console.log("tarefa encontrada✅")

    } catch(err:any) {
        switch(err.message) {
            case Errors.MISSING_PARAMETERS.message:
                res.status(Errors.MISSING_PARAMETERS.status).send(Errors.MISSING_PARAMETERS.message)
                break
            case Errors.USER_NOT_FOUND.message:
                res.status(Errors.USER_NOT_FOUND.status).send(Errors.USER_NOT_FOUND.message)
                break
            default:
                res.status(Errors.SOMETHING_WENT_WRONG.status).send(Errors.SOMETHING_WENT_WRONG.message)
        }
    }
})

//MÉTODO CRIAR USUÁRIO
app.post("/user", async (req: Request, res: Response): Promise<void> => {
    try {

        const {name, nickname, email} = req.body

        if(!name || !nickname || !email) {
            throw new Error(Errors.MISSING_PARAMETERS.message)
        }
        
        await connection("TodoListUser") 
        .insert({
            name: req.body.name,
            nickname: req.body.nickname,
            email: req.body.email
        })

        res.send("Usuário criado✅")

    } catch(err:any) {
        switch(err.message) {
            case Errors.MISSING_PARAMETERS.message:
                res.status(Errors.MISSING_PARAMETERS.status).send(Errors.MISSING_PARAMETERS.message)
                break
            default:
                res.status(Errors.SOMETHING_WENT_WRONG.status).send(Errors.SOMETHING_WENT_WRONG.message)
        }
    }
})

//MÉTODO CRIAR TAREFA
app.post("/task", async (req: Request, res: Response): Promise<void> => {
    try {

        const {title, description, limitDate, creatorUserId} = req.body

        if(!title || !description || !limitDate || !creatorUserId) {
            throw new Error(Errors.MISSING_PARAMETERS.message)
        }

        await connection("TodoListTask") 
        .insert({
            title: req.body.title,
            description: req.body.description,
            limit_date: moment(req.body.limitDate, `DD/MM/YYYY`).format(`YYYY-MM-DD`),
            creator_user_id: req.body.creatorUserId
        })

        res.send("Tarefa Criada✅")

    } catch(err:any) {
        switch(err.message) {
            case Errors.MISSING_PARAMETERS.message:
                res.status(Errors.MISSING_PARAMETERS.status).send(Errors.MISSING_PARAMETERS.message)
                break
            default:
                res.status(Errors.SOMETHING_WENT_WRONG.status).send(Errors.SOMETHING_WENT_WRONG.message)
        }
    }
})

//MÉTODO Atribuir um usuário responsável a uma tarefa
app.post("/task/responsible", async (req: Request, res: Response): Promise<void> => {
    try {

        const {taskId, resUserID} = req.body

        if(!taskId || !resUserID) {
            throw new Error(Errors.MISSING_PARAMETERS.message)
        }
        
        await connection("TodoListResponsibleUserTaskRelation") 
        .insert({
            task_id: req.body.taskId,
            responsible_user_id: req.body.resUserID
        })

        res.send("Usuário Atribuido✅")

    } catch(err:any) {
        switch(err.message) {
            case Errors.MISSING_PARAMETERS.message:
                res.status(Errors.MISSING_PARAMETERS.status).send(Errors.MISSING_PARAMETERS.message)
                break
            default:
                res.status(Errors.SOMETHING_WENT_WRONG.status).send(Errors.SOMETHING_WENT_WRONG.message)
        }
    }
})

//MÉTODO EDITAR USUÁRIO
app.put("/user/edit/:id", async (req: Request, res: Response): Promise<void> => {
    try {
        const {name, nickname} = req.body

        if(!name || !nickname) {
            throw new Error(Errors.MISSING_PARAMETERS.message)
        }
        
        await connection("TodoListUser") 
        .update({
            name: req.body.name,
            nickname: req.body.nickname
        })
        .where({id: Number(req.params.id)})

        res.send("Usuário Atualizado✅")

    } catch(err:any) {
        switch(err.message) {
            case Errors.MISSING_PARAMETERS.message:
                res.status(Errors.MISSING_PARAMETERS.status).send(Errors.MISSING_PARAMETERS.message)
                break
            default:
                res.status(Errors.SOMETHING_WENT_WRONG.status).send(Errors.SOMETHING_WENT_WRONG.message)
        }
    }
})

//MÉTODO ATUALIZAR STATUS
app.put("/task/:id", async (req: Request, res: Response): Promise<void> => {
    try {
        const status = req.body

        if(!status) {
            throw new Error(Errors.MISSING_PARAMETERS.message)
        }
        
        await connection("TodoListTask") 
        .update({
            status: req.body.status
        })
        .where({id: Number(req.params.id)})

        res.send("Status Atualizado✅")

    } catch(err:any) {
        switch(err.message) {
            case Errors.MISSING_PARAMETERS.message:
                res.status(Errors.MISSING_PARAMETERS.status).send(Errors.MISSING_PARAMETERS.message)
                break
            default:
                res.status(Errors.SOMETHING_WENT_WRONG.status).send(Errors.SOMETHING_WENT_WRONG.message)
        }
    }
})

//MÉTODO DELETE USUÁRIO
app.delete("/user/:id", async (req: Request, res: Response): Promise<void> => {
    try {

        if(!req.params.id) {
            throw new Error(Errors.MISSING_PARAMETERS.message)
        }
        
        //favor não reparem nesses dois await CRIMINOSOS aqui, não achei outro jeito 
        //se vocês souberem outra maneira que funciona please me conta esse segredo :´(
        await connection("TodoListResponsibleUserTaskRelation")
        .where('TodoListResponsibleUserTaskRelation.responsible_user_id', Number(req.params.id))
        .join('TodoListUser', 'TodoListResponsibleUserTaskRelation.responsible_user_id', 'TodoListUser.id')
        .join('TodoListTask', 'TodoListResponsibleUserTaskRelation.task_id', 'TodoListTask.id')
        .del()

        await connection("TodoListUser")
        .where('TodoListUser.id', Number(req.params.id))
        .del()
        
        res.send("Usuário excluída✅")

    } catch(err:any) {
        switch(err.message) {
            case Errors.MISSING_PARAMETERS.message:
                res.status(Errors.MISSING_PARAMETERS.status).send(Errors.MISSING_PARAMETERS.message)
                break
            default:
                res.status(Errors.SOMETHING_WENT_WRONG.status).send(Errors.SOMETHING_WENT_WRONG.message)
        }
    }
})

//MÉTODO DELETAR TAREFA
app.delete("/task/status/:id", async (req: Request, res: Response): Promise<void> => {
    try {

        if(!req.params.id) {
            throw new Error(Errors.MISSING_PARAMETERS.message)
        }
        
        //favor não reparem nesses dois await CRIMINOSOS aqui, não achei outro jeito 
        //se vocês souberem outra maneira que funciona please me conta esse segredo :´(
        await connection("TodoListResponsibleUserTaskRelation")
        .where('TodoListResponsibleUserTaskRelation.task_id', Number(req.params.id))
        .join('TodoListUser', 'TodoListResponsibleUserTaskRelation.responsible_user_id', 'TodoListUser.id')
        .join('TodoListTask', 'TodoListResponsibleUserTaskRelation.task_id', 'TodoListTask.id')
        .del()

        await connection("TodoListTask")
        .where('TodoListTask.id', Number(req.params.id))
        .join('TodoListUser', 'TodoListTask.creator_user_id', 'TodoListUser.id')
        .del()
        
        res.send("Tarefa excluída✅")

    } catch(err:any) {
        switch(err.message) {
            case Errors.MISSING_PARAMETERS.message:
                res.status(Errors.MISSING_PARAMETERS.status).send(Errors.MISSING_PARAMETERS.message)
                break
            default:
                res.status(Errors.SOMETHING_WENT_WRONG.status).send(Errors.SOMETHING_WENT_WRONG.message)
        }
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