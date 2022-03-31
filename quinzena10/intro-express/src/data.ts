type Users = {
    id: number,
    name: string,
    phone: number,
    email: string,
    website:string
}

type arrayUsers = Users[]

export const usersList: arrayUsers = [
    {
        id: 1,
        name: "Dani",
        phone: 6666-6666,
        email: "danizinhagameplays@gmail.com",
        website: "www.amaislinda.com"
    },
    {
        id: 2,
        name: "Malu",
        phone: 3333-3333,
        email: "mariazinha@gmail.com",
        website: "www.bonitona.com"
    }
]

//resolvi fazer fora do array de usuários já que ele tem que levar o id do usuário :)
type Posts = {
    userId: number,
    id: number,
    title: string, 
    body: string
}

type arrayPosts = Posts[]

export const postsList: arrayPosts = [
    {
        userId: 1,
        id: 1,
        title: "To com fome", 
        body: "Ifood me patrocina me manda um mimo porfavo"
    },
    {
        userId: 2,
        id: 2,
        title: "To com sono", 
        body: "Hoje é festa do japa, japacama"
    }
]