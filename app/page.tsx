import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const HomePage = () => {
    return (
        <div>
            <Header />
            <Navigation />
            <main>
                <h1>Welcome to My Personal Website</h1>
                <section>
                    <h2>About Me</h2>
                    <p>Welcome to my personal website! Here you can find information about my background, skills, and projects.</p>
                </section>
                <section>
                    <h2>Featured Projects</h2>
                    <p>Check out some of my recent work:</p>
                    <ul>
                        <li><a href="/projects/project-1">Project 1</a></li>
                        <li><a href="/projects/project-2">Project 2</a></li>
                    </ul>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;