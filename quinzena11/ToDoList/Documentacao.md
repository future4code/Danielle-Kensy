#  <font color="yellow">Projeto To Do List 📒</font>
Esse projeto consiste basicamente no **backend** integrado com banco de dados MySql para uma API de To Do List ✅

> Utilizando tecnologias como:
- Knex
- MySql
- Typescript
- Express
- Node.js

Então vamos lá conhecer os `14` métods que constituem essa API:

## <font color="pink">Método de teste</font>
Utilizando a url com /ping:
> http://localhost:3003/ping

Você terá o retorno:
~~~
Pong! 🏓
~~~

## <font color="pink">Método Para pegar todos os usuários</font>
Utilizando a url com /user/all:
> http://localhost:3003/user/all

Você terá o retorno de um array com todos os usuários cadastros no banco:
~~~
[
  {
    "id": 1,
    "name": "dani",
    "nickname": "danizinha",
    "email": "dani@gmail.com"
  },
  {
    "id": 2,
    "name": "malu",
    "nickname": "maluzinha",
    "email": "malu@gmail.com"
  },
  {
    "id": 3,
    "name": "Zé",
    "nickname": "Zeee",
    "email": "kk@gmail.com"
  }
 ] 
~~~

## <font color="pink">Método pegar usuários via ID</font>
Utilizando a url com /user/:id:
> http://localhost:3003/user/2

Você terá o retorno do usuário que possui esse ID:
~~~
[
  {
    "id": 2,
    "name": "malu"
  }
]
~~~

## <font color="pink">Método pegar tarefas via ID</font>
Utilizando a url com /task/:id:
> http://localhost:3003/task/2

Você terá o retorno da tarefa que possui esse ID além dos dados do criador:
~~~
[
  {
    "id": 3,
    "title": "Limpar quarto",
    "description": "Limpar o quarto que tá fedendo",
    "status": "to_do",
    "limit_date": "2022-06-04T03:00:00.000Z",
    "creator_user_id": 2,
    "creatorUserId": 2,
    "creatorUserNickname": "maluzinha"
  }
]
~~~
## <font color="pink">Método pegar usuários via nome</font>
Utilizando a url com /user?name=texto:
> http://localhost:3003/user?name=malu

Você terá o retorno do usuário que possui o apelido com as letras informadas ou se o email possuir as letras informadas:
~~~
[
  {
    "id": 2,
    "nickname": "maluzinha",
    "email": "malu@gmail.com"
  }
]
~~~
## <font color="pink">Método Pegar tarefas criadas por um usuário</font>
Utilizando a url com /task?creatorUserId=id:
> http://localhost:3003/task?creatorUserId=2

Você terá o retorno do usuário que possui o apelido com as letras informadas ou se o email possuir as letras informadas:
~~~
[
  {
    "id": 3,
    "title": "Limpar quarto",
    "description": "Limpar o quarto que tá fedendo",
    "status": "to_do",
    "limit_date": "2022-06-04T03:00:00.000Z",
    "creator_user_id": 2,
    "creatorUserNickname": "maluzinha"
  },
  {
    "id": 4,
    "title": "Alimentar o gato",
    "description": "El gatooo el gatooo",
    "status": "doing",
    "limit_date": "2022-06-04T03:00:00.000Z",
    "creator_user_id": 2,
    "creatorUserNickname": "maluzinha"
  }
]
~~~
## <font color="pink">Método Pegar usuários responsáveis por uma tarefa</font>
Utilizando a url com /task/:idTask/responsible:
> http://localhost:3003/task/2/responsible

Você terá o retorno dos usuários reponsáveis pela tarefa informada:
~~~
[
  {
    "Taskid": 1,
    "taskTitle": "Pagar Agiota",
    "ResponsibleUserNickname": "maluzinha"
  }
]
~~~
## <font color="pink">Método criação de usuário</font>
Utilizando a url com /user:
> http://localhost:3003/user

E passar o seguinte body:
~~~
{
    "name": "Dani",
    "nickname": "Danizinha",
    "email": "Dani@gmail.com"
}
~~~
Você terá o retorno:
~~~
Usuário criado✅
~~~
## <font color="pink">Método criação de Tarefa</font>
Utilizando a url com /task:
> http://localhost:3003/task

E passar o seguinte body:
~~~
{
	"title": "Alimentar o gato",
	"description": "El gatooo el gatooo",
	"limitDate": "04/06/2022",
	"creatorUserId": 2
}
~~~
Você terá o retorno:
~~~
Tarefa Criada✅
~~~
## <font color="pink">Método Atribuir um usuário responsável a uma tarefa</font>
Utilizando a url com /task/responsible:
> http://localhost:3003/task/responsible

E passar o seguinte body:
~~~
{
    "taskId": 1,
    "resUserID": 2
}
~~~
Você terá o retorno:
~~~
Usuário Atribuido✅
~~~
## <font color="pink">Método editar usuário</font>
Utilizando a url com /user/edit/:id:
> http://localhost:3003/user/edit/1

E passar o seguinte body você sera capaz de atualizar o nome e o apelido do usuário:
~~~
{
    "name": "ZéZé",
    "nickname": "zezeze"
}
~~~
Você terá o retorno:
~~~
Usuário Atualizado✅
~~~
## <font color="pink">Método atualizar status da tarefa</font>
Utilizando a url com /task/:idTask:
> http://localhost:3003/task/1

E passar o seguinte body você sera capaz de atualizar o status da tarefa:
~~~
{
    "status": "doing"
}
~~~
Você terá o retorno:
~~~
Status Atualizado✅
~~~
## <font color="pink">Método deletar usuário</font>
Utilizando a url com /user/:idUser:
> http://localhost:3003/user/1

Você terá o retorno:
~~~
Usuário excluída✅
~~~
## <font color="pink">Método deletar Tarefa</font>
Utilizando a url com /task/idTask:
> http://localhost:3003/task/2

Você terá o retorno:
~~~
Tarefa excluída✅
~~~

