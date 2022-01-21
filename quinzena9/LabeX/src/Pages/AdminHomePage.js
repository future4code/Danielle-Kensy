import React from 'react'
import styled from "styled-components"
import {useHistory} from "react-router-dom"

export const Buttons = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 10px 0;
    width: 500px;
`

export const AdminDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 35vw;
`

const AdminHomePage = () => {

    const history = useHistory();

    const goToHomePage = () => {
        history.push("/")
    }

    const goToCreatetrip = () => {
        history.push("/CreateTripPage")
    }

    return (
        <AdminDiv>
            <Buttons>
                <button onClick={goToHomePage}>Voltar</button>
                <button onClick={goToCreatetrip}>Criar Viagem</button>
                <button>Logout</button>
            </Buttons>
            <h1>Área Do Admin</h1>
        </AdminDiv>
    )
}

export default AdminHomePage
