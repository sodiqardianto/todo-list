/* eslint-disable no-unused-vars */
import {
  ADD_TODOS,
  GET_TODOS,
  DELETE_TODOS,
  EDIT_TODOS,
} from "../constants/ActionTypes";
const intialState = [];

export default function todos(state = intialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_TODOS:
      return payload;
    case ADD_TODOS:
      return [...state, payload];
    case EDIT_TODOS:
      return state.map((todo) =>
        todo.id === payload.id ? { ...todo, ...payload } : todo
      );
    case DELETE_TODOS:
      return state.filter((todo) => todo.id !== payload);
    default:
      return state;
  }
}
