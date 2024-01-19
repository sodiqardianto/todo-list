/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { addTodo, editTodo, deleteTodo, getTodo } from "../thunks/todoThunks";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    data: [],
  },
  extraReducers(builder) {
    builder
      .addCase(getTodo.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(getTodo.pending, (state, action) => {
        console.log("Geting Data Pending");
      })
      .addCase(getTodo.rejected, (state, action) => {
        console.log("Getting Data Rejected");
      });
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.data.push(action.payload);
    });
    builder.addCase(editTodo.fulfilled, (state, action) => {
      state.data = state.data.map((todo) => {
        return todo.id == action.payload.id
          ? { ...todo, ...action.payload }
          : todo;
      });
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      state.data = state.data.filter((todo) => {
        return todo.id !== action.payload.id;
      });
    });
  },
});
export const todoReducer = todoSlice.reducer;
