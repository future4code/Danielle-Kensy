import React from 'react'
import styled from "styled-components"
import UseGetData from "../Hooks/UseGetDate"
import TripCard from "../Components/TripCard"
import Load from "../img/load.gif"
import {useHistory} from "react-router-dom"

const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 500px;
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

    img {
        grid-column: 2;
        margin-left: 115px
    }
`

const LoadFrame = styled.img`
    border-radius: 200px;
    width: 20vw;
    height: 40vh;
`


const ListTripsPage = () => {
    
    const [getTrips] = UseGetData("/trips", {})

    const tripsList = getTrips.trips && getTrips.trips.map((trip) => {
        return <TripCard key={trip.id} trip={trip} />
    })

    //Métodos para navegação
    //declarando o método history para poder usar seus atributos?? sei lá como fala eu ein tem nome pra tudo agora  
    const history = useHistory();

    const goToHomePage = () => {
        history.push("/")
    }

    const goToApplicationForm = () => {
        history.push("/ApplicationFormPage")
    }

    return (
        <ListDiv>
            <Buttons>
                <button onClick={goToHomePage}>Voltar</button>
                <button onClick={goToApplicationForm}>Inscrição</button>
            </Buttons>
            <h1>Viagens Disponíveis:</h1>

            <Grid>
                {tripsList && tripsList.length > 0 ? tripsList : <LoadFrame src={Load} alt='Icone de carregamento'/>}
            </Grid>

        </ListDiv>
    )
}

export default ListTripsPage
