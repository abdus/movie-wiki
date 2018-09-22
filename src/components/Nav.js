import React from 'react';
import './Nav.css';
import logo from '../logo.png';

const Nav = () => {
    return(
        <nav id="nav">
            <h1><a href="/movie-wiki">Movie Wiki</a></h1>
            <div className="nav__links">
                <a href="/movie-wiki/about">ABOUT</a>
            </div>
        </nav>
    )
}

export default Nav;