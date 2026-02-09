import React from 'react';
import { Rocket, Lightbulb, Cpu, Handshake, RefreshCw, MapPin, Quote } from 'lucide-react';

const WhoWeAre = () => {
  // Un simple points ko ab hum icons ke saath Cards banayenge
  const philosophy = [
    { title: "Moves Fast", icon: <Rocket size={24} />, text: "Agile execution to keep you ahead." },
    { title: "Thinks Innovatively", icon: <Lightbulb size={24} />, text: "Creative problem solving for complex issues." },
    { title: "Uses AI & Modern Tech", icon: <Cpu size={24} />, text: "Leveraging the latest in automation." },
    { title: "Empowers Clients", icon: <Handshake size={24} />, text: "We work as partners, not just vendors." },
    { title: "Stays Flexible", icon: <RefreshCw size={24} />, text: "Adaptable solutions for changing needs." }
  ];

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* SECTION 1: HEADER & INTRO */}
        <div className="max-w-3xl mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <MapPin size={14} /> Headquartered in Hyderabad, Telangana
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
            We simplify <span className="text-blue-600">technology</span> for modern businesses.
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed border-l-4 border-blue-600 pl-6">
            Founded with a vision to combine innovation and intelligence, our services span across 
            staffing, software development, business automation, and digital growth—helping companies 
            optimize operations and scale sustainably.
          </p>
        </div>

        {/* SECTION 2: LARGE VISUAL & STORY SPLIT */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          {/* Large Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-600 rounded-[3rem] rotate-3 opacity-10 group-hover:rotate-6 transition-transform duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" 
              className="relative rounded-[3rem] shadow-2xl w-full h-[500px] object-cover"
              alt="Our Story"
            />
          </div>

          {/* The Story - Detailed Vertical Layout */}
          <div className="flex flex-col justify-center h-full pt-8">
            <h3 className="text-blue-600 font-bold uppercase tracking-widest mb-6 text-sm">Our Origin Story</h3>
            <h4 className="text-3xl font-bold text-slate-900 mb-8">
              Why UNISYNC was born?
            </h4>
            
            <div className="bg-slate-50 p-10 rounded-[2rem] border border-slate-100 relative">
              <Quote className="text-blue-200 absolute top-8 left-8" size={48} />
              <p className="text-slate-700 text-lg leading-loose relative z-10 italic font-medium">
                "We realized that most startups struggle with fragmented, rigid, and expensive technology solutions. 
                Traditional providers were too slow or too costly. We built this partner-first consultancy to change that."
              </p>
            </div>
            
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px bg-slate-200 flex-1"></div>
              <span className="text-slate-400 text-sm font-semibold uppercase tracking-wider">Our DNA</span>
              <div className="h-px bg-slate-200 flex-1"></div>
            </div>
          </div>
        </div>

        {/* SECTION 3: EXPANDED CARDS GRID (Pehle sirf tags the, ab cards hain) */}
        <div>
          <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">How We Operate</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {philosophy.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg shadow-slate-200/50 hover:-translate-y-2 hover:shadow-blue-500/10 transition-all duration-300 group">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-500">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhoWeAre;