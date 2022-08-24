import {
  ADDED,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  COLORCHENGED,
  DELETED,
  TOGOLED,
} from "./actionTypes";

export const added = (todo) => {
  return {
    type: ADDED,
    payload: todo,
  };
};

export const toggled = (todoId) => {
  return {
    type: TOGOLED,
    payload: todoId,
  };
};

export const colorChenged = (todoId, color) => {
  return {
    type: COLORCHENGED,
    payload: {
      todoId,
      color,
    },
  };
};

export const deleted = (todoId) => {
  return {
    type: DELETED,
    payload: todoId,
  };
};

export const allCompleted = () => {
  return {
    type: ALLCOMPLETED,
  };
};

export const clearCompleted = () => {
  return {
    type: CLEARCOMPLETED,
  };
};
