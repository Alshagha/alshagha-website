import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';
import './References.css';

const References = () => {
    return (
        <section className="references section-padding" id="references">
            <div className="container">
                <motion.h2
                    className="section-title text-center"
                    style={{ fontSize: '2rem' }}
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    المراجع التاريخية للأسرة
                </motion.h2>
                <motion.div
                    className="references-box glass-panel"
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    <ul className="references-list">
                        <li>حمد الجاسر. مجلة العرب: جمادى الأولى ١٣٩٢هـ.</li>
                        <li>حمد الجاسر. مجلة العرب: جمادى الثانية ١٤٠٣هـ.</li>
                        <li>حمد الجاسر. كنز الأنساب ومجمع الآداب.</li>
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};

export default References;
