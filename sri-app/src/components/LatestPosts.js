import React from 'react';
import post from '../img/post.jpg';

const LatestPosts = () => {
  return (
    <div className='latest-posts'>
      <div className='lt-post'>
        <div className='lt-image'>
          <img src={post} alt='lates-posts' width='100%' height='100%' />
        </div>
        <div className='lt-content'>
          computer is machine computer is machine computer is machine
        </div>
      </div>
      <div className='lt-post'>
        <div className='lt-image'>
          <img src={post} alt='lates-posts' width='100%' height='100%' />
        </div>
        <div className='lt-content'>
          computer is machine computer is machine computer is machine
        </div>
      </div>
      <div className='lt-post'>
        <div className='lt-image'>
          <img src={post} alt='lates-posts' width='100%' height='100%' />
        </div>
        <div className='lt-content'>
          computer is machine computer is machine computer is machine
        </div>
      </div>
    </div>
  );
};

export default LatestPosts;
