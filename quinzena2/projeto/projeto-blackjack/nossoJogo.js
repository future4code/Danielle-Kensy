//ProjetoParte1

console.log("★ Boas vindas ao jogo de Blackjack ★")

if(confirm("Quer iniciar uma nova rodada?")) {
	
   let primeiraCartaUsuario = comprarCarta()
   let segundaCartaUsuario = comprarCarta()
  
   let primeiraCartaComputador = comprarCarta()
   let segundaCartaComputador = comprarCarta()

   let pontuacaoUsuario = primeiraCartaUsuario.valor + segundaCartaUsuario.valor
   let pontuacaoComputador = primeiraCartaComputador.valor + segundaCartaComputador.valor

   console.log(`Usuário - cartas: ${primeiraCartaUsuario.texto} ${segundaCartaUsuario.texto} - ${pontuacaoUsuario}`)
   
   console.log(`Computador - cartas: ${primeiraCartaComputador.texto} ${segundaCartaComputador.texto} - ${pontuacaoComputador}`)
   
   if (pontuacaoComputador === pontuacaoUsuario) {
      console.log("Empate!")
   } else if (pontuacaoUsuario > pontuacaoComputador) {
      console.log("O usuário ganhou!")
   } else {
      console.log("O computador ganhou!")
   }

} else {
	console.log("O jogo acabou")
}