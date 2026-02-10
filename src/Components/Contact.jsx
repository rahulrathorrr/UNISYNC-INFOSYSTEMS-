import React, { useState } from 'react';
import { MapPin, Mail, Phone, Globe, Send, CheckCircle, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API Call (1.5 seconds delay)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form if needed
      // setFormData({ name: '', email: '', company: '', phone: '', message: '' });
    }, 1500);
  };

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Get in <span className="text-blue-600">Touch</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Have a project in mind? Reach out to us and let's build something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Contact Details */}
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-slate-200 border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Contact Details</h2>
            
            <div className="space-y-8">
              {/* Office Address */}
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Our Office</h4>
                  <p className="text-slate-600 text-sm font-semibold mb-1">UNISYNC INFOSYSTEMS PRIVATE LIMITED</p>
                  <p className="text-slate-500 text-sm leading-relaxed">
                     8-2-644/1/205 F205,hiline, Complex, Road No. 12, Banjara Hills, Hyderabad, Khairatabad, Telangana, India, 500034.
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email Us</h4>
                  <p className="text-slate-500 text-sm">info@unisyncinfosystems.com</p>
                  <p className="text-slate-500 text-sm">hr@unisyncinfosystems.com</p>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 shrink-0">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Website</h4>
                  <p className="text-slate-500 text-sm">www.unisyncinfosystems.com</p>
                </div>
              </div>

               
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-slate-200 border border-slate-100 relative overflow-hidden">
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Company Name</label>
                    <input 
                      type="text" 
                      name="company"
                      placeholder="Your Company Ltd"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Message</label>
                  <textarea 
                    name="message"
                    required
                    rows="4"
                    placeholder="Tell us about your requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-200 disabled:opacity-70"
                >
                  {isSubmitting ? 'Sending...' : (
                    <>Send Message <Send size={18} /></>
                  )}
                </button>
              </form>
            ) : (
              // Success Message State
              <div className="flex flex-col items-center justify-center text-center h-full py-10 animation-fade-in">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={40} className="text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-500 mb-8 max-w-xs mx-auto">
                  Thank you for reaching out, {formData.name}. Our team will get back to you within 24 hours.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Send another message <ArrowRight size={18} />
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;