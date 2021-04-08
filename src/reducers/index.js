import { combineReducers } from 'redux';
import commentReducer from './comments';
import { authReducer } from '../reducers/auth';

export default combineReducers({
  comments: commentReducer,
  auth: authReducer,
});
