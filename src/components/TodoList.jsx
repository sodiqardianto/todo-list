/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { getTodo } from "../store/thunks/todoThunks";
import { useEffect } from "react";


export default function TodoList() {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos.data)
  
  useEffect(() => {
    dispatch(getTodo())
  }, [])
  
  return (
    <ul className="todo-list">
      {todos?.map(todo => {
        return <TodoItem key={todo.id} todo={todo}/>
      })}
    </ul>
  );
}