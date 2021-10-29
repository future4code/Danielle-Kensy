ˋˋˋ
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let arrayEscolhido = []

    for(let numero of arrayDeNumeros) {
      if (numero === numeroEscolhido) {
       arrayEscolhido.push(numero)
      } 
    }
    let resposta = arrayEscolhido.length
    
    if (resposta === 0) {
      return ("Número não encontrado")
    } else {
      return (`O número ${numeroEscolhido} aparece ${resposta}x`)
    }
}

ˋˋˋ