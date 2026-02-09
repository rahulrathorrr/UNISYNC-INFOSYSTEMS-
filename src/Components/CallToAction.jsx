import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[3rem] p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to bring your idea to life?</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
              Our team is here to understand your needs and craft a solution tailored to your goals. Let's build something extraordinary together.
            </p>
            
            {/* Link wrapper for redirection */}
            <Link to="/contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg shadow-lg inline-flex items-center gap-2"
              >
                Let’s Build Together <ArrowRight size={20} />
              </motion.button>
            </Link>
          </div>

          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full -ml-32 -mb-32 blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;