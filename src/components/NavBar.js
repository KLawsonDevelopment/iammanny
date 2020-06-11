import React, { Component } from 'react';
import anime from 'animejs'

class navbar extends Component {

    testFunction () {
        anime ({
            targets: '.animationPiece',
            width: '100%',
            direction: 'alternate'
        })
    }

    render() {
        return (
            <div className='navBar'>
                <button className='mainLink' onClick={this.testFunction}>Main</button>
                <button className='aboutLink' >About Me</button>
                <button className='twitchLink'>Twitch</button>
                <button className='socialLink'>Social Media</button>
            </div>
        );
    }
}

export default navbar;