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
              {
                <iframe
                  width='100%'
                  height='100%'
                  src='https://www.youtube.com/embed/95IQK-heLIU'
                  frameborder='0'
                  allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                  allowfullscreen
                ></iframe>
              }
            </div>
            <div className='vid'>
              <iframe
                width='100%'
                height='100%'
                src='https://www.youtube.com/embed/FotFt5Bsc78'
                frameborder='0'
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
            </div>
            <div className='vid'>
              <iframe
                width='100%'
                height='100%'
                src='https://www.youtube.com/embed/Vqfy4ScRXFQ'
                frameborder='0'
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
