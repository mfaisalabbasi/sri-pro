import React, { useState, useEffect, Fragment } from 'react';
import Comment from './Comment';
import RecentPosts from './RecentPosts';
import Spinner from './Spinner';

const Single = props => {
  //Fetching Data From Server For Single post
  const [singlePost, setsinglePost] = useState({
    loading: true,
    article: {}
  });
  const id = props.match.params.id;

  const fetchData = async () => {
    const req = await fetch(`http://localhost:5000/${id}`);
    const res = await req.json();
    setsinglePost({
      loading: false,
      article: res
    });
    console.log(res);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const { title, image, description } = singlePost.article;

  console.log('loading', singlePost.loading);
  const { loading } = singlePost;
  return (
    <Fragment>
      <div className='single'>
        <div className='single-section'>
          <div className='img-sec'>
            <img src={image} alt='images' width='100%' height='100%' />
          </div>
          <div className='data-sec'>
            <div className='pad'>
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
            <Comment />
          </div>
        </div>
        <RecentPosts />
      </div>
    </Fragment>
  );
};

export default Single;
