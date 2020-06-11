import React, { Component } from 'react';

class MainPage extends Component {
    render() {
        return (
            <div className='mainBox'>
                <div className='animationPiece'></div>
                <h1 className='mainPage' id='mainPage'>I Am Manny</h1>
                <h1 className='aboutPage' id='aboutPage'>About Me</h1>
                <h1 className='twitchPage' id='twitchPage'>Twitch</h1>
                <h1 className='socialPage' id='socialPage'>Socials</h1>
            </div>
        );
    }
}

export default MainPage;