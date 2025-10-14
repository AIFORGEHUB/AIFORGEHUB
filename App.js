import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MarbleOverlay from './components/MarbleOverlay';
import Header from './components/Header';
import Hero from './components/Hero';
import SolucionesSection from './components/SolucionesSection';
import MarketingSection from './components/MarketingSection';
import ChatbotsSection from './components/ChatbotsSection';
import AgentesSection from './components/AgentesSection';
import MisionSection from './components/MisionSection';
import EquipoSection from './components/EquipoSection';
import CTASection from './components/CTASection';

const App = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleContactClick = () => {
    setShowContactModal(true);
  };

  const closeContactModal = () => {
    setShowContactModal(false);
  };

  const controlHeader = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        // Scrolling down and past threshold, hide header
        setShowHeader(false);
      } else if (window.scrollY < lastScrollY || window.scrollY <= 0) {
        // Scrolling up or at top, show header
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlHeader);
    return () => window.removeEventListener('scroll', controlHeader);
  }, [lastScrollY]);

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white leading-relaxed relative overflow-x-hidden"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      }}
      transition={{ duration: 0.5 }}
    >
      <MarbleOverlay />
      <Header onContactClick={handleContactClick} showHeader={showHeader} />
      <div className="container mx-auto px-5 max-w-7xl pt-24"> {/* pt-24 for fixed header */}
        <Hero />
        <SolucionesSection />
        <MarketingSection />
        <ChatbotsSection />
        <AgentesSection />
        <MisionSection />
        <EquipoSection />
      </div>
      <AnimatePresence mode="wait">
        {showContactModal && <CTASection onClose={closeContactModal} />}
      </AnimatePresence>
    </motion.div>
  );
};

export default App;