import React, { useState, useEffect } from 'react';
import fl1 from '../img/fl1.jpg';
import fl2 from '../img/fl2.jpg';
import fl3 from '../img/fl3.jpg';

const LatestPosts = () => {
  //Fetching Latest Posts for recent posts section
  const [all, setall] = useState({
    loading: true,
    posts: []
  });

  const fetchData = async () => {
    const req = await fetch('http://localhost:5000/latest');
    const res = await req.json();
    setall({
      loading: false,
      posts: res
    });
    console.log(res);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className='latest-posts'>
      <div className='lt-post'>
        <div className='lt-image'>
          <img src={fl1} alt='lates-posts' width='100%' height='100%' />
        </div>
        <div className='lt-content'>
          <h6>
            hellow world welcome lere, If You are looking for hellow world
            welcome lere, If You are looking for hellow world welcome lere, If
            You are looking for
          </h6>
        </div>
      </div>
      <div className='lt-post'>
        <div className='lt-image'>
          <img src={fl2} alt='lates-posts' width='100%' height='100%' />
        </div>
        <div className='lt-content'>
          <h6>
            hellow world welcome lere, If You are looking for hellow world
            welcome lere, If You are looking for hellow world welcome lere, If
            You are looking for
          </h6>
        </div>
      </div>
      <div className='lt-post'>
        <div className='lt-image'>
          <img src={fl3} alt='lates-posts' width='100%' height='100%' />
        </div>
        <div className='lt-content'>
          <h6>
            hellow world welcome lere, If You are looking for hellow world
            welcome lere, If You are looking for hellow world welcome lere, If
            You are looking for
          </h6>
        </div>
      </div>
    </div>
  );
};

export default LatestPosts;
