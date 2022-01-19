import React from 'react'
import styled from "styled-components"
import GetData from "../Hooks/GetDate"
import TripCard from "../Components/TripCard"

const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 300px;
    margin: 50px 0 10px 0;
`

const ListDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 50vw;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 200px 200px 200px 200px;
    column-gap: 90px;
`


const ListTripsPage = () => {
    const [trips] = GetData("/trips", {})

    const tripsList = trips.trips && trips.trips.map((trip) => {
        return <TripCard key={trip.id} trip={trip} />
    })

    return (
        <ListDiv>
            <Buttons>
                <button>Voltar</button>
                <button>Inscrição</button>
            </Buttons>
            <h1>Viagens Disponíveis:</h1>
            <Grid>
                {tripsList && tripsList.length > 0 ? tripsList : <p>Carregando...</p>}
            </Grid>
        </ListDiv>
    )
}

export default ListTripsPage
