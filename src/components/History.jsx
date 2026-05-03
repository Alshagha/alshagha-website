import React from 'react';
import { motion } from 'framer-motion';
import { slideInLeft, slideInRight } from '../utils/animations';
import { FaMapMarkerAlt, FaUsers, FaHome } from 'react-icons/fa';
import './History.css';

const History = () => {
    return (
        <section className="history section-padding" id="history">
            <div className="container">
                <h2 className="section-title text-center">النشأة والتاريخ</h2>
                <p className="section-subtitle text-center">
                    تعد أسرة الشقحاء إحدى الأسر النجدية، وهي واحدة من أسر آل حمود التي ترجع إلى خامس العفران من الحتارشة من قبيلة هذيل
                    وقد نشأت الأسرة في محافظة عنيزة، وانتشرت في مدن ومناطق المملكة العربية السعودية.</p>

                <div className="history-timeline">
                    <div className="timeline-line"></div>

                    {/* Item 1 */}
                    <motion.div
                        className="timeline-item left"
                        variants={slideInLeft}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <div className="timeline-icon">
                            <FaUsers />
                        </div>
                        <div className="timeline-content glass-panel">
                            <h3 className="card-title">النسب العريق</h3>
                            <p className="card-text">
                                يعود نسب الأسرة إلى الجد منصور بن محمد بن حمود من خامس العفران من قبيلة الحتارشة من هذيل بن إلياس بن مضر بن نزار بن معد بن عدنان، المولود في الحجاز في وادي الصدر الواقع بين الشرائع والزيمة سنة 1160هـ.
                            </p>
                        </div>
                    </motion.div>

                    {/* Item 2 */}
                    <motion.div
                        className="timeline-item right"
                        variants={slideInRight}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <div className="timeline-icon">
                            <FaMapMarkerAlt />
                        </div>
                        <div className="timeline-content glass-panel">
                            <h3 className="card-title">موطن الأسرة</h3>
                            <p className="card-text">
                                موطن الأسرة هو محافظة عنيزة في منطقة القصيم. التي استقر فيها الجد الشيخ حمود بعد قدومه من الحجاز إلى نجد، وتنقل ما بين مدنها حتى استقر في عنيزة.
                            </p>
                        </div>
                    </motion.div>

                    {/* Item 3 */}
                    <motion.div
                        className="timeline-item left"
                        variants={slideInLeft}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <div className="timeline-icon">
                            <FaHome />
                        </div>
                        <div className="timeline-content glass-panel">
                            <h3 className="card-title">استقرار الأسرة </h3>
                            <p className="card-text">
                                استقر الجد الشيخ منصور بن محمد ابن حمود في مدينة عنيزة. وقد تُوفي الجد منصور في عنيزة. وقد خلف ثلاثة أبناء هم: محمد و صالح (لهما ذرية)، وناصر (منقطع)،
                                رحمهم الله جميعًا.
                            </p>
                        </div>
                    </motion.div>

                    {/* Item 4 */}
                    <motion.div
                        className="timeline-item right"
                        variants={slideInRight}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <div className="timeline-icon">
                            <FaHome />
                        </div>
                        <div className="timeline-content glass-panel">
                            <h3 className="card-title">استقرار الأسرة </h3>
                            <p className="card-text">
                                استقر الجد الشيخ منصور بن محمد ابن حمود في مدينة عنيزة. وقد تُوفي الجد منصور في عنيزة. وقد خلف ثلاثة أبناء هم: محمدو صالح (لهما ذرية)، وناصر (منقطع)،
                                رحمهم الله جميعاً.
                            </p>
                        </div>
                    </motion.div>

                </div>


            </div>
        </section>
    );

};

export default History;
