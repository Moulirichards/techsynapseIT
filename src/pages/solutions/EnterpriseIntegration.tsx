
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GitMerge, Database, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const EnterpriseIntegration = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Enterprise Integration
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Seamlessly connect your enterprise systems with robust integration solutions for improved efficiency and data flow.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Get Integration Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
                alt="Enterprise Integration"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Integration Benefits</h2>
            <p className="text-xl text-gray-600">
              Unified systems for seamless business operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <GitMerge className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">System Integration</h3>
              <p className="text-gray-600">Connect disparate systems and applications</p>
            </div>
            <div className="text-center p-6">
              <Database className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data Synchronization</h3>
              <p className="text-gray-600">Real-time data sync across all platforms</p>
            </div>
            <div className="text-center p-6">
              <Shield className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Secure Connections</h3>
              <p className="text-gray-600">Enterprise-grade security for all integrations</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EnterpriseIntegration;
