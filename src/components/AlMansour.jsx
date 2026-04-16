import React from 'react';
import './AlMansour.css';
import { FaUsers, FaNetworkWired, FaHistory } from 'react-icons/fa';

const AlMansour = () => {
    return (
        <section className="al-mansour section-padding" id="al-mansour">
            <div className="container">
                <div className="mansour-header fade-in-up">
                    <h2 className="section-title text-center">فرع عائلة المنصور</h2>
                    <p className="section-subtitle text-center">إرث متصل وعطاء متجدد لذرية الجد منصور بن محمد</p>
                </div>

                <div className="mansour-grid">
                    <div className="mansour-card fade-in-up delay-1">
                        <div className="card-icon"><FaHistory /></div>
                        <h3>الامتداد التاريخي</h3>
                        <p>
                            يمثل فرع عائلة المنصور الامتداد المبارك لذرية الجد منصور بن محمد بن حمود، الذين حافظوا على القيم الأصيلة التي ورثوها عن أجدادهم، مع مواكبة التطور والنهضة في مختلف الميادين.
                        </p>
                    </div>

                    <div className="mansour-card fade-in-up delay-2">
                        <div className="card-icon"><FaUsers /></div>
                        <h3>الانتشار والارتباط</h3>
                        <p>
                            توزع أفراد هذا الفرع في مختلف مناطق المملكة العربية السعودية، وبرزوا في مجالات العلوم، التجارة، والخدمة الوطنية، مع استمرار دورهم الفاعل في تعزيز أواصر القربى والتواصل بين أفراد الأسرة.
                        </p>
                    </div>

                    <div className="mansour-card fade-in-up delay-3">
                        <div className="card-icon"><FaNetworkWired /></div>
                        <h3>الرؤية والمستقبل</h3>
                        <p>
                            يستمر فرع المنصور في تقديم نموذج مشرف في التمسك بالهوية والتراث، مساهمين برؤية طموحة في بناء مستقبل الأسرة والمجتمع، ومجسدين معاني الوفاء لاسم (الشقحاء) وتاريخه العريق.
                        </p>
                    </div>
                </div>

                <div className="mansour-quote fade-in-up">
                    <p>
                        "إن الحفاظ على إرث الآباء هو الأمانة التي نحملها للأبناء، وفرع المنصور هو حلقة وصل ذهبية في هذا العقد الفريد."
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AlMansour;
