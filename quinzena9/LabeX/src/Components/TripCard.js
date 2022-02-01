import React from "react"
import styled from "styled-components"

const Card = styled.div`
    margin: 10px 0 20px;
    width: 220px;
    height: 210px;
    border-radius: 4px;
    background-color: #4F7142;
    padding: 8px 8px 8px 8px;
    font-size: 80%;
    -webkit-box-shadow: -6px 8px 8px 0px rgba(25, 105, 78, 0.75);
    -moz-box-shadow: -6px 8px 8px 0px rgba(25, 105, 78, 0.75);
    box-shadow: -6px 8px 8px 0px rgba(25, 105, 78, 0.75);
`


const TripCard = (props) => {
    const {name, description, planet, durationInDays, date} = props.trip

    return(
        <Card>
            <p><b>Nome:</b> {name}</p>
            <p><b>Descrição:</b> {description}</p>
            <p><b>Planeta:</b> {planet}</p>
            <p><b>Duração:</b> {durationInDays}</p>
            <p><b>Data:</b> {date}</p>
        </Card>
    )
}

export default TripCard