import { app } from "./controller/app"
import { UserController } from "./controller/UserController"

const userController = new UserController()

app.post('/createUser', userController.createUser)
app.get('/all', userController.getUser)
app.delete('/:id', userController.deleteUser)