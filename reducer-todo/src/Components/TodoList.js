import React from "react";

import TodoCard from "../Components/TodoCard";

const TodoList = props => {
  console.log("In TodoList Props:", props);
  const { toDo, handleChecked, handleDelete } = props;
  return (
    <>
      {toDo.map(item => (
        <TodoCard
          key={item.id}
          toDo={item}
          handleChecked={handleChecked}
          handleDelete={handleDelete}
        />
      ))}
    </>
  );
};

export default TodoList;
