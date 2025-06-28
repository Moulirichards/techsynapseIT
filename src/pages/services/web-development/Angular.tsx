import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Shield, Cog, Code, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Angular = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-red-600 to-yellow-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Angular Development</h1>
            <p className="text-xl mb-8">Build robust, scalable, and high-performance web applications with our expert Angular development services.</p>
            <button className="bg-white text-red-600 font-bold px-8 py-4 rounded-xl shadow hover:bg-yellow-100 transition-all duration-300">Start Angular Project</button>
          </div>
          <div className="relative flex justify-center">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32">
              <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
              <polygon points="12,2 2,7 12,22 22,7" stroke="#fff" strokeWidth="2" fill="none" />
              <text x="12" y="16" textAnchor="middle" fontSize="8" fill="#fff">A</text>
            </svg>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Angular Benefits</h2>
            <p className="text-xl text-gray-600">
              Full-featured framework for building complex enterprise applications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Shield className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enterprise Ready</h3>
              <p className="text-gray-600">Built for large-scale enterprise applications</p>
            </div>
            <div className="text-center p-6">
              <Cog className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Full Framework</h3>
              <p className="text-gray-600">Complete solution with everything included</p>
            </div>
            <div className="text-center p-6">
              <Code className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">TypeScript First</h3>
              <p className="text-gray-600">Built with TypeScript for better development experience</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Angular;
