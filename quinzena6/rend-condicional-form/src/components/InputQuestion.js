import React from "react";

export default function InputQuestion(props) {
  return (
    <div>
      <p>{props.question}</p>
      <input onChange={props.onChange} value={props.value} />
    </div>
  )
}