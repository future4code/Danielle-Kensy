import React from 'react'
import styled from "styled-components"
import {useHistory} from "react-router-dom"
import UseForm from '../Hooks/UseForm'
import { UseProtectedPage } from '../Hooks/UsePotectedPage'
import axios from 'axios';

const Buttons = styled.div`
    justify-content: space-around;
    width: 500px;
    display: flex;
`

const CreateTripPage = () => {

    UseProtectedPage();

    const history = useHistory();

    const { form, onChange, cleanFields } = UseForm({ 
        name: "", 
        planet: "", 
        date: "", 
        description: "", 
        durationInDays: "" 
    })

    const goToAdminHome = () => {
        history.push("/AdminHomePage")
    }

    const createTrip = (form) => {

        const URL = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips`

        const headers = {
            headers : {
                Authorization: "Dani-Kensy",
                auth: localStorage.getItem("token")
            }
        }

        axios.post(URL, form, headers)
        .then(() => {
            alert("Viagem adicionada com sucesso!")
            cleanFields()
        })
        .catch((err) => alert(err.response.data.message))
    }

    return (
        <div>
            <h1>Cadastrar Viagem</h1>
            <form>
                <input
                    placeholder={"Nome"}
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    required
                />
                <select
                    placeholder={"Planeta"}
                    name={"planet"}
                    value={form.planet}
                    onChange={onChange}
                    required
                >
                    <option value={""} disabled>Escolha o Planeta</option>
                    <option value={"Marte"}>Marte</option>
                    <option value={"Terra"}>Terra</option>
                    <option value={"Plutão"}>Plutão</option>
                    <option value={"Júpiter"}>Júpiter</option>
                    <option value={"Saturno"}>Saturno</option>
                    <option value={"Lua"}>Lua</option>
                    <option value={"Pandora"}>Pandora</option>
                </select>
                <input
                    placeholder={"Data"}
                    type={"date"}
                    name={"date"}
                    value={form.date}
                    onChange={onChange}
                    required
                />
                <input
                    placeholder={"Descrição"}
                    name={"description"}
                    value={form.description}
                    onChange={onChange}
                    required
                />
                <input
                    placeholder={"Duração em dias"}
                    type={"number"}
                    name={"durationInDays"}
                    value={form.durationInDays}
                    onChange={onChange}
                    required
                />
            </form>
            <Buttons>
                <button onClick={goToAdminHome}>Voltar</button>
                <button onClick={() => createTrip(form)}>Criar</button>
            </Buttons>
        </div>
    )
}

export default CreateTripPage
