import React from 'react';
import { Shield, Lock, Eye, Server, Mail, Globe } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="pt-20 bg-white">
      {/* Page Header */}
      <div className="bg-slate-950 py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <Shield size={14} /> Legal Documentation
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-slate-400">Last Updated: January 2026</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-600 mb-8">
            This Privacy Policy outlines how <strong>UNISYNC INFOSYSTEMS PRIVATE LIMITED</strong> (“Company”, “we”, “our”, “us”) collects, uses, discloses, and protects the personal information of users who access our website and services. By accessing our website, you consent to the practices described in this policy.
          </p>

          {/* Section 1 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-sm">1</span>
              Information We Collect
            </h2>
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-6">
              <h3 className="font-bold text-slate-900 mb-3">A. Information You Provide</h3>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li>Name, Email address, Phone number</li>
                <li>Company name & Project details</li>
                <li>Resume (if applying for jobs)</li>
                <li>Any additional information submitted through forms</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-6">
              <h3 className="font-bold text-slate-900 mb-3">B. Automatically Collected Information</h3>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li>Device information & IP address</li>
                <li>Browser type & Pages visited</li>
                <li>Time spent on site</li>
                <li>Cookies and tracking data</li>
              </ul>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-sm">2</span>
              How We Use Your Information
            </h2>
            <p className="text-slate-600 mb-4">We use the collected data to:</p>
            <div className="grid md:grid-cols-2 gap-4">
              {["Provide and improve services", "Respond to inquiries", "Deliver proposals", "Send updates & marketing", "Enhance website performance", "Conduct analytics", "Recruit candidates", "Maintain security"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-700">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> {item}
                </div>
              ))}
            </div>
          </div>

          {/* Section 3 & 4 */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm">
              <Lock className="text-blue-600 mb-4" size={24} />
              <h3 className="text-xl font-bold text-slate-900 mb-4">3. Sharing of Information</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                We do not sell personal data. We may share information with Service providers, Technology partners, Contracted consultants, and Legal authorities (only if required by law).
              </p>
              <p className="text-slate-500 text-xs italic">All partners are required to maintain confidentiality.</p>
            </div>

            <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm">
              <Server className="text-blue-600 mb-4" size={24} />
              <h3 className="text-xl font-bold text-slate-900 mb-4">4. Data Protection</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                We implement Access control, Encrypted data handling, Secure communication channels, and Regular monitoring.
              </p>
              <p className="text-slate-500 text-xs italic">However, no online system is 100% secure.</p>
            </div>
          </div>

          {/* Section 5, 6, 7 */}
          <div className="space-y-8 mb-12">
            <div>
              <h3 className="font-bold text-slate-900 mb-2">5. Your Rights</h3>
              <p className="text-slate-600">Users may request access to personal data, correction, deletion, opt-out of marketing, or withdraw consent.</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-2">6. Third-Party Links</h3>
              <p className="text-slate-600">Our site may contain external links. We are not responsible for third-party privacy practices.</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-2">7. Changes to This Policy</h3>
              <p className="text-slate-600">We may update this policy periodically. Continued use of our site implies acceptance of changes.</p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-slate-900 text-white p-8 rounded-2xl flex items-center justify-between flex-wrap gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Have Privacy Concerns?</h3>
              <p className="text-slate-400 text-sm">Reach out to our compliance team.</p>
            </div>
            <a href="mailto:contact@unisyncinfosystems.com" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-colors">
              <Mail size={18} /> contact@unisyncinfosystems.com
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;