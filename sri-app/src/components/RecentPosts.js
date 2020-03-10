import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const RecentPosts = () => {
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
    <div className='recent-section'>
      <div className='recent-data'>
        {' '}
        <div className='recent-head'>
          <h3>Recent Articles</h3>
        </div>
        <div className='recent-img'>
          {all.posts.map(item => (
            <Link to={`/single/${item._id}`}>
              <img src={item.image} alt='pic' width='100%' height='100%' />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;
