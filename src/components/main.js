import React, { Component } from 'react';
import Anime from 'react-anime'

class main extends Component {
    render() {
        return (
                <Anime
                translateX={[500]}
                delay={[1000]}
                easing={['easeInOutQuad']}
                direction={['reverse']}
                loop={[3]}>
                    <div className='test'></div>
                </Anime>
        );
    }
}

export default main;