/*
 * @Author: David M. Rojas Gonzalez // davidr.info 
 * @Date: 2019-03-04 19:12:01 
 * @Last Modified by: David M. Rojas Gonzalez // davidr.info
 * @Last Modified time: 2019-03-04 19:33:24
*/
import React from 'react';
import logo from '../../logo.svg';
import resume from '../../David_Rojas_Resume.pdf';
import './Header.scss';

const Header = () => {
    return (
        <header className="App-header">
            <span className="app-brand">
                <img src={logo} className="app-logo" alt="logo"/>
                <span>
                    <p className="header-brand-name">David Rojas</p>
                    <p className="header-brand-title">Front-end Web Developer</p>
                </span>
            </span>
            <span className="app-nav">
                <ul>
                <a href="#" className="header-link">about</a>
                <a href="#" className="header-link">skills</a>
                <a href="#" className="header-link">projects</a>
                </ul>
                <a href={resume} download="David_Rojas_Resume.pdf" className="download-resume">download resume</a>
            </span>
        </header>
    );
}

export default Header;