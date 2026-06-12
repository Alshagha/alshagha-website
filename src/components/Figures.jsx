import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp } from '../utils/animations';
import './Figures.css';
import { GiCrossedSwords, GiCrown } from 'react-icons/gi';

const Figures = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [lightboxImg, setLightboxImg] = useState(null);

    const figures = [
        {
            name: "الشيخ محمد بن منصور بن محمد ابن حمود (الملقب بالشقحاء)",
            shortTitle: "أول من لُقب بالشقحاء",
            born: "١٢٣٥ هـ - عنيزة",
            desc: "يُعدّ محمد بن منصور بن محمد ابن حمود (الملقب بالشقحاء) أول من عُرف بهذا اللقب. وُلِد في مدينة عنيزة سنة 1235هـ، لأمه سلمى بنت محمد بن عفيصان، وتزوج من زبيدة العماري، ورُزق بثلاثة أبناء هم: منصور وعلي ولهما ذرية، وعبدالرحمن الذي (انقطعت ذريته). \n\nكان رحمه اللّٰه تاجرًا ذا مكانة في عنيزة لكرمه وشجاعته، كما كان من مُلّاك الإبل ومحبي اقتنائها.ونظرًا لطبيعة عمله التجاري، كان كثير التنقل والسفر بين المناطق، وقد كان يتنقّل في أسفاره على راحلةٍ شقحاء اتخذها مركبًا له في ترحاله. وفي إحدى رحلاته الطويلة، اعتاد أهالي عنيزة ترقب القوافل القادمة من المرتفعات المحيطة بالبلدة، فشاهدوا راحلة شقحاء اللون مقبلة من بعيد، فعرفوا أنها راحلته، وبادروا إلى تبشير أهله بسلامة عودته واقتراب وصوله. \n\nوتناقل الأهالي هذه القصة في مجالسهم، وأصبح يُشار إليه بـ «راعي الشقحاء»، حتى غلب عليه هذا الوصف وتحول إلى لقب ملازم له ولذريته من بعده. وقد ورد هذا اللقب مثبتًا في الوثائق الرسمية بصيغة: محمد بن منصور بن محمد بن حمود (الملقب بالشقحاء).",
            highlights: "وللشيخ محمد أملاك في عنيزة، ووصية وأوقاف بتاريخ ١٢٦١هـ تعد من أهم وثائق الأسرة، وقد تولى نضارة هذه الأوقاف أبناؤه وأحفاده حتى وقتنا الحاضر والحمد لله، وقد توفي سنة ١٢٩٣هـ رحمه الله.",
            icon: <GiCrown />,
            testaments: [
                '/images/testament_1.jpg',
                '/images/testament_2.jpg',
                '/images/testament_3.jpg'
            ]
        },
        {
            name: "الأمير والقائد العسكري منصور بن صالح بن منصور بن صالح الشقحاء",
            shortTitle: "الأمير و القائد العسكري",
            born: "١٣١٥ هـ - بريدة",
            desc: "نشأ في كنف والديه حتى كبر. اشتغل بالتجارة، وسافر مع الحملات التي تسمى العقيلات إلى الأردن والشام، ثم التحق بالجيش الفرنسي هناك، وتعلم كثيرًا من الفنون العسكرية ومنها المدفعية والرماية على اختلاف أنواعها. \n\nفي عام ١٣٤٩هـ عاد إلى المملكة، والتحق بالسلك العسكري في مدينة جدة. كان يعد من الرجال الأقوياء، ويتميز بالشجاعة والخبرة.",
            highlights: " عندما علم الملك عبد العزيز رحمه اللّٰه بسعة خبرته العسكرية كلفه ببعض المهام العسكرية. ومن ذلك قائدًا عسكريًّا في جيزان، وبعد انتهاء الحرب مع اليمن عُين أميرًا على جيزان، ثم تولى بعض المهام العسكرية في أبها والمنطقة الجنوبية، ثم في الحدود الشمالية، وبعد ذلك عُين أميرًا لمدينة الوجه، ثم عاد كقائد للجيش في حائل. واستمر مزاولًا للعمل العسكري بإخلاص حتى توفي وهو على رأس العمل عام ١٣٧١هـ ومات في محافظة جدة حيث (نقل باخلاء طبي) أثر مرض ذات الجنب الذي أصيب به في حائل من جراء البرد القارس  ودفن في مقبرة (أمنا حواء) -رحمه الله- حسب توجيهات سمو وزير الدفاع آنذاك ، مخلفًا سمعة حسنة. رحمهم الله جميعا وغفر لهم وجميع موتى المسلمين.",
            icon: <GiCrossedSwords />,
            testaments: [
                '/images/mansour_doc_1.jpeg',
                '/images/mansour_doc_2.jpeg',
                '/images/mansour_doc_3.jpeg',
                '/images/mansour_doc_4.jpeg'
            ],
            testamentsTitle: "الوثائق التاريخية العائدة للامير و القائد:"
        },
        {
            name: "الأمير منصور بن محمد بن منصور بن صالح الشقحاء",
            shortTitle: "الأمير",
            born: "١٢٩٠ هـ -بريدة",
            desc: "الأمير منصور بن محمد المنصور الشقحاء،المولود في مدينة بريدة بمنطقة القصيم عام ١٢٩٠ هـ، ونشأ بها، عمل في بداية حياته بالتجارة وشارك مع والده في رحلات العقيلات، عينه الملك المؤسس عبدالعزيز بن عبدالرحمن آل سعود أميرًا لرجال ألمع بعسير، ثم أميرًا على القحمة، ثم أميرًا على بيش، وتوفى ودفن في مدينة جيزان عام ١٣٦٨ هـ رحمه الله.",
            highlights: "",
            icon: <GiCrown />,
            testaments: [
                '/images/Image (17).jpeg',
                '/images/Image (18).jpeg'
            ],
            testamentsTitle: "الوثائق والقرارات التاريخية العائدة للأمير:"
        }
    ];



    const renderFigureCard = (fig, isMobile = false) => {
        const hasTestaments = fig.testaments && fig.testaments.length > 0;
        return (
            <div className={`figure-details-pane glass-panel ${isMobile ? 'mobile-pane-override' : ''}`}>
                <div className="details-header">
                    <div className="details-icon">{fig.icon}</div>
                    <div className="details-title">
                        <h3>{fig.name}</h3>
                        <span className="born-badge">تاريخ الميلاد: {fig.born}</span>
                    </div>
                </div>

                <div className={`details-body ${!hasTestaments ? 'single-column' : ''}`}>
                    <div className="fig-main-content">
                        <div className="fig-desc-text">
                            {fig.desc.split('\n\n').map((paragraph, i) => (
                                <p key={i}>{paragraph}</p>
                            ))}
                        </div>
                        {fig.highlights && (
                            <div className="fig-quote-box">
                                <p>{fig.highlights}</p>
                            </div>
                        )}
                    </div>

                    {hasTestaments && (
                        <div className="details-body-secondary">
                            <div className="fig-testaments">
                                <h4 className="testament-title">{fig.testamentsTitle || "الوصايا والمخطوطات العائدة للشيخ:"}</h4>
                                <div className="testaments-grid">
                                    {fig.testaments.map((img, i) => (
                                        <div key={i} className="testament-thumb" onClick={() => setLightboxImg(img)}>
                                            <motion.img
                                                layoutId={`testament-${img}`}
                                                src={img}
                                                alt={`وثيقة ${i + 1}`}
                                                loading="eager"
                                            />
                                            <div className="zoom-overlay"><span>توسيع</span></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    };

    return (
        <section className="figures-h-scroll" id="figures">
            {/* Desktop View with Tabs */}
            <div className="figures-desktop-view">
                <div className="container">
                    <div className="figures-desktop-header">
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

                    <div className="figures-desktop-tabs">
                        {figures.map((fig, idx) => (
                            <button
                                key={idx}
                                className={`figure-desktop-tab-btn ${activeTab === idx ? 'active' : ''}`}
                                onClick={() => setActiveTab(idx)}
                            >
                                {activeTab === idx && (
                                    <motion.div
                                        layoutId="activeTabIndicator"
                                        className="active-tab-bg"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                                <span className="tab-icon">{fig.icon}</span>
                                <span className="tab-title">{fig.shortTitle}</span>
                            </button>
                        ))}
                    </div>

                    <div className="figures-desktop-content">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                {renderFigureCard(figures[activeTab], false)}
                            </motion.div>
                        </AnimatePresence>
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
                            >
                                {renderFigureCard(figures[activeTab], true)}
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
