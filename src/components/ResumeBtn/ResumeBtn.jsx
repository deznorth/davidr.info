/*
 * @Author: David M. Rojas Gonzalez // deznorth.com 
 * @Date: 2019-03-05 14:02:24 
 * @Last Modified by: David M. Rojas Gonzalez // deznorth.com
 * @Last Modified time: 2019-03-05 14:06:46
*/

import React from 'react';
import './ResumeBtn.scss';
import resume from '../../David_Rojas_Resume.pdf';

const ResumeBtn = () => {
    return (
        <a href={resume} download="David_Rojas_Resume.pdf" className="download-resume">download resume</a>
    );
}

export default ResumeBtn;