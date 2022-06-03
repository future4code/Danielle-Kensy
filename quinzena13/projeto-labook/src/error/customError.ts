export class CustomError extends Error {
    constructor(statusCode: number, message: string) {
        super(message)
    }
}

export class MissingParameters extends CustomError{
    constructor(){
        super(400, "Faltando paramêtros favor consultar a documentação.")
    }
}

export class MissingPostID extends CustomError{
    constructor(){
        super(400, "Favor informar o id do post desejado.")
    }
}

export class PostNotFound extends CustomError{
    constructor(){
        super(404, "Post não encontrado.")
    }
}