import React from 'react';
import { motion } from 'framer-motion';

const MarketingSection = () => {
  return (
    <motion.section 
      className="py-24 mx-5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2 
        className="text-4xl md:text-5xl mb-16 text-white text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="text-green-400">Marketing Digital</span>
      </motion.h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          className="w-full h-96 bg-gradient-to-br from-green-400/10 via-purple-500/20 to-green-400/10 rounded-xl flex items-center justify-center border border-green-400/30 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-2xl text-green-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            📊 Analytics Dashboard
          </motion.p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-white/90 text-lg mb-5">
            Lleva tu marketing al siguiente nivel con nuestras estrategias. Desde la segmentación de audiencias hasta la personalización de contenidos y la optimización de campañas publicitarias.
          </p>
          <ul className="list-none mt-5 space-y-3">
            <motion.li 
              className="text-white/90 text-base border-b border-green-400/10 pb-3"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              viewport={{ once: true }}
            >
              ✓ Segmentación de audiencia avanzada.
            </motion.li>
            <motion.li 
              className="text-white/90 text-base border-b border-green-400/10 pb-3"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              viewport={{ once: true }}
            >
              ✓ Personalización de contenidos.
            </motion.li>
            <motion.li 
              className="text-white/90 text-base border-b border-green-400/10 pb-3"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 1 }}
              viewport={{ once: true }}
            >
              ✓ Optimización automática de campañas publicitarias.
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MarketingSection;