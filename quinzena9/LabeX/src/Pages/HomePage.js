import React from 'react'
import styled from "styled-components"
import tryppy from "../img/spacetryppy.png"
import {useHistory} from "react-router-dom"

const Buttons = styled.div`
    justify-content: space-between;
    width: 270px;
    display: flex;
    margin-left: 13px;
`

const LogoFrame = styled.img`
    border-radius: 500px;
    width: 20vw;
    height: 40vh;
`

const HomePage = () => {

    const history = useHistory();

    const goToListTrips = () => {
        history.push("/ListTrips")
    }

    const goToLoginPage = () => {
        history.push("/LoginPage")
    }


    return (
        <div>
            <LogoFrame src={tryppy} alt="logo" />
            <h1>Bem Vindo Viajante!</h1>
            <Buttons>
                <button onClick={goToListTrips}>Ver Viagens</button>
                <button onClick={goToLoginPage}>Área de Admin</button>
            </Buttons>
        </div>
    )
}

export default HomePage
