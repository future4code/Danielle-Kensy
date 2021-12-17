import React from "react";
import axios from "axios";
import styled from "styled-components";

const Div = styled.div`
    display: flex;
    flex-direction: column;

    button {
        background-color: lightblue;
        color: white;
        border-radius: 20px;
        height: 5vh;
        width: 20vw;
    }

    input {
        border-radius: 5px;
        border: none;
        height: 5vh;
    }
`

export class CadastroUsuario extends React.Component {
    //definindo os estados que devem ser alterados conforme documentação da API
    state = {
        name: "",
        email: ""
    }

    //Definindo os Onchanges dos inputs controlados 
    onChangeName = (e) => {
        this.setState({name: e.target.value})
    }

    onChangeEmail = (e) => {
        this.setState({email: e.target.value})
    }

    //função para criação de usuário
    CriarUsuario = () => {
        //declarar a URL da API
        const URL = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        //declarar o body json
        const body = {
            name: this.state.name,
            email: this.state.email
        }
        //declarar o headers obrigatório da API
        const headers = {
            headers : {
                Authorization: "Dani-Kensy-Joy"
            }
        }
        //utilizar o axios para executar as funções da API conforme a documentação
        axios
            //passar as variáveis declaradas necessárias para o POST
            .post(URL, body, headers) 
            //utilizando promises 
            .then((res) => {
                alert("Sucesso usuário cirado")
                this.setState({name: ""})
                this.setState({email: ""})
            })
            .catch((err) => {
                alert(err.response.data)
            })
    }// fechamento da função

    render() {
        return (
            <Div>
                <br/>
                <input
                    placeholder={"Digite seu Nome"}
                    value={this.state.name}
                    onChange={this.onChangeName}
                />
                <br/>
                <input
                    placeholder={"Digite seu Email"}
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                />
                <br/>
                <button onClick={this.CriarUsuario}>Criar Usuário!</button> 
            </Div>
        );
    }
}