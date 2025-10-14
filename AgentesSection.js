import React from 'react';
import { motion } from 'framer-motion';

const AgentesSection = () => {
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
        <span className="text-green-400">Agentes de IA Personalizados</span>
      </motion.h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-white/90 text-lg mb-5">
            Imagina un asistente virtual que conoce tu negocio tan bien como tú. Desarrollamos agentes de IA personalizados para funciones específicas, desde gestores de ventas hasta analistas de datos, que aprenden de tus interacciones y optimizan sus operaciones continuamente.
          </p>
          <ul className="list-none mt-5 space-y-3">
            {[0, 1, 2, 3].map((index) => (
              <motion.li 
                key={index}
                className="text-white/90 text-base border-b border-green-400/10 pb-3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 * index }}
                viewport={{ once: true }}
              >
                ✓ {index === 0 ? 'Asistentes virtuales para ventas.' : index === 1 ? 'Agendación de reunión automatizada.' : index === 2 ? 'Gestión de inventario.' : 'Generación de informes automatizada.'}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div 
          className="w-full h-96 bg-gradient-to-br from-green-400/10 via-purple-500/20 to-green-400/10 rounded-xl flex items-center justify-center border border-green-400/30 text-center order-first lg:order-last"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05, rotate: 1 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-2xl text-green-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            🤖 AI Assistant
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AgentesSection;