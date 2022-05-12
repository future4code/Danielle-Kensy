import {User} from "./classes/User";
import { Customer } from "./classes/Customer";
import { Client } from "./interfaces/Client";
import { Place } from "./classes/Place";
import { Residence } from "./classes/Residence";

//========HERANCA=============

//Exercício 1
//a) Foi possível pois ela está sendo passada no construtor.
//b) Foi impresso uma vez. 

const user = new User("001", "dani@gmail.com", "Dani", "666")
console.log(user)

//Exercício 2, 3, 4, 5
//a) Foi impressa uma vez.
//b) Foi impressa duas vezes, uma pela instância de user e outra pela de customer já que ela estende a 
//classe user.

//a) Foi possível pois ela está sendo passada no construtor.

const customer = new Customer("001", "dani@gmail.com", "Dani", "666", "Maestro", 8)
console.log(customer.interoduceYourself())
console.log(customer)

//=========POLIMORFISMO===========

console.log("========POLIMORFISMO==========")

//Exercício 1
//a) foi posível imprimir todas menos a função, não sei por que.

const client: Client = {
    name: "Dani",
    registrationNumber: 1,
    consumedEnergy: 100,
      
    calculateBill: () => {
        return 2;
    }
}

console.log(client)

//Exercício 2
//a) Cannot create an instance of an abstract class.
//b) Ela não pode ser instanciada, mas pode ser herdada, se uma outra classe herdar ela então poderiamos 
//criar uma instancia que posssuiria as informação dessa classe abstrata.  
//const place = new Place()

//Exercício 3
//1 - Resposta acima ^
//2 - Para que seja possível possuir um método e não apenas a assinatura dele.
//3 - Pois ela possui um método completo.

const residence = new Residence(6, "90320-80")
console.log(residence)  

//Exercício 4
//a)A classe possui o método get para o cpf privado e possui o método do cálculo da conta, possui os
//atributos solicitados além dos herdados pela interface. 





