ˋˋˋ 
function calculaSalario(qtdeCarrosVendidos,valorTotalVendas) {
 // Escreva seu código aqui
 let salarioFinal = 2000 + (100 * qtdeCarrosVendidos) + (valorTotalVendas * 0.05)  
 return salarioFinal
} 

function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  if (quantidade >= 12) {
    return quantidade * 1
  } else { 
    return quantidade * 1.30
  }
}

ˋˋˋ