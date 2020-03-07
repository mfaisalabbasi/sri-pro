import React from 'react';
import single from '../img/single.jpg';
import Comment from './Comment';
import fl1 from '../img/fl1.jpg';
import fl2 from '../img/fl2.jpg';
import fl3 from '../img/fl3.jpg';

const Single = () => {
  return (
    <div className='single'>
      <div className='single-section'>
        <div className='img-sec'>
          <img src={single} alt='images' width='100%' height='100%' />
        </div>
        <div className='data-sec'>
          <div className='pad'>
            <h1>Stay with us for lates kashmir reports </h1>
            <p>
              A paragraph is a series of related sentences developing a central
              idea, called the topic. unified idea. Paragraphs add one idea at a
              time to your broader
            </p>
            <p>
              A paragraph is a series of related sentences developing a central
              idea, called the
            </p>
            <p>
              A paragraph is a series of related sentences developing a central
              idea, called the topic. Try to think about paragraphs in terms of
              thematic unity: a paragraph is a sentence or a group of sentences
              that supports one central, unified idea. Paragraphs add one idea
              at a time to your broader
            </p>
          </div>
          <Comment />
        </div>
      </div>
      <div className='recent-section'>
        <div className='recent-data'>
          {' '}
          <div className='recent-head'>
            <h3>Recent Articles</h3>
          </div>
          <div className='recent-img'>
            <img src={fl1} alt='pic' width='100%' height='100%' />
          </div>
          <div className='recent-img'>
            <img src={fl2} alt='pic' width='100%' height='100%' />
          </div>
          <div className='recent-img'>
            <img src={fl3} alt='pic' width='100%' height='100%' />
          </div>
          <div className='recent-img'>
            <img src={fl1} alt='pic' width='100%' height='100%' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
