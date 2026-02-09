import React from 'react';
import { Globe, Smartphone, Layout, Cpu, Code2, Server, Database, Cloud, ShieldCheck, ArrowRight } from 'lucide-react';

const TechnologySection = () => {
  
  const services = [
    { 
      title: "Web Development", 
      icon: <Globe size={32} />, 
      desc: "We build high-performance, scalable web applications using modern frameworks. From SaaS platforms to E-commerce sites, our code is clean, secure, and SEO-friendly.",
      features: ["React.js & Next.js", "Progressive Web Apps (PWA)", "API Integration", "Cloud Deployment"]
    },
    { 
      title: "Mobile App Development", 
      icon: <Smartphone size={32} />, 
      desc: "Native and Cross-platform mobile solutions that offer seamless user experiences. We ensure your app is intuitive, fast, and ready for the app store.",
      features: ["Flutter & React Native", "iOS & Android", "Real-time Features", "Offline Capability"]
    },
    { 
      title: "UI/UX Design", 
      icon: <Layout size={32} />, 
      desc: "User-centric design that converts. We start with research and wireframing to create interfaces that are not just beautiful but also functional and easy to use.",
      features: ["User Research", "Wireframing & Prototyping", "Interaction Design", "Design Systems"]
    }
  ];

  const techStack = [
    { name: "Frontend", icon: <Code2 size={20} />, tools: "React, Next.js, Tailwind, TypeScript" },
    { name: "Backend", icon: <Server size={20} />, tools: "Node.js, Python, Go, Express" },
    { name: "Database", icon: <Database size={20} />, tools: "PostgreSQL, MongoDB, Redis, Firebase" },
    { name: "Cloud & DevOps", icon: <Cloud size={20} />, tools: "AWS, Azure, Docker, Kubernetes" }
  ];

  return (
    <div id="technology-services" className="bg-slate-900 text-white overflow-hidden">
      
      {/* ==================== LAYER 1: HEADER & INTRO ==================== */}
      <section className="py-24 relative">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                <Cpu size={14} /> B. Technology Services
              </div>
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Build Scalable, Modern & <span className="text-blue-500">Intelligent</span> Digital Solutions
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed mb-8">
                In a digital-first world, your technology stack defines your speed and scalability. We engineer robust software solutions that grow with your business.
              </p>
              
              {/* AI Badge */}
              <div className="p-6 bg-slate-800/50 rounded-2xl border border-white/10 flex items-start gap-4 hover:border-blue-500/50 transition-colors">
                <div className="p-3 bg-blue-600/20 rounded-xl text-blue-400">
                  <Cpu size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">AI-Supported Development</h4>
                  <p className="text-slate-400 text-sm mt-1 leading-relaxed">
                    We leverage AI for faster prototyping, automated testing, and predictive analytics—reducing time-to-market by up to 30%.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000" 
                className="relative rounded-[2.5rem] shadow-2xl w-full object-cover border-8 border-slate-800" 
                alt="Technology" 
              />
            </div>

          </div>
        </div>
      </section>


      {/* ==================== LAYER 2: DETAILED SERVICES ==================== */}
      <section className="py-24 bg-slate-950/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold">Our Core Capabilities</h3>
            <p className="text-slate-400 mt-4">End-to-end development services tailored to your needs.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((item, i) => (
              <div key={i} className="group p-8 rounded-[2rem] bg-slate-900 border border-white/5 hover:border-blue-500/50 hover:bg-slate-800/50 transition-all duration-300 flex flex-col h-full">
                <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{item.title}</h4>
                <p className="text-slate-400 mb-8 leading-relaxed flex-grow">
                  {item.desc}
                </p>
                
                <div className="space-y-3 pt-6 border-t border-white/5">
                  {item.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                      <ShieldCheck size={16} className="text-blue-500" /> {feat}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ==================== LAYER 3: TECH STACK SHOWCASE ==================== */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
            <div>
              <h3 className="text-3xl font-bold">Technology Stack</h3>
              <p className="text-slate-400 mt-2">We use the latest frameworks to ensure longevity and performance.</p>
            </div>
            <button className="flex items-center gap-2 text-blue-400 font-bold hover:gap-3 transition-all">
              View All Technologies <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((stack, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-3 mb-3 text-blue-400">
                  {stack.icon}
                  <h4 className="font-bold text-white">{stack.name}</h4>
                </div>
                <p className="text-sm text-slate-400 font-mono">
                  {stack.tools}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default TechnologySection;