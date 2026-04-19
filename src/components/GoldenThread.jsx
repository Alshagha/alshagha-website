import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import './GoldenThread.css';

const GoldenThread = () => {
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="golden-thread-container">
            {/* The main golden line */}
            <motion.div
                className="golden-thread-line"
                style={{ scaleY }}
            />

            {/* The glowing tip */}
            <motion.div
                className="golden-thread-glow"
                style={{
                    top: `calc(${scrollYProgress.get() * 100}% - 10px)`
                }}
            />
        </div>
    );
};

export default GoldenThread;
