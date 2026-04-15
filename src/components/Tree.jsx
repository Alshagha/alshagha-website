import React from 'react';
import './Tree.css';
import { FaSearchPlus, FaDownload } from 'react-icons/fa';

const Tree = () => {
    return (
        <section className="tree section-padding" id="tree">
            <div className="container">
                <h2 className="section-title text-center">شجرة الأسرة</h2>
                <p className="section-subtitle text-center">
                    فروع متجذرة في التاريخ، متطلعة نحو المستقبل
                </p>

                <div className="tree-container glass-panel fade-in-up">
                    <div className="tree-branches">
                        <div className="branch">
                            <h4>فرع محمد</h4>
                            <p>ابن منصور بن محمد ابن حمود</p>
                        </div>
                        <div className="branch">
                            <h4>فرع صالح</h4>
                            <p>ابن منصور بن محمد ابن حمود</p>
                        </div>
                    </div>

                    <div className="tree-image-wrapper">
                        <img
                            src="/images/family_tree.jpg"
                            alt="شجرة عائلة الشقحاء"
                            className="tree-image"
                            loading="lazy"
                        />
                    </div>

                    <div className="tree-actions">
                        <a href="/images/family_tree.jpg" target="_blank" rel="noreferrer" className="btn tree-btn">
                            <FaSearchPlus style={{ fontSize: '1.2rem' }} /> عرض الشجرة
                        </a>
                        <a href="/images/family_tree.jpg" download="شجرة_عائلة_الشقحاء.jpg" className="btn tree-btn">
                            <FaDownload style={{ fontSize: '1.2rem' }} /> تنزيل الشجرة
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tree;
