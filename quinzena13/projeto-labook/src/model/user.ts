export type user = {
    id: string,
    name: string,
    email: string,
    password: string
}

export interface UserInputDTO {
    name: string,
    email: string,
    password: string
}

export type userFriendship = {
    idUser: string,
    idFriend: string
}

export interface UserFriendshipInputDTO {
    idUser: string,
    idFriend: string
}