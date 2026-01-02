import React from 'react';
import '../styles/globals.css';
import 'leaflet/dist/leaflet.css';
import Chatbot from '../components/Chatbot';

export const metadata = {
  title: 'Alison Yeung',
  description: 'Welcome to my personal portfolio website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Chatbot />
      </body>
    </html>
  );
}