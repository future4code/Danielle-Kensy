import React from 'react'
import styled from "styled-components"
import tryppy from "../img/spacetryppy.png"

const Buttons = styled.div`
    justify-content: space-between;
    width: 270px;
    display: flex;
`

const LogoFrame = styled.img`
    border-radius: 500px;
    width: 20vw;
    height: 40vh;
`

const HomePage = () => {

    return (
        <div>
            <LogoFrame src={tryppy} alt="logo" />
            <h1>Bem Vindo Viajante!</h1>
            <Buttons>
                <button>Ver Viagens</button>
                <button>Área de Admin</button>
            </Buttons>
        </div>
    )
}

export default HomePage
