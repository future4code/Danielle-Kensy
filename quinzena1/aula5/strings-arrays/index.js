//Exercícios de interpretação de código
/*
1 - a. undefined, b.null, c. 11, d. 3, e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13], f. 9

2 -  SUBI NUM ÔNIBUS EM MIRROCOS 27
*/

//Exercícios de escrita de código
/*1: 
const nomeDoUsuario = prompt ("Digite Seu Nome: ")
let emailDoUsuario = prompt ("Digite seu email: ")

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)
*/

/*2:
const comidasFavoritas = ["Batata", 
                          "Batata Frita", 
                          "Batata Assada",
                          "Batata Cozida", 
                          "Purê de Batata"]

console.log(comidasFavoritas)
console.log("Essas são as minhas comidas preferidas:", comidasFavoritas)

let comidaUsuario = prompt("Qual sua Comida fav?")
comidasFavoritas[1] = comidaUsuario
console.log(comidasFavoritas)
*/

/*3:*/
let listaDeTarefas = null

let tarefaUm = prompt("Qual sua 1º tarefa do dia?")
let tarefaDois = prompt("Qual sua 2º tarefa do dia?")
let tarefaTres = prompt("Qual sua 3º tarefa do dia?")

listaDeTarefas = [tarefaUm, tarefaDois, tarefaTres]

console.log(listaDeTarefas)

let tarefaFeita = Number(prompt("Qual das 3 tarefas você JÁ fez?"))

listaDeTarefas.splice(tarefaFeita, 1)

console.log(listaDeTarefas)