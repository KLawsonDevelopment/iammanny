import React, { Component } from 'react';
import anime from 'animejs'

class navbar extends Component {

    openingWebsite = () => {
        var currentButton = document.getElementById('mainLink')
        currentButton.classList.add('usedButton')
        currentButton.disabled=true;
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
        var mainButton = document.getElementById('mainLink')
        mainButton.classList.add('usedButton')
        mainButton.disabled=true;
        var aboutButton = document.getElementById('aboutLink')
        aboutButton.classList.remove('usedButton')
        aboutButton.disabled=false;
        var twitchButton = document.getElementById('twitchLink')
        twitchButton.classList.remove('usedButton')
        twitchButton.disabled=false;
        var socialButton = document.getElementById('socialLink')
        socialButton.classList.remove('usedButton')
        socialButton.disabled=false;
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
        var mainButton = document.getElementById('mainLink')
        mainButton.classList.remove('usedButton')
        mainButton.disabled=false;
        var aboutButton = document.getElementById('aboutLink')
        aboutButton.classList.add('usedButton')
        aboutButton.disabled=true;
        var twitchButton = document.getElementById('twitchLink')
        twitchButton.classList.remove('usedButton')
        twitchButton.disabled=false;
        var socialButton = document.getElementById('socialLink')
        socialButton.classList.remove('usedButton')
        socialButton.disabled=false;
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
        var mainButton = document.getElementById('mainLink')
        mainButton.classList.remove('usedButton')
        mainButton.disabled=false;
        var aboutButton = document.getElementById('aboutLink')
        aboutButton.classList.remove('usedButton')
        aboutButton.disabled=false;
        var twitchButton = document.getElementById('twitchLink')
        twitchButton.classList.add('usedButton')
        twitchButton.disabled=true;
        var socialButton = document.getElementById('socialLink')
        socialButton.classList.remove('usedButton')
        socialButton.disabled=false;
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
        var mainButton = document.getElementById('mainLink')
        mainButton.classList.remove('usedButton')
        mainButton.disabled=false;
        var aboutButton = document.getElementById('aboutLink')
        aboutButton.classList.remove('usedButton')
        aboutButton.disabled=false;
        var twitchButton = document.getElementById('twitchLink')
        twitchButton.classList.remove('usedButton')
        twitchButton.disabled=false;
        var socialButton = document.getElementById('socialLink')
        socialButton.classList.add('usedButton')
        socialButton.disabled=true;
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
                <button className='mainLink' id='mainLink' onClick={this.mainClick}>Main</button>
                <button className='aboutLink' id='aboutLink' onClick={this.aboutClick}>About Me</button>
                <button className='twitchLink' id='twitchLink' onClick={this.twitchClick}>Twitch</button>
                <button className='socialLink' id='socialLink' onClick={this.socialClick}>Social Media</button>
            </div>
        );
    }
}

export default navbar;