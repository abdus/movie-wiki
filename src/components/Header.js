import React from 'react';
import './Header.css'


const Header = ({ searchChange, formSubmit }) => {

        return(
            <header>
                <div className="searchbox">
                    <form 
                        action="."
                        onSubmit={formSubmit}
                    >
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