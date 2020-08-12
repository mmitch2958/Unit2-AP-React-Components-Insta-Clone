import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;

  return (
    <div key={props.postId}>
    {props.comments.map((comment, index) => (
      <Comment key={index} comment={comment} />
    ))}
  </div>
);
};

export default Comments;
