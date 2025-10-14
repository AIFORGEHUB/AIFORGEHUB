import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section 
      className="text-center px-5 py-24 bg-[radial-gradient(circle_at_center,rgba(80,200,120,0.05)_0%,transparent_70%)]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h1 
        className="text-[150px] md:text-[180px] lg:text-[200px] mb-5 text-white font-bold leading-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Impulsa tu Negocio con <span className="text-green-400 [text-shadow:_0_0_20px_rgba(80,200,120,0.5)]">Inteligencia Artificial</span>
      </motion.h1>
      <motion.p 
        className="text-2xl md:text-3xl text-white/90 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Transformamos tus operaciones y marketing con soluciones personalizadas para un crecimiento sin límites.
      </motion.p>
    </motion.section>
  );
};

export default Hero;