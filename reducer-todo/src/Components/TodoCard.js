import React, { useState, useReducer } from "react";

export default function TodoCard(props) {
  console.log("CARD", props);
  let { item, completed, id } = props.toDo;
  // console.log('IN CARD', state)

  return (
    <div>
      <input type="checkbox" onClick={() => props.handleChecked(id)} />
      <p>{item}</p>
      <div>
        <button onClick={() => props.handleDelete()}>Clear</button>
      </div>
    </div>
  );
}
