import React from 'react';
import './References.css';

const References = () => {
    return (
        <section className="references section-padding" id="references">
            <div className="container">
                <h2 className="section-title text-center" style={{ fontSize: '2rem' }}>المراجع التاريخية للأسرة</h2>
                <div className="references-box glass-panel fade-in-up">
                    <ul className="references-list">
                        <li>حمد الجاسر. مجلة العرب: جمادى الأولى ١٣٩٢هـ.</li>
                        <li>حمد الجاسر. مجلة العرب: جمادى الثانية ١٤٠٣هـ.</li>
                        <li>حمد الجاسر. كنز الأنساب ومجمع الآداب.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default References;
