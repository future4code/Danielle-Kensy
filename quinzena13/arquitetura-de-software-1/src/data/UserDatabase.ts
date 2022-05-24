import { user } from "../types/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
   
      //método para pegar os usuários do banco
      public getUser = async() => {
         try {
            return await UserDatabase.connection.select('*').from('User_Arq')
         } catch (error:any) {
            throw new Error(error.message)
         }
      }
      
      //método para inserir usuários no banco
      public insertUser = async(
         user: user
      ) => {
         try {
            await UserDatabase.connection.insert({
               id: user.id,
               name: user.name,
               nickname: user.nickname,
               email: user.email,
               password: user.password
            }).into('User_Arq')
            
         } catch (error:any) {
            throw new Error(error.message)
         }
      
      }

      //método para exclusão de usuários no banco
      public deleteUser = async(id: any) => {
         try {
            await UserDatabase.connection
            .where(id)
            .from('User_Arq')
            .delete()

         } catch (error:any) {
            throw new Error(error.message)
         }
      }

}

