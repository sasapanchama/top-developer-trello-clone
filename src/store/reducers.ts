import {
  SET_USER, SET_BOARDS, SET_LISTS, SET_TASKS,
  ActionTypes,
  RootState
} from './types'

const initialState: RootState = {
  user: '',
  boards: null
};

export const rootReducer = (state = initialState, action: ActionTypes): RootState => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_BOARDS:
      return { ...state, boards: action.payload };
    default:
      return state;
  };
};