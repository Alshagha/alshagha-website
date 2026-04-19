import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      <div className="app-container">
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
