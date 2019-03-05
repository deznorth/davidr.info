/*
 * @Author: David M. Rojas Gonzalez // davidr.info 
 * @Date: 2019-03-04 19:57:01 
 * @Last Modified by: David M. Rojas Gonzalez // davidr.info
 * @Last Modified time: 2019-03-04 20:50:29
*/

import React from 'react';
import './Hero.scss';
import SocialBar from '../SocialBar/SocialBar';

const Hero = () => {
    return (
        <div className="hero-component">
            <div className="hero-title">
                <p>{'{'}</p>
                <h1>
                    <span>Hello, World!</span>
                    <span>My name is David Rojas</span>
                    <span>I'm a Front-end Web Developer</span>
                </h1>
                <p>{'}'}</p>
            </div>
            <SocialBar />
        </div>
    );
}

export default Hero;