import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import '../styles/globals.css';

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <Navigation />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;