import React, { Component } from 'react';

class navbar extends Component {
    render() {
        return (
            <div className='navBar'>
                <a href='#' className='mainLink'>Main</a>
                <a href='#' className='aboutLink'>About Me</a>
                <a href='#' className='twitchLink'>Twitch</a>
                <a href='#' className='socialLink'>Social Media</a>
            </div>
        );
    }
}

export default navbar;