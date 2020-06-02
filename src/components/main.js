import React, { Component } from 'react';
import Anime from 'react-anime'

class main extends Component {

    render() {
        return (
            <div className='test'>
                <Anime
                easing='easeOutElastic'
                translateX={250}></Anime>
            </div>
        )
    }
}

export default main;