//Exercícios de interpretação de código
/*
1 - a. 10, 50 b. so iria aparecer o segundo resultado 50

2 - a. essa função serve para verificar se existe a palavra
cenoura no texto inserido pelo usuário.
b. true, true, true
*/

//Exercícios de escrita de código

/*1:
A:
function imprimirInformacoes() {
    console.log("Eu a sou Dani, tenho 18 anos, moro no RS e sou estudante.")
}

imprimirInformacoes()

B:
const nome = prompt("Informe seu nome: ")
const idade = prompt("Informe sua idade: ")
const estado = prompt("Informe seu estado: ")
const profissao = prompt("Informe sua profissão: ")

function imprimirInformacoesUsuario(nome, idade, estado, profissao) {
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${estado} e sou ${profissao}.`)
}

imprimirInformacoesUsuario(nome, idade, estado, profissao)
*/

/*2:

const primeiroNumero = Number(prompt("Informe o Primeiro Número: "))
const segundoNumero = Number(prompt("Informe o Segundo Número: "))

A)
function somarNumeros(numeroUM, NumeroDois) {
    const soma = numeroUM + NumeroDois
    return soma
}

B)
function compararNumeros(numeroUM, NumeroDois) {
    const comparacao = numeroUM >= NumeroDois
    return comparacao
}

const resultado = somarNumeros(primeiroNumero, segundoNumero)
const resultado2 = compararNumeros(primeiroNumero, segundoNumero)

console.log(`O Resultado da sua soma é: ${resultado}`,
            `\nO primeiro número é maior ou igual ao segundo? ${resultado2}`)

C)
const numero = Number(prompt("Informe um Número: "))

function verificarNumeroPar(numero) {
    const vericacao = numero % 2
    return vericacao
}

const resultado = verificarNumeroPar(numero) === 0

console.log(resultado)

D)
const mensagem = prompt("Insira uma mensagem:")

function contarCaracteres(string) {
    console.log(string.toUpperCase())
    return string.length
}

const contagem = contarCaracteres(mensagem)

console.log(contagem)
*/

/*3:*/

const primeiroNumero = Number(prompt("Insira o 1º Número: "))
const segundoNumero = Number(prompt("Insira o 2º Número: "))

function somar(numeroUM, numeroDois) {
    const soma = numeroUM + numeroDois
    return soma
}

function subtrair(numeroUM, numeroDois) {
    const subtracao = numeroUM - numeroDois
    return subtracao
}

function multiplicar(numeroUM, numeroDois) {
    const multiplicacao = numeroUM * numeroDois
    return multiplicacao
}

function dividir(numeroUM, numeroDois) {
    const divisao = numeroUM / numeroDois
    return divisao
}

resultado1 = somar(primeiroNumero, segundoNumero)
resultado2 = subtrair(primeiroNumero, segundoNumero)
resultado3 = multiplicar(primeiroNumero, segundoNumero)
resultado4 = dividir(primeiroNumero, segundoNumero)

console.log(`Números inseridos: ${primeiroNumero} e ${segundoNumero}`,
            `\nSoma: ${resultado1}`,
            `\nDiferença: ${resultado2}`,
            `\nMultiplicação: ${resultado3}`,
            `\nDivisão: ${resultado4}`)

