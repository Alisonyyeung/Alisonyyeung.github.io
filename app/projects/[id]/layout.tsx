import React from 'react';
import projectsData from '../../../data/projects.json';

export function generateStaticParams() {
  return projectsData.projects.map((item) => ({
    id: item.id,
  }));
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

