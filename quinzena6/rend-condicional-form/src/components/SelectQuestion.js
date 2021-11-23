import React from "react";

export default function SelectQuestion(props) {
  return (
    <div>
      <p>{props.question}</p>
      <select>
        {props.options.map(option => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}
