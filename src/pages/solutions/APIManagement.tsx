
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Link as LinkIcon, Shield, BarChart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const APIManagement = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-teal-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                API Management
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Comprehensive API management solutions for secure, scalable, and efficient API lifecycle management.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-green-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Get API Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80"
                alt="API Management"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">API Management Benefits</h2>
            <p className="text-xl text-gray-600">
              Complete API lifecycle management and governance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <LinkIcon className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">API Gateway</h3>
              <p className="text-gray-600">Centralized API gateway for all services</p>
            </div>
            <div className="text-center p-6">
              <Shield className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Security</h3>
              <p className="text-gray-600">Authentication, authorization, and rate limiting</p>
            </div>
            <div className="text-center p-6">
              <BarChart className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Analytics</h3>
              <p className="text-gray-600">Comprehensive API usage analytics and monitoring</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default APIManagement;
