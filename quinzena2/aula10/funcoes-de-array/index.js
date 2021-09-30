//Exercícios de interpretação de código
/*
1 - 3 arrays contendo todas as informações do original e o indice.

2 - um novo array contendo apenas os nomes do array original.

3 - vai retornar um array com todos que tiveram o apelido 
diferente de chijo.
*/

//Exercícios de escrita de código

/*1:

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 //a
 const petsNovo = pets.map((pet, index, array) => {
    return pet.nome
 })

 console.log(petsNovo)

 //b
 const petsRaca = pets.filter((pet, index, array) => {
     return pet.raca === "Salsicha"
 })

 console.log(petsRaca)

 //c
 const petsPoodle = pets.filter((pet, index, array) => {
    return pet.raca === "Poodle"
})

const petsDesconto = petsPoodle.map((pet, index, array) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome} !`
 })


console.log(petsDesconto)
*/

/*2:*/

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

//a
  const produtosNovo = produtos.map((produto, index, array) => {
    return produto.nome
 })

 console.log(produtosNovo)

 //b

const produtoDesconto = produtos.map((produto, index, array) => {
    console.log(produto.nome, produto.preco - (produto. preco * 0.05))  
 })

 //c

 const filtrarBebidas = produtos.filter((produto, index, array) => {
    return produto.categoria === "Bebidas"
})

console.log(filtrarBebidas)

//d

const filtrarYpe = produtos.filter((produto, index, array) => {
    return produto.nome.includes("Ypê")
})

console.log(filtrarYpe)

//e

const produtoAuncio = filtrarYpe.map((produto, index, array) => {
    return `Compre ${produto.nome} por ${produto.preco}`
 })

console.log(produtoAuncio)







