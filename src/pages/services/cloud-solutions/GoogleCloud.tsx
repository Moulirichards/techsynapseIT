
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Cloud, Brain, BarChart3, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const GoogleCloud = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Google Cloud Platform
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Build, deploy, and scale applications on Google's highly scalable and reliable infrastructure.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Get GCP Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
                alt="Google Cloud"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">GCP Advantages</h2>
            <p className="text-xl text-gray-600">
              Leverage Google's infrastructure and machine learning capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Cloud className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kubernetes Native</h3>
              <p className="text-gray-600">Built-in container orchestration and management</p>
            </div>
            <div className="text-center p-6">
              <Brain className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI & ML Services</h3>
              <p className="text-gray-600">Advanced machine learning and AI capabilities</p>
            </div>
            <div className="text-center p-6">
              <BarChart3 className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Big Data Analytics</h3>
              <p className="text-gray-600">Powerful data processing and analytics tools</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GoogleCloud;
