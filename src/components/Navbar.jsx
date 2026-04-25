import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import './Navbar.css';

const Navbar = ({ scrolled }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 992 : false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 992);
            if (window.innerWidth > 992) setMenuOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="navbar-container container">
                <a href="#" className={`navbar-brand ${menuOpen ? 'hidden' : ''}`}>
                    <img src="/images/logo.png" alt="آل شقحاء" className="navbar-logo" loading="eager" />
                </a>

                <div className={`navbar-caravan ${menuOpen ? 'hidden' : ''}`}>
                    {/* Using the custom image the user will provide */}
                    <img src="/images/caravan.png" alt="قافلة" className="caravan-img" onError={(e) => e.target.style.opacity = 0} />
                    <img src="/images/caravan.png" alt="قافلة" className="caravan-img" onError={(e) => e.target.style.opacity = 0} />
                </div>

                <button
                    className={`menu-toggle ${menuOpen ? 'open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className="hamburger"></span>
                </button>

                <motion.ul
                    className={`navbar-links ${menuOpen ? 'active' : ''}`}
                    variants={staggerContainer}
                    initial={isMobile ? "initial" : "animate"}
                    animate={!isMobile || menuOpen ? "animate" : "initial"}
                >
                    <motion.li variants={fadeInUp} className="mobile-menu-logo">
                        <img src="/images/logo.png" alt="آل شقحاء" className="menu-logo" loading="eager" />
                    </motion.li>
                    <motion.li variants={fadeInUp}><a href="#history" onClick={() => setMenuOpen(false)}>تاريخ الأسرة</a></motion.li>
                    <motion.li variants={fadeInUp}><a href="#figures" onClick={() => setMenuOpen(false)}>أعلام الأسرة</a></motion.li>
                    <motion.li variants={fadeInUp}><a href="#tree" onClick={() => setMenuOpen(false)}>شجرة الأسرة</a></motion.li>
                    <motion.li variants={fadeInUp}><a href="#council" onClick={() => setMenuOpen(false)}>مجلس الأسرة</a></motion.li>
                    <motion.li variants={fadeInUp}><a href="#brand-mark" onClick={() => setMenuOpen(false)}>وسم آل حمود</a></motion.li>
                </motion.ul>
            </div>
        </nav>
    );
};

export default Navbar;
