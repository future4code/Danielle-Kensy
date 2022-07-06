# <font color="yellow">Hubikes 🚲</font>
This is a project of an API for a social network about recipes 🍲✨

</BR>
<div align = "center"> <strong> POWERED BY </strong> </div> 
</BR>
  <div align = "center">

    👻 Danielle Kensy 👻

</div>
</BR>

___
## 🔧 Using the following technologies:
- Knex
- MySql
- Typescript
- Express
- Node.js
___

In the document below you can find all the instructions about how to use the `6` methods:
___
## <font color="pink">Get your Profile</font>
Using the path /profile and passing the header authorization token

You will have the return of an array with the infos of your profile:
~~~
[
  {
    "id": "d512eed8-aeb2-48d1-98ce-12edf857607f",
    "name": "Danizinha",
    "email": "Danie@email.com"
  }
]
~~~
___
## <font color="pink">Get another user profile </font>
Using the path /user/:userId

You will have the return of an array with the user of your choice:
~~~
[
  {
    "id": "d512eed8-aeb2-48d1-98ce-12edf857607f",
    "name": "Danizinha",
    "email": "Danie@email.com"
  }
]
~~~
___
## <font color="pink">Get Recipe</font>
Using the path /recipe/:recipeId

You will have the return of an array with the Recipe of your choice:
~~~
[
  {
    "id": "f03542d2-f8c0-4f11-aeb0-e250b45159bc",
    "title": "Batata Frita",
    "description": "Fritar as batatas cortadas em tiras finas no óleo quente.",
    "created_at": "23/06/2022"
  }
]
~~~
___
## <font color="pink">User Singup</font>
Using the path /user/signup

And passing the following body:
~~~
{
    "name":"Malu",
    "email": "Malu@email.com", 
    "password": "gol@2015"
}
~~~
You will get this return:
~~~
    {
        "message": Usuário cadastrado,
        "token": your authorization token
    }
~~~
___
## <font color="pink">User login</font>
Using the path /user/login

And passing the following body:
~~~
{
    "email": "Danie@email.com", 
    "password": "gol@2015"
}
~~~
You will get this return:
~~~
    {
        "message": Usuário Logado,
        "token": your authorization token
    }
~~~
___
## <font color="pink">Register Recipe</font>
Using the path /recipe and passing the header authorization token

And also passing the following body:
~~~
{
    "title":"Massa Fresca",
    "description": "Misture ovos e farinha até dar liga, depois abra a massa e corte em tiras finas."
}
~~~
You will get this return:
~~~
    Receita registrada!
~~~