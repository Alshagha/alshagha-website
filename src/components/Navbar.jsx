import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ scrolled }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="navbar-container container">
                <a href="#" className={`navbar-brand ${menuOpen ? 'hidden' : ''}`}>
                    <span className="brand-gold">أسرة</span> الشقحاء
                </a>

                <div className={`navbar-caravan ${menuOpen ? 'hidden' : ''}`}>
                    {/* Using the custom image the user will provide */}
                    <img src="/images/caravan.png" alt="قافلة" className="caravan-img" />
                    <img src="/images/caravan.png" alt="قافلة" className="caravan-img" />
                </div>

                <button
                    className={`menu-toggle ${menuOpen ? 'open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className="hamburger"></span>
                </button>

                <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
                    <li><a href="#history" onClick={() => setMenuOpen(false)}>تاريخ الأسرة</a></li>
                    <li><a href="#figures" onClick={() => setMenuOpen(false)}>أعلام الأسرة</a></li>
                    <li><a href="#tree" onClick={() => setMenuOpen(false)}>شجرة الأسرة</a></li>
                    <li><a href="#platform" onClick={() => setMenuOpen(false)}>المنصة الرقمية</a></li>
                    <li><a href="#council" onClick={() => setMenuOpen(false)}>مجلس الأسرة</a></li>
                    <li><a href="#brand-mark" onClick={() => setMenuOpen(false)}>وسم آل حمود</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
