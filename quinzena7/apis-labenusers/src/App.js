import './App.css';
import React from "react";
import { CadastroUsuario } from './compnents/CadastroUsuarios';
import { ListaUsuarios } from './compnents/ListaUsuarios';
import styled from 'styled-components'

const Body = styled.body`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: rgb(163, 233, 157);
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Button = styled.button`
    background-color: lightblue;
    color: white;
    border-radius: 20px;
    height: 5vh;
    width: 20vw;
`

export default class App extends React.Component {
  state = {
    pagina: "cadastro"
  };

  trocarPagina = () => {
    //if else para alterar o valor do state utilizado no ternário
    if (this.state.pagina === "cadastro") {
      this.setState({ pagina: "lista" });
    } else {
      this.setState({ pagina: "cadastro" });
    }
  };

  render() {
    return (
      < Body className="App">
        <br/>
        <Button onClick={this.trocarPagina}>Trocar de tela</Button>
        {/* ternário para troca de página */}
        {this.state.pagina === "cadastro" ? <CadastroUsuario /> : <ListaUsuarios />}
      </Body>
    );
  }
}