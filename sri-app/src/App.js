import React from 'react';
import './App.css';
import 'react-awesome-slider/dist/styles.css';
import Navigation from './components/Navigation';
import Slider from './components/Slider';
import Content from './components/Content';
import Videos from './components/Videos';
import Infographics from './components/Infographics';
import Footer from './components/Footer';
function App() {
  return (
    <div className='container-full'>
      <Navigation />
      <Slider />
      <Content />
      <Videos />
      <Infographics />
      <Footer />
    </div>
  );
}

export default App;
