import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import WorldMap from '../../components/WorldMap';

const PersonalLifePage = () => {
  return (
    <div className="page">
      <Header />
      <main className="page-body">
        <section className="section">
          <div className="section__header">
            <h1>Personal Life</h1>
            <p className="muted">A glimpse into my life beyond work and research.</p>
          </div>
          
          <div style={{ marginTop: '48px' }}>
            <h2>Personal Interests</h2>
            <p style={{ marginTop: '16px', lineHeight: '1.8' }}>
              I stay active through <strong>running</strong> and regular <strong>gym workouts</strong>. 
              I love <strong>exploring different places</strong> and experiencing new cultures. 
              In my free time, I enjoy <strong>drawing</strong> and <strong>reading books</strong>.
            </p>
          </div>

          <div style={{ marginTop: '48px' }}>
            <h2>Travel & Experiences</h2>
            <WorldMap />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PersonalLifePage;

