// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  const altura = Number(prompt('Digite a altura:'))
  const largura = Number(prompt('Digite a largura:'))

  console.log(altura * largura)
}

// Exercício 2
function imprimeIdade() {
  const anoAtual = Number(prompt('Digite o ano atual:'))
  const anoNascimento = Number(prompt('Digite o ano nascimento:'))

  console.log(anoAtual - anoNascimento)
}

// Exercício 3
function calculaIMC() {
  const peso = Number(prompt('Digite o peso:'))
  const altura = Number(prompt('Digite e a altura:'))
   
  console.log(peso / (altura * altura))
}

// Exercício 4
function imprimeInformacoesUsuario() {
  const nome = prompt('Digite seu nome:')
  const idade = prompt('Digite sua idade:')
  const email = prompt('Digite seu email:')

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  const corUM = prompt('Digite sua cor favorita 1:')
  const corDois = prompt('Digite sua cor favorita 2:')
  const corTres = prompt('Digite sua cor favorita 3:')

  listaCores = [corUM, corDois, corTres]

  console.log(listaCores)
}

// Exercício 6
function retornaStringEmMaiuscula() {
  const algo = prompt('Digite Algo:')

  console.log(algo.toUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  const custoEspetaculo = prompt('Digite o custo do espetaculo:')
  const valorIngresso = prompt('Digite o valor do ingresso:')

  console.log(custoEspetaculo / valorIngresso)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  const palavraUM = prompt('Digite a 1º palavra:')
  const palavraDois = prompt('Digite a 2º palavra:')

  console.log((palavraUM.length) === (palavraDois.length))
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  const palavraUM = prompt('Digite a 1º palavra:')
  const palavraDois = prompt('Digite a 2º palavra:')

  console.log((palavraUM.toLowerCase()) === (palavraDois.toLowerCase()))
}

// Exercício 10
function checaRenovacaoRG() {
  const anoAtual = Number(prompt('Digite o ano atual:'))
  const anoNascimento = Number(prompt('Digite o ano de nascimento:'))
  const anoEmissao = Number(prompt('Digite o ano da emissão:'))

  const calcularIdade = anoAtual - anoNascimento
  const calcularEmissao = anoAtual - anoEmissao

 resultado = (calcularIdade <=20 && calcularEmissao >= 5) || 
 ((calcularIdade > 20 && calcularIdade < 50) && calcularEmissao >= 10) || 
 (calcularIdade >=50 && calcularEmissao >= 15)

 console.log(resultado) 
}

// Exercício 11
function checaAnoBissexto() {
  const anoAtual = Number(prompt('Digite o ano atual:'))

  multiploQuatrocentos = anoAtual % 400
  multiploQuatro = anoAtual % 4
  multiploCem = anoAtual % 100

  resultado = (multiploQuatrocentos === 0) ||
  (multiploQuatro === 0) !== (multiploCem === 0 )

  console.log(resultado)
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  const perguntaUM = prompt('Você tem mais de 18 anos?')
  const perguntaDois = prompt('Você possui ensino médio compconsto?')
  const perguntaTres = prompt('Você possui disponibilidade exclusiva durante os horários do curso?')

  console.log(perguntaUM, perguntaDois, perguntaTres)
  
  resultado = (perguntaUM === "sim" && perguntaDois === "sim") && (perguntaUM === "sim" && perguntaTres === "sim")

  console.log(resultado)
}