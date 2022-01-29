import React from 'react'
import styled from "styled-components"
import {useHistory} from "react-router-dom"
import UseForm from '../Hooks/UseForm'

const Buttons = styled.div`
    justify-content: space-around;
    width: 500px;
    display: flex;
`

const ApplicationFormPage = () => {

    //Métodos para navegação
    //declarando o método history para poder usar seus atributos?? sei lá como fala eu ein tem nome pra tudo agora  
    const history = useHistory();

    const goToListTrips = () => {
        history.push("/ListTrips")
    }

    return (
        <div>
            <h1>Inscreva-se para viagem</h1>
            <form>
                <select
                    placeholder={"Escolha a Viagem"}
                    name={"chooseTrip"}
                    defaultValue={""}
                    required
                >
                    <option value={""} disabled>Escolha a Viagem</option>
                </select>
                <input
                    placeholder={"Nome"}
                    name={"name"}
                    required
                />
                <input
                    placeholder={"Idade"}
                    type={"number"}
                    name={"age"}
                    required
                />
                <input
                    placeholder={"Por que você deve ir?"}
                    name={"whyYouShouldGo"}
                    required
                />
                <input
                    placeholder={"Profissão"}
                    name={"profession"}
                    required
                />
                <select
                    placeholder={"País"}
                    name={"country"}
                    defaultValue={""}
                    required
                >
                    <option value={""} disabled>País</option>
                </select>
            </form>
            <Buttons>
                <button onClick={goToListTrips}>Voltar</button>
                <button>Enviar</button>
            </Buttons>
        </div>
    )
}

export default ApplicationFormPage
