import express from 'express'
import { UserBusiness } from '../../business/UserBusiness'
import { UserController } from '../UserController'

export const userRouter = express.Router()

const userController = new UserController()

userRouter.get('/', userController.getUser)
userRouter.post('/createUser', userController.createUser)
userRouter.delete('/:id', userController.deleteUser)
