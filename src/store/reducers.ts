import { SET_USER, ActionTypes, RootState } from './types'

const initialState: RootState = {
  pushKey: ''
};

export const rootReducer = (state = initialState, action: ActionTypes): RootState => {
  switch (action.type) {
    case SET_USER:
      return { ...state, pushKey: action.payload };
    default:
      return state;
  };
};