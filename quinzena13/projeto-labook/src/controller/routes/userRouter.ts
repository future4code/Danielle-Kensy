import express from 'express'
import { UserBusiness } from '../../business/userBusiness'
import { UserDatabase } from '../../data/userDatabase'
import { UserController } from '../userController'

export const userRouter = express.Router()

const userDatabase = new UserDatabase()
const userBusiness = new UserBusiness(userDatabase)
const userController = new UserController(userBusiness)

userRouter.post('/create', (req, res)=> userController.createUser(req, res))
userRouter.post('/friendship', (req, res)=> userController.createUserFriendship(req, res))
userRouter.delete('/friendship/:idUser', (req, res)=> userController.deleteFriendship(req, res))