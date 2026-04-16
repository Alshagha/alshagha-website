import React from 'react';
import { FaMapMarkerAlt, FaUsers, FaHome } from 'react-icons/fa';
import './History.css';

const History = () => {
    return (
        <section className="history section-padding" id="history">
            <div className="container">
                <h2 className="section-title text-center">النشأة والتاريخ</h2>
                <p className="section-subtitle text-center">
                    تعد أسرة الشقحاء من أبرز األسر النجدية المنتمية إلى قبيلة هذيل، وهي
                    واحدة من أسر آل حمود من خامس العفران من الحتارشة من قبيلة هذيل،
                    وقد نشأت األسرة في محافظة عنيزة، وانتشرت في مناطق ومدن المملكة
                    .العربية السعودية                </p>

                <div className="history-timeline">
                    <div className="timeline-line"></div>

                    {/* Item 1 */}
                    <div className="timeline-item left fade-in-up delay-1">
                        <div className="timeline-icon">
                            <FaUsers />
                        </div>
                        <div className="timeline-content glass-panel">
                            <h3 className="card-title">النسب العريق</h3>
                            <p className="card-text">
                                يعود نسب األسرة إلى الجد منصور بن محمد بن حمود بن عبد المحسن بن منصور بن محمد من خامس
                                العفران من قبيلة الحتارشة من هذيل بن إلياس بن مضر بن نزار بن معد بن عدنان، المولود في الحجاز
                                في وادي الصدر الواقع بين الشرائع والزيمة سنة 1160هـ.                            </p>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="timeline-item right fade-in-up delay-2">
                        <div className="timeline-icon">
                            <FaMapMarkerAlt />
                        </div>
                        <div className="timeline-content glass-panel">
                            <h3 className="card-title">الموطن الأصلي</h3>
                            <p className="card-text">
                                الموطن األصلي لألسرة ومسقط الرأس هي محافظة عنيزة الواقعة في قلب منطقة القصيم، فهي المقر
                                التاريخي ألسرة الشقحاء.
                                وقد استقر فيها الجد الشيخ حمود الحتيرشي الهذلي بعد قدومه مع أسرته من الحجاز من وادي الصدر
                                )صدر حنين( إلى نجد، وتنقل ه ما بين مدنها حتى استقر في عنيزة في عام 1٢٢0هـ                            </p>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="timeline-item left fade-in-up delay-3">
                        <div className="timeline-icon">
                            <FaHome />
                        </div>
                        <div className="timeline-content glass-panel">
                            <h3 className="card-title">استقرار الجد المؤسس</h3>
                            <p className="card-text">
                                استقر الجد الجامع لأسرة الشقحاء، منصور بن محمد بن حمود بعد قدوم جده حمود من بلدة وادي الصدر إلى مدينة عنيزة. وقد تُوفي الجد منصور في عنيزة عام ١٢٧٢ هـ. وقد خلف ثلاثة أبناء هم: محمد، صالح، ناصر.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default History;
