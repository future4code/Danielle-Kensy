import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import styled from "styled-components";

const BigCard = styled.div`
  border: 1px solid black;

  div {
    display: flex;
    align-items: center;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
  }

  img {
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
  }

  h4 {
    margin-bottom: 15px;
  }
`
const ImageButton = styled.div`

  div {
    border: 1px solid black;
    border-radius: 50px;
    display: flex;
    align-items: center;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
  }

  img {
    width: 30px;
    margin-right: 10px;
  }
`

const SmallCard = styled.div`
  border: 1px solid black;

  div {
    display: flex;
    align-items: center;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 60px;
  }

  img {
    width: 40px;
    height: 40px;
    margin-right: 3px;
    border-radius: 50%;
  }

  h4 {
    margin-right: 2px;
  }
`


function App() {
  return (
    <div className="App">
  
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <BigCard>
        <CardGrande 
          imagem="https://github.com/future4code/Danielle-Kensy/blob/master/quinzena4/portfolio/img/header.png?raw=true" 
          nome="Danielle" 
          descricao="Oi, eu sou a Dani. Sou uma das alunas da Labenu. Adoro participar do stand-up na sexta-feira e esperar os professores passarem o notion com o projeto da semana."
        />
        </BigCard>
        
        <ImageButton>
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
        </ImageButton>

        <SmallCard>
        <CardPequeno
          imagem ="https://cdn-icons-png.flaticon.com/512/1782/1782765.png"
          titulo ="Email:"
          texto ="danizinhatotosa@fofuxa.com"
        />
        </SmallCard>

        <br/>

        <SmallCard>
        <CardPequeno
          imagem ="https://cdn-icons-png.flaticon.com/512/1239/1239525.png"
          titulo ="Endereço:"
          texto ="Rua das margaridas sorridentes"
        />
        </SmallCard>

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <BigCard> 
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        </BigCard>

        <br/>
        
        <BigCard>
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
        </BigCard>
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImageButton>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />
        </ImageButton>        

        <ImageButton>
        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />
        </ImageButton>        
      </div>
    </div>
  );
}

export default App;
