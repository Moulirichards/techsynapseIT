import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url('/public/contactsbg.jpg')`,
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
            {/* Contact Form */}
            <div className="bg-black rounded-2xl p-4 md:p-8 shadow-lg">
              <h2 className="text-lg md:text-2xl font-bold text-white mb-3 md:mb-6">Send us a message</h2>
              
              <form className="space-y-3 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                  <div>
                    <label className="block text-xs md:text-sm font-medium text-white mb-1 md:mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-black text-white placeholder-gray-400 text-xs md:text-base"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-xs md:text-sm font-medium text-white mb-1 md:mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-black text-white placeholder-gray-400 text-xs md:text-base"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs md:text-sm font-medium text-white mb-1 md:mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-black text-white placeholder-gray-400 text-xs md:text-base"
                    placeholder="john@company.com"
                  />
                </div>
                
                <div>
                  <label className="block text-xs md:text-sm font-medium text-white mb-1 md:mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-black text-white placeholder-gray-400 text-xs md:text-base"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div>
                  <label className="block text-xs md:text-sm font-medium text-white mb-1 md:mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-black text-white placeholder-gray-400 text-xs md:text-base"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <label className="block text-xs md:text-sm font-medium text-white mb-1 md:mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none bg-black text-white placeholder-gray-400 text-xs md:text-base"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-lg hover:shadow-lg transition-all duration-300 text-sm md:text-base"
                  style={{ background: 'linear-gradient(to right, #00796B, #00BCD4)' }}
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-4 md:space-y-8">
              <div className="rounded-2xl p-4 md:p-8 shadow-lg" style={{ background: 'linear-gradient(to right, #7deff6, #0154b4)' }}>
                <h3 className="text-base md:text-xl font-bold text-black mb-3 md:mb-6">Contact Information</h3>
                
                <div className="space-y-3 md:space-y-6">
                  <div className="flex items-start space-x-2 md:space-x-4">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Phone className="h-4 w-4 md:h-6 md:w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-xs md:text-base">Phone</h4>
                      <p className="text-white text-xs md:text-base">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2 md:space-x-4">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Mail className="h-4 w-4 md:h-6 md:w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-xs md:text-base">Email</h4>
                      <p className="text-white text-xs md:text-base">hello@techflow.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2 md:space-x-4">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <MapPin className="h-4 w-4 md:h-6 md:w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-xs md:text-base">Address</h4>
                      <p className="text-white text-xs md:text-base">123 Tech Street<br />Innovation City, TC 12345</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2 md:space-x-4">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Clock className="h-4 w-4 md:h-6 md:w-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-xs md:text-base">Business Hours</h4>
                      <p className="text-white text-xs md:text-base">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-2xl p-4 md:p-8 shadow-lg" style={{ background: 'linear-gradient(to right, #00BCD4, #00796B)' }}>
                <h3 className="text-base md:text-xl font-bold text-white mb-3 md:mb-6">Find Us</h3>
                <div className="w-full max-w-xs aspect-square rounded-xl overflow-hidden border-2 border-brand-primary mx-auto mb-2 md:mb-4">
                  <iframe
                    title="TechSynapse Location"
                    src="https://www.google.com/maps?q=Times+Square,+New+York,+NY,+USA&output=embed"
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
                    href="https://www.google.com/maps?q=Times+Square,+New+York,+NY,+USA"
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
