import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import './Council.css';

const Council = () => {
    return (
        <section className="council section-padding" id="council">
            <div className="container">
                <h2 className="section-title text-center">مجلس أسرة الشقحاء</h2>
                <p className="section-subtitle text-center">
                    تم تشكيل مجلس الأسرة لتنظيم وهيكلة أعمال الأسرة تحت شعار الاستدامة والحوكمة
                </p>

                <motion.div
                    className="council-layout"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    {/* President */}
                    <motion.div className="council-box president" variants={fadeInUp}>
                        <h3>رئيس المجلس</h3>
                        <p>الشيخ:عبدالرحمن بن علي بن فهد الشقحاء</p>
                    </motion.div>

                    <div className="connector"></div>

                    {/* Members */}
                    <motion.div className="council-box members glass-panel" variants={fadeInUp}>
                        <h3>أعضاء المجلس</h3>
                        <ul>
                            <li>أ.حسين بن تركي بن حسين الشقحاء</li>
                            <li>أ.صالح بن عبدالعزيز بن فهد الشقحاء</li>
                            <li>د.منصور بن عبدالوهاب  بن منصور الشقحاء</li>
                            <li>أ.طارق بن عبدالرحمن بن منصور الشقحاء</li>
                            <li>م.رائد بن عبدالله بن علي الشقحاء</li>
                        </ul>
                    </motion.div>

                    {/* Site Committee */}
                    <motion.div className="council-box members glass-panel" variants={fadeInUp} style={{ marginTop: '2rem' }}>
                        <h3>اللجنة التنفيذية</h3>
                        <ul>
                            <li>أ.صالح بن عبدالعزيز بن فهد الشقحاء</li>
                            <li>م.رائد بن عبدالله بن علي الشقحاء</li>
                            <li>م.مشعل بن محمد بن علي الشقحاء</li>
                        </ul>
                    </motion.div>

                    {/* Committees & Goals */}
                    <div className="council-grid">
                        <motion.div className="council-box glass-panel" variants={fadeInUp}>
                            <h3 className="gold-text">اللجان</h3>
                            <ul className="committees-list">
                                <li>
                                    <strong style={{ color: 'var(--color-text)', fontSize: '1.1rem' }}>اللجنة التنفيذية</strong>
                                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginTop: '0.5rem', lineHeight: '1.5' }}>
                                        ( معنية بالإشراف على تنفيذ مواقع التواصل الإجتماعي للأسرة، وتحديث الشجرة، وإعداد البيانات والرسائل الاعلامية )
                                    </p>
                                </li>
                                <li>
                                    <strong style={{ color: 'var(--color-text)', fontSize: '1.1rem' }}>لجنة إدارة إجتماعات الأسرة</strong>
                                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginTop: '0.5rem', lineHeight: '1.5' }}>
                                        ( معنية بإدارة والإشراف على اجتماعات الأسرة )
                                    </p>

                                </li>
                            </ul>

                        </motion.div>

                        <motion.div className="council-box glass-panel goals" variants={fadeInUp}>
                            <h3 className="gold-text">أهداف المجلس</h3>
                            <div className="goal-item">
                                <span className="goal-num">١</span>
                                <div className="goal-text">
                                    <h4>رؤية الأسرة</h4>
                                    <p>أن تكون أسرتنا نموذجًا يُحتذى به في التماسك والترابط وصلة الرحم، قائمًا على القيم الأصيلة، ومسهمًا بفاعلية في بناء مجتمع حيوي وفق رؤية ٢٠٣٠.</p>
                                </div>
                            </div>
                            <div className="goal-item">
                                <span className="goal-num">١</span>
                                <div className="goal-text">
                                    <h4>الاستدامة</h4>
                                    <p>ضمان استمرارية أعمال ومشاريع الأسرة للأجيال القادمة</p>
                                </div>
                            </div>
                            <div className="goal-item">
                                <span className="goal-num">٢</span>
                                <div className="goal-text">
                                    <h4>الحوكمة</h4>
                                    <p>تطبيق أفضل معايير الإدارة والشفافية والمساءلة</p>
                                </div>
                            </div>
                            <div className="goal-item">
                                <span className="goal-num">٣</span>
                                <div className="goal-text">
                                    <h4>التواصل</h4>
                                    <p>تعزيز روابط القربى والتآلف بين أفراد الأسرة</p>
                                </div>
                            </div>
                            <div className="goal-item">
                                <span className="goal-num">٤</span>
                                <div className="goal-text">
                                    <h4>التنمية</h4>
                                    <p>دعم وتطوير قدرات أبناء الأسرة وتمكينهم</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Council;
