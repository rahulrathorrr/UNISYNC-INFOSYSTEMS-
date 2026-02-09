import React from 'react';
import { Target, Eye, Sparkles, ShieldCheck, Award, Users, RefreshCw, ArrowRight } from 'lucide-react';

const MissionVision = () => {
  const values = [
    { 
      title: "Innovation", 
      icon: <Sparkles size={32} />, 
      desc: "We don't just follow trends; we embrace AI tools and digital methodologies to drive meaningful change." 
    },
    { 
      title: "Integrity", 
      icon: <ShieldCheck size={32} />, 
      desc: "Transparency is key. We work openly, communicate clearly, and deliver exactly what we commit to." 
    },
    { 
      title: "Excellence", 
      icon: <Award size={32} />, 
      desc: " rigorous quality standards. We believe that detail-oriented execution is what separates good from great." 
    },
    { 
      title: "Collaboration", 
      icon: <Users size={32} />, 
      desc: "We view our clients as partners. Strong, long-term relationships are the foundation of our mutual growth." 
    },
    { 
      title: "Adaptability", 
      icon: <RefreshCw size={32} />, 
      desc: "The tech world moves fast. We evolve with the market, customizing solutions for every unique challenge." 
    }
  ];

  return (
    <div className="bg-white overflow-hidden">
      
      {/* ==================== SECTION 1: MISSION ==================== */}
      <section className="py-32 border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                <Target size={14} /> Our Purpose
              </div>
              <h2 className="text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Our Mission
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                To help businesses leverage advanced technology, AI, automation, and skilled talent to operate efficiently, innovate confidently, and scale sustainably.
              </p>
              <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border-l-4 border-blue-600">
                <div className="text-slate-800 font-medium italic">
                  "We exist to bridge the gap between complex technology and practical business growth."
                </div>
              </div>
            </div>

            {/* Visual / Icon */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute inset-0 bg-blue-600/5 rounded-full blur-3xl transform translate-x-10"></div>
              <div className="w-80 h-80 bg-white border border-slate-100 shadow-2xl rounded-[3rem] flex items-center justify-center relative z-10 rotate-3 hover:rotate-0 transition-all duration-500">
                <Target size={120} className="text-blue-600" strokeWidth={1} />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ==================== SECTION 2: VISION ==================== */}
      <section className="py-32 bg-slate-950 text-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Visual / Icon (Order changed for Zig-Zag effect) */}
            <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl transform -translate-x-10"></div>
              <div className="w-80 h-80 bg-slate-900 border border-slate-800 shadow-2xl shadow-blue-900/20 rounded-[3rem] flex items-center justify-center relative z-10 -rotate-3 hover:rotate-0 transition-all duration-500">
                <Eye size={120} className="text-blue-400" strokeWidth={1} />
              </div>
            </div>

            {/* Text Content */}
            <div className="relative z-10 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                <Eye size={14} /> Future Outlook
              </div>
              <h2 className="text-5xl font-bold text-white mb-8 leading-tight">
                Our Vision
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed mb-8">
                To be recognized globally as a young, energetic, and intelligent technology consultancy that brings measurable transformation through innovation and people.
              </p>
              <ul className="space-y-4 text-slate-300">
                {['Global Recognition', 'Measurable Transformation', 'Intelligent Consultancy'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>


      {/* ==================== SECTION 3: VALUES ==================== */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Core <span className="text-blue-600">Values</span>
            </h2>
            <p className="text-lg text-slate-500">
              The principles that define how we work, how we treat our partners, and the quality we deliver.
            </p>
          </div>

          {/* Expanded Grid Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/50 hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {v.icon}
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">{v.title}</h4>
                <p className="text-slate-600 leading-relaxed">
                  {v.desc}
                </p>
                <div className="mt-8 pt-8 border-t border-slate-100 flex items-center text-sm font-bold text-blue-600 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                  Why it matters <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default MissionVision;