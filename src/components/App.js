import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { changeAuth } from '../actions/index';
import CommentList from './CommentList';
import CommentBox from './CommentBox';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  return (
    <div>
      {auth ? (
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/post'>Post</Link>
          </li>
          <li>
            <button
              onClick={() => {
                dispatch(changeAuth(false));
              }}
            >
              Sign Out
            </button>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/post'>Post</Link>
          </li>
          <li>
            <button
              onClick={() => {
                dispatch(changeAuth(true));
              }}
            >
              Sign In
            </button>
          </li>
        </ul>
      )}
      <Route path='/post' component={CommentBox} exact />
      <Route path='/' component={CommentList} exact />
    </div>
  );
};

export default App;
