import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/thunks/todoThunks";

// eslint-disable-next-line react/prop-types
export default function TodoHeader() {
  const dispatch = useDispatch()
  const [todoInput, setTodoInput] = useState("")
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {text: todoInput, completed: false}
    dispatch(addTodo(todo))
    setTodoInput('')
  };

  const handleChange = (e) => {
    setTodoInput(e.target.value)
  }

  return (
    <>
      <header>
        <h1>Todo List</h1>
        <form onSubmit={handleSubmit}>
          <input
          value={todoInput}
          onChange={handleChange}
          type="text"
          placeholder="Add Todo" />
          <input
          type="submit"
          value="submit"
          className="addBtn" />
        </form>
      </header>
    </>
  );
}
