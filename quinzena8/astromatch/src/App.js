import './App.css';
import InicialScreen from './components/InicialScreen/InicialScreen';
import MatchScreen from './components/MatchesScreen/MatchScreen';
import React, {useState} from "react";
import styled from "styled-components";

const Button = styled.button`
  margin-left: 1vw;
  margin-right: 1vw;
  height: 6vh;
  width: 12vw;
  background-color: #73628A;
  border-radius: 15px;
  color: white;
  margin-top: 2vw;

:hover {
  background-color: #a89beb;
}
`

function App() {

  const [pages, setPages] = useState("pag1")
    
  //função para trocar de página
  const changePage = () => {
      //if else para alterar o valor do usestate utilizado no ternário
      if (pages === "pag1") {
        setPages("pag2");
      } else {
        setPages("pag1");
      }
  }

  return (
    <div className="App">

      <main className='space'>
              <Button onClick={changePage}>Matches</Button>
        {pages === "pag1" ? <InicialScreen/> : <MatchScreen/>}
      </main>
    </div>
  );
}

export default App;
