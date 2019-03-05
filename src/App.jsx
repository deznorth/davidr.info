/*
 * @Author: David M. Rojas Gonzalez // davidr.info 
 * @Date: 2019-03-04 19:02:41 
 * @Last Modified by: David M. Rojas Gonzalez // davidr.info
 * @Last Modified time: 2019-03-05 01:47:29
*/

import React, { Component } from 'react';

import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';

let tempStyle = {
  textAlign: 'center'
};

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div className="App-content">
          <Header />
          <Hero />
          <h2 style={tempStyle}>I'm still working on the site. You can check out the repo <a href="https://github.com/deznorth/davidr.info/tree/dev" target="_blank" rel="noopener noreferrer">here</a></h2>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
