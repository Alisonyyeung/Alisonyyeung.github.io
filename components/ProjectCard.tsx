import React from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies, link }) => {
    return (
        <article className="project-card">
            <div>
                <h3 style={{ margin: '0 0 8px' }}>{title}</h3>
                <p style={{ margin: '0 0 12px', color: 'var(--muted)' }}>{description}</p>
                <div className="pill-group" style={{ marginBottom: '12px' }}>
                    {technologies.map((tech, index) => (
                        <span className="pill" key={index}>{tech}</span>
                    ))}
                </div>
        </div>
            <a href={link} className="text-link" target="_blank" rel="noopener noreferrer">View Project →</a>
        </article>
    );
};

export default ProjectCard;