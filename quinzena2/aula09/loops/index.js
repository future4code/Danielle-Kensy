//Exercícios de interpretação de código
/*
1 - está somando todos os números menores que 5, o resultado
é 10

2 - a. [19, 21, 23, 25, 27, 30]
b. é preciso usar somente o for já que ele trabalha com os
indices.

3 - *
    **
    ***
    ****
*/

/*1:

let quantidadeBichinhos = Number(prompt("Quantos bichinhos você tem?"))

let listaBichinhos = []

if (quantidadeBichinhos === 0) {
    console.log("Que pena! Você pode adotar um pet!")
} else {
    while (quantidadeBichinhos !== 0) {
        let nomeBichinho = prompt("Digite o Nome do Seu bichinho: ")
        listaBichinhos.push(nomeBichinho)
        quantidadeBichinhos = quantidadeBichinhos - 1
    }
    console.log(listaBichinhos)
}

*/

/*2:*/

let arrayOriginal = [11,20,30,40,55]

/*
a:
for (let numeros of arrayOriginal) {
    console.log(numeros)
}
*/

/*b:
for (let numeros of arrayOriginal) {
    console.log(numeros / 10)
}
*/

/*c:

let arrayPares = []

for (let i = 0; i < arrayOriginal.length; i++) {
    const elementos = arrayOriginal[i]

    if (elementos % 2 === 0){
        arrayPares.push(elementos)
    }
}

console.log(arrayPares)
*/

/*d:

let arrayStrings = []

for (let i = 0; i < arrayOriginal.length; i++) {
    const elementos = arrayOriginal[i]

    arrayStrings.push(`O elemento do índex ${i} é: ${elementos}`)   
}

console.log(arrayStrings)
*/

/*e:*/
const maiorNumero = (arrayOriginal) => {
    let maiorNumero = -Infinity
  
    for (let numeroAtual of arrayOriginal) {
      if (numeroAtual > maiorNumero) {
        maiorNumero = numeroAtual
      }
    }
    return maiorNumero
  }

const menorNumero = (arrayOriginal) => {
    let menorNumero = Infinity
  
    for (let numeroAtual of arrayOriginal) {
      if (numeroAtual < menorNumero) {
        menorNumero = numeroAtual
      }
    }
    return menorNumero
  }

  console.log(`O menor Número é ${menorNumero(arrayOriginal)}
               O maior Número é ${maiorNumero(arrayOriginal)}`)