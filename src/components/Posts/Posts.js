import React from 'react';
import Post from './Post';
import './Posts.css';
import dummyData from "../../dummy-data"

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;

  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}

      {dummyData.map((post, index) => (
        <Post key={index} post={post} />
      ))}
      ;
    </div>
  );
};

export default Posts;
