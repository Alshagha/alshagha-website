import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp } from '../utils/animations';
import './Figures.css';
import { GiCrossedSwords, GiCrown } from 'react-icons/gi';

const Figures = () => {
    const [lightboxImg, setLightboxImg] = useState(null);
    const sliderRef = useRef(null);

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

    const scrollPrev = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: window.innerWidth * 0.8, behavior: 'smooth' });
        }
    };

    const scrollNext = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -window.innerWidth * 0.8, behavior: 'smooth' });
        }
    };

    return (
        <section className="figures-snap-section section-padding" id="figures">
            <div className="container">
                <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="figures-header-normal"
                >
                    <h2 className="section-title text-center">أعلام الأسرة والشخصيات البارزة</h2>
                    <p className="section-subtitle text-center">
                        رحلة عبر الزمن مع قامات أرست دعائم الأسرة
                    </p>
                </motion.div>
            </div>

            <div className="figures-slider-viewport" ref={sliderRef}>
                <div className="figures-slider-track">
                    {figures.map((fig, idx) => (
                        <div key={idx} className="figure-snap-card">
                            <div className="container">
                                <div className="figure-details-pane glass-panel">
                                    <div className="details-header">
                                        <div className="details-icon">{fig.icon}</div>
                                        <div className="details-title">
                                            <h3>{fig.name}</h3>
                                            <span className="born-badge">تاريخ الميلاد: {fig.born}</span>
                                        </div>
                                    </div>

                                    <div className="details-body">
                                        <div className="fig-desc-text">
                                            {fig.desc.split('\n\n').map((paragraph, i) => (
                                                <p key={i}>{paragraph}</p>
                                            ))}
                                        </div>

                                        <div className="details-body-secondary">
                                            <div className="fig-quote-box">
                                                <p>{fig.highlights}</p>
                                            </div>

                                            {fig.testaments.length > 0 && (
                                                <div className="fig-testaments">
                                                    <h4 className="testament-title">الوصايا والمخطوطات العائدة للشيخ:</h4>
                                                    <div className="testaments-grid">
                                                        {fig.testaments.map((img, i) => (
                                                            <div key={i} className="testament-thumb" onClick={() => setLightboxImg(img)}>
                                                                <motion.img
                                                                    layoutId={`testament-${img}`}
                                                                    src={img}
                                                                    alt={`وثيقة ${i + 1}`}
                                                                    loading="lazy"
                                                                />
                                                                <div className="zoom-overlay"><span>توسيع</span></div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="figures-slider-controls">
                <button className="slider-nav-btn magnetic-btn" onClick={scrollPrev}>
                    &rarr;
                </button>
                <div className="slider-indicator-dots">
                    {figures.map((_, i) => (
                        <div key={i} className="slider-dot" />
                    ))}
                </div>
                <button className="slider-nav-btn magnetic-btn" onClick={scrollNext}>
                    &larr;
                </button>
            </div>

            {/* Lightbox for testaments */}
            <AnimatePresence>
                {lightboxImg && (
                    <div className="lightbox" onClick={() => setLightboxImg(null)}>
                        <motion.div
                            className="lightbox-backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />
                        <motion.button
                            className="close-btn"
                            onClick={() => setLightboxImg(null)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >×</motion.button>
                        <motion.img
                            layoutId={`testament-${lightboxImg}`}
                            src={lightboxImg}
                            alt="وثيقة"
                            className="lightbox-img"
                        />
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Figures;
