import express, {Response, Request} from 'express'
import cors from 'cors'
import {usersList, postsList} from "./data"

const app = express()
app.use(express.json())
app.use(cors())

//GET users
app.get("/users", (request: Request, response: Response) => {
    response.send(usersList)
    console.log("funcionou")
})

//GET posts
app.get("/posts", (request: Request, response: Response) => {
    response.send(postsList)
    console.log("funcionou")
})

//GET posts por user
app.get("/users/:userId/posts", (request: Request, response: Response) => {
    postsList.filter((post) => {
        if (Number(request.params.userId) === post.userId) {
            response.send(post)
        }
    })
    console.log("funcionou")
})

app.listen(3003, () => {
    console.log("a mãe tá on http://localhost:3003")
})

