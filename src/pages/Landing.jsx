
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faPlay, faStar, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Swiper for Carousels
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';


import Header from "components/Header";
import Footer from "components/Footer";
import HowItWorks from "components/HowItWorks";
import { WhatsAppIcon } from "components/WhatsAppIcon";

// Animated Scroll-in Component
const AnimatedSection = ({ children, className }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};


// Main Landing Page Component
function Landing() {
  const navigate = useNavigate();

  // State for form inputs
  const [destination, setDestination] = useState("");
  const [rooms, setRooms] = useState("");
  const [adults, setAdults] = useState("");
  const [children, setChildren] = useState("");

  // Search form submission handler
  const handleSearch = (e) => {
    e.preventDefault();
    if (!destination.trim()) {
      alert("Por favor, ingresa un destino.");
      return;
    }
    const searchParams = {
      destination: destination.trim(),
      rooms,
      adults,
      children,
    };
    navigate(`/booking?${new URLSearchParams(searchParams).toString()}`);
  };

  
  // Data for carousels
  const clientLogos = [
    "./images/client-logo-1.png",
    "./images/client-logo-2.png",
    "./images/client-logo-3.png",
    "./images/client-logo-4.png",
    "./images/client-logo-5.png",
  ];

  const testimonials = [
    {
      img: "./images/1.jpg",
      text: "Por primera vez conseguí aumentar considerablemente la rentabilidad de mi vivienda en Villajoyosa. Cuando las cosas se hacen bien, se nota…",
      author: "Amadeo Cortell",
      role: "Travel Agent",
    },
    {
      img: "./images/2.jpg",
      text: "Sin duda la tecnología es el factor más diferenciador de este gestor. De empresaria a empresarios doy mi más sincera enhorabuena.",
      author: "Elvira Cañamero",
      role: "Travel Agent",
    },
    {
      img: "./images/3.jpg",
      text: "Maravillosa experiencia. Muy atento y cercano todo el equipo. Los recomiendo",
      author: "Santiago Esparza",
      role: "Travel Guide",
    },
  ];

  const properties = [
    {
      location: "VILLAJOYOSA",
      name: "Paradise Home",
      rating: 4,
      img: "./images/app (1).png",
    },
    {
      location: "ARENALES DEL SOL",
      name: "Arenales Beach House",
      rating: 5,
      img: "./images/app (2).png",
    },
    {
      location: "GRAN ALACANT",
      name: "Relaxing Sea Views",
      rating: 5,
      img: "./images/landscape (1).png",
    },
    {
      location: "VILLAJOYOSA",
      name: "Luxe Beach Three",
      rating: 4,
      img: "./images/landscape (2).png",
    },
  ];

  return (
    <div className="bg-gray-900 text-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-screen bg-cover bg-center text-white flex items-center justify-center overflow-hidden" 
                 style={{ backgroundImage: "url(./images/slider-1.png)" }}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          
          <motion.div 
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 text-center p-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
              Maximiza el potencial de tu propiedad con{" "}
              <span className="text-teal-400">Gloove</span>
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Nos encargamos de todo para que disfrutes de tus beneficios con
              total tranquilidad.
            </p>
          </motion.div>
          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute bottom-10 z-20 w-full px-4"
          >
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-2xl max-w-4xl mx-auto border border-white/20">
              <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <input
                  type="text"
                  placeholder="Destino"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full p-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  required
                />
                <select value={rooms} onChange={(e) => setRooms(e.target.value)} className="w-full p-3 rounded-md bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-teal-400" required>
                  <option value="">Habitaciones</option>
                  {[1, 2, 3, 4, 5].map(n => <option key={n} value={n} className="text-black">{n}</option>)}
                </select>
                <select value={adults} onChange={(e) => setAdults(e.target.value)} className="w-full p-3 rounded-md bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-teal-400" required>
                  <option value="">Adultos</option>
                  {[1, 2, 3, 4, 5].map(n => <option key={n} value={n} className="text-black">{n}</option>)}
                </select>
                <select value={children} onChange={(e) => setChildren(e.target.value)} className="w-full p-3 rounded-md bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-teal-400">
                  <option value="">Niños</option>
                  {[0, 1, 2, 3, 4, 5].map(n => <option key={n} value={n} className="text-black">{n}</option>)}
                </select>
                <button type="submit" className="w-full p-3 rounded-md bg-teal-500 text-white font-bold hover:bg-teal-600 transition-colors duration-300">
                  Buscar
                </button>
              </form>
            </div>
          </motion.div>
        </section>

        {/* Properties Section */}
        <AnimatedSection className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-2">
                Nuestras Mejores Viviendas
              </h2>
              <p className="text-lg text-gray-400">
                Espacios únicos donde cada casa cuenta una historia.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {properties.map((property, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                  whileHover={{ y: -10, scale: 1.05, rotate: 1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="relative">
                    <img src={property.img} alt={property.name} className="w-full h-56 object-cover" />
                    <div className="absolute top-0 right-0 bg-teal-500 text-white px-3 py-1 m-2 rounded-full text-sm font-semibold">
                      {property.location}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{property.name}</h3>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <FontAwesomeIcon key={i} icon={faStar} className={i < property.rating ? "text-yellow-400" : "text-gray-500"} />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
        
        {/* How it Works Section */}
        <HowItWorks />

        {/* Tariffs Section */}
        <AnimatedSection className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-2">
                Nuestras Tarifas
              </h2>
              <p className="text-lg text-gray-400">
                Trabajamos de la mano de la tecnología más avanzada.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                {
                  title: "Gestión Completa",
                  price: "20%",
                  features: [
                    "Sesión fotográfica",
                    "Domotización de la Vivienda",
                    "Creación de anuncio",
                    "Publicación en plataformas",
                    "Gestión de reservas",
                    "Atención al huésped",
                    "Check-in/check-out",
                    "Call center 24H",
                    "Gestión diaria de precios",
                    "Gestión de limpieza y mantenimiento",
                    "Amenities y Kits de Bienvenida",
                  ],
                },
                {
                  title: "Gestión Esencial",
                  price: "15%",
                  features: [
                    "Sesión fotográfica",
                    "Domotización de la Vivienda",
                    "Creación de anuncio",
                    "Publicación en plataformas",
                    "Gestión de reservas",
                    "Atención al huésped",
                    "Check-in/check-out",
                    "Call center 24H",
                    "Gestión diaria de precios",
                  ],
                },
              ].map((tariff, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800 rounded-xl shadow-2xl p-8 max-w-sm w-full border-2 border-teal-500/30"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white">{tariff.title}</h3>
                    <p className="text-5xl font-extrabold text-teal-400 my-4">{tariff.price}</p>
                  </div>
                  <ul className="space-y-3 text-gray-300">
                    {tariff.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
        
        {/* Client Logos */}
        <div className="py-12 bg-black/20">
            <div className="w-full">
                <h3 className="text-center text-2xl font-semibold text-white mb-8">
                    Nuestros Aliados Estratégicos
                </h3>
                <div className="relative overflow-hidden">
                    <div className="flex animate-scroll">
                        {[...clientLogos, ...clientLogos].map((logo, index) => (
                            <div key={index} className="flex-shrink-0 mx-8">
                                <img src={logo} alt={`Client ${index + 1}`} className="max-h-12 object-contain" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* Testimonials */}
        <AnimatedSection className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-2">
                Lo que dicen nuestros clientes
              </h2>
            </div>
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{ clickable: true }}
              navigation={true}
              modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
              className="mySwiper"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index} style={{ backgroundPosition: 'center', backgroundSize: 'cover', width: '300px', height: '400px' }}>
                  <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-8 h-full flex flex-col justify-center items-center text-center">
                    <img src={testimonial.img} alt={testimonial.author} className="w-24 h-24 rounded-full mx-auto mb-6 shadow-lg border-4 border-teal-400" />
                    <p className="text-md text-gray-300 italic mb-6">
                      "{testimonial.text}"
                    </p>
                    <p className="font-bold text-teal-400">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </AnimatedSection>

        <Footer />
        <a href="#" className="fixed bottom-8 right-8 bg-teal-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-teal-600 transition-colors duration-300 z-50">
          <i className="fas fa-chevron-up"></i>
        </a>
      </main>
      <WhatsAppIcon />
    </div>
  );
}

export default Landing;
