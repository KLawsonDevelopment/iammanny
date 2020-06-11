import React, { Component } from 'react';
import anime from 'animejs'

class navbar extends Component {

    testFunction() {
        anime({
            targets: '.animationPiece',
            width: [ '1', '100%'],
            direction: 'alternate',
            easing: 'easeInOutQuad',
            endDelay: 500
        })
        setTimeout(function () {
            var visible = document.getElementById('centerPage')
            visible.classList.add('showClass')
        }, 1000)
    }

    testFunction2() {
        anime({
            targets: '.animationPiece',
            width: [ '1', '100%'],
            direction: 'alternate',
            easing: 'easeInOutQuad',
            endDelay: 500
        })
        setTimeout(function () {
            var invisible = document.getElementById('centerPage')
            invisible.classList.remove('showClass')
        }, 1000)
    }

    render() {
        return (
            <div className='navBar'>
                <button className='mainLink' onClick={this.testFunction}>Main</button>
                <button className='aboutLink' onClick={this.testFunction2}>About Me</button>
                <button className='twitchLink'>Twitch</button>
                <button className='socialLink'>Social Media</button>
            </div>
        );
    }
}

export default navbar;