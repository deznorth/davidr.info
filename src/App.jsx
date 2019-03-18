/*
 * @Author: David M. Rojas Gonzalez // davidr.info 
 * @Date: 2019-03-04 19:02:41 
 * @Last Modified by: David M. Rojas Gonzalez // davidr.info
 * @Last Modified time: 2019-03-17 21:18:02
*/

import React, { Component } from 'react';

import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import AboutSection from './components/AboutSection/AboutSection';
import Footer from './components/Footer/Footer';
import SkillsSection from './components/SkillsSection/SkillsSection';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div className="App-content bg-glass">
          <Header />
          <Hero />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
