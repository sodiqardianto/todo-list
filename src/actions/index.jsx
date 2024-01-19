import * as types from "../constants/ActionTypes";
import {
  fetchTodosApi,
  createTodoApi,
  deleteTodoApi,
  editTodoApi,
} from "../api/Todo.service";

export const getTodo = () => async (dispatch) => {
  try {
    const res = await fetchTodosApi();
    dispatch({ type: types.GET_TODOS, payload: res.data });
  } catch (error) {
    console.log("Failed to get" + error);
  }
};

export const addTodo = (text) => async (dispatch) => {
  try {
    const todo = { text: text, completed: false };
    const res = await createTodoApi(todo);
    dispatch({ type: types.ADD_TODOS, payload: res.data });
  } catch (error) {
    console.log("Add Todo is Error:" + error);
  }
};

export const editTodo = (data) => async (dispatch) => {
  try {
    const editedTodo = { ...data, completed: !data.completed };
    const res = await editTodoApi(data.id, editedTodo);
    dispatch({ type: types.EDIT_TODOS, payload: res.data });
  } catch (error) {
    console.log("Edit Todo Error: " + error);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    await deleteTodoApi(id);
    dispatch({ type: types.DELETE_TODO, payload: id });
  } catch (error) {
    console.log("Error deleting" + error);
  }
};
