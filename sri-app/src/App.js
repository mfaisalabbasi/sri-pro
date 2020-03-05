import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Slider from './components/Slider';
import Content from './components/Content';
function App() {
  return (
    <div className='container-full'>
      <Navigation />
      <Slider />
      <Content />
    </div>
  );
}

export default App;
