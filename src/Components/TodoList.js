import "./TodoList.css";
import Card from "../UI/Card";
import AddItem from "./AddItem/AddItem";
import TodoItem from "./TodoItem/TodoItem";

const TodoList = () => {
  return (
    <Card className="todo-list">
      <h1>Todo List</h1>
      <AddItem />
      <TodoItem />
    </Card>
  );
};

export default TodoList;
