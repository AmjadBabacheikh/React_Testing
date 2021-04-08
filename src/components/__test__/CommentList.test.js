import React from 'react';
import { mount } from 'enzyme';
import CommentList from '../CommentList';
import Root from '../../Root';

let wrapped;
beforeEach(() => {
  const initialState = { comments: { comments: ['fdsfds', 'dsfdsgfdg'] } };
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it('creates on li per element', () => {
  expect(wrapped.find('li').length).toEqual(2);
});

it('shows the test for each element', () => {
  expect(wrapped.render().text()).toContain('fdsfds');
  expect(wrapped.render().text()).toContain('dsfdsgfdg');
});
