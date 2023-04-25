import React from 'react';

function Navbar(props) {
    return (
        <div className='navbar'>
            <div>
                <h2>Koding Made Simple</h2>
            </div>
            <div className='anchar'>
                <a href="#">Bootstrap</a>
                <a href="#">Theme</a>
                <a href="#">Blog</a>
            </div>
            
        </div>
    );
}

export default Navbar;