import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Server, Zap, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const NodeJS = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-green-700 to-green-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Node.js Development</h1>
            <p className="text-xl mb-8">Leverage the power of Node.js for fast, scalable, and efficient backend solutions tailored to your business needs.</p>
            <button className="bg-white text-green-700 font-bold px-8 py-4 rounded-xl shadow hover:bg-green-100 transition-all duration-300">Start Node.js Project</button>
          </div>
          <div className="relative flex justify-center">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32">
              <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
              <ellipse cx="12" cy="12" rx="7" ry="7" stroke="#fff" strokeWidth="2" fill="none" />
              <text x="12" y="16" textAnchor="middle" fontSize="8" fill="#fff">N</text>
            </svg>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Node.js Advantages</h2>
            <p className="text-xl text-gray-600">
              Fast, scalable network applications built on Chrome's V8 JavaScript engine
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Server className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Server-Side JavaScript</h3>
              <p className="text-gray-600">Use JavaScript for both frontend and backend</p>
            </div>
            <div className="text-center p-6">
              <Zap className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">High Performance</h3>
              <p className="text-gray-600">Event-driven, non-blocking I/O model</p>
            </div>
            <div className="text-center p-6">
              <Globe className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rich Ecosystem</h3>
              <p className="text-gray-600">Vast npm package repository</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NodeJS;
