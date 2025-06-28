
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Zap, Target, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const DigitalTransformation = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Digital Transformation
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform your business with comprehensive digital solutions that modernize operations and drive growth.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Start Transformation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=600&q=80"
                alt="Digital Transformation"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Transformation Benefits</h2>
            <p className="text-xl text-gray-600">
              Modernize your business for the digital age
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Zap className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Process Optimization</h3>
              <p className="text-gray-600">Streamline operations with digital workflows</p>
            </div>
            <div className="text-center p-6">
              <Target className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strategic Planning</h3>
              <p className="text-gray-600">Data-driven decision making and planning</p>
            </div>
            <div className="text-center p-6">
              <TrendingUp className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Growth Acceleration</h3>
              <p className="text-gray-600">Accelerated business growth and innovation</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DigitalTransformation;
