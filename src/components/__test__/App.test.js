import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it('shows a comment box', () => {
  expect(wrapped.find(CommentBox).length).toBe(1); // the find function return an array
});

it('shows a comment List', () => {
  expect(wrapped.find(CommentList).length).toBe(1);
});
