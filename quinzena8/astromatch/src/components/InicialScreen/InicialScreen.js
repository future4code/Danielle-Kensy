import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import life from "../../img/life.png";

const Main = styled.div`
    display: flex;
    flex-direction: column;
    border: 3px solid white;
    border-radius: 10px;
    background-color: #73628A;
    margin: 0 auto;
    height: 80vh;
    width: 30vw;
    text-align: center;
    align-items: center;
    margin-top: 2vw;
    color: white;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif

    p {
        margin-right: 2vw;
        margin-left: 2vw;
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
    
    hr {
        width: 25vw;
    }
`
const Icon = styled.img`
    margin-top: 2vh;
    height: 11vh;
    width: 6vw;
`
const Image = styled.img`
    height: 35vh;
    width: 37vh;
    border-radius: 5px;
    -webkit-box-shadow: -2px 1px 14px 0px rgba(50, 50, 50, 1);
    -moz-box-shadow:    -2px 1px 14px 0px rgba(50, 50, 50, 1);
    box-shadow:         -2px 1px 14px 0px rgba(50, 50, 50, 1);
    
`

const Buttons = styled.div`
    display: flex;
    justify-content: space-around;

    button{
        margin-left: 1vw;
        margin-right: 1vw;
        height: 6vh;
        width: 8vw;
        background-color: #CBC5EA;
        border-radius: 15px;
        border: none;
    }

    button:hover {
        background-color: #a89beb;
    }

`

const InicialScreen = () => {

    const [profile, setProfile] = useState({})
    
    //declaração do estado dos matchs
    const [makeMatch, setMakeMatch] = useState({})

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
        .then((res) => {setMakeMatch(res.data.isMatch)})
    }
    
    console.log(profile)

    console.log(makeMatch)

    useEffect (() => {
        getProfile()
    }, [makeMatch])

    useEffect (() => {
        MakeTheMatch() 
    }, [makeMatch])

    const onClickMatchValue = (e) => {
        setMakeMatch(e.target.value)
    }

    return(
        <Main>
            <Icon src={life}/>
            <br/>
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