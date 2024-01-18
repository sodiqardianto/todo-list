import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function TodoHeader({addTodo}) {
  const [todoInput, setTodoInput] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todoInput)
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
