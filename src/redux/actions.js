import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from "./actionTypes";



let nextTodoId = 0;

export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
});