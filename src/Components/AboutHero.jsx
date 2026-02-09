import React from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section className="bg-slate-950 py-28 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest"
        >
          About Unisync Infosystems Private Limited
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight"
        >
          A Startup Focused on Building <br />
          <span className="text-blue-500 italic">Intelligent Software</span>
        </motion.h1>
        
        <p className="text-slate-400 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
          UNISYNC INFOSYSTEMS PRIVATE LIMITED is an India-based IT startup dedicated to 
          building AI-powered software products and customized technology solutions.
        </p>
      </div>

      {/* Decorative Background Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>
    </section>
  );
};

export default AboutHero;