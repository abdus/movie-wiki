import React from 'react';
import './Header.css'


const Header = ({ searchChange }) => {

        return(
            <header>
                <h1>Movie Wiki</h1>
                <div className="searchbox">
                    <form action=".">
                        <input 
                            type="search" 
                            autoFocus 
                            placeholder="Type Something..."
                            onChange={searchChange}
                        />
                        <button>SEARCH</button>
                    </form>
                </div>
            </header>
        )
    
}


export default Header;