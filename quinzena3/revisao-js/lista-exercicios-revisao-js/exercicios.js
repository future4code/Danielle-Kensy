// EXERCÍCIO 01
function inverteArray(array) {

  const arrayInvertido = array.map((numero, indice) => {
    return array [array.length - indice -1]
  } ) 

  return arrayInvertido
      
}
// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {

  let arrayElevado = []

  for(numero of array) {
    if (numero % 2 ===0) {
      arrayElevado.push(Math.pow(numero, 2))
    }
  }

  return arrayElevado
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {

  let arrayPar = []

  for(numero of array) {
    if (numero % 2 ===0) {
      arrayPar.push(numero)
    }
  }

  return arrayPar
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
 
  let maiorNumero = -Infinity

  for(let numeroAtual of array) {
    if (numeroAtual > maiorNumero) {
      maiorNumero = numeroAtual
    }
  }

  return maiorNumero
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  
  for(i =0; i <= array.length; i++) {
    resposta = i
  }

  return resposta
}


// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2 
  const booleano4 = !booleano3 

  resposta1 = booleano1 && booleano2 && !booleano4
  resposta2 = (booleano1 && booleano2) || !booleano3 
  resposta3 = (booleano2 || booleano3) && (booleano4 || booleano1)
  resposta4 = !(booleano2 && booleano3) || !(booleano1 && booleano3)
  resposta5 = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)

  const respostas = [resposta1, resposta2, resposta3, resposta4, resposta5]

  return respostas
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  const arrayPares = []

  for(let i = 0; arrayPares.length < n; i++) {
    if (i % 2 === 0 ) {
      arrayPares.push(i)
    }
  }
  return arrayPares
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {

  if (a === b && a === c && b === c) {
    return 'Equilátero'
  } else if (a === b || a === c || b === c) {
    return 'Isósceles'
  } else {
    return 'Escaleno'
  }
  
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  
  let maiorNumero 

  if (num1 > num2) {
     maiorNumero = num1 
  } else {
     maiorNumero = num2
  }

  let menorNumero

  if (num1 < num2) {
    menorNumero = num1 
 } else {
    menorNumero = num2
 }

  const resultado = {
    maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: maiorNumero % menorNumero === 0,
    diferenca: maiorNumero - menorNumero
  }

  return resultado

}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

    arrayNovo = []

    array.sort((a, b) => a - b);

    arrayNovo.push(array[array.length -2])
    arrayNovo.push(array[1])
   
    return arrayNovo

}

// EXERCÍCIO 11
function ordenaArray(array) {

  array.sort((a, b) => a - b);

  return array 

}

// EXERCÍCIO 12
function filmeFavorito() {

  return filminho = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
  }

}

// EXERCÍCIO 13
function imprimeChamada() {

  let filminho = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep' , ' Anne Hathaway' , ' Emily Blunt' , ' Stanley Tucci']
  }

  return `Venha assistir ao filme ${filminho.nome}, de ${filminho.ano}, dirigido por ${filminho.diretor} e estrelado por ${filminho.atores}.`
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

  let triangulinho = {
    largura: lado1,
    altura: lado2,
    perimetro: 2*(lado1 + lado2),
    area: lado1 * lado2
  }

  return triangulinho

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

  let objetoNovo = {
    ...pessoa,
    nome: "ANÔNIMO"
  }

  return objetoNovo

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
