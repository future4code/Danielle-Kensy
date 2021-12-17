import React from "react";
import axios from "axios";
import styled from "styled-components";

const Delete = styled.button`
color: white;
margin-left: 10px;
background-color: red;
border-radius: 60px;

`

export class ListaUsuarios extends React.Component {
    state = {
        listaUsuarios: []
    }

    //armazenar a lista
    componentDidMount() {
        this.listarUsuarios()
    }


    //função para pegar todos os usuários
    listarUsuarios = () => {
        axios
        .get(
            //passando parametros necessários do get conforme API
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            {
             headers: {
                Authorization: "Dani-Kensy-Joy"
             }
            }
        )
        //utilizando promises
        .then((res) => {
            //povando o array de estado com os dados da API
            this.setState({listaUsuarios: res.data})
        })
        .catch((err) => {
            console.log(err.response.data);
          });
    }

    //função para deletar um usuários
    deletarUsuario= (usuarioId) => {
        axios
        .delete(
            `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${usuarioId}`,
            {
              headers: {
                    Authorization: "Dani-Kensy-Joy"
              }
            }
        )
        .then(() => {
            alert("Usário deletado!")
            this.listarUsuarios()
        })
        .catch((err) => {
            alert(err.response.data)
            // alert("Erro ao tentar apagar")
        })
    }


    render() {
        return (
            <div>
                <br/>
                {/* mapear o array de usuarios povoado pelo GET e exibir o nome */}
                    {this.state.listaUsuarios.map((usuario) => {
                    return (
                        
                            <li>
                                {usuario.name}
                                <Delete onClick={() => this.deletarUsuario(usuario.id)}> X</Delete>
                            </li>
                            
                            
                    ) 
                    })}
            </div>
        )
    }
}