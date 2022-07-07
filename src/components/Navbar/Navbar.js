import React from 'react';
import './Navbar.css';

export function Navbar() {
    return (
        <nav className='nav'>
            <div className='nav--logo'>
                <img src='./assets/logo.png' alt='Logo' />
                <span>Meme Generator</span>
            </div>
            <div className='nav-description'>
                <span>React Course - Project 3</span>
            </div>
        </nav>
    );
}
