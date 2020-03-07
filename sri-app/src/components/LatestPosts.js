import React from 'react';
import fl1 from '../img/fl1.jpg';
import fl2 from '../img/fl2.jpg';
import fl3 from '../img/fl3.jpg';

const LatestPosts = () => {
  return (
    <div className='latest-posts'>
      <div className='lt-post'>
        <div className='lt-image'>
          <img src={fl1} alt='lates-posts' width='100%' height='100%' />
        </div>
        <div className='lt-content'>
          <h5>Hellow world welcome Here, If You are Looking for ...</h5>
        </div>
      </div>
      <div className='lt-post'>
        <div className='lt-image'>
          <img src={fl2} alt='lates-posts' width='100%' height='100%' />
        </div>
        <div className='lt-content'>
          <h5>Hellow world welcome Here, If You are Looking for ...</h5>
        </div>
      </div>
      <div className='lt-post'>
        <div className='lt-image'>
          <img src={fl3} alt='lates-posts' width='100%' height='100%' />
        </div>
        <div className='lt-content'>
          <h5>Hellow world welcome Here, If You are Looking for ...</h5>
        </div>
      </div>
    </div>
  );
};

export default LatestPosts;
