'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import projectsData from '../../../data/projects.json';

// Helper function to render text with bold keywords and links
const renderRichText = (text: string) => {
  // First handle links [text](url), then handle bold **text**
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: Array<{ type: 'text' | 'bold' | 'link'; content: string; url?: string }> = [];
  let lastIndex = 0;
  let match;
  
  // Find all links
  while ((match = linkPattern.exec(text)) !== null) {
    // Add text before link
    if (match.index > lastIndex) {
      const beforeText = text.substring(lastIndex, match.index);
      parts.push({ type: 'text', content: beforeText });
    }
    // Add link
    parts.push({ type: 'link', content: match[1], url: match[2] });
    lastIndex = match.index + match[0].length;
  }
  // Add remaining text
  if (lastIndex < text.length) {
    parts.push({ type: 'text', content: text.substring(lastIndex) });
  }
  
  // If no links found, use original text
  if (parts.length === 0) {
    parts.push({ type: 'text', content: text });
  }
  
  // Now process each part for bold markers
  return parts.map((part, partIndex) => {
    if (part.type === 'link') {
      return (
        <a 
          key={partIndex} 
          href={part.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-link"
          style={{ fontWeight: 600 }}
        >
          {part.content}
        </a>
      );
    }
    
    // Process bold markers in text
    const boldParts = part.content.split(/(\*\*.*?\*\*)/g);
    return (
      <span key={partIndex}>
        {boldParts.map((boldPart, boldIndex) => {
          if (boldPart.startsWith('**') && boldPart.endsWith('**')) {
            const boldText = boldPart.slice(2, -2);
            return <strong key={boldIndex} style={{ color: 'var(--text)', fontWeight: 600 }}>{boldText}</strong>;
          }
          return <span key={boldIndex}>{boldPart}</span>;
        })}
      </span>
    );
  });
};

const ProjectDetailPage = () => {
  const params = useParams();
  const projectId = params?.id as string;
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const project = projectsData.projects.find(item => item.id === projectId);

  if (!project) {
    return (
      <div className="page">
        <Header />
        <main className="page-body">
          <section className="section">
            <h1>Project Not Found</h1>
            <p>The project you're looking for doesn't exist.</p>
            <Link href="/projects" className="button button--primary" style={{ marginTop: '20px', display: 'inline-block' }}>
              Back to Projects
            </Link>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  // Get all media items (images and videos) - for gallery and inline references
  const mediaItems: Array<{ type: 'image' | 'video'; src: string; alt?: string; caption?: string }> = [];
  
  // Check if media array exists and has items
  const hasMediaArray = (project as any).media && Array.isArray((project as any).media);
  
  if (hasMediaArray && (project as any).media.length > 0) {
    // If media array exists and has items, use it
    mediaItems.push(...(project as any).media);
  } else if (project.image) {
    // If no media array but main image exists, add it for inline reference (but won't show gallery)
    mediaItems.push({ type: 'image', src: project.image, alt: project.title });
  }

  // Parse content blocks if they exist
  const contentBlocks = (project as any).content || [];

  return (
    <div className="page">
      <Header />
      <main className="page-body">
        <section className="section">
          {/* Back button */}
          <Link 
            href="/projects" 
            className="text-link"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            Back to Projects
          </Link>

          {/* Header Section */}
          <div style={{ marginBottom: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
              {(project as any).date && (
                <span style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>{(project as any).date}</span>
              )}
              {(project as any).team_lead && (
                <span className="team-lead-badge">Team Lead</span>
              )}
            </div>
            <h1 style={{ marginBottom: '16px' }}>{project.title}</h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '24px' }}>
              {project.description}
            </p>
          </div>

          {/* Main Image/Video Gallery - Only show if multiple media items */}
          {mediaItems.length > 1 && (
            <div style={{ marginBottom: '48px' }}>
              {/* Main display */}
              <div style={{ marginBottom: '16px', borderRadius: 'var(--radius)', overflow: 'hidden', position: 'relative' }}>
                {mediaItems[selectedImageIndex].type === 'image' ? (
                  <Image 
                    src={mediaItems[selectedImageIndex].src} 
                    alt={mediaItems[selectedImageIndex].alt || project.title}
                    width={1200}
                    height={600}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
                    style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block' }}
                    priority={selectedImageIndex === 0}
                    quality={85}
                  />
                ) : (
                  <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                    <iframe
                      src={mediaItems[selectedImageIndex].src}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        border: 'none',
                        borderRadius: 'var(--radius)'
                      }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
                {mediaItems[selectedImageIndex].caption && (
                  <div style={{ 
                    position: 'absolute', 
                    bottom: 0, 
                    left: 0, 
                    right: 0, 
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                    padding: '16px',
                    color: 'white',
                    fontSize: '0.9rem'
                  }}>
                    {mediaItems[selectedImageIndex].caption}
                  </div>
                )}
              </div>

              {/* Thumbnail gallery */}
              <div className="media-gallery-thumbnails" style={{ display: 'flex', gap: '12px', overflowX: 'auto', padding: '8px 0' }}>
                {mediaItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    style={{
                      flex: '0 0 120px',
                      height: '80px',
                      border: selectedImageIndex === index ? '3px solid var(--primary)' : '2px solid var(--border)',
                      borderRadius: 'var(--radius)',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      padding: 0,
                      background: 'var(--surface)',
                      transition: 'all 150ms ease'
                    }}
                    onMouseEnter={(e) => {
                      if (selectedImageIndex !== index) {
                        e.currentTarget.style.borderColor = 'var(--primary)';
                        e.currentTarget.style.opacity = '0.8';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedImageIndex !== index) {
                        e.currentTarget.style.borderColor = 'var(--border)';
                        e.currentTarget.style.opacity = '1';
                      }
                    }}
                  >
                    {item.type === 'image' ? (
                      <Image 
                        src={item.src} 
                        alt={item.alt || `Media ${index + 1}`}
                        width={120}
                        height={80}
                        sizes="120px"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        loading="lazy"
                        quality={75}
                      />
                    ) : (
                      <div style={{ 
                        width: '100%', 
                        height: '100%', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        background: 'var(--surface-2)',
                        color: 'var(--muted)'
                      }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Interactive Content Blocks */}
          {contentBlocks.length > 0 ? (
            <div style={{ marginBottom: '32px' }}>
              {contentBlocks.map((block: any, blockIndex: number) => {
                if (block.type === 'text') {
                  // Check if content has image markers like [IMAGE:path] or [IMAGE:index]
                  const paragraphs = block.content.split('\n\n');
                  const processedContent: Array<{ type: 'text' | 'image'; content?: string; imageIndex?: number; imageSrc?: string; imageAlt?: string; imageCaption?: string }> = [];
                  
                  paragraphs.forEach((paragraph: string, pIndex: number) => {
                    // Find ALL image markers in the paragraph
                    const imagePattern = /\[IMAGE:([^\]]+)\]/g;
                    const imageMatches: Array<{ match: string; ref: string; index: number }> = [];
                    let match;
                    
                    // Collect all image markers with their positions
                    while ((match = imagePattern.exec(paragraph)) !== null) {
                      imageMatches.push({
                        match: match[0],
                        ref: match[1],
                        index: match.index
                      });
                    }
                    
                    if (imageMatches.length > 0) {
                      // Process paragraph with multiple image markers
                      let lastIndex = 0;
                      
                      imageMatches.forEach((imageMatch, imgIndex) => {
                        // Add text before this image marker
                        if (imageMatch.index > lastIndex) {
                          const textBefore = paragraph.substring(lastIndex, imageMatch.index).trim();
                          if (textBefore) {
                            processedContent.push({ type: 'text', content: textBefore });
                          }
                        }
                        
                        // Process the image marker
                        const imageRef = imageMatch.ref;
                        let imageSrc = '';
                        let imageAlt = block.title || 'Project image';
                        let imageCaption: string | undefined = undefined;
                        
                        // Check for special keywords
                        if (imageRef.toLowerCase() === 'main' && project.image) {
                          // Reference to main image
                          imageSrc = project.image;
                          imageAlt = project.title;
                        } else {
                          // If it's a number, it's an index in mediaItems
                          const imageIndex = parseInt(imageRef);
                          if (!isNaN(imageIndex) && mediaItems[imageIndex]) {
                            // Insert image from media array
                            imageSrc = mediaItems[imageIndex].src;
                            imageAlt = mediaItems[imageIndex].alt || imageAlt;
                            imageCaption = mediaItems[imageIndex].caption;
                          } else {
                            // It's a direct path
                            imageSrc = imageRef;
                          }
                        }
                        
                        if (imageSrc) {
                          processedContent.push({
                            type: 'image',
                            imageSrc: imageSrc,
                            imageAlt: imageAlt,
                            imageCaption: imageCaption
                          });
                        }
                        
                        // Update lastIndex to after this image marker
                        lastIndex = imageMatch.index + imageMatch.match.length;
                      });
                      
                      // Add remaining text after the last image marker
                      if (lastIndex < paragraph.length) {
                        const textAfter = paragraph.substring(lastIndex).trim();
                        if (textAfter) {
                          processedContent.push({ type: 'text', content: textAfter });
                        }
                      }
                    } else {
                      // Regular text paragraph with no image markers
                      processedContent.push({ type: 'text', content: paragraph });
                    }
                  });

                  return (
                    <div key={blockIndex} style={{ marginBottom: '32px' }}>
                      {block.title && (
                        <h2 style={{ marginBottom: '16px' }}>{block.title}</h2>
                      )}
                      <div style={{ lineHeight: '1.8', color: 'var(--text)' }}>
                        {processedContent.map((item, itemIndex) => {
                          if (item.type === 'text' && item.content) {
                            return (
                              <p key={itemIndex} style={{ marginBottom: '16px' }}>
                                {renderRichText(item.content)}
                              </p>
                            );
                          } else if (item.type === 'image') {
                            return (
                              <div key={itemIndex} style={{ marginBottom: '24px', marginTop: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{ 
                                  borderRadius: 'var(--radius)', 
                                  overflow: 'hidden', 
                                  marginBottom: item.imageCaption ? '8px' : '0',
                                  maxWidth: '600px',
                                  width: '100%',
                                  boxShadow: 'var(--shadow)'
                                }}>
                                  <Image 
                                    src={item.imageSrc || ''} 
                                    alt={item.imageAlt || 'Project image'}
                                    width={600}
                                    height={400}
                                    sizes="(max-width: 768px) 100vw, 600px"
                                    style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block' }}
                                    loading="lazy"
                                    quality={85}
                                  />
                                </div>
                                {item.imageCaption && (
                                  <p style={{ color: 'var(--muted)', fontSize: '0.9rem', fontStyle: 'italic', textAlign: 'center', margin: 0, maxWidth: '600px' }}>
                                    {item.imageCaption}
                                  </p>
                                )}
                              </div>
                            );
                          }
                          return null;
                        })}
                      </div>
                    </div>
                  );
                } else if (block.type === 'image') {
                  return (
                    <div key={blockIndex} style={{ marginBottom: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div style={{ 
                        borderRadius: 'var(--radius)', 
                        overflow: 'hidden', 
                        marginBottom: block.caption ? '8px' : '0',
                        maxWidth: '600px',
                        width: '100%',
                        boxShadow: 'var(--shadow)'
                      }}>
                        <Image 
                          src={block.src} 
                          alt={block.alt || block.caption || 'Project image'}
                          width={600}
                          height={400}
                          sizes="(max-width: 768px) 100vw, 600px"
                          style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block' }}
                          loading="lazy"
                          quality={85}
                        />
                      </div>
                      {block.caption && (
                        <p style={{ color: 'var(--muted)', fontSize: '0.9rem', fontStyle: 'italic', textAlign: 'center', margin: 0, maxWidth: '600px' }}>
                          {block.caption}
                        </p>
                      )}
                    </div>
                  );
                } else if (block.type === 'video') {
                  return (
                    <div key={blockIndex} style={{ marginBottom: '32px' }}>
                      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: 'var(--radius)' }}>
                        <iframe
                          src={block.src}
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            border: 'none',
                            borderRadius: 'var(--radius)'
                          }}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                      {block.caption && (
                        <p style={{ color: 'var(--muted)', fontSize: '0.9rem', fontStyle: 'italic', textAlign: 'center', marginTop: '8px', marginBottom: 0 }}>
                          {block.caption}
                        </p>
                      )}
                    </div>
                  );
                }
                return null;
              })}
            </div>
          ) : (
            /* Fallback if content blocks don't exist */
            <div style={{ marginBottom: '32px' }}>
              <p style={{ color: 'var(--muted)' }}>Project details coming soon...</p>
            </div>
          )}

          {/* Key Contributions */}
          {(project as any).key_contributions && (project as any).key_contributions.length > 0 && (
            <div style={{ marginBottom: '32px' }}>
              <h2 style={{ marginBottom: '16px' }}>Key Contributions</h2>
              <ul style={{ margin: 0, paddingLeft: '20px' }}>
                {(project as any).key_contributions.map((contribution: string, index: number) => (
                  <li key={index} style={{ marginBottom: '12px', lineHeight: '1.6' }}>
                    {renderRichText(contribution)}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <div style={{ marginBottom: '32px' }}>
              <h2 style={{ marginBottom: '16px' }}>Technologies</h2>
              <div className="pill-group">
                {project.technologies.map((tech: string, index: number) => (
                  <span className="pill" key={index}>{tech}</span>
                ))}
              </div>
            </div>
          )}

          {/* Navigation to other projects */}
          <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
            <h2 style={{ marginBottom: '20px' }}>Other Projects</h2>
            <div className="card-grid">
              {projectsData.projects
                .filter(item => item.id !== projectId)
                .slice(0, 3)
                .map((item) => (
                  <Link 
                    key={item.id} 
                    href={`/projects/${item.id}`}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <article className="card" style={{ cursor: 'pointer', height: '100%' }}>
                      {item.image && (
                        <div style={{ marginBottom: '12px', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
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
                      <h3 style={{ margin: '0 0 8px' }}>{item.title}</h3>
                      <p style={{ margin: 0, color: 'var(--muted)', fontSize: '0.9rem' }}>
                        {item.description}
                      </p>
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

export default ProjectDetailPage;

