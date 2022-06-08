import { UserRepository } from "../business/userRepository"
import { user, userFriendship } from "../model/user"
import { BaseDatabase } from "./baseDatabase"

export class UserDatabase extends BaseDatabase implements UserRepository {
    
    //método para criação de usuário
    public insertUser = async(
        user: user
    ) => {
        try {
            await UserDatabase.connection.insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password
             }).into('labook_users')

        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    //método para criação de amizade
    public insertUserFriendship = async(
        userFriendship: userFriendship
    ) => {
        try {
            await UserDatabase.connection.insert({
                id_user: userFriendship.idUser,
                id_friend: userFriendship.idFriend
            }).into('user_friendship')
    
        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    //método para exclusão da amizade
    public deleteFriendship = async(
        userFriendship: userFriendship
    ) => {
        try {
            await UserDatabase.connection
            .where('id_user', userFriendship.idUser)
            .andWhere('id_friend', userFriendship.idFriend)
            .from('user_friendship')
            .delete()

        } catch (error:any) {
            throw new Error(error.message)
        }
    }
} 