import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ResumePage = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>Your Name</h1>
                <section>
                    <h2>Professional Experience</h2>
                    <ul>
                        <li>
                            <strong>Job Title</strong> - Company Name (Year - Year)
                            <p>Description of your responsibilities and achievements.</p>
                        </li>
                        <li>
                            <strong>Job Title</strong> - Company Name (Year - Year)
                            <p>Description of your responsibilities and achievements.</p>
                        </li>
                    </ul>
                </section>
                <section>
                    <h2>Education</h2>
                    <ul>
                        <li>
                            <strong>Degree</strong> - Institution Name (Year)
                            <p>Relevant coursework or honors.</p>
                        </li>
                    </ul>
                </section>
                <section>
                    <h2>Skills</h2>
                    <ul>
                        <li>Skill 1</li>
                        <li>Skill 2</li>
                        <li>Skill 3</li>
                    </ul>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default ResumePage;