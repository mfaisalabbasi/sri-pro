import React, { useState, useEffect, Fragment } from 'react';

import { Link } from 'react-router-dom';

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
      {all.posts.map(item => (
        <div className='lt-post'>
          <div className='lt-image'>
            <Link to={`/single/${item._id}`}>
              <img
                src={item.image}
                alt='lates-posts'
                width='100%'
                height='100%'
              />
            </Link>
          </div>
          <div className='lt-content'>
            <Link to={`/single/${item._id}`}>
              <h5>{item.title}</h5>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestPosts;
