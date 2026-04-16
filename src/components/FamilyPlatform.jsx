import React from 'react';
import './FamilyPlatform.css';
import { FaAppStore, FaGooglePlay, FaGlobe } from 'react-icons/fa';

const FamilyPlatform = () => {
    return (
        <section className="family-platform section-padding" id="platform">
            <div className="container">
                <div className="platform-grid">
                    <div className="platform-content fade-in-up">
                        <h2 className="section-title">منصة الشقحاء الرقمية</h2>
                        <h3 className="platform-subtitle">شجرة العائلة والتوثيق الرقمي</h3>
                        <p className="platform-description">
                            وثقنا ماضينا لنبني مستقبلنا. منصة الشقحاء الرقمية هي بوابتكم لاستكشاف شجرة العائلة الممتدة والتواصل مع جميع أفراد الأسرة عبر التاريخ. منصة متكاملة تجمع تراثنا في متناول يديك.
                        </p>

                        <div className="platform-actions">
                            <a href="https://alshagha-family.awraq.app/" target="_blank" rel="noreferrer" className="btn btn-primary platform-web-btn">
                                <FaGlobe className="btn-icon" /> زيارة المنصة عبر الويب
                            </a>

                            <div className="store-buttons">
                                <a href="https://apps.apple.com/app/id123456789" target="_blank" rel="noreferrer" className="store-btn">
                                    <FaAppStore className="store-icon" />
                                    <div className="store-text">
                                        <span>Download on the</span>
                                        <strong>App Store</strong>
                                    </div>
                                </a>
                                <a href="https://play.google.com/store/apps/details?id=com.awraq.alshagha" target="_blank" rel="noreferrer" className="store-btn">
                                    <FaGooglePlay className="store-icon" />
                                    <div className="store-text">
                                        <span>Get it on</span>
                                        <strong>Google Play</strong>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="platform-note">
                            <p>يمكن لجميع أفراد الأسرة الانضمام عبر الكود الخاص الموجود بالرابط</p>
                        </div>
                    </div>

                    <div className="platform-visual fade-in-up">
                        <div className="phone-mockup">
                            <div className="phone-screen">
                                <img src="/images/family_tree.png" alt="Family App Preview" className="app-preview" />
                            </div>
                        </div>
                        <div className="floating-elements">
                            <div className="float-badge b1">شجرة تفاعلية</div>
                            <div className="float-badge b2">تحليل صلة القرابة</div>
                            <div className="float-badge b3">مستندات العائلة</div>
                            <div className="float-badge b4">أخبار الأسرة</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FamilyPlatform;
