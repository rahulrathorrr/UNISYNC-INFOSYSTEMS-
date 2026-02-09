import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from "../assets/logo.png";   // ✅ Yaha semicolon aur quote fix

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const serviceLinks = [
    { name: 'Workforce Solutions', path: '/services#workforce-solutions' },
    { name: 'Technology Services', path: '/services#technology-services' },
    { name: 'Business Automation', path: '/services#business-automation' },
    { name: 'Marketing & Growth Services', path: '/services#marketing-growth' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-2">
            
            {/* ✅ Company Logo Image */}
            <img 
              src={logo} 
              alt="Company Logo" 
              className="w-10 h-10 object-contain"
            />

            {/* Company Name */}
            <span className="font-bold text-xl tracking-tight text-gray-900 uppercase">
              Unisync <span className="text-blue-600">Infosystems</span>
            </span>

          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Home</Link>
            
            <Link to="/about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">About Us</Link>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link 
                to="/services" 
                className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 font-medium py-7 transition-colors"
                onClick={() => setIsServicesOpen(false)}
              >
                <span>Services</span>
                <ChevronDown size={16} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </Link>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 w-64 bg-white border border-gray-100 shadow-xl rounded-xl py-2 overflow-hidden"
                  >
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/blog" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Blog</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Contact</Link>

            <Link to="/contact">
              <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-gray-700 font-medium border-b border-gray-50">Home</Link>
              
              <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-gray-700 font-medium hover:bg-blue-50">About Us</Link>

              <div className="py-2">
                <Link 
                  to="/services" 
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-sm font-bold text-gray-400 uppercase tracking-wider hover:text-blue-600"
                >
                  Our Services
                </Link>

                {serviceLinks.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    onClick={() => setIsOpen(false)}
                    className="block px-6 py-3 text-gray-600 hover:text-blue-600"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              <Link to="/blog" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-gray-700 font-medium hover:bg-blue-50">Blog</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-gray-700 font-medium hover:bg-blue-50">Contact</Link>
              
              <div className="pt-4 px-3">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
