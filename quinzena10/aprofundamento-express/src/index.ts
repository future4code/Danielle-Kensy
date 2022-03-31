import express, {Response, Request, response} from 'express'
import cors from 'cors'
import {tasksList} from "./data"

const app = express()
app.use(express.json())
app.use(cors())

app.get("/ping", (req: Request, res: Response) => {          
    res.send("Pong! 🏓")
    console.log("funfou")
})

//retorna tarefa de acordo com o status
app.get("/todo", (req: Request, res: Response) => {
    const filteredList = tasksList.filter((task) => {
        if(req.body.completed === true) {
            return(task.completed === true)
        } else {
            return(task.completed === false)  
        }
    })
    res.send(filteredList)
    console.log("funfou")
})

//cria uma nova tarefa
app.post("/todo/add", (req: Request, res: Response) => {
    //valores que serão passados no body
    const userId = req.body.userId
    const id = req.body.id
    const title = req.body.title
    const completed = req.body.completed
    //conferir se algum dos valores veio vazio
    if(!userId || !id || !title || !completed) {
        response.status(404).send("Informação faltando, favor informar o userId, id, title e completed")
        return
    }
    //objeto que cria nova tarefa
    const newTask = {
        userId: userId,
        id: id,
        title: title,
        completed: completed
    }
    //adicionar a nova tarefa na lista
    tasksList.push(newTask)
    res.status(201).send(tasksList)
    console.log("Tarefa criada✅")
})

//altera status da terafa
app.put("/todo/change/:taskId", (req: Request, res: Response) => {

    tasksList.find((task) => {
        if(Number(req.params.taskId) === task.id) {
            return task.completed = req.body.completed
        }
    })
    res.send(tasksList)
    console.log("Tarefa alterada✅")
})

//deleta tarefa
app.delete ("/todo/:taskId", (req: Request, res: Response) => { 
    
    tasksList.filter((task) => {
        if(Number(req.params.taskId) === task.id) {
            return tasksList.splice(task.id -1, 1)
        }
    })
    res.send(tasksList)
    console.log("Tarefa deletada✅")
})

//pega tarefas de acordo com ID do usuário
app.get("/todo/user/:userId", (req: Request, res: Response) => {

    const filteredList = tasksList.filter((task) => {
        if(Number(req.params.userId) === task.userId) {
            return task
        }
    })
    res.send(filteredList)
    console.log("Tarefas Buscadas✅")
})

app.listen(3003, () => {
    console.log("a mãe tá on http://localhost:3003")
})