
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Cloud, Shield, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AWS = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Amazon Web Services
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Build and deploy scalable applications on AWS, the world's most comprehensive cloud platform.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Get AWS Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80"
                alt="AWS Cloud"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AWS Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive cloud computing services for every business need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Cloud className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Compute Services</h3>
              <p className="text-gray-600">EC2, Lambda, ECS, and more computing options</p>
            </div>
            <div className="text-center p-6">
              <Shield className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Security & Compliance</h3>
              <p className="text-gray-600">Enterprise-grade security and compliance features</p>
            </div>
            <div className="text-center p-6">
              <Zap className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Infrastructure</h3>
              <p className="text-gray-600">Worldwide availability zones and edge locations</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AWS;
