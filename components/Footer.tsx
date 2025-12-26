import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <p>&copy; {new Date().getFullYear()} Alison Yeung. All rights reserved.</p>
      <div className="footer-links">
        <a href="https://github.com/Alisonyyeung" target="_blank" rel="noreferrer">GitHub</a>
        <span aria-hidden="true">•</span>
        <a href="mailto:alisonyeung0911@gmail.com">Email</a>
      </div>
    </footer>
  );
};

export default Footer;