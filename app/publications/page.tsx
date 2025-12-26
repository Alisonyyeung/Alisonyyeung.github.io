'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import publicationsData from '../../data/publications.json';

const PublicationsPage = () => {
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
    <div className="page">
      <Header />
      <main className="page-body">
        <section className="section">
          <div className="section__header">
            <h1>Publications</h1>
            <p className="muted">Research contributions and published work in computer vision, deep learning, and related fields.</p>
          </div>

          <div style={{ marginTop: '48px' }}>
            {publicationsData.publications.map((pub) => (
              <article 
                key={pub.id} 
                className="card" 
                style={{ 
                  marginBottom: '32px',
                  padding: '24px'
                }}
              >
                <h3 style={{ margin: '0 0 12px', fontSize: '1.2rem', lineHeight: '1.4' }}>
                  {pub.title}
                </h3>
                <div style={{ marginBottom: '12px', color: 'var(--text)', fontSize: '0.95rem' }}>
                  {formatAuthors(pub.authors)}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
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
                {(pub as any).doi && (
                  <div style={{ marginTop: '12px' }}>
                    <a 
                      href={(pub as any).doi} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-link"
                      style={{ fontSize: '0.9rem' }}
                    >
                      View Publication →
                    </a>
                  </div>
                )}
                {pub.link && (
                  <div style={{ marginTop: '12px' }}>
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
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PublicationsPage;

