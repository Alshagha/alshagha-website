import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import History from './History';
import Tree from './Tree';
import './TimeJourney.css';

const TimeJourney = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    }); // Automatically uses ["start start", "end end"]

    // The container will hold the horizontal track. Since it's RTL, we translate positively on the X axis to move content left-to-right (which means the view moves right-to-left, wait).
    // In RTL, moving the container to `transform: translateX(100%)` moves the element right. 
    // We want the view to scroll *left* into the timeline, so we move the container to the *right* (translate X from 0% to say, 60%). 
    // Or simpler: disable RTL purely for the translation and handle direction via flex layout.
    // Let's translate negatively for standard behavior if the track uses standard flex, or positively if it's RTL.
    // Actually, in CSS, `translateX(100px)` always moves right, `translateX(-100px)` always moves left, regardless of RTL/LTR.
    // If the items are laid out right-to-left (item 1 on right, item 2 on left), to see item 2 we must translate the container to the RIGHT (translateX positive).
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "calc(100vw - 100%)"]);

    // Caravan moves from right to left across the screen. 
    // If it starts right (0%) and ends left (100% of container or just traversing the viewport).
    const caravanX = useTransform(scrollYProgress, [0, 1], ["100vw", "-20vw"]);

    return (
        <section ref={targetRef} className="time-journey" id="time-journey">
            <div className="time-journey-sticky">
                <motion.div style={{ x }} className="time-journey-track">
                    <History />
                    <div className="track-separator"></div>
                    <Tree />
                </motion.div>

                <div className="caravan-container">
                    <div className="ground-line"></div>
                    <motion.div style={{ x: caravanX }} className="animated-caravan">
                        <img src="/images/caravan.png" alt="قافلة عبر الزمن" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TimeJourney;
