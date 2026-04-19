import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, textReveal } from '../utils/animations';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-background">
                <div className="hero-overlay"></div>
            </div>

            <motion.div
                className="hero-content"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
            >
                <motion.h2 className="hero-subtitle" variants={fadeInUp}>تاريخ عريق ومستقبل مشرق</motion.h2>
                <motion.h1 className="hero-title" variants={textReveal}>
                    <span style={{ display: 'block', marginBottom: '0.8rem' }}>مرحبًا بكم في موقع</span>
                    <span className="gold-text">أسرة الشقحاء</span>
                </motion.h1>
                <motion.p className="hero-text" variants={fadeInUp}>
                    من الأسر النجدية العريقة التي ترجع إلى قبيلة هذيل. تاريخ متجذر،و حاضر مشرق،و مستقبل واعد.
                </motion.p>
                <motion.div variants={fadeInUp}>
                    <a href="#history" className="hero-btn">اكتشف تاريخنا</a>
                </motion.div>
            </motion.div>

            <div className="scroll-indicator">
                <div className="mouse"></div>
            </div>
        </section>
    );
};

export default Hero;
