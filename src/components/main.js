import React, { Component } from 'react';
import anime from 'animejs'

class main extends Component {

    openingScreen() {
        anime({
            targets: '.test',
            width: '99%',
            direction: 'alternate',
            easing: 'spring',
            delay: 1000
        })
    }

    componentDidMount() {
        this.openingScreen()
    }
    
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <div className='test'>
                </div>
            </div>
        );
    }
}

export default main;