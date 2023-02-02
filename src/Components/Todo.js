import React, { useState } from "react";
import Todoform from "./Todoform";
import TodoList from "./TodoList";

function Todo() {
  const [edit, setEdit] = useState({ id: null, value: "" });

  return Todo.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    ></div>
  ));
}

export default Todo;
