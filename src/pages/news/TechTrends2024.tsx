
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TechTrends2024 = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Article Content */}
      <article className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/news"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to News
          </Link>
          
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Top Technology Trends Shaping 2024
            </h1>
            
            <div className="flex items-center space-x-6 text-gray-600">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <time>December 15, 2024</time>
              </div>
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                <span>Sarah Chen</span>
              </div>
            </div>
          </header>

          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
            alt="Technology Trends 2024"
            className="w-full h-96 object-cover rounded-xl mb-8"
          />

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-6">
              As we move through 2024, several key technology trends are reshaping the digital landscape. From AI advancement to quantum computing breakthroughs, here's what's driving innovation this year.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Generative AI Mainstream Adoption</h2>
            <p className="text-gray-700 mb-6">
              Generative AI has moved beyond experimental phases into practical business applications. Organizations are integrating AI-powered tools into workflows, from content creation to code generation, transforming productivity across industries.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Edge Computing Expansion</h2>
            <p className="text-gray-700 mb-6">
              With the proliferation of IoT devices and real-time applications, edge computing is becoming crucial for reducing latency and improving performance. This trend is particularly evident in autonomous vehicles and smart city implementations.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Quantum Computing Progress</h2>
            <p className="text-gray-700 mb-6">
              While still in early stages, quantum computing is showing promising developments in 2024, with increased investment and breakthrough research in quantum algorithms and hardware stability.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Sustainable Technology Focus</h2>
            <p className="text-gray-700 mb-6">
              Green technology initiatives are gaining momentum as organizations prioritize sustainability. From energy-efficient data centers to carbon-neutral cloud computing, environmental considerations are driving technology decisions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Enhanced Cybersecurity Measures</h2>
            <p className="text-gray-700 mb-6">
              With increasing digital threats, cybersecurity continues to evolve with zero-trust architectures, advanced threat detection, and AI-powered security solutions becoming standard practice.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default TechTrends2024;
