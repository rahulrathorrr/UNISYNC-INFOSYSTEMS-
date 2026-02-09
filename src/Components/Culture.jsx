import React from 'react';
import { Lightbulb, Code, BarChart, Zap, BookOpen } from 'lucide-react';

const Culture = () => {
  const items = [
    { name: "Creativity over hierarchy", icon: <Lightbulb size={20}/> },
    { name: "Technology over tradition", icon: <Code size={20}/> },
    { name: "Impact over activity", icon: <BarChart size={20}/> },
    { name: "Agility over bureaucracy", icon: <Zap size={20}/> },
    { name: "Continuous learning", icon: <BookOpen size={20}/> }
  ];

  return (
    <section className="py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-blue-500 font-bold uppercase tracking-widest mb-4">Our Culture</h2>
            <h3 className="text-4xl font-bold mb-8">An Innovation-First Mindset</h3>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              We operate with supported by modern toolsets and an environment that encourages 
              experimentation and improvement. We believe in:
            </p>
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.name} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                  <span className="text-blue-400">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
             <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000" 
              className="rounded-[2.5rem] opacity-80"
              alt="Office Culture"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;