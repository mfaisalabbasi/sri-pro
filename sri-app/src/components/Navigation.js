import React from 'react';
import logo from '../img/logo.png';

const Navigation = () => {
  return (
    <div className='container'>
      <div className='header'>
        <div className='logo'>
          <div className='logo-file'>
            <img src={logo} alt='Logo' width='50%' height='90%' />
          </div>
        </div>
        <div className='menu'>
          <ul className='nav-ul'>
            <li>who we are</li>
            <li>what we do</li>
            <li>Research Domain</li>
            <li>Pakistan Watch</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
