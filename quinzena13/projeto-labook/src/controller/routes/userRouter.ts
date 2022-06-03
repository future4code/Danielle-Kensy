import express from 'express'
import { UserController } from '../userController'

export const userRouter = express.Router()

const userController = new UserController()

userRouter.post('/create', userController.createUser)
userRouter.post('/friendship', userController.createUserFriendship)
userRouter.delete('/friendship/:idUser', userController.deleteFriendship)