import { RecipeDatabase } from "../data/recipeDatabase"
import { MissingParameters } from "../error/customError"
import { RecipeInputDTO, recipe, EditInputDTO } from "../model/recipes"
import { Authenticator } from "../services/authenticator"
import { dateGenerate } from "../services/dateGenerator"
import { generateId } from "../services/generateId"
import { HashManager } from "../services/hashManager"

const hashManager = new HashManager()
const recipeDatabase = new RecipeDatabase()

export class RecipeBusiness {

    public getRecipe = async (input: EditInputDTO) => {
      try {
        const {id, token} = input

        if(!id || !token) {
          throw new MissingParameters()
        }

        const authenticator = new Authenticator()
        authenticator.getTokenData(token) 

        const recipe = await recipeDatabase.getRecipe(id)
        return recipe

      } catch (error: any) {
        throw new Error(error.message)
      }
    }

    public createRecipe = async (input: RecipeInputDTO) => {
        try {
          const { token, title, description } = input
      
          if (!token || !title || !description) {
            throw new MissingParameters()
          }
  
          const authenticator = new Authenticator()
          authenticator.getTokenData(token) 
      
          const id: string = generateId()
  
          const createdAt: string = dateGenerate()

          const recipe: recipe  = {
            id,
            title,
            description,
            createdAt  
          }
       
          await recipeDatabase.insertRecipe(recipe)
  
        } catch (error: any) {
          throw new Error(error.message)
        }
      }

} 