ˋˋˋfunction calculaNota(ex, p1, p2) {
  media = ((ex * 1) + (p1 * 2) + (p2 * 3)) / 6
  
  if (media >= 9) {
    resposta = "A"
  } else if (media < 9 && media >= 7.5) {
    resposta = "B"
  } else if (media < 7.5 && media >= 6){
    resposta = "C"
  } else {
    resposta = "D"
  }
  
  return resposta
}ˋˋˋ