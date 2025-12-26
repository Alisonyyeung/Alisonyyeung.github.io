import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import researchData from '../data/research.json';
import projectsData from '../data/projects.json';
import publicationsData from '../data/publications.json';

const HomePage = () => {
  return (
    <div className="page">
      <Header />
      <main className="page-body" style={{ position: 'relative', zIndex: 1 }}>
        <section className="section">
          <div className="section__header">
            <h1>About Me</h1>
            <p style={{ fontSize: '1.1rem', marginBottom: '20px', fontWeight: 500 }}>
              Hello! I'm Alison Yeung (Yeung Wun Lam).
            </p> <p style={{ marginTop: '16px', marginBottom: 0 }}>
              Beyond research, I love turning ideas into reality—whether it's developing AI tools, or crafting playful projects that solve everyday problems (and occasionally make life more fun ✨).
            </p>
          </div>
          
          <div style={{ marginTop: '32px' }}>
            <h2>Background</h2>
            <p>
              I am pursuing a <strong>Bachelor's degree in Computer Engineering</strong> at the <strong>Hong Kong University of Science and Technology (HKUST)</strong>. As a <strong>Student Researcher</strong> in the HKUST <strong>Undergraduate Research Opportunities Program (UROP)</strong>, I've applied my technical skills to real-world challenges in robotics and AI, bridging theory and practice.
            </p>
            <p style={{ marginTop: '16px', marginBottom: 0 }}>
              I'm passionate about pushing the boundaries of <strong>Embodied AI</strong>. My work focuses on <strong>Robotic Manipulation</strong>, <strong>Computer Vision & Deep Learning</strong>, <strong>LLM Applications</strong>, and <strong>Embedded Systems</strong>.
            </p>
          </div>

          <div style={{ marginTop: '48px' }}>
            <h2>Research</h2>
            <p className="muted" style={{ marginBottom: '24px' }}>
              Explore my research interests and publications.
            </p>
            <div className="scrollable-cards">
              {researchData.research.map((item) => (
                <Link key={item.id} href={item.link} className="scrollable-card">
                  {item.image && (
                    <div className="scrollable-card__image">
                      <Image 
                        src={item.image} 
                        alt={item.title}
                        width={280}
                        height={180}
                        sizes="(max-width: 768px) 280px, 280px"
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        loading="lazy"
                        quality={80}
                      />
                    </div>
                  )}
                  <div className="scrollable-card__content">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
                      {item.date && (
                        <span style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>{item.date}</span>
                      )}
                      {item.team_lead && (
                        <span className="team-lead-badge" style={{ fontSize: '0.75rem', padding: '4px 8px' }}>Team Lead</span>
                      )}
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '48px' }}>
            <h2>Projects</h2>
            <p className="muted" style={{ marginBottom: '24px' }}>
              Discover my portfolio of projects and applications.
            </p>
            <div className="scrollable-cards">
              {projectsData.projects.map((project) => (
                <Link key={project.id} href={project.link} className="scrollable-card">
                  {project.image && (
                    <div className="scrollable-card__image">
                      <Image 
                        src={project.image} 
                        alt={project.title}
                        width={280}
                        height={180}
                        sizes="(max-width: 768px) 280px, 280px"
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        loading="lazy"
                        quality={80}
                      />
                    </div>
                  )}
                  <div className="scrollable-card__content">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
                      {(project as any).date && (
                        <span style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>{(project as any).date}</span>
                      )}
                      {(project as any).team_lead && (
                        <span className="team-lead-badge" style={{ fontSize: '0.75rem', padding: '4px 8px' }}>Team Lead</span>
                      )}
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '48px' }}>
            <h2>Publications</h2>
            <p className="muted" style={{ marginBottom: '24px' }}>
              Research contributions and published work.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {publicationsData.publications.map((pub) => {
                const formatAuthors = (authors: string[]) => {
                  return authors.map((author, index) => {
                    const isAlison = author.includes('Alison') || author.includes('Yeung');
                    return (
                      <React.Fragment key={index}>
                        {isAlison ? (
                          <strong style={{ color: 'var(--primary)' }}>{author}</strong>
                        ) : (
                          author
                        )}
                        {index < authors.length - 1 && ', '}
                      </React.Fragment>
                    );
                  });
                };

                return (
                  <article 
                    key={pub.id} 
                    className="card" 
                    style={{ 
                      padding: '24px'
                    }}
                  >
                    <h3 style={{ margin: '0 0 12px', fontSize: '1.1rem', lineHeight: '1.4' }}>
                      {pub.title}
                    </h3>
                    <div style={{ marginBottom: '12px', color: 'var(--text)', fontSize: '0.95rem' }}>
                      {formatAuthors(pub.authors)}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '12px' }}>
                      <span style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
                        <strong>{pub.journal}</strong>
                      </span>
                      <span style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
                        {pub.date}
                      </span>
                      {pub.year && (
                        <span className="pill" style={{ fontSize: '0.8rem' }}>
                          {pub.year}
                        </span>
                      )}
                    </div>
                    {pub.link && (
                      <div>
                        <a 
                          href={pub.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-link"
                          style={{ fontSize: '0.9rem' }}
                        >
                          View Publication →
                        </a>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;