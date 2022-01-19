import React from 'react'
import styled from "styled-components"

const Button = styled.div`
    display: flex;
    width: 500px;
    justify-content: center;
`

const TripDetailsPage = () => {

    return (
        <div>
            <h1>Viagem 1</h1>
            <Button>
                <button>Voltar</button>
            </Button>

            <h1>Candidatos Pendentes</h1>

            <h1>Candidatos Aprovados</h1>
        </div>
    )
}

export default TripDetailsPage
