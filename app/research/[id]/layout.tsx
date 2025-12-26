import React from 'react';
import researchData from '../../../data/research.json';

export function generateStaticParams() {
  return researchData.research.map((item) => ({
    id: item.id,
  }));
}

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

