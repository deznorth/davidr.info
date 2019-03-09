/*
 * @Author: David M. Rojas Gonzalez // davidr.info 
 * @Date: 2019-03-04 19:02:41 
 * @Last Modified by: David M. Rojas Gonzalez // davidr.info
 * @Last Modified time: 2019-03-08 20:59:22
*/

import React, { Component } from 'react';

import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import AboutSection from './components/AboutSection/AboutSection';
import Footer from './components/Footer/Footer';
import SkillsSection from './components/SkillsSection/SkillsSection';

let tempStyle = {
  textAlign: 'center',
  color: 'white'
};

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div className="App-content bg-glass">
          <Header />
          <Hero />
          <h2 style={tempStyle}>I'm still working on the site. You can check out the repo <a href="https://github.com/deznorth/davidr.info/tree/dev" target="_blank" rel="noopener noreferrer">here</a></h2>
          <AboutSection />
          <SkillsSection />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
