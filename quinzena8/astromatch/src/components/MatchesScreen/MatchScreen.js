import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

const Main = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    margin: 0 auto;
    margin-top: 3vh;
    height: 80vh;
    width: 30vw;
    text-align: center;
    color: white;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    border: 5px dotted white;
    border-radius: 10px;
    background-color: #c091f2;
  
    button{
        margin: 0 auto;
        height: 5vh;
        width: 15vw;
        background-color: #ed685f;
        border-radius: 15px;
        border: none;
        color: white;
    }

    button:hover {
        background-color: #f53636;
    }

    hr {
        width: 25vw;
    }
    
    h2 {
        text-shadow: 2px 0.5px black;
    }
`

const MatchScreen = () => {

    const [match, setMatch] = useState([])

    //função para pegar um perfil
    const getMatch = () => {
        axios
        .get(
            `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches`,
            {
                headers: {
                    Authorization: "Dani"
                }
            }
            )
        .then((res) => setMatch(res.data.matches))
        .catch((err) => {console.log(err)})
    }
    console.log(match)

    const clearMatches = () => {
        const URL = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear`
       
        const body = {
            id: match.id
        }

        const headers = {
            headers : {
                Authorization: "Dani"
            }
        }
        axios
        .put(URL, body, headers) 
        .then((res) => {console.log(res.data)})
        .catch((err) => {console.log(err)})
    }

    useEffect (() => {
        getMatch()
    }, [])

    return(
        <Main>
            <h2>AstroMatch</h2>
            <hr/>
            {match.map((match) => {
                return (
                    <div>
                        <p key={match.id}>{match.id}</p>
                    </div>
                )
            })}

        <button onClick={clearMatches}>Desfazer Matches</button>

        </Main>
    )
}

export default MatchScreen