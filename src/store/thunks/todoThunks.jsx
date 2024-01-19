import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addTodo = createAsyncThunk("todo/add", async (todo) => {
  const res = await axios.post("http://localhost:3001/todos", todo);
  return res.data;
});

export const editTodo = createAsyncThunk("todo/edit", async (todo) => {
  const res = await axios.put(`http://localhost:3001/todos/${todo.id}`, todo);
  return res.data;
});

export const deleteTodo = createAsyncThunk("todo/delete", async (id) => {
  await axios.delete(`http://localhost:3001/todos/${id}`);
  return id;
});

export const getTodo = createAsyncThunk("todo/get", async () => {
  const res = await axios.get('http://localhost:3001/todos');
  return res.data;
});
