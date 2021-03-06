import { UserDatabase } from "../data/userDatabase";
import { UserInputDTO, user } from "../model/user";
import { Authenticator } from "../services/authenticator";
import { generateId } from "../services/generateId";
import { HashManager } from "../services/hashManager";

const hashManager = new HashManager()
const userDatabase = new UserDatabase()

export class UserBusiness {
    public createUser = async (input: UserInputDTO):Promise<string> => {
        try {
          const { email, password } = input;
      
          if (!email || !password) {
            throw new Error('Preencha os campos "email" e "password"')
          }
      
          const id: string = generateId()
          const hashPassword = await hashManager.generateHash(password)
      
          const user: user = {
            id,
            email,
            password: hashPassword,
          }
       
          await userDatabase.insertUser(user);
          
          const authenticator = new Authenticator()
          const token = authenticator.generateToken({id})
          return token

        } catch (error: any) {
          throw new Error(error.message)
        }
      }
}