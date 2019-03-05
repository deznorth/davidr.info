/*
 * @Author: David M. Rojas Gonzalez // davidr.info 
 * @Date: 2019-03-04 20:48:25 
 * @Last Modified by: David M. Rojas Gonzalez // davidr.info
 * @Last Modified time: 2019-03-04 22:11:08
*/

import React from 'react';
import './SocialBar.scss';

const SocialBar = () => {
    return (
        <span className="socialBar">
            <ul>
                <a href="https://www.linkedin.com/in/davidrojas-dev/" className="social-link linkedin" rel="noopener noreferrer" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a>
                <a href="https://github.com/deznorth" className="social-link github" rel="noopener noreferrer" target="_blank"><i class="fab fa-github-square"></i> Github</a>
                <a href="https://codepen.io/david-rojas/" className="social-link codepen" rel="noopener noreferrer" target="_blank"><i class="fab fa-codepen"></i> Codepen</a>
                <a href="https://www.instagram.com/davidr.dev/" className="social-link instagram" rel="noopener noreferrer" target="_blank"><i class="fab fa-instagram" ></i> Instagram</a>
            </ul>
        </span>
    );
}

export default SocialBar;