import React from 'react';
import './App.css';
import Ending from './pages/ending';
import Stage1 from './pages/stage1';
import Stage2 from './pages/stage2';
import Stage3 from './pages/stage3';
import styled from 'styled-components'

const Button = styled.button`
  margin-top: 10px;
  background-color: green;
  color: white;
`

class App extends React.Component {

  state = {
    stage: 1
  }

  displayStage = () => {
    switch (this.state.stage) {
      case 1:
        return <Stage1/>
      case 2:
        return <Stage2/>
      case 3: 
        return <Stage3/>
      default:
        return <Ending/>
    }
  }

  nextStage = () => {
    this.setState({ stage: this.state.stage + 1 });
  };

  previousStage = () => {
    this.setState({ stage: this.state.stage - 1 });
  };
  
  render() {
    return (
      <div className="App">
        
        {this.displayStage()}

        {this.state.stage > 1 && (<Button onClick={this.previousStage}>Anterior</Button>)}
        {this.state.stage <= 3 && (<Button onClick={this.nextStage}>Seguinte</Button>)}

      </div>
    );
  }
}

export default App;
