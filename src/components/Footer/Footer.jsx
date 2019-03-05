/*
 * @Author: David M. Rojas Gonzalez // davidr.info 
 * @Date: 2019-03-04 22:56:43 
 * @Last Modified by: David M. Rojas Gonzalez // davidr.info
 * @Last Modified time: 2019-03-04 23:21:18
*/

import React from 'react';
import './Footer.scss';
import SocialBar from '../SocialBar/SocialBar';


const Footer = () => {
    return (
        <div className="Footer">
            <SocialBar resumeBtn={true}/>
            <p>David Rojas <span><i class="far fa-copyright"></i>2019</span></p>
        </div>
    );
}

export default Footer;