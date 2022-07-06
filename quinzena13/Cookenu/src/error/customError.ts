export class CustomError extends Error {
    constructor(statusCode: number, message: string){
        super(message)
    }
}

export class Unauthorized extends CustomError{ 
    constructor(){
        super(401, "Usuário não autorizado")
    }
}

export class MissingParameters extends CustomError{ 
    constructor(){
        super(400, 'Preencha os campos email e password')
    }
}

export class InvalidPassword extends CustomError{ 
    constructor(){
        super(400, 'Senha inválida.')
    }
}

export class UserNotFound extends CustomError{ 
    constructor(){
        super(404, 'Usuário não encontrado.')
    }
}
