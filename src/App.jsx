/*
 * @Author: David M. Rojas Gonzalez // davidr.info 
 * @Date: 2019-03-04 19:02:41 
 * @Last Modified by: David M. Rojas Gonzalez // davidr.info
 * @Last Modified time: 2019-03-17 21:18:02
*/

import React, { Component } from 'react';
import './App.scss';
import Header from './components/containers/Header/Header';
import Footer from './components/containers/Footer/Footer';

import HomePage from './components/pages/Home/HomePage';


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div className="App-content bg-glass">
          <Header />
          <HomePage />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
