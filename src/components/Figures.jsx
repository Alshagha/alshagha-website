import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { fadeInUp } from '../utils/animations';
import './Figures.css';
import { GiCrossedSwords, GiCrown } from 'react-icons/gi';

const Figures = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [lightboxImg, setLightboxImg] = useState(null);
    const targetRef = useRef(null);

    const figures = [
        {
            name: "الشيخ محمد بن منصور بن محمد بن حمود الشقحاء",
            shortTitle: "أول من لُقب بالشقحاء",
            born: "١٢٣٥ هـ - عنيزة",
            desc: "يُعدّ محمد بن منصور بن محمد بن حمود (الملقب بالشقحاء) أول من عُرف بهذا اللقب. وُلِد في مدينة عنيزة سنة 1235هـ، لأمه سلمى بنت محمد بن عفيصان، وتزوج من زبيدة العماري، ورُزق بثلاثة أبناء هم: منصور وعلي ولهما ذرية، وعبدالرحمن الذي (انقطعت ذريته). \n\nكان رحمه اللّٰه تاجرًا ذا مكانة في عنيزة لكرمه وشجاعته، كما كان من مُلّاك الإبل ومحبي اقتنائها.ونظرًا لطبيعة عمله التجاري، كان كثير التنقل والسفر بين المناطق،وقد كان يتنقّل في أسفاره على راحلةٍ شقحاء اتخذها مركبًا له في ترحاله. وفي إحدى رحلاته الطويلة، اعتاد أهالي عنيزة ترقب القوافل القادمة من المرتفعات المحيطة بالبلدة، فشاهدوا راحلة شقحاء اللون مقبلة من بعيد، فعرفوا أنها راحلته، وبادروا إلى تبشير أهله بسلامة عودته واقتراب وصوله. \n\nوتناقل الأهالي هذه القصة في مجالسهم، وأصبح يُشار إليه بـ «راعي الشقحاء»، حتى غلب عليه هذا الوصف وتحول إلى لقب ملازم له ولذريته من بعده. وقد ورد هذا اللقب مثبتًا في الوثائق الرسمية بصيغة: محمد بن منصور بن محمد بن حمود (الملقب بالشقحاء).",
            highlights: "وللشيخ محمد أملاك في عنيزة، ووصية وأوقاف بتاريخ ١٢٦١هـ تعد من أهم وثائق الأسرة، وقد تولى نضارة هذه الأوقاف أبناؤه وأحفاده حتى وقتنا الحاضر والحمد لله، وقد توفي سنة ١٢٩٣هـ رحمه الله.",
            icon: <GiCrown />,
            testaments: [
                '/images/testament_1.jpg',
                '/images/testament_2.jpg',
                '/images/testament_3.jpg'
            ]
        },
        {
            name: "الأمير و القائد العسكري منصور بن صالح بن منصور بن صالح الشقحاء",
            shortTitle: "الأمير و القائد العسكري",
            born: "١٣١٥ هـ - بريدة",
            desc: "نشأ في كنف والديه حتى كبر. اشتغل بالتجارة، وسافر مع الحملات التي تسمى العقيلات إلى الأردن والشام، ثم التحق بالجيش الفرنسي هناك، وتعلم كثيرًا من الفنون العسكرية ومنها المدفعية والرماية على اختلاف أنواعها. \n\nفي عام ١٣٤٩هـ عاد إلى المملكة، والتحق بالسلك العسكري في مدينة جدة. كان يعد من الرجال الأقوياء، ويتميز بالشجاعة والخبرة.",
            highlights: "عندما علم الملك عبدالعزيز رحمه الله بسعة خبرته العسكرية كلفه ببعض المهام العسكرية. ثم كُلف بإمارة مدينة الوجه. وتنقل بين عدد من المراكز العسكرية في جنوب المملكة، ثم عُين أميرًا وقائدًا عسكريًا لمنطقة جازان، ثم أبها، ثم الحدود الشمالية، وأخيرًا قائدًا عسكريًا لمنطقة حائل. استمر مزاولًا للعمل العسكري بإخلاص حتى توفي وهو على رأس العمل عام ١٣٧١هـ مخلفًا سمعة حسنة.",
            icon: <GiCrossedSwords />,
            testaments: []
        },
        {
            name: "الأمير منصور بن محمد بن منصور بن صالح الشقحاء",
            shortTitle: "أمير مركز الشعبين",
            born: "١٣٢٩ هـ - بريدة",
            desc: "ولد الأمير منصور بن محمد في مدينة بريدة في القصيم سنة ١٣٢٩هـ، وكان في بداية حياته يعمل بالتجارة وسافر مع حملات العقيلات، واستقر مدة من الزمن في بلاد الشام، والتحق بالجيش الفرنسي، وبعد ذلك عاد إلى الوطن والتحق بالسلك العسكري في مدينة جدة، ثم انتقل إلى شرطة رجال ألمع، ثم إلى إمارة بيش، ثم إمارة القحمة، التابعتين لمنطقة جازان، ثم عين أميرًا على مركز الشعبين (رجال ألمع)، وتوفي في جازان سنة ١٣٦٨هـ رحمه اللّٰه .",
            highlights: "",
            icon: <GiCrown />,
            testaments: []
        }
    ];

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    // In RTL layout, the next flex items are rendered to the left.
    // To bring them into view natively and perfectly, we translate exactly [N-1] viewport widths (vw) to the RIGHT (positive).
    const scrollEnd = `${100 * (figures.length - 1)}vw`;

    // Add "pause" segments to the scroll so the user scrolls down a bit before it pans
    const x = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], ["0vw", "0vw", scrollEnd, scrollEnd]);

    return (
        <section ref={targetRef} className="figures-h-scroll" id="figures" style={{ height: `${figures.length * 150}vh` }}>
            <div className="figures-desktop-view">
                <div className="figures-sticky-container">
                    <div className="figures-header-absolute">
                        <div className="container">
                            <motion.h2
                                variants={fadeInUp}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                className="section-title text-center"
                            >
                                أعلام الأسرة والشخصيات البارزة
                            </motion.h2>
                            <motion.p
                                variants={fadeInUp}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                className="section-subtitle text-center"
                            >
                                رحلة عبر الزمن مع قامات أرست دعائم الأسرة
                            </motion.p>
                        </div>
                    </div>

                    <div className="figures-slider-viewport">
                        <motion.div
                            className="figures-slider-track"
                            style={{ x, width: `${figures.length * 100}vw` }}
                        >
                            {figures.map((fig, idx) => (
                                <div key={idx} className="figure-h-card-wrapper" style={{ width: '100vw' }}>
                                    <div className="container h-100 d-flex-center">
                                        <div className="figure-details-pane glass-panel">
                                            <div className="details-header">
                                                <div className="details-icon">{fig.icon}</div>
                                                <div className="details-title">
                                                    <h3>{fig.name}</h3>
                                                    <span className="born-badge">تاريخ الميلاد: {fig.born}</span>
                                                </div>
                                            </div>

                                            <div className={`details-body ${(!fig.highlights && (!fig.testaments || fig.testaments.length === 0)) ? 'single-column' : ''}`}>
                                                <div className="fig-desc-text">
                                                    {fig.desc.split('\n\n').map((paragraph, i) => (
                                                        <p key={i}>{paragraph}</p>
                                                    ))}
                                                </div>

                                                {(!fig.highlights && (!fig.testaments || fig.testaments.length === 0)) ? null : (
                                                    <div className="details-body-secondary">
                                                        {fig.highlights && (
                                                            <div className="fig-quote-box">
                                                                <p>{fig.highlights}</p>
                                                            </div>
                                                        )}

                                                        {fig.testaments && fig.testaments.length > 0 && (
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
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Mobile View with Tabs */}
            <div className="figures-mobile-view">
                <div className="container">
                    <motion.h2
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="section-title text-center"
                    >
                        أعلام الأسرة والشخصيات البارزة
                    </motion.h2>
                    <motion.p
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="section-subtitle text-center"
                    >
                        رحلة عبر الزمن مع قامات أرست دعائم الأسرة
                    </motion.p>

                    <div className="figures-tabs-container">
                        <div className="figures-tabs-scroll">
                            {figures.map((fig, idx) => (
                                <button
                                    key={idx}
                                    className={`figure-tab-btn ${activeTab === idx ? 'active' : ''}`}
                                    onClick={() => setActiveTab(idx)}
                                >
                                    {fig.shortTitle}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="figures-mobile-content">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                                className="figure-details-pane glass-panel mobile-pane-override"
                            >
                                <div className="details-header">
                                    <div className="details-icon">{figures[activeTab].icon}</div>
                                    <div className="details-title">
                                        <h3>{figures[activeTab].name}</h3>
                                        <span className="born-badge">تاريخ الميلاد: {figures[activeTab].born}</span>
                                    </div>
                                </div>

                                <div className={`details-body ${(!figures[activeTab].highlights && (!figures[activeTab].testaments || figures[activeTab].testaments.length === 0)) ? 'single-column' : ''}`}>
                                    <div className="fig-desc-text">
                                        {figures[activeTab].desc.split('\n\n').map((paragraph, i) => (
                                            <p key={i}>{paragraph}</p>
                                        ))}
                                    </div>

                                    {(!figures[activeTab].highlights && (!figures[activeTab].testaments || figures[activeTab].testaments.length === 0)) ? null : (
                                        <div className="details-body-secondary">
                                            {figures[activeTab].highlights && (
                                                <div className="fig-quote-box">
                                                    <p>{figures[activeTab].highlights}</p>
                                                </div>
                                            )}

                                            {figures[activeTab].testaments && figures[activeTab].testaments.length > 0 && (
                                                <div className="fig-testaments">
                                                    <h4 className="testament-title">الوصايا والمخطوطات العائدة للشيخ:</h4>
                                                    <div className="testaments-grid">
                                                        {figures[activeTab].testaments.map((img, i) => (
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
                                    )}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
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
