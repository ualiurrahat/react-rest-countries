import React from 'react';
// importing css file
// syntax: import './fileName.css'
import './Header.css'
const Header = () => {
    return (
        <div>
            <h1>Welcome to the Heading Part </h1>
            <nav>
                <a href="">Home</a>
                <a href="">About Us</a>
                <a href="">Shop</a>
            </nav>
        </div>
    );
};

export default Header;