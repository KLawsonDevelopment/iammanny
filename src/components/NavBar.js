import React, { Component } from 'react';
import anime from 'animejs'

class navbar extends Component {

    openingWebsite () {
        setTimeout(function () {
            anime({
                targets: '.animationPiece',
                width: [ 0, '100%'],
                direction: 'alternate',
                easing: 'easeInOutQuad',
                endDelay:500
            })
        },750)
        setTimeout(function () {
            var visible = document.getElementById('mainPage')
            visible.classList.add('showClass')
        }, 2000)
    }

    componentDidMount () {
        this.openingWebsite()
    }

    render() {
        return (
            <div className='navBar'>
                <button className='mainLink'>Main</button>
                <button className='aboutLink'>About Me</button>
                <button className='twitchLink'>Twitch</button>
                <button className='socialLink'>Social Media</button>
            </div>
        );
    }
}

export default navbar;