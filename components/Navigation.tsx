import Link from 'next/link';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/resume">Resume</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;