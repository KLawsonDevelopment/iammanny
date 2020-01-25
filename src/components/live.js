import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class live extends Component {
    render() {
        return (
            <div id='livePage'>
                <div className='liveParallax'>
                    <div className='liveText'>
                        <ReactPlayer
                        url='https://www.twitch.tv/iammanny'
                        controls
                        height='600px'
                        width='1040px'
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default live;