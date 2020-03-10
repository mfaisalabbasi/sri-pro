import React from 'react';
import './App.css';
import 'react-awesome-slider/dist/styles.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navigation from './components/Navigation';
import Slider from './components/Slider';
import Content from './components/Content';
import Videos from './components/Videos';
import Infographics from './components/Infographics';
import Footer from './components/Footer';
import Single from './components/Single';
function App() {
  return (
    <div className='container-full'>
      <Router>
        <Navigation />
        <Route exact path='/' component={Slider} />
        <Route exact path='/' component={Content} />
        <Route exact path='/' component={Videos} />
        <Route exact path='/' component={Infographics} />
        <Route exact path='/single/:id' component={Single} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
