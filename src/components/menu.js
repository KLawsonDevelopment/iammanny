import React, { Component } from 'react';

class menu extends Component {

    menuDropdown = () => {
        document.getElementById('myMenuDropdown').classList.toggle('show')
    }

    render() {
        return (
            <div className='menuDiv'>
                <div className='dropdown' onMouseOver={this.menuDropdown} onMouseOut={this.menuDropdown}>
                    <button className='menu' >
                    </button>
                    <div className='menuDropdown' id='myMenuDropdown'>
                        <a href='#mainPage'>Main</a>
                        <a href='#aboutPage'>About Me</a>
                        <a href='#livePage'>Live</a>
                        <a href='#socialsPage'>Socials</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default menu;