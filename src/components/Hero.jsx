import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeInUp, staggerContainer, textReveal } from '../utils/animations';
import MagneticButton from './MagneticButton';
import './Hero.css';

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);

    return (
        <section className="hero" id="home" ref={containerRef}>
            <motion.div
                className="hero-background"
                style={{ y, scale }}
            >
                <motion.div className="hero-overlay" style={{ opacity }}></motion.div>
            </motion.div>

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
                    <MagneticButton strength={0.2}>
                        <a href="#history" className="hero-btn">اكتشف تاريخنا</a>
                    </MagneticButton>
                </motion.div>
            </motion.div>

            <div className="scroll-indicator">
                <div className="mouse"></div>
            </div>
        </section>
    );
};

export default Hero;
