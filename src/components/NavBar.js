import React, { Component } from 'react';
import anime from 'animejs'

class navbar extends Component {

    openingWebsite = () => {
        setTimeout(function () {
            anime({
                targets: '.animationPiece',
                width: [0, '100%'],
                direction: 'alternate',
                easing: 'easeInOutQuad',
                endDelay: 500
            })
        }, 750)
        setTimeout(function () {
            var visible = document.getElementById('mainPage')
            visible.classList.add('showClass')
        }, 2000)
    }

    componentDidMount() {
        this.openingWebsite()
    }



    showMain = () => {
        anime({
            targets: '.animationPiece',
            width: [0, '100%'],
            direction: 'alternate',
            easing: 'easeInOutQuad',
            endDelay: 500
        })
        setTimeout(function () {
            var main = document.getElementById('mainPage');
            var about = document.getElementById('aboutPage');
            var twitch = document.getElementById('twitchPage');
            var social = document.getElementById('socialPage');
            main.classList.remove('showClass');
            about.classList.remove('showClass');
            twitch.classList.remove('showClass');
            social.classList.remove('showClass');
            var visible = document.getElementById('mainPage')
            visible.classList.add('showClass')
        }, 1000)
    }

    showAbout = () => {
        anime({
            targets: '.animationPiece',
            width: [0, '100%'],
            direction: 'alternate',
            easing: 'easeInOutQuad',
            endDelay: 500
        })
        setTimeout(function () {
            var main = document.getElementById('mainPage');
            var about = document.getElementById('aboutPage');
            var twitch = document.getElementById('twitchPage');
            var social = document.getElementById('socialPage');
            main.classList.remove('showClass');
            about.classList.remove('showClass');
            twitch.classList.remove('showClass');
            social.classList.remove('showClass');
            var visible = document.getElementById('aboutPage')
            visible.classList.add('showClass')
        }, 1000)
    }

    showTwitch = () => {
        anime({
            targets: '.animationPiece',
            width: [0, '100%'],
            direction: 'alternate',
            easing: 'easeInOutQuad',
            endDelay: 500
        })
        setTimeout(function () {
            var main = document.getElementById('mainPage');
            var about = document.getElementById('aboutPage');
            var twitch = document.getElementById('twitchPage');
            var social = document.getElementById('socialPage');
            main.classList.remove('showClass');
            about.classList.remove('showClass');
            twitch.classList.remove('showClass');
            social.classList.remove('showClass');
            var visible = document.getElementById('twitchPage')
            visible.classList.add('showClass')
        }, 1000)
    }

    showSocial = () => {
        anime({
            targets: '.animationPiece',
            width: [0, '100%'],
            direction: 'alternate',
            easing: 'easeInOutQuad',
            endDelay: 500
        })
        setTimeout(function () {
            var main = document.getElementById('mainPage');
            var about = document.getElementById('aboutPage');
            var twitch = document.getElementById('twitchPage');
            var social = document.getElementById('socialPage');
            main.classList.remove('showClass');
            about.classList.remove('showClass');
            twitch.classList.remove('showClass');
            social.classList.remove('showClass');
            var visible = document.getElementById('socialPage')
            visible.classList.add('showClass')
        }, 1000)
    }

    mainClick = () => {
        this.showMain()
    }

    aboutClick = () => {
        this.showAbout()
    }

    twitchClick = () => {
        this.showTwitch()
    }

    socialClick = () => {
        this.showSocial()
    }

    render() {
        return (
            <div className='navBar'>
                <button className='mainLink' onClick={this.mainClick}>Main</button>
                <button className='aboutLink' onClick={this.aboutClick}>About Me</button>
                <button className='twitchLink' onClick={this.twitchClick}>Twitch</button>
                <button className='socialLink' onClick={this.socialClick}>Social Media</button>
            </div>
        );
    }
}

export default navbar;