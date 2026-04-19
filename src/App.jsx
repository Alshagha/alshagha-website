import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import { fadeInUp } from './utils/animations';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import History from './components/History';
import Figures from './components/Figures';
import Tree from './components/Tree';
import Council from './components/Council';
import BrandMark from './components/BrandMark';
import References from './components/References';
import FamilyPlatform from './components/FamilyPlatform';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import GoldenThread from './components/GoldenThread';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      lenis.destroy();
    };
  }, []);

  return (
    <AnimatePresence>
      <GoldenThread />
      <div className="app-container">
        <ScrollProgress />
        <Navbar scrolled={scrolled} />
        <main className="main-content">
          <Hero />
          <History />
          <Figures />
          <Tree />
          <FamilyPlatform />
          <Council />
          <BrandMark />
          <References />
        </main>
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;
