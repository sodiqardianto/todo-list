/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";

export default function TodoList({todos, editTodo, deleteTodo}) {
  return (
    <ul className="todo-list">
      {todos?.map(todo => {
        return <TodoItem key={todo.id} todo={todo} editTodo={editTodo} deleteTodo={deleteTodo}/>
      })}
    </ul>
  );
}
