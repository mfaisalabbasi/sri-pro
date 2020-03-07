import React from 'react';
import AwesomeSlider from 'react-awesome-slider';

import info1 from '../img/info1.jpg';
import info2 from '../img/info2.png';
import info3 from '../img/info3.jpg';

const Infographics = () => {
  return (
    <div className='info'>
      <h1 style={{ color: 'white', textAlign: 'center', margin: '5px' }}>
        INFOGRAPHICS
      </h1>
      <div className='slide-area'>
        <AwesomeSlider>
          <div data-src={info2} />
          <div data-src={info3} />
          <div data-src={info1} />
        </AwesomeSlider>
      </div>
    </div>
  );
};

export default Infographics;
