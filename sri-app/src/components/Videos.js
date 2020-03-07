import React from 'react';
import video from '../img/video.jpg';
import video2 from '../img/video2.jpg';
import video3 from '../img/video3.jpg';

const Videos = () => {
  return (
    <div className='vid-wrap'>
      <div className='container'>
        <div className='video-section'>
          <div className='vid-heading'>
            <h3>SRI BROADCAST</h3>
          </div>
          <div className='video-sec'>
            <div className='vid'>
              <img src={video} alt='vid' width='100%' height='100%' />
            </div>
            <div className='vid'>
              <img src={video2} alt='vid' width='100%' height='100%' />
            </div>
            <div className='vid'>
              <img src={video3} alt='vid' width='100%' height='100%' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
