import React from 'react';

const Header = () => {
    return (
        <header>
            <h1>Your Name's Personal Website</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/resume">Resume</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;