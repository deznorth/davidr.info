/*
 * @Author: David M. Rojas Gonzalez // davidr.info  
* @Date: 2019-03-08 20:51:39  
 * @Last Modified by: David M. Rojas Gonzalez // davidr.info
 * @Last Modified time: 2019-03-08 21:40:58
*/

import React from 'react';
import './SkillsCategory.scss';

const SkillsCategory = (props) => {

    let highlightedClass = '';
    if(props.isHighlighted === true){
        highlightedClass = 'highlightedCategory bg-glass';
    }

    return (
        <div className={`skillsCategory ${highlightedClass}`}>
            <h2>{props.title || 'noTitleAssigned'}</h2>
            <ul className="skillsCategory-content">
                <div>hello, world!</div>
                <div>hello, world!</div>
                <div>hello, world!</div>
                <div>hello, world!</div>
            </ul>
        </div>
    );
}

export default SkillsCategory;