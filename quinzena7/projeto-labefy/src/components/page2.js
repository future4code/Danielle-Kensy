import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ReactPlayer from 'react-player'

const Div = styled.div`
     /* display:flex;
     align-content: center; */

`

const DivMap = styled.div`
    background-color: #a68cd8;
    color: white;
    height: 15vh;
    width: 30vw;
    font-family: arial black;
    text-align: center;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 5vh;

    :hover {
        border: 2px solid white;

    }

    p {
        margin-block-start: 0.05em;
        margin-block-end: 0.05em;

    }

    p:hover {
        border: 1px solid white;
        cursor: pointer;
    }

    button {
        width: 13vw;
        height: 2.5vh;
        background-color: #4e5173;
        border-radius: 10px;
        color: white;

    }

    button:hover {
        cursor: pointer;
        background-color: #787cab;
    }

    audio {
        width: 18vw;
        height: 3vh;
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
            console.log(this.state.tracks)
        })
        .catch((err) => {
            console.log(err.response);
        });
    
    }//fechamento da função

    
    render(){
        
        const playlist = this.props.playlist
        this.ExibirTracks(playlist.id)
        
        return (
            <Div>

                
                {this.state.tracks.map((track) => {
                    return (
                        <DivMap>
                            {track.name}
                            <audio autoPlay={false}  controls='controls'>
                            <source src={track.url} type='audio/mp3' />
                            </audio>
                            <button onClick={() => this.props.previousPage()}>Voltar</button>

                        </DivMap> 
                    ) 
                })} 
                
            </Div>
        )
    }
}