import { UserDatabase } from "../data/userDatabase"
import { CustomError, InvalidPassword, MissingParameters, Unauthorized, UserNotFound } from "../error/customError"
import { recipe, RecipeInputDTO } from "../model/recipes"
import { UserInputDTO, user, LoginInputDTO, EditInputDTO } from "../model/user"
import { Authenticator } from "../services/authenticator"
import { generateId } from "../services/generateId"
import { HashManager } from "../services/hashManager"

const hashManager = new HashManager()
const userDatabase = new UserDatabase()

export class UserBusiness {

    public getProfile = async (token: string) => {
      try {

        if(!token) {
          throw new MissingParameters()
        }

        const authenticator = new Authenticator()
        const data = authenticator.getTokenData(token) 
        console.log(data)

        const user = await userDatabase.getProfile(data.id)
        return user

      } catch (error: any) {
        throw new Error(error.message)
      }
    }

    public getUser = async (input: EditInputDTO) => {
      try {
        const {id, token} = input

        if(!id || !token) {
          throw new MissingParameters()
        }

        const authenticator = new Authenticator()
        authenticator.getTokenData(token) 

        const user = await userDatabase.getUser(id)
        return user

      } catch (error: any) {
        throw new Error(error.message)
      }
    }

    public createUser = async (input: UserInputDTO):Promise<string> => {
        try {
          const { name, email, password } = input
      
          if (!name || !email || !password) {
            throw new MissingParameters()
          }

          if (password.length < 6) {
            throw new CustomError(400, 'Sua senha deve conter no minímo 6 caracteres.')
          }
      
          const id: string = generateId()
          const hashPassword = await hashManager.generateHash(password)
      
          const user: user = {
            id,
            name,
            email,
            password: hashPassword,
          }
       
          await userDatabase.insertUser(user)
          
          const authenticator = new Authenticator()
          const token = authenticator.generateToken(id)
          return token

        } catch (error: any) {
          throw new Error(error.message)
        }
    }
    
    public login = async (input: LoginInputDTO): Promise<string> => {
      try {
        const { email, password } = input
      
        if (!email || !password) {
          throw new MissingParameters()
        }

        const user = await userDatabase.findUser(email)

        if (!user) {
          throw new UserNotFound()
        }

        const comparePassword = await hashManager.compareHash(password, user.password)

        if(!comparePassword){
          throw new InvalidPassword()
        }

        const authenticator = new Authenticator()
        const token = authenticator.generateToken(user.id)
      
        return token
      } catch (error: any) {
        throw new Error(error.message)
      }
    }
}