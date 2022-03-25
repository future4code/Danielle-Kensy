//a)
//b) usando o comando tsc
type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}
//c) meu arquivo está na pasta SRC por isso já foi feita a configuração no tsconfig e no
//package.json para que seja possível converter dando apenas star no terminal.

//d)sim criando o comando "tsc && node ./build/index.js" no package.json e deixando todos os arquivos 
//dentro da mesma pasta