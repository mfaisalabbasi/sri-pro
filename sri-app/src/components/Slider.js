import React, { Fragment } from 'react';
import banner from '../img/banner.jpg';

const Slider = () => {
  return (
    <Fragment>
      <div className='web-head'>
        <div className='head'>
          <h1>STRATEGIC RESEARCH INSTITUTE</h1>
        </div>
      </div>
      <div className='slider'>
        <img src={banner} alt='Banner' width='100%' height='100%' />
      </div>
    </Fragment>
  );
};

export default Slider;
