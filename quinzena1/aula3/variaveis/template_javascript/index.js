// EXERCÍCIOS DE INTERPETRAÇÃO
/* 
1. No primeiro log será imprimido 10 no segundo 10, 5

2. Será impresso 10, 10, 10

3. A variável 'p' = 'horaTrabalhada'
   A variável 't' = 'salarioHora'
*/ 

// ECERCÍCIOS DE CÓDIGO 
//1:
let nome
let idade

console.log(typeof nome, typeof idade)

// Como não atribuimos nenhuma valor foi retornado undefined

nome = prompt('Digite seu nome: ')
idade = prompt('Digite sua idade: ')

console.log(typeof nome, typeof idade)

// Agora ao invés de undefined retorna duas strings pois os valores quem vem do prompt são sempre srting

console.log('Olá', nome, 'você tem', idade, 'anos')

//2:

let pergunta1 = 'Você gosta de batata?: '
let pergunta2 = 'Você gosta de purê batata?: '
let pergunta3 = 'Você gosta de batata assada?: '

let reposta1 = 'SIM'
let reposta2 = 'SIM'
let reposta3 = 'SIM'

console.log(pergunta1, reposta1)
console.log(pergunta2, reposta2)
console.log(pergunta3, reposta3)

//3:

let a = 10
let b = 25
let c = null

// Aqui faremos uma lógica para trocar os valores

c = a
a = b
b = c

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

// DESAFIO:
let primeiroNumero = prompt('Digite o 1º número: ')
let segundoNumero = prompt('Digite o 2º número: ')

const primeiroNumeroConversao = Number(primeiroNumero)
const segundoNumeroConversao = Number (segundoNumero)

console.log ('O primeiro número somado ao segundo número resulta em:', primeiroNumeroConversao + segundoNumeroConversao, 
             '\nO primeiro número multiplicado pelo segundo número resulta em:', primeiroNumeroConversao * segundoNumeroConversao)