import React from "react";
import InputQuestion from "../components/InputQuestion"
import SelectQuestion from "../components/SelectQuestion"

class Stage2 extends React.Component {
  render() {
    return (
      <div>
        <h3>PARTE 2 - Ensino Superior</h3>
        <InputQuestion question="D) Digite seu curso:"/>
        <InputQuestion question={"E) Informe a unidade de ensino:"} />
      </div>
    )
  }
}

export default Stage2;
