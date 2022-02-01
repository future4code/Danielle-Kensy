import React from "react"
import styled from "styled-components"
import {useHistory} from "react-router-dom"
import axios from "axios"

const Card = styled.div`
    display: flex;
    padding: 10px 20px;
    border-radius: 4px;
    margin: 10px 0;
    align-items: center;
    justify-content: space-between;
    width: 460px;
    background-color: #598E44;
    &:hover{
        cursor: pointer;
        background-color: #4F7142;
    }
`

const Button = styled.div`
    padding: 10px;
    background-color: red;
    border-radius: 70px;
    &:hover{
        background-color: pink;
        cursor: pointer;
    }
`


const AdminTripCard = (props) => {

    const history = useHistory();

    const { id, name } = props

    const goToTripDetails = () => {
        history.push("/TripDetailsPage")
    }

    const deleteTrip = (id) => {

        const URL = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips/${id}`

        const headers = {
            headers : {
                Authorization: "Dani-Kensy",
                auth: localStorage.getItem("token")
            }
        }

        axios.delete(URL, headers)
        .then(() => {
            alert("Viagem deletada com sucesso, atualize a página!")
        })
        .catch((err) => alert(err.response.data.message))
    }

    return(
        <Card onClick={() => goToTripDetails}>
            <p>{name}</p>
            <Button onClick={() =>deleteTrip(id)}>X</Button>
        </Card>
    )
}

export default AdminTripCard