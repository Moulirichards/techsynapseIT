import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Atom, Zap, Code, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ReactJS = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-blue-700 to-cyan-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">React Development</h1>
            <p className="text-xl mb-8">Create interactive, high-performance user interfaces with our expert React development services.</p>
            <button className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl shadow hover:bg-cyan-100 transition-all duration-300">Start React Project</button>
          </div>
          <div className="relative flex justify-center">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32">
              <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
              <ellipse cx="12" cy="12" rx="7" ry="3" stroke="#fff" strokeWidth="2" fill="none" />
              <ellipse cx="12" cy="12" rx="3" ry="7" stroke="#fff" strokeWidth="2" fill="none" />
              <circle cx="12" cy="12" r="2" fill="#fff" />
            </svg>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose React.js?</h2>
            <p className="text-xl text-gray-600">
              Component-based architecture for scalable and maintainable applications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Atom className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Component-Based</h3>
              <p className="text-gray-600">Reusable components for efficient development</p>
            </div>
            <div className="text-center p-6">
              <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Performance</h3>
              <p className="text-gray-600">Virtual DOM for optimal rendering performance</p>
            </div>
            <div className="text-center p-6">
              <Code className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rich Ecosystem</h3>
              <p className="text-gray-600">Extensive library ecosystem and community support</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReactJS;
