# Documentação IWFS: Sistema Bancário 

Bom eu uso insomnia não postman, então segura essa docmuentção em _Mardown_.

Esta é uma API para um sistema bancário.

###### ps: NÃO VO BAIXA POSTMAN <3
___

A API possui 7 métodos sendo eles:

## Ping: Pong ✨

Ping? Pong!

Usando /ping você tera o retorno pong!

~~~~
http://localhost:3003/ping 
~~~~
Retorno:
~~~
Pong! 🏓
~~~

## Post: Criar conta ✨

Usando /criar, você pode criar uma conta:

~~~~
http://localhost:3003/criar
~~~~
É necessário passar um body para esta função, com as seguintes informações:
~~~
{
	"CPF": "633.666.666-66",
    "nome": "Dani",
    "anoNascimento": 2003,
    "saldo": 0,
    "extrato": []
}
~~~
Retorno:
~~~
[
    {
		"CPF": "633.666.666-66",
		"nome": "Dani",
		"anoNascimento": 2003,
		"saldo": 100,
		"extrato": []
	}
]
~~~

## Get: Pegar contas ✨

Usando /contas você tera o retorno de uma lista com todas as contas.

~~~~
http://localhost:3003/contas
~~~~
Retorno:
~~~
[
    {
		"CPF": "633.666.666-66",
		"nome": "Dani",
		"anoNascimento": 2003,
		"saldo": 100,
		"extrato": []
	}
]
~~~

## Get: Pegar saldo ✨

Usando /saldo/:CPF/:nome você tera o retorno do saldo que possui em sua conta.

~~~~
http://localhost:3003/saldo/633.666.666-66/Dani
~~~~
Retorno:
~~~
Seu saldo é: R$100,00 🤑
~~~

## Put: Adiciona saldo ✨

Usando /add, você pode adicionar saldo em uma conta:

~~~~
http://localhost:3003/add
~~~~
É necessário passar um body para esta função, com as seguintes informações:
~~~
{
	"CPF": "633.666.666-66",
    "nome": "Dani",
    "valor": 100,
}
~~~
Retorno:
~~~
[
    {
		"CPF": "633.666.666-66",
		"nome": "Dani",
		"anoNascimento": 2003,
		"saldo": 100,
		"extrato": []
	}
]
~~~

## Put: Paga conta ✨


Usando /pagar, você pode pagar uma conta:

~~~~
http://localhost:3003/pagar
~~~~
É necessário passar um body para esta função, com as seguintes informações, lembrando que a data é opcional, se você quiser agendar informe a data, caso não informe a conta será paga no mesmo dia:
~~~
{
	"CPF": "633.666.666-66",
    "valor": 50,
    "data": 01/08/2022
    "descricao": "Conta de luz."
}
~~~
Retorno, lembrando que a operação será adicionada ao seu extrato:
~~~
[
    {
		"CPF": "633.666.666-66",
		"nome": "Dani",
		"anoNascimento": 2003,
		"saldo": 100,
		"extrato": [
            "valor": 50,
            "data": 01/08/2022
            "descricao": "Conta de luz."
        ]
	}
]
~~~

## Put: Transferência interna ✨

Usando /transferir, você pode transferir saldo de sua conta para outra conta, que seja do mesmo banco:

~~~~
http://localhost:3003/transferir
~~~~
É necessário passar um body para esta função, com as seguintes informações, sendo as primeiras da sua conta, e as informações seguintes a da conta que deseja transferir e o valor a ser transferido:
~~~
{
	"CPF": "666.666.666-66",
    "nome": "Morning Star",
    "CPF1": "444.444.444-90",
    "nome1": "Malu",
    "valor": 3
}
~~~
Retorno:
~~~
[
	{
		"CPF": "666.666.666-66",
		"nome": "Morning Star",
		"anoNascimento": 1966,
		"saldo": 197,
		"extrato": [
			{
				"valor": 6,
				"data": "26/06/1966",
				"descricao": "Compra de um bolo."
			}
		]
	},
	{
		"CPF": "444.444.444-90",
		"nome": "Malu",
		"anoNascimento": 2003,
		"saldo": 303,
		"extrato": [
			{
				"valor": 3,
				"data": "7/06/2021",
				"descricao": "Compra de um bombom."
			}
		]
	}
]
~~~