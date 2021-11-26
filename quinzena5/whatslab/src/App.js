import './App.css';
import styled from 'styled-components'
import { Message } from './components/Message/Message';

const Main = styled.div`
    margin: 0 auto;
    height: 100vh;
    width: 100vh;
    background-color: rgba(0, 0, 0, 0.26);
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(206, 187, 231);
`

function App() {
  
  return (
    <MainContainer>
      <Main>
        <Message/>
      </Main>
    </MainContainer>
  );
}

export default App;
