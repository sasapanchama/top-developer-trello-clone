export const SET_USER = 'SET_USER';
export const SET_BOARDS = 'SET_BOARDS';
export const SET_LISTS = 'SET_LISTS';
export const SET_TASKS = 'SET_TASKS';

export interface BoardType {
  text: string,
  created_at: number | any,
  lists: ListType[] | null
};

export interface ListType {
  text: string,
  created_at: number | any,
  tasks: TaskType[] | null
};

export interface TaskType {
  text: string,
  created_at: number | any
};

interface SetUserAction {
  type: typeof SET_USER,
  payload: string
};

interface SetBoardsAction {
  type: typeof SET_BOARDS,
  payload: BoardType[]
};

interface SetListsAction {
  type: typeof SET_LISTS,
  payload: ListType[]
};

interface SetTasksAction {
  type: typeof SET_TASKS,
  payload: TaskType[]
};

export type ActionTypes = SetUserAction | SetBoardsAction | SetListsAction | SetTasksAction;

export interface RootState { user: string, boards: BoardType[] | null };