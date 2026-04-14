import React from 'react';
import { FaXTwitter, FaInstagram } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h2><span className="brand-gold">أسرة</span> الشقحاء</h2>
                        <p>
                            عراقة الماضي، وإشراقة المستقبل. موقع يجمع تاريخ وتراث أسرة الشقحاء الكريمة.
                        </p>
                    </div>

                    <div className="footer-links">
                        <h3>روابط سريعة</h3>
                        <ul>
                            <li><a href="#history">تاريخ الأسرة</a></li>
                            <li><a href="#figures">أعلام الأسرة</a></li>
                            <li><a href="#tree">الشجرة</a></li>
                            <li><a href="#council">المجلس</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h3>تواصل معنا</h3>
                        <p>نسعد بتواصلكم عبر قنواتنا المختلفة</p>
                        <div className="social-icons">
                            <a href="https://x.com/alshaqha_family?s=21" target="_blank" rel="noreferrer" aria-label="Twitter"><FaXTwitter /></a>
                            <a href="https://www.instagram.com/alshaqha_family?igsh=OHdsZTN2YThudGls" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
                            <a href="mailto:alshaqha.family@gmail.com" aria-label="Email"><MdEmail /></a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} موقع أسرة الشقحاء - جميع الحقوق محفوظة.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
