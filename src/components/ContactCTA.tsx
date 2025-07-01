import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const ContactCTA = () => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  return (
    <section 
      className="py-20 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url('/transformbg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
          <div className="text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-6 bg-gradient-to-r from-[#0154b4] to-[#7deff6] bg-clip-text text-transparent">Ready to Transform Your Business?</h2>
            <p className="text-base md:text-xl text-blue-100 mb-4 md:mb-8">
              Let's discuss how our innovative IT solutions can drive your business forward. 
              Get in touch with our experts today.
            </p>
            
            <div className="space-y-2 md:space-y-4">
              <div className="flex items-center space-x-2 md:space-x-3">
                <Phone className="h-4 w-4 md:h-5 md:w-5 text-white" />
                <span className="text-xs md:text-base text-white">+91 8815587953</span>
              </div>
              <div className="flex items-center space-x-2 md:space-x-3">
                <Mail className="h-4 w-4 md:h-5 md:w-5 text-white" />
                <span className="text-xs md:text-base text-white">info@infocera.com</span>
              </div>
              <div className="flex items-center space-x-2 md:space-x-3">
                <MapPin className="h-4 w-4 md:h-5 md:w-5 text-white" />
                <span className="text-xs md:text-base text-white">8th Floor , HB Twin Tower, Netaji Subhash Place, Pitampura, DELHI, 110034</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 md:p-8 shadow-2xl mt-6 md:mt-0">
            <h3 className="text-lg md:text-2xl font-bold text-blue-900 mb-3 md:mb-6">Get Started Today</h3>
            
            <form className="space-y-2 md:space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-blue-200 rounded-lg text-blue-700 placeholder-blue-500 focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all bg-blue-50 text-xs md:text-base"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-blue-200 rounded-lg text-blue-700 placeholder-blue-500 focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all bg-blue-50 text-xs md:text-base"
                />
              </div>
              
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-3 md:px-4 py-2 md:py-3 border border-blue-200 rounded-lg text-blue-700 placeholder-blue-500 focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all bg-blue-50 text-xs md:text-base"
              />
              
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-3 md:px-4 py-2 md:py-3 border border-blue-200 rounded-lg text-blue-700 placeholder-blue-500 focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all bg-blue-50 text-xs md:text-base"
              />
              
              <textarea
                placeholder="Tell us about your project"
                rows={4}
                className="w-full px-3 md:px-4 py-2 md:py-3 border border-blue-200 rounded-lg text-blue-700 placeholder-blue-500 focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all resize-none bg-blue-50 text-xs md:text-base"
              ></textarea>
              
              <button
                type="submit"
                className="w-full text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center border border-white text-sm md:text-base"
                style={{
                  background: isButtonHovered
                    ? 'linear-gradient(to right, #0154b4, #7deff6)'
                    : 'linear-gradient(to right, #7deff6, #0154b4)',
                  transition: 'background 0.3s',
                }}
                onMouseEnter={() => setIsButtonHovered(true)}
                onMouseLeave={() => setIsButtonHovered(false)}
              >
                Send Message
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
