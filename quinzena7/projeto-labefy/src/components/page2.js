import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Div = styled.div`
    display: flex;

`

const Grid = styled.div`
    display: grid;
    grid-template-rows: 15vh 15vh 15vh 15vh 15vh;
    grid-template-columns: 20vw 20vw 20vw;
    justify-items: center;
    align-items: center;
    color: white;
    margin-left: 8vw;
`

const DivMap = styled.div`
    background-color: #a68cd8;
    color: white;
    height: 12vh;
    width: 15vw;
    font-family: arial black;
    text-align: center;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    :hover {
        border: 2px solid white;

    }

    button {
        width: 9vw;
        height: 3vh;
        background-color: #4e5173;
        border-radius: 10px;
        color: white;

    }

    button:hover {
        cursor: pointer;
        background-color: #787cab;
    }
`

export class Page2 extends React.Component {
    state = {
        tracks: []
    }

    componentDidMount() {
        this.ExibirTracks()
    }

        //função para exibir playlist
    ExibirTracks = (playlistId) => {
        axios
    
        .get(
            `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`,
            {
                headers : {
                        Authorization: "Dani-Kensy-Joy"
                }
            }
        )
    
        .then((res) => {
            //povando o array de estado com os dados da API
            this.setState({tracks: res.data.result.tracks})
        })
        .catch((err) => {
            console.log(err.response);
        });
    
    }//fechamento da função

    
    render(){

        const playlist = this.props.playlist
        
        return (
            <Div>

                <button onClick={() => this.props.previousPage()}>Voltar</button>

                {this.ExibirTracks(playlist.id)}


                {this.state.tracks.map((track) => {
                    return (
                        <DivMap>
                            {track.name}
                        </DivMap> 
                    ) 
                })} 
                
            </Div>
        )
    }
}