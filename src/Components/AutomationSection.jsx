import React from 'react';
import { Settings, Zap, GitBranch, Link2, CheckCircle, BarChart3, Bot, Workflow, ArrowDown } from 'lucide-react';

const AutomationSection = () => {
  return (
    <div id="business-automation" className="bg-slate-50 overflow-hidden">
      
      {/* ==================== PART 1: CENTERED INTRO ==================== */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <Settings size={14} /> C. Business Automation
          </div>
          <h2 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Streamline Processes & <br />
            <span className="text-blue-600">Boost Efficiency</span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-12">
            Automation helps businesses work smarter—not harder. We design intelligent systems that reduce manual workload, minimize errors, and allow your team to focus on high-value tasks.
          </p>
        </div>

        {/* Large Visual with Floating Stats */}
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
            {/* IMAGE CHANGED HERE */}
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" 
              className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" 
              alt="Digital Automation Dashboard" 
            />
            
            {/* Floating Stat Card */}
            <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50 max-w-xs hidden md:block">
              <div className="flex items-center gap-4 mb-2">
                <div className="p-3 bg-green-100 text-green-600 rounded-xl">
                  <BarChart3 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">40% Efficiency</h4>
                  <p className="text-xs text-slate-500">Average increase in productivity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ==================== PART 2: 3-STEP PROCESS FLOW ==================== */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-900">How We Automate</h3>
            <p className="text-slate-500 mt-4">A systematic approach to removing bottlenecks.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop Only) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-200 to-transparent -z-10"></div>

            {/* Step 1 */}
            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-md mx-auto mb-6 border-4 border-slate-50">
                <Workflow size={32} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">1. Process Audit</h4>
              <p className="text-slate-600 leading-relaxed mb-6">
                We analyze your current workflows to identify repetitive tasks, bottlenecks, and error-prone manual entries.
              </p>
              <ul className="text-left space-y-2 bg-white p-4 rounded-xl shadow-sm">
                <li className="text-sm text-slate-500 flex gap-2"><CheckCircle size={14} className="text-blue-500 mt-0.5"/> Workflow Mapping</li>
                <li className="text-sm text-slate-500 flex gap-2"><CheckCircle size={14} className="text-blue-500 mt-0.5"/> ROI Calculation</li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-md mx-auto mb-6 border-4 border-slate-50">
                <Bot size={32} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">2. Intelligent Automation</h4>
              <p className="text-slate-600 leading-relaxed mb-6">
                Deploying bots and scripts to handle data entry, document processing, and rule-based decision making.
              </p>
              <ul className="text-left space-y-2 bg-white p-4 rounded-xl shadow-sm">
                <li className="text-sm text-slate-500 flex gap-2"><CheckCircle size={14} className="text-blue-500 mt-0.5"/> RPA Implementation</li>
                <li className="text-sm text-slate-500 flex gap-2"><CheckCircle size={14} className="text-blue-500 mt-0.5"/> Chatbot Deployment</li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-md mx-auto mb-6 border-4 border-slate-50">
                <Link2 size={32} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">3. System Integration</h4>
              <p className="text-slate-600 leading-relaxed mb-6">
                Connecting your disparate software (CRM, ERP, Email) to ensure data flows seamlessly without human intervention.
              </p>
              <ul className="text-left space-y-2 bg-white p-4 rounded-xl shadow-sm">
                <li className="text-sm text-slate-500 flex gap-2"><CheckCircle size={14} className="text-blue-500 mt-0.5"/> API Connectors</li>
                <li className="text-sm text-slate-500 flex gap-2"><CheckCircle size={14} className="text-blue-500 mt-0.5"/> Database Sync</li>
              </ul>
            </div>

          </div>
        </div>
      </section>


      {/* ==================== PART 3: AUTOMATION USE CASES ==================== */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            
            <div className="bg-blue-600 rounded-[2.5rem] p-10 text-white flex flex-col justify-between shadow-xl shadow-blue-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
              <div>
                <h3 className="text-3xl font-bold mb-6">Why Automate?</h3>
                <p className="text-blue-100 text-lg leading-relaxed mb-8">
                  Manual processes are the silent killers of growth. They consume time, introduce errors, and demotivate talent.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <div className="text-3xl font-bold mb-1">24/7</div>
                  <div className="text-xs text-blue-200 uppercase">Operations</div>
                </div>
                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <div className="text-3xl font-bold mb-1">0%</div>
                  <div className="text-xs text-blue-200 uppercase">Manual Errors</div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "HR & Onboarding", desc: "Auto-generate offer letters and sync employee data." },
                { title: "Finance & Invoicing", desc: "Automated invoice generation and payment reminders." },
                { title: "Customer Support", desc: "AI-driven ticket routing and instant responses." },
                { title: "Marketing Ops", desc: "Lead scoring and automated email sequences." }
              ].map((useCase, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-500 transition-colors">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                    <Zap size={20} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{useCase.title}</h4>
                  <p className="text-sm text-slate-500">{useCase.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default AutomationSection;