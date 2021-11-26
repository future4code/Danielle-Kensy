import React from "react";
import InputQuestion from "../components/InputQuestion"
import SelectQuestion from "../components/SelectQuestion"

class Stage1 extends React.Component {
  render() {
    return (
      <div>
        <h3>PARTE 3 - Informações de Ensino</h3>
        <InputQuestion question="F) Por qual razão você não concluiu o curso de graduação?"/>
        <SelectQuestion
          question={"G) Pretende cursar algum? :"}
          options={[
            "Sim",
            "Não",
            "Pretendo, porém não no momento",
            "Ainda não decidi"
          ]}
        />
      </div>
    )
  }
}

export default Stage1;
