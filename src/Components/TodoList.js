import React, { useState } from "react";
import Todoform from "./Todoform";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newTodo = [todo, ...todos];

    setTodos(newTodo);
  };

  return (
    <div>
      <h1>What is the plan for today?</h1>
      <Todoform onSubmit={addTodo} />
    </div>
  );
}

export default TodoList;
