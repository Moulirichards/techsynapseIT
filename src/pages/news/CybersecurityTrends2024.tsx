
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CybersecurityTrends2024 = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <article className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/news"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to News
          </Link>
          
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Top Cybersecurity Trends to Watch in 2024
            </h1>
            
            <div className="flex items-center space-x-6 text-gray-600">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                February 28, 2024
              </div>
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                Michael Chen
              </div>
            </div>
          </header>

          <img
            src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80"
            alt="Cybersecurity Trends"
            className="w-full h-64 md:h-96 object-cover rounded-2xl mb-8"
          />

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-6">
              As we navigate through 2024, the cybersecurity landscape continues to evolve with new threats 
              and innovative defense strategies. Here are the key trends shaping the industry.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">AI-Powered Security Solutions</h2>
            <p className="text-gray-600 mb-4">
              Artificial intelligence is revolutionizing cybersecurity by enabling faster threat detection, 
              automated response systems, and predictive security analytics. Organizations are increasingly 
              adopting AI-driven security tools to stay ahead of sophisticated attacks.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Zero Trust Architecture</h2>
            <p className="text-gray-600 mb-4">
              The "never trust, always verify" approach is becoming the new standard. Zero trust architecture 
              requires verification for every user and device, regardless of their location or previous access history.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cloud Security Evolution</h2>
            <p className="text-gray-600 mb-4">
              With the continued migration to cloud infrastructure, security strategies are adapting to protect 
              distributed environments, multi-cloud deployments, and cloud-native applications.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Supply Chain Security</h2>
            <p className="text-gray-600 mb-4">
              Recent high-profile attacks have highlighted the importance of securing the entire supply chain. 
              Organizations are implementing stricter vendor assessments and continuous monitoring of third-party risks.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default CybersecurityTrends2024;
