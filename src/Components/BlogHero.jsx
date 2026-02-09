import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Sparkles } from 'lucide-react';

const BlogHero = () => {
  return (
    <section className="bg-slate-950 py-24 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest"
        >
          <Sparkles size={14} /> Insights & Industry Trends
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Unisync <span className="text-blue-500">Resources</span>
        </motion.h1>
        
        <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Stay updated with expert insights, technology trends, automation strategies, 
          and digital transformation tips to scale your business.
        </p>
      </div>

      {/* Background Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,#1e293b_0%,transparent_70%)] opacity-50"></div>
    </section>
  );
};

export default BlogHero;