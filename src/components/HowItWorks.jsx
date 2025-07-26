// src/components/HowItWorks.jsx
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import icon1 from '../assets/images/como_funcionamos_img1.png';
import icon2 from '../assets/images/como_funcionamos_img2.png';
import icon3 from '../assets/images/como_funcionamos_img3.png';
import icon4 from '../assets/images/como_funcionamos_img4.png';
import icon5 from '../assets/images/como_funcionamos_img5.png';

const HowItWorks = () => {
  const steps = [
    {
      icon: icon4,
      title: 'Estudio de viabilidad',
      description: 'Analizamos tu vivienda y te asistimos para obtener la licencia turística si aún no la tienes.',
    },
    {
      icon: icon1,
      title: 'Reportaje fotográfico y de video',
      description: 'Un fotógrafo profesional se encargará de realzar al máximo las cualidades de tu vivienda.',
    },
    {
      icon: icon3,
      title: 'Publicación en más de 20 portales',
      description: 'Booking, Airbnb, VRBO... y gestores especializados para empresas y agencias.',
    },
    {
      icon: icon2,
      title: 'Instalación de domótica eficiente',
      description: 'Implementamos cerraduras y suministros inteligentes para un control óptimo del consumo.',
    },
    {
      icon: icon5,
      title: '¡A Recibir Ingresos!',
      description: 'Nuestro equipo se ocupa de todo, para que tú solo te preocupes de disfrutar tus ganancias.',
    },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100,
      },
    },
  };

  return (
    <section ref={ref} className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            Así de fácil es empezar a rentabilizar tu vivienda
          </h2>
          <p className="text-lg text-gray-400">
            Un proceso simple y transparente para maximizar tus ingresos.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 h-full w-1 bg-gradient-to-b from-teal-500 to-transparent transform -translate-x-1/2"></div>
          
          <motion.div
            className="space-y-16"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row items-center"
                variants={itemVariants}
              >
                {/* Content Left */}
                <div className={`w-full md:w-5/12 ${index % 2 !== 0 ? 'md:order-3' : ''}`}>
                  <div className="text-center md:text-left p-6">
                    <h3 className="text-2xl font-bold text-teal-400 mb-2">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>

                {/* Timeline Circle and Icon */}
                <div className="w-full md:w-2/12 flex justify-center md:order-2 relative">
                  <div className="z-10 bg-gray-800 border-4 border-teal-500 rounded-full w-32 h-32 flex items-center justify-center">
                    <img src={step.icon} alt={step.title} className="w-20 h-20 object-contain" />
                  </div>
                </div>

                {/* Spacer for alignment on larger screens */}
                <div className="w-5/12 hidden md:block md:order-1"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
