import React from 'react'
import styled from "styled-components"

const Buttons = styled.div`
    justify-content: space-between;
    width: 300px;
    display: flex;
`

const ListTripsPage = () => {

    return (
        <div>
            <Buttons>
                <button>Voltar</button>
                <button>Inscrição</button>
            </Buttons>
        </div>
    )
}

export default ListTripsPage
