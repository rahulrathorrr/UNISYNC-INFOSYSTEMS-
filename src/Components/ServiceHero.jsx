import React from 'react';
import { motion } from 'framer-motion';

const ServiceHero = () => {
  return (
    <section className="bg-slate-950 py-24 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Our <span className="text-blue-500">Expertise</span>
        </motion.h1>
        <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
          From building agile teams to developing intelligent software, we deliver 
          end-to-end technology solutions designed for scale and business transformation.
        </p>
      </div>
      {/* Decorative Blur Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl -ml-32 -mb-32" />
    </section>
  );
};

export default ServiceHero;