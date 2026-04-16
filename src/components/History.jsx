import React from 'react';
import { FaMapMarkerAlt, FaUsers, FaHome, FaNetworkWired } from 'react-icons/fa';
import './History.css';

const History = () => {
    return (
        <section className="history section-padding" id="history">
            <div className="container">
                <h2 className="section-title text-center">النشأة والتاريخ</h2>
                <p className="section-subtitle text-center">
                    أسرة الشقحاء من الأسر النجدية العريقة، وتُعد من أبرز الأسر المنتمية إلى قبيلة هذيل وهي أسرة من أسر آل حمود من خامس العفران من الحتارشة.
                </p>

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
                                يعود نسب الأسرة إلى الجد منصور بن محمد بن حمود بن عبد المحسن بن منصور بن محمد العفراني الحتيرشي من هذيل بن إلياس بن مضر بن نزار بن معد بن عدنان.
                            </p>
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
                                الموطن الأصلي للأسرة هي محافظة عنيزة الواقعة في قلب منطقة القصيم، والتي كانت مقرًا تاريخيًا لأسرة الشقحاء من قبيلة هذيل. في عام ١٢١٨هـ انتقل الجد الشيخ حمود العفراني من وادي الصدر إلى نجد وتنقل ما بين الدرعية والعيينة واستقر في عنيزة في عام ١٢٢٠هـ.
                            </p>
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

                    {/* Item 4 */}
                    <div className="timeline-item right fade-in-up delay-4">
                        <div className="timeline-icon">
                            <FaNetworkWired />
                        </div>
                        <div className="timeline-content glass-panel">
                            <h3 className="card-title">فرع عائلة المنصور</h3>
                            <p className="card-text">
                                يمثل فرع عائلة المنصور الامتداد المبارك لذرية الجد منصور بن محمد بن حمود، والذين توزعوا في أرجاء المملكة العربية السعودية، وسكنوا مدنها، مساهمين بجدارة في مسيرة البناء والتنمية وتولي المناصب القيادية، مع الحفاظ الدائم على تواصلهم الأسري وتراثهم العريق.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default History;
