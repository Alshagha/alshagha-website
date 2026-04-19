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
                        <li>الوثائق الخاصة ب اسرة الشقحاء و وثائق اسر ابن حمود</li>
                        <li>مجلة العرب (قبيلة هذيل وفروعها )هـ الجمادان  ١٤٠٤</li>
                        <li>بنو هذيل ١٤٣١ هـ تأليف عبدالله بن سعاف اللحياني</li>

                        <li>جمهرة انساب الاسر المتحظرة بنجد هـ١٤٠١ (ط ١ ) للشيخ حمد الجاسر</li>
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};

export default References;
