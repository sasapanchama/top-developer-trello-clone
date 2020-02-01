import { SET_USER, ActionTypes, RootState } from './types'

const initialState: RootState = {
  pushKey: ''
};

const memoState = {
  user: {
    boards: [
      {
        title: 'string',
        created_at: 'time',
        lists: [
          {
            title: 'string',
            created_at: 'time',
            tasks: [
              {
                title: 'string',
                created_at: 'time'
              }
            ]
          }
        ],
      }
    ]
  }
}

export const rootReducer = (state = initialState, action: ActionTypes): RootState => {
  switch (action.type) {
    case SET_USER:
      return { ...state, pushKey: action.payload };
    default:
      return state;
  };
};