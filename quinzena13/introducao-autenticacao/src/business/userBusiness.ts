import { UserDatabase } from "../data/userDatabase";
import { UserInputDTO } from "../model/user";
import { Authenticator } from "../services/authenticator";
import { generateId } from "../services/generateId";

export class UserBusiness {
    public createUser = async (input: UserInputDTO):Promise<string> => {
        try {
          const { email, password } = input;
      
          if (!email || !password) {
            throw new Error('Preencha os campos "email" e "password"')
          }
      
          const id: string = generateId()
      
          const userDatabase = new UserDatabase()
          await userDatabase.insertUser({
            id,
            email,
            password,
          })

          const authenticator = new Authenticator()
          const token = authenticator.generateToken({id})
          return token

        } catch (error: any) {
          throw new Error(error.message)
        }
      }
}