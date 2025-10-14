import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Header = ({ onContactClick, showHeader }) => {
  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const variants = {
    visible: { 
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    hidden: { 
      y: -100,
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  return (
    <motion.header 
      className="relative z-10 px-12 py-5 flex justify-between items-center bg-black/80 backdrop-blur-xl border-b border-green-400/20 fixed w-full top-0"
      variants={variants}
      animate={showHeader ? "visible" : "hidden"}
      initial="visible"
    >
      <motion.div 
        className="flex items-center gap-4 cursor-pointer"
        onClick={handleHomeClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Logo />
      </motion.div>
      <motion.button 
        onClick={onContactClick}
        className="px-8 py-3 bg-transparent text-green-400 border-2 border-green-400 rounded-full cursor-pointer font-semibold text-sm uppercase tracking-wide transition-all duration-300 hover:bg-green-400 hover:text-black hover:shadow-[0_0_20px_rgba(80,200,120,0.6)] hover:-translate-y-0.5"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        Contáctanos
      </motion.button>
    </motion.header>
  );
};

export default Header;