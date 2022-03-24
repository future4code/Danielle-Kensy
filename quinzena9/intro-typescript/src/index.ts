//EX 1:

// function checaTriangulo(a: number, b: number, c: number): string {
//     if (a !== b && b !== c) {
//       return "Escaleno";
//     } else if (a === b && b === c) {
//       return "Equilátero";
//     } else {
//       return "Isósceles";
//     }
//   }

//  console.log(checaTriangulo(2, 2, 2)) 

//EX 2:

// function imprimeTresCoresFavoritas(): void {
//     const cor1: string = "Preto"
//     const cor2: string = "Verde"
//     const cor3: string = "Marrom"
//     console.log([cor1, cor2, cor3])
//  }

//  imprimeTresCoresFavoritas()

//EX 3:
// function checaAnoBissexto(ano: number): boolean {
//     const cond1 = ano % 400 === 0
//     const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
//     return cond1 || cond2
//  }

// console.log( checaAnoBissexto(2008))

//EX 4:
// function comparaDoisNumeros(num1: number, num2: number): number {
//     let maiorNumero: number;
//     let menorNumero: number;
  
//     if (num1 > num2) {
//       maiorNumero = num1;
//       menorNumero = num2;
//     } else {
//       maiorNumero = num2;
//       menorNumero = num1;
//     }
  
//     const diferenca = maiorNumero - menorNumero;
  
//     return diferenca 
//   }

//   console.log(comparaDoisNumeros(9, 4))

//EX 5:
function checaRenovacaoRG(): boolean {
    const anoAtual: number = 2022
    const anoNascimento: number = 2003
    const anoEmissao: number = 2016
 
    const idade = anoAtual - anoNascimento
    const tempoCarteira = anoAtual - anoEmissao
 
    const cond1 = idade <= 20 && tempoCarteira >= 5
    const cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10
    const cond3 = idade > 50 && tempoCarteira >= 15
 
    return (cond1 || cond2 || cond3)
 }

 console.log(checaRenovacaoRG())
 