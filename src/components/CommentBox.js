import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveComment, fetchCommments } from '../actions/index';

const CommentBox = ({ history }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveComment(comment));
    setComment('');
    history.push('/');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Add Comment</h4>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <div>
          <button>submit comment</button>
        </div>
      </form>
      <button
        onClick={() => {
          dispatch(fetchCommments());
          history.push('/');
        }}
        className='fetch_comments'
      >
        fetch comments
      </button>
    </div>
  );
};

export default CommentBox;
