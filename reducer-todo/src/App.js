import React, { useState, useReducer, useEffect } from "react";
import "./App.css";

//Components
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

//State Management
import { initialState, taskReducer } from "./reducers/reducer";

const App = () => {
  const [{ tasks }, dispatch] = useReducer(taskReducer, initialState);
  // ^^ is destructuring VV
  // const [state , dispatch] = useReducer(taskReducer, initialState);

  // const [item, setItem] = useState([])
  // console.log('APP STATE:', state)

  const submitHandler = task => {
    dispatch({ type: "ADD_TODO", payload: task });
  };

  const handleChecked = id => {
    dispatch({ type: "TOGGLE_COMPLETED", payload: id });
  };

  const handleDelete = id => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };

  return (
    <div className="App">
      <TodoForm
        submitHandler={submitHandler}
        handleDelete={handleDelete}
        toDo={tasks}
      />
      {/* <TodoForm /> */}
      <TodoList
        toDo={tasks}
        handleChecked={handleChecked}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
