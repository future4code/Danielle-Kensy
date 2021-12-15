import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import bat from '../img/bat.png';
import { Page2 } from '../components/page2';

const Div = styled.div`
    display: flex;
`

const Chart = styled.aside`
    background-color: #a68cd8;
    width: 25vw;
    height: 100vh;
` 
const Figure = styled.figure`
    display: flex;
    justify-content: space-around;
    
    img{
        height: 15vh;
        width: 8vw;
    }

    h1 {
        color: white;
        font-size: 6vh;
        margin-left: 10px;
    }
`

const Form = styled.div`
    display: flex;
    flex-direction: column;
    column-gap: 30px;
    align-items: center;

    input {
        width: 80%;
        height: 4vh;
    }

    button {
        color: white;
        background-color: #4e5173;
        height: 5vh;
        width: 50%;
        border-radius: 20px;
    }

    button:hover{
        background-color: #787cab;
        cursor: pointer;
    }
`

const Playlists = styled.div`
    display: flex;
    flex-direction: column;

    h1{
        color: white;
        margin-left: 30vw;
    }

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

export class Page1 extends React.Component {
    //definindo os estados que devem ser alterados conforme documentação da API
    state = {
        name: "",
        playlists: [],
        nameTrack: "",
        artist: "",
        url: "",
        page: 1
    }

    //guardando dados
    componentDidMount() {
        this.ExibirPlaylists()
    }


    //Definindo os Onchanges dos inputs controlados 
    onChangeName = (e) => {
        this.setState({name: e.target.value})
    }

    onChangeNameTrack = (e) => {
        this.setState({nameTrack: e.target.value})
    }

    onChangeArtist = (e) => {
        this.setState({artist: e.target.value})
    }

    onChangeUrl = (e) => {
        this.setState({url: e.target.value})
    }

    //função para criação da playlist
    CriarPlaylist = () => {
        //declarar URL API
        const URL = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        
        //declarar o body json
        const body = {
            name: this.state.name
        }
        
        //declarar o headers obrigatório da API
        const headers = {
            headers : {
                Authorization: "Dani-Kensy-Joy"
            }
        }

        //utilizar o axios para executar as funções API
        axios
            .post(URL, body, headers)

            .then((res) => {
                alert("Sucesso Playlist Criada")
                this.setState({name: ""})
                this.ExibirPlaylists()               
            })
            .catch((err) => {
                alert(err.response.data)
            })
    }//fechamento da função

    //função para adicionar música
    AdicionarMusica = (playlistId) => {
        //declarar URL API
        const URL = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`
        
        //declarar o body json
        const body = {
            name: this.state.nameTrack,
            artist: this.state.artist,
            url: this.state.url

        }
        
        //declarar o headers obrigatório da API
        const headers = {
            headers : {
                Authorization: "Dani-Kensy-Joy"
            }
        }

        //utilizar o axios para executar as funções API
        axios
            .post(URL, body, headers)

            .then((res) => {
                alert("Música Adicionada")
                this.setState({nameTrack: ""})      
                this.setState({artist: ""}) 
                this.setState({url: ""})        
            })
            .catch((err) => {
                alert(err.response.data)
            })
    }//fechamento da função


    //função para exibir playlist
    ExibirPlaylists = () => {
        axios

        .get(
            "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
            {
                headers : {
                    Authorization: "Dani-Kensy-Joy"
                }
            }
        )

        .then((res) => {
            //povando o array de estado com os dados da API
            this.setState({playlists: res.data.result.list})
            console.log(this.state.playlists)
        })
        .catch((err) => {
            console.log(err.response);
        });

    }//fechamento da função

    //função para deletar
    DeletarPlaylist= (playlistId) => {
        axios
        .delete(
            `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`,
            {
              headers: {
                    Authorization: "Dani-Kensy-Joy"
              }
            }
        )
        .then(() => {
            alert("PlayList deletada!")
            this.ExibirPlaylists()
        })
        .catch((err) => {
            alert(err.response)
        })
    }//fechamento da função

    //funções para exibição do componente     
      nextPage = () => {
        this.setState({ page: this.state.page + 1 });
      };
    
      previousPage = () => {
        this.setState({ page: this.state.page - 1 });
      };
    
    render(){
        return (
            <Div>
                <Chart>
                    <Figure>
                        <img src={bat} alt="Icone de Morcego"/>
                        <h1>SPOOKYFY</h1>
                    </Figure>

                    <hr/>

                    <Form>

                        <h3>Criar Playlist</h3>

                        <input 
                            placeholder='Digite um nome para PlayList'
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />

                        <br/>

                        <button onClick={this.CriarPlaylist}>Criar PlayList</button>

                        <h3>Adicionar Música</h3>

                        <input 
                        placeholder='Digite o nome da música'
                        value={this.state.nameTrack}
                        onChange={this.onChangeNameTrack}
                        />

                        <br/>

                        <input 
                        placeholder='Digite o compositor'
                        value={this.state.artist}
                        onChange={this.onChangeArtist}
                        />

                        <br/>

                        <input 
                        placeholder='Insira a URL da música'
                        value={this.state.url}
                        onChange={this.onChangeUrl}
                        />

                        <br/>

                        <p>Clique no botão adicionar na playlist desejada!</p>

                    </Form>

                </Chart>

                <Playlists>

                <h1>Suas PlayLists</h1>

                {/* {this.state.page === 1 ?  */}

                    <Grid>

                        {this.state.playlists.map((playlist) => {
                            return (
                                this.state.page ===1 ? 
                                <DivMap onClick={this.nextPage}>
                                    {playlist.name}
                                    <button onClick={() => this.DeletarPlaylist(playlist.id)}>Deletar Playlist</button>
                                    <button onClick={() => this.AdicionarMusica(playlist.id)}>Adicionar Música</button>
                                </DivMap> : 
                                <Page2
                                    playlist={playlist}
                                    previousPage={this.previousPage}
                                />
                            ) 
                        })}

                    </Grid>

                 {/* : <Page2/>} */}

                </Playlists>

            </Div>
        )
    }
}