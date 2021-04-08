import { SAVE_COMMENT, FETCH_COMMENTS } from '../actions/types';
const commentReducer = (state = { comments: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case SAVE_COMMENT: {
      return { comments: [...state.comments, payload] };
    }
    case FETCH_COMMENTS: {
      const commentsFetched = payload.map((c) => c.name);
      return { comments: [...state.comments, ...commentsFetched] };
    }
    default:
      return state;
  }
};

export default commentReducer;
