// Exercícios de interpretação de código
/*
1. false, false, true, boolean

2. o código não funciona pois as strings não forma convertidas em numbers, 
logo no console será impresso apenas os dois números digitados um ao lado 
do outro ao invés de somar.

3. usar Number() nos prompt´s.
*/

// Exercícios de escrita de código
/*
1:
let idadeUsuario = Number(prompt("Qual sua idade?"))
let idadeAmigo = Number(prompt("Qual a idade de seu melhor amigo(a)?"))

console.log("Sua idade é maior do que a do seu melhor amigo?", idadeUsuario > idadeAmigo,
            "\nDiferença de Idade:", idadeUsuario - idadeAmigo )
*/

/*
2:
let numeroPar = Number(prompt("Digite um número par: "))

const divisao = numeroPar % 2

console.log("Resto Divisão:", divisao)

c -> quando é feita a divisão por um número 
para sempre resta 0.

d -> quando é feita a divisão por um número 
para sempre resta 1.
*/

/*
3:

let idadeUsuario = Number(prompt("Qual sua idade?"))

console.log("Idade em meses:", idadeUsuario * 12,
            "\nIdade em dias:", idadeUsuario * 365,
            "\nIdade em horas:", idadeUsuario * 8760)
*/

/*4:*/

let primeiroNumero = Number(prompt("Insira um número: "))
let segundoNumero = Number(prompt("Insira outro número: "))

const resultado1 = primeiroNumero % segundoNumero
const resultado2 = segundoNumero % primeiroNumero 

console.log("O primeiro numero é maior que segundo?", primeiroNumero > segundoNumero,
            "\nO primeiro numero é igual ao segundo?", primeiroNumero === segundoNumero,
            "\nO primeiro numero é divisível pelo segundo?", resultado1 === 0,
            "\nO segundo numero é divisível pelo primeiro?", resultado2 === 0,)
