import React from 'react';
import SinglePost from './subcomponents/SinglePost';
import LatestPosts from './subcomponents/LatestPosts';

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
