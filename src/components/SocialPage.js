import React, { Component } from 'react';

class SocialPage extends Component {
    render() {
        return (
            <>
                <a href='https://www.twitch.tv/iammanny'>
                    <img src={require('./social-icons/TwitchGlitchBlackOps.PNG')} height='100px' width='100px' alt='TWITCH ICON' />
                </a>

                <a href='https://www.twitter.com/IAmMannyTV'>
                    <img src={require('./social-icons/Twitter_Logo_WhiteOnImage.png')} height='100px' width='100px' alt='TWITTER ICON'/>
                </a>

                <a href='https://www.https://www.instagram.com/Iammannytv/'>
                    <img src={require('./social-icons/glyph-logo_May2016.png')} height='100px' width='100px' alt='INSTAGRAM ICON'/>
                </a>
            </>
        );
    }
}

export default SocialPage;