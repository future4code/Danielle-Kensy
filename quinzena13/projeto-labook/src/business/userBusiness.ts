import { UserDatabase } from "../data/userDatabase"
import { MissingParameters } from "../error/customError"
import { UserFriendshipInputDTO, UserInputDTO } from "../model/user"
import { generateId } from "../services/generateID"

export class UserBusiness {
    //método para criação de usuário
    public createUser = async (
      input: UserInputDTO
    ) => {
        try {
          const { name, email, password } = input
      
          if (!name || !email || !password) {
            throw new MissingParameters()
          }
      
          const id: string = generateId()
      
          const userDatabase = new UserDatabase()
          await userDatabase.insertUser({
            id,
            name,
            email,
            password
          })
        } catch (error: any) {
          throw new Error(error.message)
        }
    }
    
    //método para criação de amizade
    public createUserFriendship = async (
      input: UserFriendshipInputDTO
    ) => {
        try {
          const { idUser, idFriend } = input
      
          if (!idUser || !idFriend) {
            throw new MissingParameters()
          }
      
          const userDatabase = new UserDatabase()
          await userDatabase.insertUserFriendship({
            idUser, 
            idFriend
          })
        } catch (error: any) {
          throw new Error(error.message)
        }
    }

    //método para exclusão da amizade
    public deleteFriendship = async (
      input: UserFriendshipInputDTO
    ) => {
      try {

        const { idUser, idFriend } = input
      
        if (!idUser || !idFriend) {
          throw new MissingParameters()
        }

        const userDatabase = new UserDatabase()
        await userDatabase.deleteFriendship({
          idUser, 
          idFriend
        })

      } catch (error:any) {
        throw new Error(error.message)
      }

    }
}