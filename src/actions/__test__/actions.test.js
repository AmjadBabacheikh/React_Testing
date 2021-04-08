import React from 'react';
import { saveComment } from '../index';
import { SAVE_COMMENT } from '../types';

describe('save comment action', () => {
  it('return the correct type', () => {
    const action = saveComment();
    expect(action.type).toEqual('SAVE_COMMENT');
  });
  it('return the payload', () => {
    const action = saveComment('NEW COMMENT');
    expect(action.payload).toEqual('NEW COMMENT');
  });
});
