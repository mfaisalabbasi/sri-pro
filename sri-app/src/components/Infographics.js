import React, { Fragment, useEffect, useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';

import info1 from '../img/info1.jpg';
import info2 from '../img/info2.png';
import info3 from '../img/info3.jpg';

const Infographics = () => {
  const [info, setinfo] = useState({
    loading: true,
    infographics: []
  });

  useEffect(() => {
    const fetchData = async () => {
      const req = await fetch('http://localhost:5000/infographics/latest');
      const res = await req.json();

      setinfo({
        loading: false,
        infographics: res
      });
    };
    fetchData();
  }, []);
  const dt = info.infographics.map(item => (
    <div key={item._id} data-src={item.Infographic} />
  ));

  // Latests Info
  const [infos, setinfos] = useState({
    loading: true,
    infographics: []
  });

  useEffect(() => {
    const fetchData = async () => {
      const req = await fetch('http://localhost:5000/infographics/recent');
      const res = await req.json();
      console.log('info graph Recent', res);
      setinfos({
        loading: false,
        infographics: res
      });
    };
    fetchData();
  }, []);
  const recent = infos.infographics.map(item => (
    <div key={item._id} className='single-info'>
      <img src={item.Infographic} alt='hellow' width='100%' height='100%' />
    </div>
  ));
  return (
    <Fragment>
      <h1 className='info-head'>INFOGRAPHICS</h1>
      <div className='info'>
        <div className='slide-area'>
          <AwesomeSlider bullets={false}>{dt}</AwesomeSlider>
        </div>
        <div className='latest-info'>{recent}</div>
      </div>
    </Fragment>
  );
};

export default Infographics;
