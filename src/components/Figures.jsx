import React, { useState } from 'react';
import './Figures.css';
import { GiCrossedSwords, GiCrown } from 'react-icons/gi';

const Figures = () => {
    const [activeFig, setActiveFig] = useState(0);
    const [lightboxImg, setLightboxImg] = useState(null);

    const figures = [
        {
            name: "محمد بن منصور بن محمد بن حمود",
            shortTitle: "أول من لُقب بالشقحاء",
            born: "١٢٣٠ هـ - عنيزة",
            desc: "محمد بن منصور بن محمد ابن حمود العفراني الحتيرشي الهذلي (وهو أول من لقب بالشقحاء). وسبب تسميته بالشقحاء لأنه يمتلك افضل سلالات إبل شقح وقد عرف بها وأصبح يطلق عليه محمد ابن حمود راعي الشقحاء، وبناء عليه التصق هذا اللقب بذريته الى وقتنا الحاضر. \n\nنشأ في كنف والديه وفي أسرة مترابطه وذات شأن، وهو أكبر اخوته صالح وعبدالرحمن، وامه هي سلمى بنت محمد بن سعد ابن القائد ابراهيم ابن عفيضان العايذي القحطاني ولي اميرا لمدينة عنيزه عام ١٢٢٥ وتوفي فيها ١٢٢٩ ، وزوجته زبيدة بنت محمد العماري. له ثلاثة أبناء منصور، علي، وعبدالرحمن.",
            highlights: "اشتهر الشيخ محمد بالتجاره. ويوجد حاليا اوقاف واملاك له بعنيزة تعرف بـ قيصرية الشقحاء يقف عليها ناظر من آحفاده، وتوجد له وصية تعد من اهم وثاىق الأسرة بتاريخ ١٢٦١ آوصى رحمه الله بعدة وآوجه خير ومازالت ولله الحمد تطبق على أكمل وجه. توفي رحمه الله بعنيزه عام ١٢٩٣ عن عمر يناهز ٦٣ سنه رحمه الله رحمة واسعه.",
            icon: <GiCrown />,
            testaments: [
                '/images/testament_1.jpg',
                '/images/testament_2.jpg',
                '/images/testament_3.jpg'
            ]
        },
        {
            name: "الشيخ منصور بن صالح بن منصور",
            shortTitle: "القائد العسكري",
            born: "١٣١٥ هـ - بريدة",
            desc: "نشأ في كنف والديه حتى كبر. اشتغل بالتجارة، وسافر مع الحملات التي تسمى العقيلات إلى الأردن والشام، ثم التحق بالجيش الفرنسي هناك، وتعلم كثيراً من الفنون العسكرية ومنها المدفعية والرماية على اختلاف أنواعها. \n\nفي عام ١٣٤٩هـ عاد إلى المملكة، والتحق بالسلك العسكري في مدينة جدة. كان يعد من الرجال الأقوياء، ويتميز بالشجاعة والخبرة.",
            highlights: "عندما علم الملك عبدالعزيز رحمه الله بسعة خبرته العسكرية كلفه ببعض المهام العسكرية. ثم كُلف بإمارة مدينة الوجه. وتنقل بين عدد من المراكز العسكرية في جنوب المملكة، ثم عُين أميراً وقائداً عسكرياً لمنطقة جازان، ثم أبها، ثم الحدود الشمالية، وأخيراً قائداً لمنطقة حائل. استمر مزاولاً للعمل العسكري بإخلاص حتى توفي وهو على رأس العمل عام ١٣٧١هـ مخلفاً سمعة حسنة.",
            icon: <GiCrossedSwords />,
            testaments: []
        }
    ];

    return (
        <section className="figures section-padding" id="figures">
            <div className="container">
                <h2 className="section-title text-center">أعلام الأسرة والشخصيات البارزة</h2>
                <p className="section-subtitle text-center">
                    اختر الشخصية من القائمة الجانبية لاستعراض السيرة الذاتية والوثائق
                </p>

                <div className="figures-interactive-layout fade-in-up">
                    {/* Right Side: List of Figures */}
                    <div className="figures-list">
                        {figures.map((fig, idx) => (
                            <div
                                key={idx}
                                className={`figure-list-item ${activeFig === idx ? 'active' : ''}`}
                                onClick={() => setActiveFig(idx)}
                            >
                                <div className="fig-list-icon">{fig.icon}</div>
                                <div className="fig-list-info">
                                    <h3>{fig.name}</h3>
                                    <p>{fig.shortTitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Left Side: Details Pane */}
                    <div className="figure-details-pane glass-panel">
                        <div className="details-header">
                            <div className="details-icon">{figures[activeFig].icon}</div>
                            <div className="details-title">
                                <h3>{figures[activeFig].name}</h3>
                                <span className="born-badge">تاريخ الميلاد: {figures[activeFig].born}</span>
                            </div>
                        </div>

                        <div className="details-body">
                            <div className="fig-desc-text">
                                {figures[activeFig].desc.split('\n\n').map((paragraph, i) => (
                                    <p key={i}>{paragraph}</p>
                                ))}
                            </div>

                            <div className="fig-quote-box">
                                <p>{figures[activeFig].highlights}</p>
                            </div>

                            {figures[activeFig].testaments.length > 0 && (
                                <div className="fig-testaments">
                                    <h4 className="testament-title">الوصايا والمخطوطات العائدة للشيخ:</h4>
                                    <div className="testaments-grid">
                                        {figures[activeFig].testaments.map((img, i) => (
                                            <div key={i} className="testament-thumb" onClick={() => setLightboxImg(img)}>
                                                <img src={img} alt={`وثيقة ${i + 1}`} loading="lazy" />
                                                <div className="zoom-overlay"><span>توسيع</span></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Lightbox for testaments */}
                {lightboxImg && (
                    <div className="lightbox" onClick={() => setLightboxImg(null)}>
                        <button className="close-btn" onClick={() => setLightboxImg(null)}>×</button>
                        <img src={lightboxImg} alt="وثيقة" className="lightbox-img" />
                    </div>
                )}
            </div>
        </section>
    );
};

export default Figures;
