import './App.css';
import React from 'react';
import styled from 'styled-components';
import { Page1 } from './pages/page1';

const Body = styled.div`
  background-color: black;
    height: 100vh;
  width: 100vw;
`


class App extends React.Component {
  render() {
    return (
      <Body className="App">
        <Page1></Page1>
        
        
      </Body>
    )
  }
}

export default App;
