import React from 'react';
import { motion } from 'framer-motion';

const SolucionesSection = () => {
  return (
    <motion.section 
      className="py-24 mx-5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2 
        className="text-4xl md:text-5xl mb-10 text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Soluciones de IA a la Medida de Tu <span className="text-green-400">Empresa</span>
      </motion.h2>
      <motion.p 
        className="text-white/90 text-lg mb-10 max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        En un mercado en constante evolución, la inteligencia artificial es la clave para mantener la competitividad. Ofrecemos soluciones de IA personalizadas para optimizar procesos, mejorar la toma de decisiones y potenciar tus estrategias de marketing. Adaptamos cada herramienta a las necesidades específicas de tu sector y tamaño de negocio.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <motion.div 
          className="bg-black/60 border border-green-400/20 rounded-xl p-10 transition-all duration-300 backdrop-blur-xl hover:-translate-y-2.5 hover:border-green-400 hover:shadow-[0_10px_40px_rgba(80,200,120,0.2)]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ y: -10 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-2xl mb-4 text-green-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            Optimización Operativa
          </motion.h3>
          <p className="text-white/90 text-base">
            Automatiza tareas repetitivas y mejora la eficiencia de tus flujos de trabajo con IA. Reduce costos y libera a tu equipo para iniciativas más estratégicas.
          </p>
        </motion.div>
        <motion.div 
          className="bg-black/60 border border-green-400/20 rounded-xl p-10 transition-all duration-300 backdrop-blur-xl hover:-translate-y-2.5 hover:border-green-400 hover:shadow-[0_10px_40px_rgba(80,200,120,0.2)]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ y: -10 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-2xl mb-4 text-green-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Decisiones Basadas en Datos
          </motion.h3>
          <p className="text-white/90 text-base">
            Utiliza el análisis predictivo y la inteligencia de negocio para tomar decisiones informadas, anticipar tendencias y reaccionar proactivamente al mercado.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SolucionesSection;