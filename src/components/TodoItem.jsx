/* eslint-disable react/prop-types */
import { GrClose } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { editTodo, deleteTodo } from "../store/thunks/todoThunks";

export default function TodoItem({todo}) {
  const dispatch = useDispatch()
  const handleEdit = () => {
    const editedTodo = {...todo, completed: !todo.completed}
    dispatch(editTodo(editedTodo))
  }
  
  return (
  <li className={`todo-item ${todo.completed ? 'checked' : ''}`}>
    <div className="todo-text" onClick={handleEdit}>{todo.text}</div>
    <div className="todo-delete" onClick={() => dispatch(deleteTodo(todo.id))}><GrClose /></div>
  </li>
  ) 
}
