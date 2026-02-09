import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Zap, Users, Cpu } from 'lucide-react';

const Hero = () => {
  const features = [
    { icon: <Cpu size={20} />, text: "AI-Enhanced Processes" },
    { icon: <Users size={20} />, text: "Agile Team Building" },
    { icon: <Zap size={20} />, text: "Automated Workflows" },
  ];

  return (
    <div className="relative min-h-screen pt-20 bg-[#0f172a] overflow-hidden flex items-center">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-blue-400 text-sm font-medium tracking-wide uppercase">Technology • Talent • Transformation</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Powering <span className="text-blue-500">Digital Growth</span> for Modern Businesses
            </h1>

            <div className="space-y-4 mb-8">
              <h2 className="text-lg font-bold text-gray-300 uppercase tracking-widest">
                UNISYNC INFOSYSTEMS PRIVATE LIMITED
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                A next-generation IT consulting startup based in Hyderabad. We help businesses build agile teams, develop intelligent software, and accelerate digital growth using AI-enhanced processes.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mb-10">
              {/* Build Smarter Now Button redirects to /contact */}
              <Link to="/contact">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold flex items-center space-x-2 transition-all group shadow-xl shadow-blue-500/20">
                  <span>Build Smarter Now</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/10 pt-8">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-gray-300">
                  <span className="text-blue-500">{item.icon}</span>
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Tech Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
              {/* Image from Unsplash - Tech Dashboard/AI vibe */}
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" 
                alt="Technology Dashboard" 
                className="w-full h-auto opacity-80"
              />
              {/* Overlay elements */}
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                <p className="text-[10px] text-green-400 font-mono flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span> 
                  ISO 27001 Certified
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Hero;