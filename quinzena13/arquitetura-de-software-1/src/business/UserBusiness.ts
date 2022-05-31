import { UserDatabase } from "../data/UserDatabase";
import { CustomError, MissingID } from "../error/customError";
import { UserInputDTO } from "../model/user";
import { generateId } from "../services/generateId";


export class UserBusiness {

  public getUser = async () => {
    try{

      const userDatabase = new UserDatabase()
      return await userDatabase.getUser()

    }catch(error: any){
      throw new Error(error.message)
    }
  }

  public createUser = async (input: UserInputDTO) => {
    try {
      const { name, nickname, email, password } = input;
  
      if (!name || !nickname || !email || !password) {
        throw new CustomError(400, 'Preencha os campos "name","nickname", "email" e "password"')
      }
  
      const id: string = generateId();
  
      const userDatabase = new UserDatabase();
      await userDatabase.insertUser({
        id,
        name,
        nickname,
        email,
        password,
      });
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  public deleteUser = async (input: any) => {
    try {
      const id = input

      if (!id) {
        throw new MissingID()
      }
      
      const userDatabase = new UserDatabase();
      await userDatabase.deleteUser(id)
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

}

