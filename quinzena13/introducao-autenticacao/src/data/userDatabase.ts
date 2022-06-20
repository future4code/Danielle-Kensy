import { user } from "../model/user";
import { BaseDatabase } from "./baseDatabase";

export class UserDatabase extends BaseDatabase {
    public insertUser = async(
        user: user
     ) => {
        try {
           await UserDatabase.connection.insert({
              id: user.id,
              email: user.email,
              password: user.password
           }).into('users')
           
        } catch (error:any) {
           throw new Error(error.message)
        }
     
     }
}