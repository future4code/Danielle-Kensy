// Exercícios de interpretação de código
/*
1 - a. Ele pega um número que o usuário digitar e testa se ele
é par ou não.

b. Para números pares.

c. Para números impares.

2 - a. Para retornar o preço de acordo com a fruta escolhida.

b. O preço da fruta Maçã é R$ 2.25

c. Tirando o break irá direto para o default retornando:

O preço da fruta  Pêra  é  R$  5

3 - a. Está convertendo a string que o usuário digitar em 
número.

b. Se digitado o número 10, o número irá passar no teste mas 
a mensagem não será exibida pois não está no escopo global. 
Se digitado -10 não irá aparecer nada apenas o erro ao tentar
exibir a mensagem.

c. Haverá o erro ao tentar acessar a mensagem pois ela está
dentro do bloco do IF e não declarada no escopo global onde
poderia ser acessada utilizando apenas o console.log 

*/

//Exercícios de escrita de código

/*1:

let idade = Number(prompt("Qual sua idade?"))

if(idade >= 18) {
    console.log("Você pode dirigir =)")
} else {
    console.log("Você não pode dirigir >:(")
}
*/

/*2:

let turno = prompt("Digite qual turno você estuda (M - Manhã/V - tarde/N - noite)")

function verificarTurno(turno) {
    if (turno === "M") {
        return "Bom Dia!"
    } else if (turno === "V") {
        return "Boa Tarde!"
    } else {
        return "Boa noite!"
    }
}

console.log(verificarTurno(turno))
*/

/*3:

let turno = prompt("Digite qual turno você estuda (M - Manhã/V - tarde/N - noite)")

switch (turno) {
    case 'M':
        console.log("Bom Dia!")
        break
    case 'V':
        console.log("Boa Tarde!")
        break
    default:
        console.log("Boa noite!")
        break
}

*/

/*4:*/
let genero = prompt("Qual o Gênero do filme?")
let valorIngresso = Number(prompt("Qual o valor do ingresso?"))

if (genero === "fantasia" && valorIngresso < 15 ) {
    console.log("Bom filme <3 !")
} else {
    console.log("Escolha outro filme :(")
}