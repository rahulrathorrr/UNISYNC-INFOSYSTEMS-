import React from 'react';
import { FileText, CheckCircle, AlertTriangle, Scale, Globe } from 'lucide-react';

const TermsConditions = () => {
  return (
    <div className="pt-20 bg-white">
      {/* Page Header */}
      <div className="bg-slate-950 py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <FileText size={14} /> Legal Documentation
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-slate-400">Last Updated: January 2026</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-600 mb-8">
            Welcome to the website of <strong>UNISYNC INFOSYSTEMS PRIVATE LIMITED</strong>. By accessing or using our website, you agree to these Terms & Conditions.
          </p>

          {/* Section 1 & 2 */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-slate-600 text-sm">
                By using our website or services, you acknowledge that you have read, understood, and agree to be bound by these terms.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">2. Use of Website</h2>
              <ul className="text-sm space-y-2 text-slate-600">
                <li className="flex gap-2"><CheckCircle size={16} className="text-green-500 shrink-0"/> Browse site & submit inquiries</li>
                <li className="flex gap-2"><AlertTriangle size={16} className="text-red-500 shrink-0"/> No unlawful activities or unauthorized access</li>
              </ul>
            </div>
          </div>

          {/* Section 3 & 4 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">3. Services & Intellectual Property</h2>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <div className="mb-6">
                <h3 className="font-bold text-slate-800 mb-2">Services Scope</h3>
                <p className="text-slate-600 text-sm">Service descriptions are for informational purposes. Exact details, scope, and pricing will be defined in project proposals or contracts.</p>
              </div>
              <div>
                <h3 className="font-bold text-slate-800 mb-2">Intellectual Property</h3>
                <p className="text-slate-600 text-sm mb-3">
                  All Content, Logos, Designs, Text, Images, and Software code are the intellectual property of <strong>UNISYNC INFOSYSTEMS PRIVATE LIMITED</strong>.
                </p>
                <p className="text-xs text-slate-500 italic">Users may not copy, modify, distribute, or reproduce content without written permission.</p>
              </div>
            </div>
          </div>

          {/* Section 5, 6, 7 */}
          <div className="space-y-8 mb-12 border-l-4 border-blue-100 pl-6">
            <div>
              <h3 className="font-bold text-slate-900 mb-2">5. Payments</h3>
              <p className="text-slate-600 text-sm">Payment terms apply only when entering into a service agreement. Invoices must be paid according to the mutually agreed schedule.</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-2">6. Limitation of Liability</h3>
              <p className="text-slate-600 text-sm">UNISYNC is not liable for loss of data, downtime, third-party issues, or indirect damages. Liability is limited to amounts paid for services.</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-2">7. Third-Party Tools</h3>
              <p className="text-slate-600 text-sm">We may use external tools for Analytics, Marketing, and Automation. Users agree to their respective terms.</p>
            </div>
          </div>

          {/* Termination & Governing Law */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
              <h3 className="font-bold text-red-700 mb-3 flex items-center gap-2"><AlertTriangle size={18}/> 8. Termination</h3>
              <p className="text-red-600/80 text-sm">
                We may suspend access to our website or decline services in cases of misuse, violation of terms, or fraudulent activities.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <h3 className="font-bold text-blue-700 mb-3 flex items-center gap-2"><Scale size={18}/> 9. Governing Law</h3>
              <p className="text-blue-600/80 text-sm">
                These terms are governed by the laws of India. Disputes will be handled under the jurisdiction of the courts of <strong>Hyderabad, Telangana</strong>.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center pt-8 border-t border-slate-100">
            <h3 className="font-bold text-slate-900 mb-2">Legal Queries?</h3>
            <a href="mailto:contact@unisyncinfosystems.com" className="text-blue-600 font-bold hover:underline">
              contact@unisyncinfosystems.com
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TermsConditions;