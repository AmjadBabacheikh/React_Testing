import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from '../Root';
import App from '../components/App';

beforeEach(() => {
  moxios.install(); //interrupt any axios request
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'fetched #1' }, { name: 'fetched #2' }],
  }); //tell moxios to respond to request targeting this url
});
afterEach(() => {
  moxios.uninstall();
});

test('can fetch a list of comments and display them', (done) => {
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  wrapped.find('.fetch_comments').simulate('click');
  moxios.wait(() => {
    //tell moxios to hold some time to get the data
    wrapped.update();
    expect(wrapped.find('li').length).toEqual(2);
    done();
    wrapped.unmount();
  }, 100);
});
