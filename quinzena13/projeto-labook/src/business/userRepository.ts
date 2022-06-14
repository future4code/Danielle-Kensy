import { user, userFriendship } from "../model/user"

export interface UserRepository {
    insertUser (user: user): Promise<void>
    insertUserFriendship (userFriendship: userFriendship): Promise<void>
    deleteFriendship (userFriendship: userFriendship): Promise<void>
}