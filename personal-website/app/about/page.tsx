import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';

const AboutPage = () => {
    return (
        <div>
            <Header />
            <Navigation />
            <main>
                <h1>About Me</h1>
                <section>
                    <h2>Background</h2>
                    <p>Provide a brief background about yourself, including your education and professional experience.</p>
                </section>
                <section>
                    <h2>Skills</h2>
                    <p>List your skills, technologies you are proficient in, and any relevant certifications.</p>
                </section>
                <section>
                    <h2>Interests</h2>
                    <p>Share your interests, hobbies, or any personal projects you are passionate about.</p>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default AboutPage;