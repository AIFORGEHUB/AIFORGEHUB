import React from 'react';
import { motion } from 'framer-motion';

const ChatbotsSection = () => {
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
        <span className="text-green-400">Chatbots y Automatizaciones</span>
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {[0, 1, 2].map((index) => (
          <motion.div 
            key={index}
            className="bg-black/60 border border-green-400/20 rounded-xl p-10 transition-all duration-300 backdrop-blur-xl hover:-translate-y-2.5 hover:border-green-400 hover:shadow-[0_10px_40px_rgba(80,200,120,0.2)]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
            whileHover={{ y: -10, scale: 1.02 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-2xl mb-4 text-green-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              {index === 0 ? 'Atención al Cliente 24/7' : index === 1 ? 'Automatización de Procesos' : 'Experiencia del Cliente Optimizada'}
            </motion.h3>
            <p className="text-white/90 text-base">
              {index === 0 ? 'Implementa chatbots inteligentes que resuelven consultas frecuentes, guían a los usuarios y mejoran la satisfacción del cliente a cualquier hora del día.' 
               : index === 1 ? 'Libera a tu equipo de tareas repetitivas automatizando procesos internos como la gestión de leads, el soporte técnico y las notificaciones.' 
               : 'Ofrece interacciones fluidas y personalizadas que mejoran la experiencia general del usuario, desde el primer contacto hasta el soporte post-venta.'}
            </p>
          </motion.div>
        ))}
      </div>
      <motion.p 
        className="text-white/90 mt-8 text-base text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
      >
        Nuestros chatbots no solo responden preguntas; aprenden y se adaptan para ofrecer soluciones cada vez más precisas y eficientes, integrándose perfectamente con tus sistemas actuales.
      </motion.p>
    </motion.section>
  );
};

export default ChatbotsSection;