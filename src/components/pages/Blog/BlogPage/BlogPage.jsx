import React, { Component } from 'react';
import './BlogPage.scss';
//Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//Components
import BlogHeader from '../components/BlogHeader/BlogHeader';
import BlogBody from '../components/BlogBody/BlogBody';
import BlogArchive from '../components/BlogArchive/BlogArchive';

class BlogPage extends Component {
    render(){

        const dummyContent = [
            {
                date: {
                    year: '2019',
                    month: 'January'
                },
                items: [
                    {
                        id: 'uaohsdjhawodi',
                        img: '',
                        imgAlt: 'some text',
                        title: 'Blog Post Title',
                        shortText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus pulvinar leo, a viverra dolor lobortis quis. Cras eu scelerisque justo. Nam molestie a dui at eleifend. Donec imperdiet, ligula ac tincidunt pellentesque, nulla nunc consequat erat, ac condimentum diam turpis id nunc. Morbi aliquet nibh in tincidunt commodo. Vivamus imperdiet quam sem, nec laoreet dolor blandit ut. Donec suscipit consequat urna ac cursus.',
                        datePosted: '01/01/2019',
                        author: 'David Rojas'
                    },
                    {
                        id: 'uaohasafaqwjhawodi',
                        img: '',
                        imgAlt: 'some text',
                        title: 'Blog Post Title',
                        shortText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus pulvinar leo, a viverra dolor lobortis quis. Cras eu scelerisque justo. Nam molestie a dui at eleifend. Donec imperdiet, ligula ac tincidunt pellentesque, nulla nunc consequat erat, ac condimentum diam turpis id nunc. Morbi aliquet nibh in tincidunt commodo. Vivamus imperdiet quam sem, nec laoreet dolor blandit ut. Donec suscipit consequat urna ac cursus.',
                        datePosted: '01/01/2019',
                        author: 'David Rojas'
                    },
                    {
                        id: 'uaoqweafaegthsdjhawodi',
                        img: '',
                        imgAlt: 'some text',
                        title: 'Blog Post Title',
                        shortText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus pulvinar leo, a viverra dolor lobortis quis. Cras eu scelerisque justo. Nam molestie a dui at eleifend. Donec imperdiet, ligula ac tincidunt pellentesque, nulla nunc consequat erat, ac condimentum diam turpis id nunc. Morbi aliquet nibh in tincidunt commodo. Vivamus imperdiet quam sem, nec laoreet dolor blandit ut. Donec suscipit consequat urna ac cursus.',
                        datePosted: '01/01/2019',
                        author: 'David Rojas'
                    }
                ]
            },
            {
                date: {
                    year: '2018',
                    month: 'December'
                },
                items: [
                    {
                        id: 'uaohsdjhae5udfhawodi',
                        img: '',
                        imgAlt: 'some text',
                        title: 'Blog Post Title',
                        shortText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus pulvinar leo, a viverra dolor lobortis quis. Cras eu scelerisque justo. Nam molestie a dui at eleifend. Donec imperdiet, ligula ac tincidunt pellentesque, nulla nunc consequat erat, ac condimentum diam turpis id nunc. Morbi aliquet nibh in tincidunt commodo. Vivamus imperdiet quam sem, nec laoreet dolor blandit ut. Donec suscipit consequat urna ac cursus.',
                        datePosted: '12/01/2018',
                        author: 'David Rojas'
                    },
                    {
                        id: 'uaohsa34hsdfhdjhawodi',
                        img: '',
                        imgAlt: 'some text',
                        title: 'Blog Post Title',
                        shortText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus pulvinar leo, a viverra dolor lobortis quis. Cras eu scelerisque justo. Nam molestie a dui at eleifend. Donec imperdiet, ligula ac tincidunt pellentesque, nulla nunc consequat erat, ac condimentum diam turpis id nunc. Morbi aliquet nibh in tincidunt commodo. Vivamus imperdiet quam sem, nec laoreet dolor blandit ut. Donec suscipit consequat urna ac cursus.',
                        datePosted: '12/01/2018',
                        author: 'David Rojas'
                    },
                    {
                        id: 'uaohsaw354hsdfty54djhawodi',
                        img: '',
                        imgAlt: 'some text',
                        title: 'Blog Post Title',
                        shortText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus pulvinar leo, a viverra dolor lobortis quis. Cras eu scelerisque justo. Nam molestie a dui at eleifend. Donec imperdiet, ligula ac tincidunt pellentesque, nulla nunc consequat erat, ac condimentum diam turpis id nunc. Morbi aliquet nibh in tincidunt commodo. Vivamus imperdiet quam sem, nec laoreet dolor blandit ut. Donec suscipit consequat urna ac cursus.',
                        datePosted: '12/01/2018',
                        author: 'David Rojas'
                    }
                ]
            },
        ]

        let bodyItems = [];
        let archiveItems = [];

        dummyContent.forEach(group => {
            bodyItems = bodyItems.concat(group.items);
            archiveItems = archiveItems.concat(group.date);
        })

        return (
            <div id="BlogPage">
                <BlogHeader />
                <div className="blogPageContent">
                    <BlogBody items={bodyItems}/>
                    <BlogArchive items={archiveItems}/>
                </div>
            </div>
        );
    }
}

BlogPage.propTypes = {
    
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(BlogPage);