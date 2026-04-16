import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-background">
                <div className="hero-overlay"></div>
            </div>

            <div className="hero-content fade-in-up">
                <h2 className="hero-subtitle delay-1">تاريخ عريق ومستقبل مشرق</h2>
                <h1 className="hero-title delay-2">
                    <span style={{ display: 'block', marginBottom: '0.8rem' }}>مرحبًا بكم في موقع</span>
                    <span className="gold-text">أسرة الشقحاء</span>
                </h1>
                <p className="hero-text delay-3">
                    من الأسر النجدية العريقة التي ترجع إلى قبيلة هذيل. تاريخ متجذر،و حاضر مشرق،و مستقبل واعد
                </p>
                <a href="#history" className="hero-btn delay-3 fade-in-up">اكتشف تاريخنا</a>
            </div>

            <div className="scroll-indicator">
                <div className="mouse"></div>
            </div>
        </section>
    );
};

export default Hero;
