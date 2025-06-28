import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Layers, Zap, Code, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const VueJS = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-green-500 to-teal-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Vue.js Development</h1>
            <p className="text-xl mb-8">Develop fast, flexible, and modern web applications with our Vue.js development expertise.</p>
            <button className="bg-white text-green-500 font-bold px-8 py-4 rounded-xl shadow hover:bg-teal-100 transition-all duration-300">Start Vue.js Project</button>
          </div>
          <div className="relative flex justify-center">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32">
              <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
              <polygon points="12,4 4,20 20,20" stroke="#fff" strokeWidth="2" fill="none" />
              <text x="12" y="17" textAnchor="middle" fontSize="8" fill="#fff">V</text>
            </svg>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vue.js Advantages</h2>
            <p className="text-xl text-gray-600">
              Progressive framework that scales between a library and a full-featured framework
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Layers className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Progressive</h3>
              <p className="text-gray-600">Incrementally adoptable architecture</p>
            </div>
            <div className="text-center p-6">
              <Zap className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">High Performance</h3>
              <p className="text-gray-600">Optimized virtual DOM implementation</p>
            </div>
            <div className="text-center p-6">
              <Code className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Easy Learning</h3>
              <p className="text-gray-600">Gentle learning curve and excellent documentation</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VueJS;
