import { useEffect, useState } from "react";
import TodoHeader from "../components/TodoHeader";
import TodoList from "../components/TodoList";
import { createTodoApi, deleteTodoApi, editTodoApi, fetchTodosApi } from "../api/Todo.service";

export default function TodoPages() {
  const [todos, setTodos] = useState([])

  const getTodos =  async() => {
    const response = await fetchTodosApi()
    setTodos(response?.data)
  }

  const createTodo = async(text) => {
    const todo = {text: text, completed: false}
    const response = await createTodoApi(todo)
    setTodos([...todos, response?.data])
  }

  const editTodo = async(data) => {
    const editedTodo = {...data, completed: !data.completed}
    const response = await editTodoApi(data.id, editedTodo)
    const updatedTodos = todos.map(todo => {
      return todo.id == data.id ? {...todos, ...response.data} : todo
    })
    setTodos(updatedTodos)
  }

  const deleteTodo = async(id) => {
    await deleteTodoApi(id)
    const updatedTodos = todos.filter(todo => todo.id != id)
    setTodos(updatedTodos)
  }

  useEffect(() => {
    getTodos()
  }, [])
  return (
    <>
      <TodoHeader addTodo={createTodo} />
      <TodoList todos={todos} editTodo={editTodo} deleteTodo={deleteTodo} />
    </>
  );
}
