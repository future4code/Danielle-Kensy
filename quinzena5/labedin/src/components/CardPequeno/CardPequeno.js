import React from 'react';

const CardPequeno = (props) => {
    return (
      <div className="smallcard-container">
        <img src={props.imagem} alt="" />
        <div>
            <h4>{props.titulo}</h4>
            <p>{props.texto}</p>
        </div>
      </div>
    )
  };
  
  export default CardPequeno;
  