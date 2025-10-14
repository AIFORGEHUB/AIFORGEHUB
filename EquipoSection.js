import React from 'react';
import { motion } from 'framer-motion';

const EquipoSection = () => {
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
        Nuestra Visión y <span className="text-green-400">Valores</span>
      </motion.h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          className="w-full h-96 bg-gradient-to-br from-green-400/10 via-purple-500/20 to-green-400/10 rounded-xl flex items-center justify-center border border-green-400/30 text-center order-first lg:order-last"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05, rotate: -1 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-2xl text-green-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            👥 Team Work
          </motion.p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-white/90 text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <strong className="text-green-400">VISIONAICOMPANY</strong> nació de la visión de hacer que la inteligencia artificial sea accesible para empresas de todos los tamaños. Comenzamos con una gran pasión por la innovación, y eso venimos a ofrecer.
          </motion.p>
          <motion.p 
            className="text-white/90 text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Hoy, somos una empresa con la ilusión y las ganas de mejorar la experiencia del cliente y aumentar su eficiencia operativa mediante soluciones de IA personalizadas.
          </motion.p>
          <motion.p 
            className="text-white/90 text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Nuestro enfoque se centra en entender las necesidades únicas de cada cliente y desarrollar soluciones que no solo resuelvan problemas actuales, sino que también preparen a las empresas para el futuro digital.
          </motion.p>
          <motion.div 
            className="mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-green-400 text-xl mb-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              Nuestros Valores:
            </motion.h3>
            <ul className="list-none space-y-3">
              {[0, 1, 2, 3].map((index) => (
                <motion.li 
                  key={index}
                  className={index === 3 ? "text-white/90 text-base" : "text-white/90 text-base border-b border-green-400/10 pb-3"}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 * (index + 1) }}
                  viewport={{ once: true }}
                >
                  <strong className="text-green-400"> {index === 0 ? 'Orientación al Cliente:' : index === 1 ? 'Innovación:' : index === 2 ? 'Transparencia:' : 'Impacto:'} </strong>
                  {index === 0 ? 'Tu éxito es nuestra prioridad.' 
                   : index === 1 ? 'Buscamos soluciones eficientes.' 
                   : index === 2 ? 'Comunicamos de forma clara y honesta.' 
                   : 'Nos enfocamos en resultados tangibles.'}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EquipoSection;