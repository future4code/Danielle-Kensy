import express from "express"
import { RecipeController } from "../recipeController"

export const recipeRouter = express.Router()

const recipeController = new RecipeController()

recipeRouter.get('/:id', recipeController.getRecipe)
recipeRouter.post('/', recipeController.createRecipe)