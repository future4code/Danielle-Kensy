import express from 'express'
import { PostBusiness } from '../../business/postBusiness'
import { PostDatabase } from '../../data/postDatabase'
import { PostController } from '../postController'

export const postRouter = express.Router()

const postDatabase = new PostDatabase()
const postBusiness = new PostBusiness(postDatabase)
const postController = new PostController(postBusiness)

postRouter.get('/:id', (req,res) => postController.getPost(req,res))
postRouter.get('/', (req,res) => postController.getAllPosts(req,res))
postRouter.post('/create', (req,res) => postController.createPost(req,res))
