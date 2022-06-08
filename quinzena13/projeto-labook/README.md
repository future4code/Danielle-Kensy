# <font color="yellow">LabECommerce 📱</font>
Esse projeto consiste basicamente no **backend** integrado com banco de dados MySql para uma API para uma rede social ✨

> Utilizando tecnologias como:
- Knex
- MySql
- Typescript
- Express
- Node.js

Então vamos lá conhecer os `5` métods que constituem essa API:

## <font color="pink">Buscar todos os posts</font>

Utilizando a url com /posts:
> http://localhost:3003/posts


Você terá o retorno de um array com todos os posts:

~~~
[
  {
    "id": "2c96cc54-3f10-408f-b622-5b3993667592",
    "photo": "https://i.picsum.photos/id/163/200/300.jpg?hmac=MHvt2U1kS_umJxJUqatJt-p78ljmX5Hxct3dxWTZRHA",
    "description": "reading a little",
    "type": "normal",
    "created_at": "2022-06-02T22:19:07.000Z",
    "author_id": "09618ec1-768c-4107-94dd-16ca4707a397"
  }
]
~~~

## <font color="pink">Busca post via ID</font>

Utilizando a url com /posts/:postID:
> http://localhost:3003/posts/2c96cc54-3f10-408f-b622-5b3993667592


Você terá o retorno de um array com o post especificado:

~~~
[
  {
    "id": "2c96cc54-3f10-408f-b622-5b3993667592",
    "photo": "https://i.picsum.photos/id/163/200/300.jpg?hmac=MHvt2U1kS_umJxJUqatJt-p78ljmX5Hxct3dxWTZRHA",
    "description": "reading a little",
    "type": "normal",
    "created_at": "2022-06-02T22:19:07.000Z",
    "author_id": "09618ec1-768c-4107-94dd-16ca4707a397"
  }
]
~~~

## <font color="pink">Criação de usuário</font>
Utilizando a url com /users/create :
> http://localhost:3003/users/create 

E passar o seguinte body:
~~~
{
    "name": "Malu",
    "email": "maluzinha@gmail.com",
    "password": "666"
}
~~~
Você terá o retorno:
~~~
Usuário criado✅
~~~

## <font color="pink">Criação de Post</font>
Utilizando a url com /posts/create :
> http://localhost:3003/posts/create 

E passar o seguinte body:
~~~
{
    "photo": "https://i.picsum.photos/id/163/200/300.jpg?hmac=MHvt2U1kS_umJxJUqatJt-p78ljmX5Hxct3dxWTZRHA",
    "description": "reading a little",
    "authorId": "09618ec1-768c-4107-94dd-16ca4707a397"
}
~~~
Se quiser você também pode opcionalmente informar o tipo do post:
~~~
   "type": choose beetween normal or event
~~~

Você terá o retorno:
~~~
Post criado✅
~~~

## <font color="pink">Cadastro de amizade</font>
Utilizando a url com /users/friendship :
> http://localhost:3003/users/friendship

E passar o seguinte body:
~~~
{
    "idUser": "09618ec1-768c-4107-94dd-16ca4707a397" , 
    "idFriend": "c6c3a95a-62f3-4848-a88a-37fe8314237c"
}
~~~
Você terá o retorno:
~~~
Amizade criada✅
~~~

## <font color="pink">Desfazer amizade</font>
Utilizando a url com /users/friendship/:userID :
> http://localhost:3003/users/friendship/09618ec1-768c-4107-94dd-16ca4707a397

E passar o seguinte body:
~~~
{
    "idFriend": "c6c3a95a-62f3-4848-a88a-37fe8314237c"
}
~~~
Você terá o retorno:
~~~
Amizade deletada✅
~~~