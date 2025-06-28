import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Palette, Smartphone, Zap, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const WebsiteDesign = () => {
  return (
    <div className="min-h-screen service-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-pink-500 to-yellow-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:text-5xl text-3xl">
                Website Design That <span className="text-blue-600">Captivates</span> & Converts
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Create stunning websites that not only look amazing but drive real business results. Our designs combine beautiful aesthetics with user-centric functionality to maximize engagement and conversions.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Design My Website
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=600&q=80"
                alt="Website Design"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Design Excellence</h2>
            <p className="text-xl text-gray-600">
              Every element crafted for maximum impact and user satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <Palette className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Visual Excellence</h3>
              <p className="text-gray-600">Stunning designs that reflect your brand identity</p>
            </div>
            <div className="text-center p-6">
              <Smartphone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mobile Responsive</h3>
              <p className="text-gray-600">Perfect experience across all devices and screen sizes</p>
            </div>
            <div className="text-center p-6">
              <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Loading</h3>
              <p className="text-gray-600">Optimized for speed and performance</p>
            </div>
            <div className="text-center p-6">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">User Experience</h3>
              <p className="text-gray-600">Intuitive navigation and seamless interactions</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebsiteDesign;
