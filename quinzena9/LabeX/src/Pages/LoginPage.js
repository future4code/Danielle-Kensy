import React from 'react'
import styled from "styled-components"
import {useHistory} from "react-router-dom"

const Buttons = styled.div`
    justify-content: space-around;
    width: 500px;
    display: flex;
`

const LoginPage = () => {

    const history = useHistory();

    const goToHomePage = () => {
        history.push("/")
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <form>
                <input
                    placeholder={"Email"}
                    name={"email"}
                    required
                    type={"email"}
                />
                <input
                    placeholder={"Senha"}
                    name={"password"}
                    required
                    type={"password"}
                />
            </form>
            <Buttons>
                <button onClick={goToHomePage}>Voltar</button>
                <button>Entrar</button>
            </Buttons>
        </div>
    )
}

export default LoginPage
