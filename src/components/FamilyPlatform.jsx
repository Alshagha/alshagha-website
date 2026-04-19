import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleUp } from '../utils/animations';
import MagneticButton from './MagneticButton';
import './FamilyPlatform.css';
import { FaAppStore, FaGooglePlay, FaGlobe } from 'react-icons/fa';

const FamilyPlatform = () => {
    return (
        <section className="family-platform section-padding" id="platform">
            <div className="container">
                <div className="platform-grid">
                    <motion.div
                        className="platform-content"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        <motion.h2 variants={fadeInUp} className="section-title">منصة الشقحاء الرقمية</motion.h2>
                        <motion.h3 variants={fadeInUp} className="platform-subtitle">شجرة العائلة والتوثيق الرقمي</motion.h3>
                        <motion.p variants={fadeInUp} className="platform-description">
                            وثقنا ماضينا لنبني مستقبلنا. منصة الشقحاء الرقمية هي بوابتكم لاستكشاف شجرة العائلة الممتدة والتواصل مع جميع أفراد الأسرة عبر التاريخ. منصة متكاملة تجمع تراثنا في متناول يديك.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="platform-actions">
                            <MagneticButton strength={0.2} className="platform-web-btn-wrapper">
                                <a href="https://alshagha-family.awraq.app/" target="_blank" rel="noreferrer" className="btn btn-primary platform-web-btn">
                                    <FaGlobe className="btn-icon" /> زيارة المنصة عبر الويب
                                </a>
                            </MagneticButton>

                            <div className="store-buttons">
                                <MagneticButton strength={0.1}>
                                    <a href="https://apps.apple.com/app/id6683282889" target="_blank" rel="noreferrer" className="store-btn">
                                        <FaAppStore className="store-icon" />
                                        <div className="store-text">
                                            <span>Download on the</span>
                                            <strong>App Store</strong>
                                        </div>
                                    </a>
                                </MagneticButton>
                                <MagneticButton strength={0.1}>
                                    <a href="https://play.google.com/store/apps/details?id=com.awraq" target="_blank" rel="noreferrer" className="store-btn">
                                        <FaGooglePlay className="store-icon" />
                                        <div className="store-text">
                                            <span>Get it on</span>
                                            <strong>Google Play</strong>
                                        </div>
                                    </a>
                                </MagneticButton>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="platform-note">
                            <p>يمكن لجميع أفراد الأسرة الانضمام عبر الكود الخاص الموجود بالرابط.</p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="platform-visual"
                        variants={scaleUp}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                    >
                        <div className="phone-mockup">
                            <div className="phone-screen">
                                <img src="/images/family_tree.png" alt="Family App Preview" className="app-preview" />
                            </div>
                        </div>
                        <div className="floating-elements">
                            <motion.div
                                className="float-badge b1"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            >
                                شجرة تفاعلية
                            </motion.div>
                            <motion.div
                                className="float-badge b2"
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            >
                                تحليل صلة القرابة
                            </motion.div>
                            <motion.div
                                className="float-badge b3"
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            >
                                مستندات العائلة
                            </motion.div>
                            <motion.div
                                className="float-badge b4"
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                            >
                                أخبار الأسرة
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FamilyPlatform;
