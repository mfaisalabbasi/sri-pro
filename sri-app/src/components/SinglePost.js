import React from 'react';
import post from '../img/post.jpg';
const SinglePost = () => {
  return (
    <div className='single-post'>
      <div className='post-image'>
        <img src={post} alt='Posts thumnail' width='100%' height='100%' />
      </div>
      <div className='post-content'>
        <p>
          <h2 style={{ marginBottom: '10px' }}>Pakistan view on kashmir</h2>
          Hellow world how are you doing today, we came with lates news about
          indian occupied kashmiHellow world how are you doing today, we came
          with lates news about indian occupied kashmirr Hellow world how are
          you doing today, we came with lates
          <br />
          <button>Read more</button>
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
