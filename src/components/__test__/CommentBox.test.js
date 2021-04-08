import React from 'react';
import { mount } from 'enzyme';
import CommentBox from '../CommentBox';
import Root from '../../Root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('shows a textarea and a button', () => {
  expect(wrapped.find('button').length).toBe(2);
  expect(wrapped.find('textarea').length).toBe(1);
});

describe('the textarea', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: {
        value: 'new Comment',
      },
    }); //simulate the event by change and pass the objet that will contain the string that we want to try with it
    wrapped.update(); //force the component to update
  });
  it('has a textarea that users can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toBe('new Comment'); // we look into the value of textarea assigned after triger the event
  });

  it('clear the textarea when the form is submited', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new Comment');
    wrapped.find('form').simulate('submit', {});
    wrapped.update;
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});
