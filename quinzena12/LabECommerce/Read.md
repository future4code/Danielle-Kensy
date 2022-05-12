# <font color="yellow">LabECommerce 🛍️</font>
Esse projeto consiste basicamente no **backend** integrado com banco de dados MySql para uma API de ECommerce ✨

> Utilizando tecnologias como:
- Knex
- MySql
- Typescript
- Express
- Node.js

Então vamos lá conhecer os `6` métods que constituem essa API:

## <font color="pink">Busca por todos os usuários</font>

Utilizando a url com /users:
> http://localhost:3003/users

Você terá o retorno de um array com todos os usuários cadastros no banco:

~~~
[
  {
    "id": "1",
    "name": "Dani",
    "email": "Dani@gmail.com",
    "password": "123456"
  },
  {
    "id": "7adffc64-d8f1-4e0b-bbc3-98dcae032deb",
    "name": "Malu",
    "email": "maluzinha@gmail.com",
    "password": "123456"
  }
]
~~~

## <font color="pink">Busca por todos os produtos</font>

Utilizando a url com /products:
> http://localhost:3003/products

Você terá o retorno de um array com todos os Produtos cadastros no banco:

~~~
[
  {
    "id": "1",
    "name": "vaso",
    "price": 9,
    "image_url": "https://i.picsum.photos/id/305/200/200.jpg?hmac=GAm9fW477iVRZTOeQCdEqLVug4lTf8wnHHzLof8RbFQ"
  },
  {
    "id": "27695ec5-981c-4e22-9758-3f8fd9deaac4",
    "name": "Madeira",
    "price": 12.2,
    "image_url": "https://i.picsum.photos/id/181/200/200.jpg?hmac=hxgS3WEn2EsuxbTrdq37OVbnajtIHlPXzTKW0X_Gu-s"
  }
]
~~~

## <font color="pink">Busca das compras de um usuário</font>

Utilizando a url com /users/:user_id/purchases:
> http://localhost:3003/users/1/purchases

Você terá o retorno de um array com todos as compras feitas por um usuários cadastradas no banco:

~~~
[
  {
    "id": "e299640a-2932-40c2-9509-0e278c70c388",
    "user_id": "1",
    "product_id": "1",
    "quantity": 2,
    "total_price": 18
  }
]
~~~

## <font color="pink">Cadastro de usuário</font>
Utilizando a url com /users:
> http://localhost:3003/users

E passar o seguinte body:
~~~
{
    "name": "Malu",
    "email": "maluzinha@gmail.com",
    "password": "123456"
}
~~~
Você terá o retorno:
~~~
Usuário criado✅
~~~

## <font color="pink">Cadastro de produto</font>
Utilizando a url com /products:
> http://localhost:3003/products

E passar o seguinte body:
~~~
{
    "name": "Madeira",
    "price": 12.20,
    "imageUrl": "https://i.picsum.photos/id/181/200/200.jpg?hmac=hxgS3WEn2EsuxbTrdq37OVbnajtIHlPXzTKW0X_Gu-s"
}
~~~
Você terá o retorno:
~~~
Produto criado✅
~~~

## <font color="pink">Registro de compra</font>
Utilizando a url com /purchases:
> http://localhost:3003/purchases

E passar o seguinte body:
~~~
{
    "userID": "1", 
    "productID": "1",
    "quantity": 2
}
~~~
Você terá o retorno:
~~~
Compra Feita✅
~~~