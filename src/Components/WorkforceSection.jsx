import React from 'react';
import { Terminal, Users, Briefcase, Clock, Shield, RotateCw, CheckCircle2, ArrowRight } from 'lucide-react';

const WorkforceSection = () => {
  
  // Hiring Models ko expand kar diya hai taaki page lamba lage
  const hiringModels = [
    { 
      title: "Permanent Hiring", 
      icon: <Briefcase size={24} />, 
      desc: "Full-time placement for long-term stability and culture building." 
    },
    { 
      title: "Contract Staffing", 
      icon: <Clock size={24} />, 
      desc: "Flexible staffing for short-term projects or seasonal spikes." 
    },
    { 
      title: "Contract-to-Hire", 
      icon: <RotateCw size={24} />, 
      desc: "Assess performance before offering a full-time permanent role." 
    },
    { 
      title: "Project-Based", 
      icon: <Shield size={24} />, 
      desc: "Dedicated teams assembled specifically for niche project delivery." 
    }
  ];

  return (
    <div id="workforce-solutions" className="bg-white overflow-hidden">
      
      {/* ==================== PART 1: INTRO & VISUAL ==================== */}
      <section className="py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                <Users size={14} /> A. Workforce Solutions
              </div>
              <h2 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Build Your Ideal Team with <span className="text-blue-600">Confidence</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Talent is the foundation of every successful organization. We provide end-to-end staffing solutions, helping businesses build capable teams quickly without the hiring headache.
              </p>
              
              <ul className="space-y-4">
                {['Pre-evaluated Candidates', 'Rapid Sourcing (48hrs)', 'Transparent Communication'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 size={20} className="text-green-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 bg-blue-600/5 rounded-[3rem] rotate-3 transform scale-95"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                className="relative rounded-[3rem] shadow-2xl w-full h-auto object-cover border-8 border-white" 
                alt="Team Collaboration" 
              />
            </div>

          </div>
        </div>
      </section>


      {/* ==================== PART 2: DOMAIN EXPERTISE (IT vs NON-IT) ==================== */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-900">Our Domain Expertise</h3>
            <p className="text-slate-500 mt-4">Specialized recruitment across technical and operational fields.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* IT Staffing Card */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-blue-500 transition-all duration-300 group">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Terminal size={32} />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">IT Staffing</h4>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Connecting companies with skilled professionals in high-demand technical roles. We test for code quality and problem-solving skills.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Software Dev', 'Full-stack', 'DevOps', 'AI/ML', 'Cloud', 'Cybersecurity'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Non-IT Staffing Card */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-blue-500 transition-all duration-300 group">
              <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-8 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <Users size={32} />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">Non-IT Staffing</h4>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Streamlining your operational backbone with efficient, verified, and professional candidates for business roles.
              </p>
              <div className="flex flex-wrap gap-2">
                {['HR & Admin', 'Finance', 'Operations', 'Customer Support', 'Management'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ==================== PART 3: ENGAGEMENT MODELS ==================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2 block">Flexibility First</span>
              <h3 className="text-4xl font-bold text-slate-900">Hiring Models</h3>
              <p className="text-slate-500 mt-4 text-lg">
                Choose the engagement style that fits your budget and timeline.
              </p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">
              Discuss Your Needs <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hiringModels.map((model, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
                <div className="text-blue-600 mb-4">{model.icon}</div>
                <h4 className="font-bold text-lg text-slate-900 mb-2">{model.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{model.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default WorkforceSection;