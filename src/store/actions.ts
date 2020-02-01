import { SET_USER, ActionTypes } from './types'

export const setUser = (pushKey: string): ActionTypes => {
  return {
    type: SET_USER,
    payload: pushKey
  };
};