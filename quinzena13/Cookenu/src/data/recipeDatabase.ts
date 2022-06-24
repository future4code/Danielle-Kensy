import { recipe } from "../model/recipes"
import { BaseDatabase } from "./baseDatabase";

export class RecipeDatabase extends BaseDatabase {

    public insertRecipe = async(
        recipe: recipe
     ) => {
        try {
           await RecipeDatabase.connection.insert({
              id: recipe.id,
              title: recipe.title,
              description: recipe.description,
              created_at: recipe.createdAt 
           }).into('recipes')
    
          } catch (error:any) {
             throw new Error(error.message)
          } 
     }

   public getRecipe = async(
      id: string
   ) => {
      try{
         
         const recipe = await RecipeDatabase.connection('recipes')
         .select('*')
         .where({id})

         return recipe

      } catch (error: any) {
        throw new Error(error.message)
      }
   }

}
