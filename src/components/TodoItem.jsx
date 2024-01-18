/* eslint-disable react/prop-types */
import { GrClose } from "react-icons/gr";

export default function TodoItem({todo, editTodo, deleteTodo}) {
  const handleEdit = () => {
    editTodo(todo)
  }
  
  return (
  <li className={`todo-item ${todo.completed ? 'checked' : ''}`}>
    <div className="todo-text" onClick={handleEdit}>{todo.text}</div>
    <div className="todo-delete" onClick={() => deleteTodo(todo.id)}><GrClose /></div>
  </li>
  ) 
}
