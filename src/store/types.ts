export const SET_USER = 'SET_USER';
export const SET_BOARDS = 'SET_BOARDS';
export const SET_LISTS = 'SET_LISTS';
export const SET_TASKS = 'SET_TASKS';

interface SetUserAction {
  type: typeof SET_USER
  payload: string
};

export type ActionTypes = SetUserAction;

export interface RootState { pushKey: string };