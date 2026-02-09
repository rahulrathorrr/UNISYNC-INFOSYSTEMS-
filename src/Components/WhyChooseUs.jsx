import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Zap, ShieldCheck, Target, Cpu, Search, FileText, BarChart, Settings, Rocket } from 'lucide-react';

const WhyChooseUs = () => {
  // AI-Enhanced tools details
  const aiTools = [
    { name: "Rapid prototyping", icon: <Rocket size={16} /> },
    { name: "Code auditing", icon: <Search size={16} /> },
    { name: "Requirement analysis", icon: <Settings size={16} /> },
    { name: "Automated documentation", icon: <FileText size={16} /> },
    { name: "Predictive planning", icon: <Target size={16} /> },
    { name: "Data-driven decision-making", icon: <BarChart size={16} /> }
  ];

  const commitments = [
    "Deliver high-quality technology",
    "Build strong client relationships",
    "Empower businesses through intelligence and automation",
    "Provide solutions that create measurable impact"
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-blue-600 font-bold tracking-widest uppercase mb-4">Why Choose UNISYNC</h2>
            <h3 className="text-4xl font-bold mb-6 text-slate-900 leading-tight">
              A Startup Built for Startups
            </h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We understand the challenges of early-stage and growing businesses—limited resources, tight timelines, and the need for reliable technology. Our delivery model is optimized specifically for agility and scalability.
            </p>

            {/* Engagement Model Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Simple pricing", "Flexible contracts", "Scalable team models", "Clear communication", "Fast turnaround"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <ShieldCheck className="text-green-500 shrink-0" size={20} />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Image/Graphic Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1000" 
                alt="AI Technology" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>
          </motion.div>
        </div>

        {/* AI-Enhanced & Commitment Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* AI Features Box */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-slate-900 p-8 md:p-12 rounded-[2.5rem] text-white shadow-xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-blue-500/20 rounded-xl">
                <Bot className="text-blue-400" size={32} />
              </div>
              <h4 className="text-2xl font-bold">AI-Enhanced Development & Consulting</h4>
            </div>
            <p className="text-slate-400 mb-8 text-sm">We integrate AI-assisted tools into various workflows, including:</p>
            <div className="grid sm:grid-cols-2 gap-y-4 gap-x-6">
              {aiTools.map((tool) => (
                <div key={tool.name} className="flex items-center gap-3">
                  <div className="text-blue-400">{tool.icon}</div>
                  <span className="text-slate-300 text-sm font-medium">{tool.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Our Commitment Box */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-blue-600 p-8 md:p-12 rounded-[2.5rem] text-white shadow-xl flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-white/20 rounded-xl">
                <Target className="text-white" size={32} />
              </div>
              <h4 className="text-2xl font-bold">Our Commitment</h4>
            </div>
            <ul className="space-y-5">
              {commitments.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-1 shrink-0 bg-white/30 rounded-full p-1">
                    <Zap size={14} className="text-white fill-white" />
                  </div>
                  <span className="text-lg font-medium text-blue-50 leading-tight">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;