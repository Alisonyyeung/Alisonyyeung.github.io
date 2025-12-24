import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import projectsData from '../../data/projects.json';

const ProjectsPage = () => {
    return (
        <div>
            <h1>My Projects</h1>
            <div>
                {projectsData.projects.map((project, index) => (
                    <ProjectCard 
                        key={index} 
                        title={project.title} 
                        description={project.description} 
                        technologies={project.technologies} 
                        link={project.link} 
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;