//Exercício 1 

const yourName: string = "dani"
const birthday: string = "22 02 2003"

let resultado = birthday.split(" ", 3);

console.log(`Olá me chamo ${yourName}, nasci no dia ${resultado[0]} do mês de ${resultado[1]} do ano de ${resultado[2]}` )
//===========================================

//Exercício 2

const myName: number = 6

function DefineType(myName: any) {
    return typeof(myName)
}

console.log(DefineType(myName))
//===========================================

//Exercício 3 

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Movie = {
    movieName: string,
    releaseYear: number,
    gender: GENERO,
    pontuation?: number
}

function organizeMovie (movieName: string, releaseYear: number, gender: GENERO, pontuation?: number) : Movie{

    const result = {movieName, releaseYear, gender, pontuation}

    return result
}

console.log(organizeMovie("Turning Red", 2022, GENERO.ACAO, 4))
//===========================================

//Exercício 4 

enum SETOR {
    MARKETING="marketing",
    VENDAS="vendas",
    FINANCEIRO="financeiro"
}

//type que define o tipo de cada informação do usuário é um objeto
type EmployeesInfo = {
    nome: string,
    salario: number,
    setor: SETOR,
    presencial: boolean
}

//type que define que Employees é um array de types EmployeesInfo, já que precisamos de um array de objetos
type Employees = EmployeesInfo[]

//declarando os dados do array, definindo como tipo o nosso type Employees que é um array de objetos EmployeesInfo, 
//para guardar cada dado com o tipo definido em nosso type EmployeesInfo    
const employeesArray: Employees = [
	{ nome: "Marcos", salario: 2500, setor: SETOR.MARKETING, presencial: true },
	{ nome: "Maria" ,salario: 1500, setor: SETOR.VENDAS, presencial: false},
	{ nome: "Salete" ,salario: 2200, setor: SETOR.FINANCEIRO, presencial: true},
	{ nome: "João" ,salario: 2800, setor: SETOR.MARKETING, presencial: false},
	{ nome: "Josué" ,salario: 5500, setor: SETOR.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salario: 4700, setor: SETOR.VENDAS, presencial: true},
	{ nome: "Paola" ,salario: 3500, setor: SETOR.MARKETING, presencial: true }
]

function employeesFilter (employeesArray: {nome: string, salario: number, setor: SETOR, presencial: boolean}[]) 
: {nome: string, salario: number, setor: SETOR, presencial: boolean}[]{
    return employeesArray.filter((employe) =>{
        return employe.setor === "marketing" && employe.presencial === true
    })

    
}

console.log(employeesFilter(employeesArray))
//===========================================

//Exercício 5 

type UsersInfo = {
    name: string,
    email: string,
    role: string
}

type Users = UsersInfo[]

const usersArray: Users = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
]

function emailFilter (usersArray: {name: string, email: string, role: string}[]): string[] {
    
    const emailMap = usersArray.map((user) => {
        if (user.role === "admin") {
            return user.email
        }
    })

    return emailMap.filter((email) => {
        if(email !== undefined) {
            return email
        }
    })
}

console.log(emailFilter(usersArray))
//===========================================

//Exercício 6

type ClienteInfo = {
    cliente: string,
    saldoTotal: number,
    debitos: number
}

type Cliente = ClienteInfo[]

const clienteArray: Cliente = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300].reduce((total, numero) => total + numero, 0)},
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040].reduce((total, numero) => total + numero, 0)},
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000].reduce((total, numero) => total + numero, 0)},
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700].reduce((total, numero) => total + numero, 0)},
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300].reduce((total, numero) => total + numero, 0)},
	{ cliente: "Soter", saldoTotal: 1200, debitos: [].reduce((total, numero) => total + numero, 0)} 
]

function negativeClients(clienteArray: {cliente: string, saldoTotal: number, debitos: number}[]): {cliente: string, saldoTotal: number, debitos: number}[]{

    return clienteArray.filter((cliente) => {
         if(cliente.saldoTotal - cliente.debitos < 0){
             return cliente.saldoTotal = cliente.saldoTotal - cliente.debitos 
         }
    })
    
}

console.log(negativeClients(clienteArray))
//===========================================

//Exercício 7

type ProductInfo = {
    nome: string,
    quantidade: number,
    valorUnitario: number | string
}

type Product = ProductInfo[]

const ajustaPreco = (preco :number): string => {
	const valorAjustado: string = preco.toFixed(2).replace('.', ',')
	return "R$ "+valorAjustado
}

const arrayProducts: Product = [
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: ajustaPreco(51.040)},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: ajustaPreco(210.0)},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: ajustaPreco(571.5)},
	{ nome: "O precioso", quantidade: 1, valorUnitario: ajustaPreco(9181.923)},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: ajustaPreco(17)},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: ajustaPreco(140.44)},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: ajustaPreco(99.9915)}
]



function organizaEstoque (arrayProducts: {nome: string, quantidade: number, valorUnitario: number | string}[]): {nome: string, quantidade: number, valorUnitario: number | string}[] {
    return arrayProducts.sort((a, b) => a.quantidade - b.quantidade)
}

console.log(organizaEstoque(arrayProducts))
//===========================================

//Exercício 8
const anoAtual: number = 2022
const anoNascimento: number = 2003
const anoEmissao: number = 2016

function checaRenovacao(anoAtual: number, anoNascimento: number, anoEmissao: number): boolean {
 
    const idade = anoAtual - anoNascimento
    const tempoCarteira = anoAtual - anoEmissao
 
    if(idade <= 20 && tempoCarteira >= 5) {
        return true
    } else if ( idade > 20 && idade <= 50 && tempoCarteira >= 10) {
        return true
    } else if(idade > 50 && tempoCarteira >= 15) {
        return true
    } else {
        false
    }
 }

 console.log(checaRenovacao(anoAtual, anoNascimento, anoEmissao))
//===========================================

//Exercício 9

const palavra: string = "mesa"

function anagrama(palavra: string): number {
    
    const letras: number = palavra.length
    let fatorial:number = 1

    for(let i=1; i<=letras; i++) {
        fatorial=fatorial*i;
    }

    return  fatorial
}

console.log(anagrama(palavra))

//===========================================

//Exercício 10

const CPF: string = "03579083090"

function testCPF(CPF: string) {
    var Soma;
    var Resto;
    Soma = 0;
  if (CPF == "00000000000") return false;

  for (let i=1; i<=9; i++) Soma = Soma + parseInt(CPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(CPF.substring(9, 10)) ) return false;

  Soma = 0;
    for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(CPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(CPF.substring(10, 11) ) ) return false;
    return true;
}

console.log(testCPF(CPF))

//===========================================

//Exercício 11
//kkkk po gente vai com calma ai que desumildade é essa, vai da não galera fica pra uma próxima! 