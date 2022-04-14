type Transacoes = {
    valor: number,
    data: string,
    descricao: string,
}

type User = {
    CPF: string, 
    nome: string, 
    anoNascimento: number,
    saldo: number | 0,
    extrato: Transacoes[]
}

type arrayUsers = User[] 

export const usersList: arrayUsers = [
    {
        CPF: "666.666.666-66", 
        nome: "Morning Star", 
        anoNascimento: 1966,
        saldo: 200.00,
        extrato: [{
            valor: 6,
            data: "26/06/1966",
            descricao: "Compra de um bolo.",
        }]  
    },

    {
        CPF: "444.444.444-90", 
        nome: "Malu", 
        anoNascimento: 2003,
        saldo: 300.00,
        extrato: [{
            valor: 3,
            data: "7/06/2021",
            descricao: "Compra de um bombom.",
        }]  
    }
]