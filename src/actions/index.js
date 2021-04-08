import axios from 'axios';
import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from './types';

export const changeAuth = (isLogged) => {
  return {
    type: CHANGE_AUTH,
    payload: isLogged,
  };
};

export const saveComment = (comment) => {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
};

export const fetchCommments = async () => {
  const response = await axios.get(
    'http://jsonplaceholder.typicode.com/comments'
  );
  return {
    type: FETCH_COMMENTS,
    payload: response.data,
  };
};
