import React from 'react';
import { motion } from 'framer-motion';
import { Users, Code, Cpu, LineChart, CheckCircle2 } from 'lucide-react';

const services = [
  { 
    title: "IT & Non-IT Workforce Solutions", 
    icon: <Users className="text-blue-500" />, 
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    title: "Custom Software & Web Development", 
    icon: <Code className="text-blue-500" />, 
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    title: "AI & Workflow Automation", 
    icon: <Cpu className="text-blue-500" />, 
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    title: "Performance Marketing & Digital Growth", 
    icon: <LineChart className="text-blue-500" />, 
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
  }
];

const WhatWeDo = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">What We Do</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Our solutions empower organizations to work smarter, innovate continuously, and adapt to evolving market demands.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100"
            >
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg text-slate-800">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;