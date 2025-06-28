
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Cloud, Database, Cog, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Azure = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Microsoft Azure
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Build, deploy, and manage applications through Microsoft's global network of data centers.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Get Azure Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=600&q=80"
                alt="Microsoft Azure"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Azure Benefits</h2>
            <p className="text-xl text-gray-600">
              Integrated cloud services and infrastructure for modern applications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Cloud className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hybrid Cloud</h3>
              <p className="text-gray-600">Seamless integration between on-premises and cloud</p>
            </div>
            <div className="text-center p-6">
              <Database className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data Services</h3>
              <p className="text-gray-600">Comprehensive data storage and analytics solutions</p>
            </div>
            <div className="text-center p-6">
              <Cog className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enterprise Integration</h3>
              <p className="text-gray-600">Native integration with Microsoft enterprise tools</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Azure;
