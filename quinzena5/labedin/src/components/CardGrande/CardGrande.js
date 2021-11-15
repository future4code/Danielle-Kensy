import React from 'react';

function CardGrande(props) {
    return (
        <div className="bigcard-container">
            <img src={ props.imagem } />
            <aside>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </aside>
        </div>
    )
}

export default CardGrande;