import commentReducer from '../comments';
import { SAVE_COMMENT } from '../../actions/types';

it('handle save action', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'New comment',
  };
  const newState = commentReducer({ comments: [] }, action);
  expect(newState.comments).toEqual(['New comment']);
});
it('handle unknown actions', () => {
  const action = {
    type: 'gdfgfdgfd',
    payload: 'New comment',
  };
  const newState = commentReducer({ comments: [] }, action);
  expect(newState).toEqual({ comments: [] });
});
