import { v4 as generateId } from "uuid";
import { UserDatabase } from "../data/UserDatabase";


export class UserBusiness {

  public getUser = async () => {
    try{

      const userDatabase = new UserDatabase()
      return await userDatabase.getUser()

    }catch(error: any){
      throw new Error(error.message)
    }
  }

  public createUser = async (input: any) => {
    try {
      const { name, nickname, email, password } = input;
  
      if (!name || !nickname || !email || !password) {
        throw new Error(
          'Preencha os campos "name","nickname", "email" e "password"'
        );
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
        throw new Error(
          'Preencha os campos "name","nickname", "email" e "password"'
        );
      }
      
      const userDatabase = new UserDatabase();
      await userDatabase.deleteUser(id)
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

}

