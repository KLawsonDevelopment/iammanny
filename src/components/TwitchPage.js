import React, { Component } from 'react';
import { TwitchEmbed, TwitchChat, TwitchClip, TwitchPlayer } from 'react-twitch-embed'

class TwitchPage extends Component {
    render() {
        return (
            <div>
                <TwitchEmbed
                    channel='IAmManny'
                    id='IAmManny'
                    theme='dark'
                    muted
                    onVideoPause={() => console.log(':(')}
                    height='65vh'
                    width='57vw'
                    className="twitchEmbed"
                />

                <a href='https://www.twitch.tv/iammanny' className='twitchPageIcon'>
                    <img src={require('./social-icons/TwitchGlitchBlackOps.PNG')} height='100px' width='100px' alt='TWITCH ICON' />
                </a>
            </div>
        );
    }
}

export default TwitchPage;