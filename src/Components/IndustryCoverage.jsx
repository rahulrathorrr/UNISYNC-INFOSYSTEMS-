import React from 'react';
import { ShoppingCart, HeartPulse, Landmark, GraduationCap, Factory, Briefcase } from 'lucide-react';

const industries = [
  { name: "Technology", icon: <Briefcase /> },
  { name: "E-Commerce", icon: <ShoppingCart /> },
  { name: "Healthcare", icon: <HeartPulse /> },
  { name: "Finance", icon: <Landmark /> },
  { name: "Education", icon: <GraduationCap /> },
  { name: "Manufacturing", icon: <Factory /> }
];

const IndustryCoverage = () => (
  <section className="py-20 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-12">Industry Coverage</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {industries.map((ind) => (
          <div key={ind.name} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-blue-600 flex justify-center mb-4">{ind.icon}</div>
            <p className="font-semibold text-slate-800">{ind.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustryCoverage;