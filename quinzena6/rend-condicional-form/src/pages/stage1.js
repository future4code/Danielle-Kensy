import React from "react";
import InputQuestion from "../components/InputQuestion"
import SelectQuestion from "../components/SelectQuestion"

class Stage1 extends React.Component {
  render() {
    return (
      <div>
        <h3>PARTE 1 - SEUS DADOS</h3>
        <InputQuestion question="A) Digite Seu Nome:"/>
        <InputQuestion question={"B) Digite sua idade:"} />
        <SelectQuestion
          question={"C) Qual seu grau de escolaridade:"}
          options={[
            "Ensino médio completo",
            "Ensino médio incompleto",
            "Ensino superior completo",
            "Ensino superior incompleto"
          ]}
        />
      </div>
    );
  }
}

export default Stage1;
