import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ResumePage = () => {
  return (
    <div className="page">
      <Header />
      <main className="page-body">
        <section className="section">
          <div className="section__header">
            <h1>Curriculum Vitae</h1>
            <p className="muted">A comprehensive overview of my education, experience, and achievements.</p>
          </div>
          
          <div style={{ marginTop: '32px' }}>
            <h2>Professional Experience</h2>
            
            <div className="card" style={{ marginTop: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '12px' }}>
                <div>
                  <h3 style={{ margin: '0 0 4px' }}>Job Title</h3>
                  <p className="muted" style={{ margin: 0 }}>Company Name</p>
                </div>
                <span className="pill">2022 - Present</span>
              </div>
              <ul style={{ margin: '12px 0 0', paddingLeft: '20px' }}>
                <li>Key responsibility or achievement</li>
                <li>Another significant contribution</li>
                <li>Notable project or outcome</li>
              </ul>
            </div>

            <div className="card" style={{ marginTop: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '12px' }}>
                <div>
                  <h3 style={{ margin: '0 0 4px' }}>Previous Job Title</h3>
                  <p className="muted" style={{ margin: 0 }}>Previous Company</p>
                </div>
                <span className="pill">2020 - 2022</span>
              </div>
              <ul style={{ margin: '12px 0 0', paddingLeft: '20px' }}>
                <li>Key responsibility or achievement</li>
                <li>Another significant contribution</li>
              </ul>
            </div>
          </div>

          <div style={{ marginTop: '32px' }}>
            <h2>Education</h2>
            
            <div className="card" style={{ marginTop: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '12px' }}>
                <div>
                  <h3 style={{ margin: '0 0 4px' }}>Degree Name</h3>
                  <p className="muted" style={{ margin: 0 }}>Institution Name</p>
                </div>
                <span className="pill">Year</span>
              </div>
              <p style={{ margin: '12px 0 0' }}>
                Relevant coursework, honors, thesis topic, or other notable achievements.
              </p>
            </div>

            <div className="card" style={{ marginTop: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '12px' }}>
                <div>
                  <h3 style={{ margin: '0 0 4px' }}>Previous Degree</h3>
                  <p className="muted" style={{ margin: 0 }}>Previous Institution</p>
                </div>
                <span className="pill">Year</span>
              </div>
              <p style={{ margin: '12px 0 0' }}>
                Relevant coursework, honors, or achievements.
              </p>
            </div>
          </div>

          <div style={{ marginTop: '32px' }}>
            <h2>Skills</h2>
            <div style={{ marginTop: '16px' }}>
              <h3 style={{ marginBottom: '12px' }}>Technical Skills</h3>
              <div className="pill-group">
                {['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4', 'Skill 5'].map(skill => (
                  <span className="pill" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
            <div style={{ marginTop: '24px' }}>
              <h3 style={{ marginBottom: '12px' }}>Soft Skills</h3>
              <div className="pill-group">
                {['Communication', 'Leadership', 'Problem Solving', 'Teamwork'].map(skill => (
                  <span className="pill" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </div>

          <div style={{ marginTop: '32px' }}>
            <h2>Certifications & Awards</h2>
            <div className="card" style={{ marginTop: '16px' }}>
              <h3 style={{ margin: '0 0 4px' }}>Certification or Award Name</h3>
              <p className="muted" style={{ margin: 0 }}>Issuing Organization • Year</p>
            </div>
          </div>

          <div style={{ marginTop: '32px', textAlign: 'center' }}>
            <a href="#" className="button button--primary">Download PDF</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ResumePage;
