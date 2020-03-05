import React from 'react';
import SinglePost from './SinglePost';
import LatestPosts from './LatestPosts';

const Content = () => {
  return (
    <div className='container'>
      <div className='content'>
        <SinglePost />
        <LatestPosts />
      </div>
    </div>
  );
};

export default Content;
