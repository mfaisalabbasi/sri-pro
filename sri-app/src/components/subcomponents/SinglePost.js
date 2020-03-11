import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const SinglePost = () => {
  const [article, setarticle] = useState({
    loading: true,
    post: {},
    error: []
  });

  const fetchData = async () => {
    const req = await fetch('http://localhost:5000/posts/single');
    const res = await req.json();
    setarticle({
      loading: false,
      post: res
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { _id, title, image, description } = article.post;

  return (
    <div className='single-post'>
      <div className='post-image'>
        <Link to={`/single/${_id}`}>
          {' '}
          <img src={image} alt='Posts thumnail' width='100%' height='100%' />
        </Link>
      </div>
      <div className='post-content'>
        <p>
          <Link to={`/single/${_id}`}>
            <h2 style={{ marginBottom: '10px' }}>{title}</h2>
          </Link>
          {description}
          <br />
          <Link to={`/single/${_id}`}>
            <button>Read more</button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
