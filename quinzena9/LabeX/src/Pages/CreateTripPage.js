import React from 'react'
import styled from "styled-components"
import {useHistory} from "react-router-dom"

const Buttons = styled.div`
    justify-content: space-around;
    width: 500px;
    display: flex;
`

const CreateTripPage = () => {

    const history = useHistory();

    const goToAdminHome = () => {
        history.push("/AdminHomePage")
    }

    return (
        <div>
            <h1>Cadastrar Viagem</h1>
            <form>
                <input
                    placeholder={"Nome"}
                    name={"name"}
                    required
                />
                <select
                    placeholder={"Planeta"}
                    name={"planet"}
                    defaultValue={""}
                    required
                >
                    <option value={""} disabled>Escolha o Planeta</option>
                </select>
                <input
                    placeholder={"Data"}
                    type={"date"}
                    name={"date"}
                    required
                />
                <input
                    placeholder={"Descrição"}
                    name={"description"}
                    required
                />
                <input
                    placeholder={"Duração em dias"}
                    type={"number"}
                    name={"durationInDays"}
                    required
                />
            </form>
            <Buttons>
                <button onClick={goToAdminHome}>Voltar</button>
                <button>Criar</button>
            </Buttons>
        </div>
    )
}

export default CreateTripPage
