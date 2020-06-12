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
                />
            </div>
        );
    }
}

export default TwitchPage;