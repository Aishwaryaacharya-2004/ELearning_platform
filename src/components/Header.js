import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file

const Header = () => {
    return (
        <header className="header">
            <h1>E-Learning Platform for PCMB</h1>
            <nav>
                <ul className="navList">
                    <li className="navItem"><Link to="/" className="navLink">Home</Link></li>
                    <li className="navItem"><Link to="/courses" className="navLink">Courses</Link></li>
                    <li className="navItem"><Link to="/about" className="navLink">About Us</Link></li>
                    <li className="navItem"><Link to="/contact" className="navLink">Contact Support</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
