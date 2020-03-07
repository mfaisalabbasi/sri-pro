import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import single from '../img/single.jpg';

import info1 from '../img/info1.jpg';
import info2 from '../img/info2.png';
import info3 from '../img/info3.jpg';

const Infographics = () => {
  return (
    <div className='info'>
      <div className='slide-area'>
        <AwesomeSlider>
          <div data-src={info2} />
          <div data-src={info3} />
          <div data-src={info1} />
        </AwesomeSlider>

        {/* {' '}
         */}
      </div>
      <div className='latest-info'>
        <div className='single-info'>
          <img src={info2} alt='hellow' width='100%' height='100%' />
        </div>
        <div className='single-info'>
          <img src={info3} alt='hedllow' width='100%' height='100%' />
        </div>
      </div>
    </div>
  );
};

export default Infographics;
