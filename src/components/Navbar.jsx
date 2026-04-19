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
                    <span className="brand-gold">أسرة</span> الشقحاء
                </a>

                <div className={`navbar-caravan ${menuOpen ? 'hidden' : ''}`}>
                    {/* Using motion.img for a rhythmic walking animation */}
                    <motion.img
                        src="/images/caravan.png"
                        alt="قافلة"
                        className="caravan-img"
                        animate={{
                            x: [0, -5, 0],
                            y: [0, -2, 0]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        onError={(e) => e.target.style.opacity = 0}
                    />
                    <motion.img
                        src="/images/caravan.png"
                        alt="قافلة"
                        className="caravan-img"
                        animate={{
                            x: [0, -4, 0],
                            y: [0, -3, 0]
                        }}
                        transition={{
                            duration: 3.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5
                        }}
                        onError={(e) => e.target.style.opacity = 0}
                    />
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
