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
                        <li>الوثائق الخاصة بأسرة الشقحاء ووثائق أسر ابن حمود.</li>
                        <li>جمهرة أنساب الأسر المتحضرة بنجد ١٤٠١هـ (ط ١ ) للشيخ حمد الجاسر.</li>
                        <li>مجلة العرب (قبيلة هذيل و فروعها) ١٤٠٤هـ الجمادان.</li>
                        <li>بنو هذيل ١٤٣١هـ تأليف عبدالله بن سعاف اللحياني.</li>
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};

export default References;
