/*
 * @Author: David M. Rojas Gonzalez // davidr.info  
* @Date: 2019-03-08 20:35:56  
 * @Last Modified by: David M. Rojas Gonzalez // davidr.info
 * @Last Modified time: 2019-03-08 21:44:52
*/

import React, { Component } from 'react';
import './SkillsSection.scss';
import SkillsCategory from '../SkillsCategory/SkillsCategory';

class SkillsSection extends Component {
    state = {
        skills: [
            {
                title: 'Main Skills',
                isHighlighted: true,
                skills: [
                    {
                        name: 'Responsive Web Development',
                        proficiency: 8
                    },
                    {
                        name: 'Javascript',
                        proficiency: 6
                    },
                    {
                        name: 'React & React-Router',
                        proficiency: 5
                    },
                    {
                        name: 'CSS & SASS/SCSS',
                        proficiency: 7
                    },
                    {
                        name: 'REST APIs',
                        proficiency: 6
                    }
                ]
            },
            {
                title: 'Other Skills',
                isHighlighted: false,
                skills: [
                    {
                        name: 'Node.js'
                    },
                    {
                        name: 'Express.js'
                    },
                    {
                        name: 'MongoDB'
                    }
                ]
            },
            {
                title: 'Tools',
                isHighlighted: false,
                skills: [
                    {
                        name: 'Chrome Developer Tools'
                    },
                    {
                        name: 'Git'
                    },
                    {
                        name: 'Slack'
                    },
                    {
                        name: 'Trello'
                    },
                    {
                        name: 'Toggl'
                    }
                ]
            },
            {
                title: 'Software',
                isHighlighted: false,
                skills: [
                    {
                        name: 'Visual Studio Code'
                    },
                    {
                        name: 'Adobe XD'
                    },
                    {
                        name: 'Adobe Illustrator'
                    },
                    {
                        name: 'Adobe Photoshop'
                    }
                ]
            }
        ]
    }

    render(){
        return (
            <div className="skillsSection bg-glass">
                <SkillsCategory {...this.state.skills[0]} />
                <SkillsCategory {...this.state.skills[1]} />
                <SkillsCategory {...this.state.skills[2]} />
                <SkillsCategory {...this.state.skills[3]} />
            </div>
        );
    }
}

export default SkillsSection;