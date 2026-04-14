import React from 'react';
import './BrandMark.css';

const BrandMark = () => {
    return (
        <section className="brand-mark section-padding" id="brand-mark">
            <div className="container">
                <h2 className="section-title text-center">وسم الأسرة</h2>
                <div className="brand-mark-svg-container fade-in-up">
                    <img src="/images/brand_mark.png" alt="وسم آل حمود الهذلي" className="brand-svg" loading="lazy" />
                </div>
            </div>
        </section>
    );
};

export default BrandMark;
