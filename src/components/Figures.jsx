import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { fadeInUp } from '../utils/animations';
import './Figures.css';
import { GiCrossedSwords, GiCrown } from 'react-icons/gi';

const Figures = () => {
    const [lightboxImg, setLightboxImg] = useState(null);
    const targetRef = useRef(null);

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

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    // In RTL layout, the next flex items are rendered to the left.
    // To bring them into view, we must translate the track to the RIGHT (positive x).
    const scrollEnd = `${100 * (figures.length - 1) / figures.length}%`;

    // Add "pause" segments to the scroll so the user scrolls down a bit before it pans
    const x = useTransform(scrollYProgress, [0, 0.15, 0.9, 1], ["0%", "0%", scrollEnd, scrollEnd]);

    return (
        <section ref={targetRef} className="figures-h-scroll" id="figures" style={{ height: `${figures.length * 150}vh` }}>
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
                    </motion.div>
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
