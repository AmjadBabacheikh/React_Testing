import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import reducers from './reducers/index';

export default function ({ children, initialState = {} }) {
  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(reduxPromise))
  );
  return <Provider store={store}>{children}</Provider>;
}
