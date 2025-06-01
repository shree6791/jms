import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/7952389/pexels-photo-7952389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Confident model walking on runway" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      {/* Hero Content */}
      <div className="container-custom relative z-10 text-white text-center pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-semibold mb-6">
            Let Your Talent Shine
          </h1>
          <p className="text-xl md:text-2xl font-heading italic mb-10">
            Where confidence meets the catwalk.
          </p>
          <button className="btn btn-primary text-lg">
            Enroll Now
          </button>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-8 h-12 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;