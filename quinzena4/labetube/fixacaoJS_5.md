ˋˋˋ function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]
 
    const arrayNomes = animais.map((bicho) => {
        return bicho.nome
    } ) 

    return arrayNomes

} ˋˋˋ