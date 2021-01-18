import React, { Component } from 'react';
import '../styles/navbar.css';

class NavBar extends Component {
    render() {
        return (
            <nav className='nl-navigation__container'>
                <div className='nl-navigation__item'>LOGO/Name</div>
                <div className='nl-navigation__item'>search</div>
                <div className='nl-navigation__item'>Options</div>
            </nav>
        )
    }
}

export default NavBar;