import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleUp } from '../utils/animations';
import { FaSearchPlus, FaDownload } from 'react-icons/fa';
import './Tree.css';

const Tree = () => {
    return (
        <section className="tree section-padding" id="tree">
            <div className="container">
                <h2 className="section-title text-center">شجرة الأسرة</h2>
                <motion.p
                    className="section-subtitle text-center"
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    فروع متجذرة في التاريخ، متطلعة نحو المستقبل
                </motion.p>

                <motion.div
                    className="tree-container glass-panel"
                    variants={scaleUp}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="tree-branches"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        <motion.div className="branch" variants={fadeInUp}>
                            <h4>فرع محمد</h4>
                            <p>ابن منصور بن محمد ابن حمود</p>
                        </motion.div>
                        <motion.div className="branch" variants={fadeInUp}>
                            <h4>فرع صالح</h4>
                            <p>ابن منصور بن محمد ابن حمود</p>
                        </motion.div>
                        <motion.div className="branch" variants={fadeInUp}>
                            <h4>فرع ناصر</h4>
                            <p>ابن منصور بن محمد ابن حمود</p>
                        </motion.div>
                    </motion.div>

                    <div className="tree-image-wrapper">
                        <img
                            src="/images/family_tree.png"
                            alt="شجرة عائلة الشقحاء"
                            className="tree-image"
                        />
                    </div>

                    <motion.div
                        className="tree-actions"
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        <a href="/images/family_tree.png" target="_blank" rel="noreferrer" className="btn tree-btn">
                            <FaSearchPlus style={{ fontSize: '1.2rem' }} /> عرض الشجرة
                        </a>
                        <a href="/images/family_tree.png" download="شجرة_عائلة_الشقحاء.png" className="btn tree-btn">
                            <FaDownload style={{ fontSize: '1.2rem' }} /> تنزيل الشجرة
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Tree;
