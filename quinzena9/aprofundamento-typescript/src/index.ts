//Exercício 1
//a) Da erro pois o valor atribuido não é o mesmo tipo declarado.
let minhaString: string

//b)ussando o pipe | .
let meuNumero: number | string

//c) e d)
enum CORES {
    AZUL="azul",
    VERDE="verde",
    VERMELHO="vermelho",
    AMARELO="amarelo",
    LARANJA="laranja",
    ROXO="ROXO"
}

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: CORES
}

const pessoa1: Pessoa = {
    nome:"maria",
    idade:19,
    corFavorita: CORES.AMARELO
}
const pessoa2: Pessoa = {
    nome:"Dani",
    idade:19,
    corFavorita: CORES.VERDE
}
const pessoa3: Pessoa = {
    nome:"Gui",
    idade:19,
    corFavorita: CORES.ROXO
}

//Exercício 2
//a)as entradas são números as saídas são a média, o maior e o menor número
function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}
//b)maior, menor, media, soma, todas são do tipo number

//Exercício 3
//a)
type WizardInfo = {
    autor: string,
    texto: string
}

type Post = WizardInfo[]

const postsArray: Post = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ]
  //b) a entrada é o array de posts e o nome do autor a saída é o post de acordo com o autor informado
  function buscarPostsPorAutor(posts: {autor:string, texto:string}[], autorInformado:string) {
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
  }

  //Exercício 5
  //a)o arquivo criado via comando vem com muito mais opções e costumizações possíveis
  //enquanto o padrão que sempre utilizamos em aula tem apenas os itens mais importante e que possibilitam
  //rodarmos os projetos.

