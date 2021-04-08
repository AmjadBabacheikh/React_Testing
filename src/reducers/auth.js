import { CHANGE_AUTH } from '../actions/types';
export const authReducer = (state = false, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_AUTH: {
      return payload;
    }
    default:
      return state;
  }
};
