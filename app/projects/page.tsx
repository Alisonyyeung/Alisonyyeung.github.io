'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import projectsData from '../../data/projects.json';

const ProjectsPage = () => {
  return (
    <div className="page">
      <Header />
      <main className="page-body">
        <section className="section">
          <div className="section__header">
            <h1>Projects</h1>
            <p className="muted">A collection of my work, showcasing design, development, and problem-solving.</p>
          </div>

          {/* Project Cards Grid */}
          <div style={{ marginTop: '48px' }}>
            <h2>Projects</h2>
            <p className="muted" style={{ marginBottom: '24px' }}>
              Click on any project to view detailed information.
            </p>
            <div className="card-grid" style={{ marginTop: '16px' }}>
              {projectsData.projects.map((item) => (
                <Link 
                  key={item.id} 
                  href={item.link}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <article className="card" style={{ cursor: 'pointer', height: '100%' }}>
                    {item.image && (
                      <div style={{ marginBottom: '16px', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
                        <Image 
                          src={item.image} 
                          alt={item.title}
                          width={400}
                          height={200}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                          style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                          loading="lazy"
                          quality={80}
                        />
                      </div>
                    )}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
                      {(item as any).date && (
                        <span style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>{(item as any).date}</span>
                      )}
                      {(item as any).team_lead && (
                        <span className="team-lead-badge" style={{ fontSize: '0.75rem', padding: '4px 8px' }}>Team Lead</span>
                      )}
                    </div>
                    <h3 style={{ margin: '0 0 12px' }}>{item.title}</h3>
                    <p style={{ margin: '0 0 12px', color: 'var(--muted)', fontSize: '0.9rem' }}>
                      {item.description}
                    </p>
                    {item.technologies && item.technologies.length > 0 && (
                      <div className="pill-group" style={{ marginTop: '12px' }}>
                        {item.technologies.slice(0, 3).map((tech: string, index: number) => (
                          <span className="pill" key={index} style={{ fontSize: '0.8rem' }}>{tech}</span>
                        ))}
                        {item.technologies.length > 3 && (
                          <span className="pill" style={{ fontSize: '0.8rem' }}>+{item.technologies.length - 3} more</span>
                        )}
                      </div>
                    )}
                    <div style={{ marginTop: '16px' }}>
                      <span className="text-link">View details →</span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
