import React from 'react';
import logo from '../img/logo.png';
import fb from '../img/fb.png';
import twitter from '../img/twitter.png';
import instagram from '../img/instagram.png';
const Footer = () => {
  return (
    <div className='footer'>
      <div className='foot-section'>
        <div className='foot-content'>
          <div style={{ marginTop: '50px' }}>
            <img src={logo} alt='Logo' width='100%' height='100%' />
          </div>
        </div>
      </div>
      <div className='foot-section'>
        <div className='foot-content'>
          <h5 style={{ color: '#072f5f' }}>WHO WE ARE</h5>

          <ul>
            <li>About SRI</li>
            <li>Our Team</li>
            <li>Find Us</li>
          </ul>
        </div>
      </div>
      <div className='foot-section'>
        <div className='foot-content'>
          {' '}
          <h5 style={{ color: '#072f5f' }}>WHAT WE DO</h5>
          <ul>
            <li>Research Articles</li>
            <li>Research Reports</li>
            <li>Pakistan Watch</li>
            <li>World Watch</li>
            <li>Videos</li>
          </ul>
        </div>
      </div>
      <div className='foot-section'>
        <div className='foot-content'>
          {' '}
          <h5 style={{ color: '#072f5f' }}>RESEARCH DOMAIN</h5>
          <ul>
            <li>Defence & Security</li>
            <li>South Asia</li>
            <li>Education</li>
            <li>Economy</li>

            <li>Kashmir</li>
          </ul>
        </div>
      </div>
      <div className='foot-section'>
        <div className='foot-content'>
          <div style={{ marginTop: '50px' }}>
            <h5 style={{ color: '#072f5f', fontWeight: 'bolder' }}>
              FOLLOW US
            </h5>
            <div className='social'>
              <img src={fb} alt='facebook' width='30%' height='100%' />
              <img src={twitter} alt='twitter' width='30%' height='100%' />
              <img src={instagram} alt='instagram' width='30%' height='100%' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
