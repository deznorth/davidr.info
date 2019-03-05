/*
 * @Author: David M. Rojas Gonzalez // davidr.info 
 * @Date: 2019-03-04 19:02:41 
 * @Last Modified by: David M. Rojas Gonzalez // davidr.info
 * @Last Modified time: 2019-03-04 22:59:14
 */
import React, { Component } from 'react';

import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-content">
          <Header />
          <Hero />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
