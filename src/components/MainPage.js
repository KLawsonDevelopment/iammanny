import React, { Component } from 'react';

class MainPage extends Component {
    render() {
        return (
            <div className='mainBox'>
                <div className='animationPiece'></div>
                <h1 className='mainPage' id='mainPage'>I Am Manny</h1>
                <div className='closingPiece'></div>
            </div>
        );
    }
}

export default MainPage;