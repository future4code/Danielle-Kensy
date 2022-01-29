import React from 'react'
import { useState } from "react"
import axios from 'axios';
import styled from "styled-components"
import {useHistory} from "react-router-dom"
import { setToken } from '../utils/localStorage';

const Buttons = styled.div`
    justify-content: space-around;
    width: 500px;
    display: flex;
`

const LoginPage = () => {

    // useProtectedPage();

    //navegação

    const history = useHistory();

    const goToHomePage = () => {
        history.push("/")
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChangeEmail = ({ target }) => {
        setEmail(target.value);
    }

    const onChangePassword = ({ target }) => {
        setPassword(target.value);
    }

    const onSubmitLogin = () => {

        const URL = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/login`
       
        const body = {
            email,
            password
        }

        const headers = {
            headers : {
                Authorization: "Dani-Kensy"
            }
        }

        axios
        .post(URL, body, headers)
            
        .then(({ data }) => {
            setToken(data.token);
            history.push("/AdminHomePage")
            console.log(data);
        })

        .catch((err) => {
            console.log(err)
            alert("Usuário ou Senha incorretos")
        });
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <form>
                <input
                    placeholder={"Email"}
                    required
                    type={"email"}
                    onChange={onChangeEmail}
                    value={email}
                />
                <input
                    placeholder={"Senha"}
                    required
                    type={"password"}
                    onChange={onChangePassword}
                    value={password}
                />
            </form>
            <Buttons>
                <button onClick={goToHomePage}>Voltar</button>
                <button onClick={onSubmitLogin}>Entrar</button>
            </Buttons>
        </div>
    )
}

export default LoginPage
