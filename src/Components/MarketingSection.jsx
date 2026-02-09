import React from 'react';
import { Megaphone, Search, PenTool, Share2, TrendingUp } from 'lucide-react';

const MarketingSection = () => {
  const marketingData = [
    { title: "Digital Advertising", icon: <Megaphone />, items: ["Search ads", "Display ads", "Social promotions", "Lead gen funnels"] },
    { title: "SEO Services", icon: <Search />, items: ["Technical SEO", "On-page optimization", "Keyword strategy", "Content optimization"] },
    { title: "Content Development", icon: <PenTool />, items: ["Blogs & Articles", "UI copy", "Web page content", "Thought leadership"] },
    { title: "Social Media", icon: <Share2 />, items: ["Active management", "Audience connection", "Brand relevance", "Platform strategy"] }
  ];

  return (
    // Outer Section ko Light rakha hai taaki Dark Banner pop kare aur Footer se merge na ho
    <section id="marketing-growth" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Isko ek 'Banner' banaya hai - Dark background, rounded corners, shadow */}
        <div className="bg-slate-950 rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden">
          
          {/* Decorative Background Effects (Banner ke andar) */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-blue-500 font-bold uppercase mb-4 tracking-widest text-sm">D. Marketing & Growth Services</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">Digital Growth Built on Strategy & Data</h3>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto italic">
                "Our marketing solutions help businesses expand their online presence, generate leads, and build brand trust."
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {marketingData.map((box, i) => (
                // Cards ko thoda transparent banaya hai taaki banner ke upar ache lagein
                <div key={i} className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                    {box.icon}
                  </div>
                  <h4 className="text-lg font-bold mb-4 text-white">{box.title}</h4>
                  <ul className="space-y-2">
                    {box.items.map((item) => (
                      <li key={item} className="text-xs text-slate-400 flex items-center gap-2">
                        <TrendingUp size={12} className="text-blue-500 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MarketingSection;