import { Request, Response } from "express"
import { EditInputDTO, RecipeInputDTO } from "../model/recipes"
import { RecipeBusiness } from '../business/recipeBusiness'

export class RecipeController {

    public getRecipe = async (
        req: Request,
        res: Response
     ) => {
        try {
           const input: EditInputDTO = {
              id: req.params.id,
              token: req.headers.authorization as string
           }

           const recipeBusiness = new RecipeBusiness
           const recipe = await recipeBusiness.getRecipe(input)

           res.send(recipe)

        } catch (error:any) {
             res.send(error.message)
        }
    }
    
    public createRecipe = async (
        req: Request,
        res: Response
    ): Promise<void> => {
        try {

            const {title, description} = req.body
            const token = req.headers.authorization as string

            const input:RecipeInputDTO = {
                title,
                description,
                token 
            }

            const recipeBusiness = new RecipeBusiness()
            await recipeBusiness.createRecipe(input)

            res.send('Receita criada!')

        } catch (error:any) {
              res.send(error.message)
        }

    }
}