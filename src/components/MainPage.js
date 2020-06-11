import React, { Component } from 'react';
import NamePage from './NamePage';
import TwitchPage from './TwitchPage';

class MainPage extends Component {
    render() {
        return (
            <div className='mainBox'>
                <div className='animationPiece'></div>
                <div className='mainPage' id='mainPage'>
                    <NamePage></NamePage>
                </div>
                <h1 className='aboutPage' id='aboutPage'>About Me</h1>
                <div className='twitchPage' id='twitchPage'>
                    <TwitchPage></TwitchPage>
                </div>
                <h1 className='socialPage' id='socialPage'>Socials</h1>
            </div>
        );
    }
}

export default MainPage;