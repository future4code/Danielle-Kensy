# Documentação API da Danizinha
Bom eu uso insomnia não postman, então segura essa docmuentção em _Mardown_.

Esta é uma API para uma lista de tarefas.

###### ps: NÃO VO BAIXA POSTMAN <3
___
A API possui 6 métodos sendo eles:

## Ping: pong

Usando /ping você tera o retorno pong!

~~~~
http://localhost:3003/ping 
~~~~
Retorno:
~~~
Pong! 🏓
~~~
## Get - Status

Retorna tarefa de acordo com o status.

~~~~
http://localhost:3003/todo
~~~~

É necessário passarum body para está função, com o status da tarefa true ou false.
~~~
{
	"completed": true
}
~~~

Retorno:
~~~
[
	{
		"userId": 2,
		"id": 2,
		"title": "Clonar cartão",
		"completed": true
	}
]
~~~
## Get - Tarefas por id


Retorna tarefas de acordo com ID do usuário.

~~~~
http://localhost:3003/todo/user/:userId
~~~~

É necessário apenas colocar a ID de algum usuário na url.
~~~
{
	http://localhost:3003/todo/user/3
}
~~~

Retorno:
~~~
[
    {
        userId: 3,
        id: 3,
        title: "Pagar o agiota",
        completed: false
    }
]
~~~
## Post - Criar Tarefa

Cria uma nova tarefa.

~~~~
http://localhost:3003/todo/add
~~~~

É necessário passar um body.
~~~
{
	 "userId": 4,
     "id": 4,
     "title": "Dar o golpe do baú",
     "completed": true
}
~~~

Retorno:
~~~
[
	{
		"userId": 3,
		"id": 3,
		"title": "Pagar o agiota",
		"completed": false
	},
	{
		"userId": 4,
		"id": 4,
		"title": "Dar o golpe do baú",
		"completed": true
	}
]
~~~
## Put - Altera Tarefa

Altera status da terafa.

~~~~
http://localhost:3003/todo/change/:taskId
~~~~

É necessário passar um body.
~~~
{
		"completed": false
}
~~~

Retorno:
~~~
ex: http://localhost:3003/todo/change/1

[
	{
		"userId": 1,
		"id": 1,
		"title": "Lavar dinheiro",
		"completed": false <=(aqui alterado)
	},
	{
		"userId": 2,
		"id": 2,
		"title": "Clonar cartão",
		"completed": true
	}
]
~~~
## Delete - Deleta né pô

Deleta a tarefa né poxa vida.

~~~~
http://localhost:3003/todo/:taskId
~~~~

Basta colocar o id da tarefa e ela será deletada.
~~~~
http://localhost:3003/todo/1
~~~~