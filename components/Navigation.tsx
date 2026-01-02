import Link from 'next/link';

const Navigation = () => {
    return (
    <nav className="section-nav" aria-label="Section navigation">
            <ul>
        <li><Link href="#about">About</Link></li>
        <li><Link href="#projects">Projects</Link></li>
        <li><Link href="#skills">Skills</Link></li>
        <li><Link href="#contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;