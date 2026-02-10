import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  MapPin, 
  ArrowRight
} from 'lucide-react';

import logo from "../assets/logo.png";   // ✅ Logo import

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2 text-white">
              
              {/* ✅ Logo Image */}
              <img 
                src={logo} 
                alt="Company Logo"
                className="w-10 h-10 object-contain"
              />

              {/* Company Name */}
              <span className="font-bold text-xl tracking-tight uppercase">
                Unisync <span className="text-blue-500">Infosystems</span>
              </span>

            </Link>

            <p className="text-sm leading-relaxed text-slate-400 pr-4">
              A next-generation IT consulting and technology services startup. 
              We empower businesses through intelligence, automation, and agile talent solutions.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:pl-10">
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="hover:text-blue-500 flex items-center group transition-colors w-fit"
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0 text-blue-500" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-blue-500 shrink-0 mt-1" size={18} />
                <span className="text-sm"> 8-2-644/1/205 F205,hiline, Complex, Road No. 12, Banjara Hills, Hyderabad, Khairatabad, Telangana, India, 500034.</span>
              </li>

              <li className="flex items-center space-x-3">
                <Mail className="text-blue-500 shrink-0" size={18} />
                <a 
                  href="mailto:info@unisyncinfosystems.com" 
                  className="text-sm hover:text-white transition-colors"
                >
                  info@unisyncinfosystems.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-slate-500 text-center md:text-left">
            © {currentYear} UNISYNC INFOSYSTEMS PRIVATE LIMITED. All rights reserved.
          </p>

          <div className="flex space-x-6 text-xs text-slate-500">
            <Link to="/privacy-policy" className="hover:text-blue-500 transition-colors">
              Privacy Policy
            </Link>

            <Link to="/terms" className="hover:text-blue-500 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
