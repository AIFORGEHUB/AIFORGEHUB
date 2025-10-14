import React from 'react';
import { motion } from 'framer-motion';

const MisionSection = () => {
  return (
    <motion.section 
      className="py-24 mx-5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2 
        className="text-4xl md:text-5xl mb-10 text-white text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Nuestra <span className="text-green-400">Misión</span>
      </motion.h2>
      <motion.p 
        className="text-white/90 text-lg mb-10 max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Ofrecer el acceso a la inteligencia artificial, proporcionando soluciones innovadoras que impulsen el crecimiento empresarial.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        <motion.div 
          className="p-8 bg-black/60 rounded-xl border border-green-400/20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02, y: -5 }}
          viewport={{ once: true }}
        >
          <motion.h4 
            className="text-green-400 text-xl mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            💡 Innovación Constante
          </motion.h4>
          <p className="text-white/90">
            Estamos siempre a la vanguardia de las últimas tecnologías en IA para ofrecerte las soluciones más avanzadas y eficaces.
          </p>
        </motion.div>
        <motion.div 
          className="p-8 bg-black/60 rounded-xl border border-green-400/20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.02, y: -5 }}
          viewport={{ once: true }}
        >
          <motion.h4 
            className="text-green-400 text-xl mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            🤝 Colaboración Cercana
          </motion.h4>
          <p className="text-white/90">
            Trabajamos codo a codo contigo para entender tus desafíos y construir soluciones que generen un valor real y medible.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MisionSection;