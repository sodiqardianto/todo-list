/* eslint-disable react/prop-types */
import { useEffect } from "react";
import TodoItem from "../containers/TodoItem";

export default function TodoList({ todos, getTodo }) {
  useEffect(() => {
    getTodo();
  }, []);

  return (
    <ul className="todo-list">
      {todos?.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </ul>
  );
}
