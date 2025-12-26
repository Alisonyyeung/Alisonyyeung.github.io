import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand">
          <div>
            <p className="brand-title">Alison Yeung</p>
            <p className="brand-subtitle">Computer Engineering Student</p>
          </div>
        </Link>

        <nav aria-label="Primary navigation">
          <ul className="nav-list">
            <li><Link href="/">About</Link></li>
            <li><Link href="/publications">Publications</Link></li>
            <li><Link href="/research">Research</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/personal-life">Personal Life</Link></li>
            <li><Link href="/about">CV</Link></li>
          </ul>
        </nav>

        <div className="header-actions">
          <Link href="/about" className="button button--primary">View CV</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;