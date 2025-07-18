import React from 'react';
import styled from 'styled-components';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

// Styled Button Component
const StyledWrapper = styled.div`
  .cssbuttons-io-button {
    background: linear-gradient(to right, #10b981, #06b6d4);
    color: white;
    font-family: inherit;
    padding: 0.35em;
    padding-left: 1.2em;
    font-size: 17px;
    font-weight: 500;
    border-radius: 0.9em;
    border: none;
    letter-spacing: 0.05em;
    display: flex;
    align-items: center;
    box-shadow: inset 0 0 1.6em -0.6em rgba(6, 182, 212, 0.6);
    overflow: hidden;
    position: relative;
    height: 2.8em;
    padding-right: 3.3em;
    cursor: pointer;
  }

  .cssbuttons-io-button .icon {
    background: white;
    margin-left: 1em;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.2em;
    width: 2.2em;
    border-radius: 0.7em;
    box-shadow: 0.1em 0.1em 0.6em 0.2em rgba(6, 182, 212, 0.6);
    right: 0.3em;
    transition: all 0.3s;
  }

  .cssbuttons-io-button:hover .icon {
    width: calc(100% - 0.6em);
  }

  .cssbuttons-io-button .icon svg {
    width: 1.1em;
    transition: transform 0.3s;
    color: #06b6d4;
  }

  .cssbuttons-io-button:hover .icon svg {
    transform: translateX(0.1em);
  }

  .cssbuttons-io-button:active .icon {
    transform: scale(0.95);
  }
`;

const Contact = () => {
  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url('/contactsbg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <Navbar />
      
      <section className="pt-12 md:pt-20 pb-8 md:pb-16 relative">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h1 className="pt-8 md:pt-16 text-2xl md:text-5xl font-bold text-white mb-3 md:mb-6">Contact Us</h1>
            <p className="text-base md:text-xl text-blue-100 max-w-xs sm:max-w-md md:max-w-3xl mx-auto">
              Ready to start your next project? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-12">
            {/* Enhanced Contact Form */}
            <div className="relative overflow-hidden rounded-2xl p-6 md:p-6 shadow-2xl backdrop-blur-sm border border-white/10" 
                 style={{ background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.9) 100%)' }}>
              
              {/* Animated background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/5 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}}></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-400/5 rounded-full blur-3xl animate-bounce" style={{animationDelay: '2s', animationDuration: '6s'}}></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <svg className="h-5 w-5 md:h-6 md:w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-lg md:text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                      Send us a message
                    </h2>
                    <p className="text-gray-300 text-sm">We'd love to hear from you</p>
                  </div>
                </div>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-200 mb-2 group-focus-within:text-emerald-400 transition-colors">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm group-hover:bg-white/10"
                        placeholder="John"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-200 mb-2 group-focus-within:text-emerald-400 transition-colors">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm group-hover:bg-white/10"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-200 mb-2 group-focus-within:text-emerald-400 transition-colors">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm group-hover:bg-white/10"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-200 mb-2 group-focus-within:text-emerald-400 transition-colors">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm group-hover:bg-white/10"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-200 mb-2 group-focus-within:text-emerald-400 transition-colors">
                      Subject *
                    </label>
                    <select className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 text-white backdrop-blur-sm group-hover:bg-white/10">
                      <option value="" className="bg-gray-800">Select a subject</option>
                      <option value="web-development" className="bg-gray-800">Web Development</option>
                      <option value="mobile-apps" className="bg-gray-800">Mobile App Development</option>
                      <option value="ai-ml" className="bg-gray-800">AI & Machine Learning</option>
                      <option value="cloud-solutions" className="bg-gray-800">Cloud Solutions</option>
                      <option value="consulting" className="bg-gray-800">IT Consulting</option>
                      <option value="other" className="bg-gray-800">Other</option>
                    </select>
                  </div>
                  
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-200 mb-2 group-focus-within:text-emerald-400 transition-colors">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm group-hover:bg-white/10 resize-none"
                      placeholder="Tell us about your project, requirements, and how we can help you achieve your goals..."
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-4 pt-2">
                    <StyledWrapper>
                      <button type="submit" className="cssbuttons-io-button">
                        Send Message
                        <div className="icon">
                          <svg height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor" />
                          </svg>
                        </div>
                      </button>
                    </StyledWrapper>
                    <button
                      type="button"
                      className="px-6 py-4 border border-gray-600 text-gray-300 rounded-xl hover:bg-white/5 transition-all duration-300"
                    >
                      Reset
                    </button>
                  </div>
                  
                  <p className="text-xs text-gray-400 text-center mt-2">
                    * Required fields. We'll get back to you within 24 hours.
                  </p>
                </form>
              </div>
            </div>

            {/* Enhanced Contact Information */}
            <div className="space-y-6 md:space-y-8">
              <div className="relative overflow-hidden rounded-2xl p-6 md:p-8 shadow-2xl backdrop-blur-sm border border-white/10" 
                   style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 50%, rgba(6, 182, 212, 0.1) 100%)' }}>
                
                {/* Animated background elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}}></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl animate-bounce" style={{animationDelay: '2s', animationDuration: '6s'}}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                      <Phone className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Contact Information
                      </h3>
                      <p className="text-blue-200 text-sm">Get in touch with our team</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Phone */}
                    <div className="group flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white text-sm md:text-base mb-1">Phone</h4>
                        <p className="text-blue-200 text-sm md:text-base font-medium">+91 8815587953</p>
                        <p className="text-blue-300/70 text-xs">Available 24/7 for urgent inquiries</p>
                      </div>
                    </div>
                    
                    {/* Email */}
                    <div className="group flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white text-sm md:text-base mb-1">Email</h4>
                        <p className="text-purple-200 text-sm md:text-base font-medium">info@infocera.in</p>
                        <p className="text-purple-300/70 text-xs">We'll respond within 24 hours</p>
                      </div>
                    </div>
                    
                    {/* Address */}
                    <div className="group flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-emerald-500/25 transition-all duration-300">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white text-sm md:text-base mb-1">Address</h4>
                        <p className="text-emerald-200 text-sm md:text-base font-medium leading-relaxed">
                          8th Floor, HB Twin Tower<br />
                          Netaji Subhash Place, Pitampura<br />
                          <span className="text-emerald-300 font-semibold">NEW DELHI - 110034</span>
                        </p>
                        <p className="text-emerald-300/70 text-xs mt-1">Main office - Visit us anytime</p>
                      </div>
                    </div>
                    
                    {/* Business Hours */}
                    <div className="group flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-orange-500/25 transition-all duration-300">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white text-sm md:text-base mb-1">Business Hours</h4>
                        <div className="space-y-1">
                          <p className="text-orange-200 text-sm md:text-base font-medium">
                            <span className="text-orange-300">Mon - Fri:</span> 9:00 AM - 6:00 PM
                          </p>
                          <p className="text-orange-200 text-sm md:text-base font-medium">
                            <span className="text-orange-300">Sat:</span> 10:00 AM - 4:00 PM
                          </p>
                        </div>
                        <p className="text-orange-300/70 text-xs mt-1">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-2xl p-4 md:p-8 shadow-lg" style={{ background: 'linear-gradient(to right, #00BCD4, #00796B)' }}>
                <h3 className="text-base md:text-xl font-bold text-white mb-3 md:mb-6">Find Us</h3>
                <div className="w-full max-w-xs aspect-square rounded-xl overflow-hidden border-2 border-brand-primary mx-auto mb-2 md:mb-4">
                  <iframe
                    title="Infocera Location"
                    src="https://www.google.com/maps?q=8th+Floor+HB+TWIN+TOWER+Netaji+subhash+place+PITAMPURA+DELHI+110034&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="flex justify-center">
                  <a
                    href="https://www.google.com/maps?q=8th+Floor+HB+TWIN+TOWER+Netaji+subhash+place+PITAMPURA+DELHI+110034"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-1 px-3 md:px-4 py-1.5 md:py-2 bg-brand-primary text-white rounded-lg font-semibold shadow hover:bg-brand-primary/90 transition text-xs md:text-base"
                  >
                    Get location in maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
