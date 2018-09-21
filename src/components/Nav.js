import React from 'react';
import './Nav.css';

const Nav = () => {
    return(
        <nav id="nav">
            <img src="http://www.ffif.fr/wp-content/uploads/2018/01/short-film-icon.png" alt=""/>
            <div className="nav__links">
                <a href="">ABOUT</a>
                <a href="">CONTRIBUTE</a>
            </div>
        </nav>
    )
}

export default Nav;