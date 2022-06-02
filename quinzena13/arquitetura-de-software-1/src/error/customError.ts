export class CustomError extends Error {
    constructor(statusCode: number, message: string) {
        super(message)
    }
}

export class MissingID extends CustomError {
    constructor(){
        super(400, "'Favor informe o ID'")
    }
}