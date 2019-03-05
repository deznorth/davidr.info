/*
 * @Author: David M. Rojas Gonzalez // davidr.info 
 * @Date: 2019-03-04 19:02:41 
 * @Last Modified by: David M. Rojas Gonzalez // davidr.info
 * @Last Modified time: 2019-03-04 19:59:11
 */
import React, { Component } from 'react';

import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
      </div>
    );
  }
}

export default App;
