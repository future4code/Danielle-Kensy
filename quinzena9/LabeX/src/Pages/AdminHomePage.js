import React from 'react'
import styled from "styled-components"
import {useHistory} from "react-router-dom"
import { UseProtectedPage } from '../Hooks/UsePotectedPage';
import UseGetData from "../Hooks/UseGetDate"
import AdminTripCard from '../Components/AdminTripCard';
import Load from "../img/load.gif"

const Buttons = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 2px 0;
    width: 500px;
`

const AdminDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 35vw;
`

const LoadFrame = styled.img`
    border-radius: 200px;
    width: 20vw;
    height: 40vh;
    margin-left: 7vw;
`

const AdminHomePage = () => {

    UseProtectedPage();

    const history = useHistory();

    const goToHomePage = () => {
        history.push("/")
    }

    const goToCreatetrip = () => {
        history.push("/CreateTripPage")
    }

    const [getTrips] = UseGetData("/trips", {})

    const tripsList = getTrips.trips && getTrips.trips.map((trip) => {
        return <AdminTripCard key={trip.id} name={trip.name} id={trip.id}/>
    })

    const logout = () => {
        localStorage.removeItem("token")
        history.push("/LoginPage")
    }

    return (
        <AdminDiv>
            <Buttons>
                <button onClick={goToHomePage}>Voltar</button>
                <button onClick={goToCreatetrip}>Criar Viagem</button>
                <button onClick={logout}>Logout</button>
            </Buttons>
            <h1>Área Do Admin</h1>

            {tripsList && tripsList.length > 0 ? tripsList : <LoadFrame src={Load} alt='Icone de carregamento'/>}

        </AdminDiv>
    )
}

export default AdminHomePage
