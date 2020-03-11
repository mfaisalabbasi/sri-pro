import React from 'react';
import spinner from '../img/spinner.gif';
const Spinner = () => {
  return (
    <div className='container'>
      <div style={{ marginTop: '100px', marginBottom: '100px' }}>
        <img src={spinner} alt='Loading' />
      </div>
    </div>
  );
};

export default Spinner;
