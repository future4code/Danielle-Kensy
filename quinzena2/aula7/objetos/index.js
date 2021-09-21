//Exercícios de interpretação de código
/*
1 - Matheus Nachtergaele Virginia Cavendish canal: 
"Globo"
horario: "14h"

2 - a. {nome: 'Juca', idade: 3, raca: 'SRD'}
{nome: 'Juba', idade: 3, raca: 'SRD'}
{nome: 'Jubo', idade: 3, raca: 'SRD'}

b. ela copia as informações do objeto anterior para esse novo objeto.

3 - a. false
       undefined

b. o valor de false no console é retornado pois foi definido,
o valor undefined é por que não existe altura dentro do objeto
de pessoa.
*/

//Exercícios de escrita de código

/*1:
function objetoApelido(pessoa) {
     const retorno =  `Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`
     
     return retorno
}

const pessoa = {
    nome: "Danielle", 
    apelidos: ["Dani", "Danizinha", "Dani Linda"]
 }

const pessoa2 = {
    ...pessoa,
    apelidos: ["Danizika", "Danitotosa", "Nani"]
 }

console.log(objetoApelido(pessoa))
console.log(objetoApelido(pessoa2))
*/

/*2:
const pessoa = {
	nome: "Bruno", 
    idade: 23, 
	profissao: "Instrutor"
}

const pessoa2 = {
	nome: "Dani", 
    idade: 18, 
	profissao: "Aluna"
}

function retornoInformacoes(pessoa) {
    const retorno = `${pessoa.nome}, ${pessoa.nome.length}, ${pessoa.idade}, ${pessoa.profissao}, ${pessoa.profissao.length}`
    
    return retorno
}

console.log(retornoInformacoes(pessoa))
console.log(retornoInformacoes(pessoa2))
*/

/*3:*/

let carrinho = []

const fruta1 = {
    nome: "bananinha",
    disponibilidade: true 
}

const fruta2 = {
    nome: "abacatinho",
    disponibilidade: true 
}

const fruta3 = {
    nome: "laranjinha",
    disponibilidade: true 
}

function encherCarrinho(fruta) {
    const encher = carrinho.push(fruta)

    return encher
}

encherCarrinho(fruta1)
encherCarrinho(fruta2)
encherCarrinho(fruta3)

console.log(carrinho)

 





