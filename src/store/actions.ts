import {
  BoardType, ListType, TaskType,
  SET_USER, SET_BOARDS, SET_LISTS, SET_TASKS,
  ActionTypes
} from './types';

export const setUser = (user: string): ActionTypes => {
  return {
    type: SET_USER,
    payload: user
  };
};

export const setBoards = (boards: BoardType[]): ActionTypes => {
  return {
    type: SET_BOARDS,
    payload: boards
  };
};

export const setLists = (lists: ListType[]): ActionTypes => {
  return {
    type: SET_LISTS,
    payload: lists
  };
};

export const setTasks = (tasks: TaskType[]): ActionTypes => {
  return {
    type: SET_TASKS,
    payload: tasks
  };
};