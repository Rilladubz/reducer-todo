import React, { useState, useReducer } from "react";
import TodoList from "./TodoList";

//State Management
// import { initialState, taskReducer } from '../reducers/reducer';

export default function TodoForm(props) {
  // const [state, dispatch] = useReducer(taskReducer, initialState)
  const [task, setTask] = useState();

  // console.log('IN FORM STATE:', state )
  console.log("TASK:", task);

  const handleChanges = e => {
    // dispatch({type:'ADD_TODO', payload: e.target.value })
    // console.log(e.target.value)
    // dispatch({type:'ADD_TODO', payload: e.target.value})
    setTask(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.submitHandler(task);
    setTask("");
  };

  // const submitHandler = e => {
  //     e.preventDefault();
  //    dispatch({type:'ADD_TODO', payload: task })
  // }

  return (
    <>
      {/* <form onSubmit={submitHandler}> */}
      <form onSubmit={handleSubmit}>
        <div>
          <p>ADD TODO</p>
          <input
            className="input"
            placeholder="ADD TODO"
            name="toDo"
            onChange={handleChanges}
            value={task}
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>

      {/* <TodoList toDo={state} dispatch={dispatch} /> */}
    </>
  );
}
