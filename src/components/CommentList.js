import React from 'react';
import { useSelector } from 'react-redux';

const CommentList = () => {
  const comments = useSelector((state) => state.comments.comments);
  return (
    <div>
      <h4>Comment List</h4>

      {comments.map((comment, index) => (
        <h4 key={index}>{comment}</h4>
      ))}
    </div>
  );
};

export default CommentList;
