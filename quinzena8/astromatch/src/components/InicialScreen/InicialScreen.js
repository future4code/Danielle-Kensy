import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

const Main = styled.div`
    display: flex;
    flex-direction: column;
    border: 5px dotted white;
    border-radius: 10px;
    background-color: #c091f2;
    margin: 0 auto;
    height: 80vh;
    width: 30vw;
    text-align: center;
    align-items: center;
    margin-top: 2vw;
    color: white;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif

    p {
        margin-right: 1vh;
        margin-left: 1vh;
        margin-top: 5px;
    }

    h1 {
        margin-bottom: 10px;
        text-shadow: 3px 0.5px black;
    }

    h3 {
        margin-bottom: 3px;
        text-shadow: 1px 0.5px black;
    }

    button{
        margin-left: 1vw;
        margin-right: 1vw;
        height: 5vh;
        width: 6vw;
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
`
const Image = styled.img`
    height: 40vh;
    width: 50vh;
    border-radius: 80px;
`

const Buttons = styled.div`
    display: flex;
    justify-content: space-around;

    button{
        margin-left: 1vw;
        margin-right: 1vw;
        height: 6vh;
        width: 4vw;
        background-color: #ed685f;
        border-radius: 15px;
        border: none;
    }

    button:hover {
        background-color: #f53636;
    }

`

const InicialScreen = () => {

    const [profile, setProfile] = useState({})
      //declaração do estado dos matchs
    const [makeMatch, setMakeMatch] = useState(null)

    const onClickMatchValue = (e) => {
        setMakeMatch(e.target.value)
    }


    //função para dar match
    const MakeTheMatch = () => {

        const URL = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person`

        const body = {
            id: profile.name,
            choice: makeMatch
        }

        const headers = {
            headers : {
                Authorization: "Dani"
            }
        }

        axios
        .post(URL, body, headers) 
        .then((res) => {console.log(res.data)})
        .catch((err) => {console.log(err)})

    }

    //função para pegar um perfil
    const getProfile = () => {
        axios
        .get(
            `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person`,
            {
                headers: {
                    Authorization: "Dani"
                }
            }
            )
        .then((res) => setProfile(res.data.profile))
        .catch((err) => {console.log(err)})
    }
    console.log(profile)

      //funções para setar o valor tru ou falso do match
    console.log(makeMatch)

    useEffect (() => {
        MakeTheMatch()
    }, [makeMatch !== null])

    useEffect (() => {
        getProfile()
    }, [makeMatch])


    return(
        <Main>
            <h1>AstroMatch</h1>
            <hr/>
            <Image src={profile.photo} alt={profile.name} />
            <h3>{profile.name}, {profile.age}</h3>
            <p>{profile.bio}</p>
            <Buttons>
                <button onClick={onClickMatchValue} value={false}>❌</button>
                <button onClick={onClickMatchValue} value={true} >❤️</button>
            </Buttons>
        </Main>
    )
}

export default InicialScreen