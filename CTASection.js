import React from 'react';
import { motion } from 'framer-motion';

const CTASection = ({ onClose }) => {
  const calendlyLink = "https://calendly.com/juan-agudelo/30min";
  const funkolLink = "https://funkol.app/c/juanagudelo";

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center p-5 bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => e.target === e.currentTarget && onClose?.()}
    >
      <motion.section 
        className="text-center max-w-4xl w-full bg-[radial-gradient(circle_at_center,rgba(80,200,120,0.1)_0%,transparent_70%)] rounded-2xl p-8 md:p-20 relative max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 50 }}
        transition={{ duration: 0.4 }}
        onClick={(e) => e.stopPropagation()}
      >
        <motion.button
          className="absolute top-4 right-4 text-white hover:text-green-400 text-2xl"
          onClick={onClose}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ×
        </motion.button>
        <motion.h2 
          className="text-3xl md:text-4xl mb-6 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Dime Cómo Podemos <span className="text-green-400">Ayudarte</span>
        </motion.h2>
        <motion.p 
          className="text-base md:text-lg text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          ¿Estás listo para transformar tu negocio con inteligencia artificial? 
          <br />
          Puedes agendar una Reunión de 30 Minutos totalmente gratis o enviarnos un mensaje Directo por 3 dólares para mas prioridad.
          <br />
          ¡Juntos, exploraremos las mejores soluciones para tu Negocio!
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.a 
            href={calendlyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 md:p-10 bg-black/80 border-2 border-green-400 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(80,200,120,0.4)] block cursor-pointer text-decoration-none"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <motion.h3 
              className="text-green-400 text-xl md:text-2xl mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              Consulta Gratuita
            </motion.h3>
            <p className="text-white/90 text-sm md:text-base">
              Explora cómo la IA puede beneficiar a tu negocio sin compromiso.
            </p>
          </motion.a>
          <motion.a 
            href={funkolLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 md:p-10 bg-black/80 border-2 border-green-400 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(80,200,120,0.4)] block cursor-pointer text-decoration-none"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <motion.h3 
              className="text-green-400 text-xl md:text-2xl mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Propuesta Personalizada
            </motion.h3>
            <p className="text-white/90 text-sm md:text-base">
              Recibe un plan de acción detallado y adaptado a tus objetivos por $3 USD.
            </p>
          </motion.a>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default CTASection;