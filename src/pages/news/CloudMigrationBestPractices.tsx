
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CloudMigrationBestPractices = () => {
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
              Cloud Migration Best Practices: A Complete Guide for 2024
            </h1>
            
            <div className="flex items-center space-x-6 text-gray-600">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                March 10, 2024
              </div>
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                Sarah Johnson
              </div>
            </div>
          </header>

          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
            alt="Cloud Migration"
            className="w-full h-64 md:h-96 object-cover rounded-2xl mb-8"
          />

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-6">
              Cloud migration has become a critical initiative for businesses looking to modernize their infrastructure, 
              reduce costs, and improve scalability. However, successful cloud migration requires careful planning and execution.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Planning Your Migration Strategy</h2>
            <p className="text-gray-600 mb-4">
              Before beginning any migration, it's essential to assess your current infrastructure and define clear objectives. 
              This includes evaluating applications, data dependencies, and security requirements.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Migration Approaches</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li><strong>Rehosting (Lift and Shift):</strong> Moving applications without changes</li>
              <li><strong>Replatforming:</strong> Making minor optimizations during migration</li>
              <li><strong>Refactoring:</strong> Re-architecting applications for cloud-native benefits</li>
              <li><strong>Rebuilding:</strong> Creating new applications from scratch</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Security Considerations</h2>
            <p className="text-gray-600 mb-4">
              Security should be a top priority throughout the migration process. Implement proper access controls, 
              encryption, and monitoring to protect your data and applications in the cloud.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cost Optimization</h2>
            <p className="text-gray-600 mb-4">
              Cloud migration offers opportunities for cost savings, but requires ongoing optimization. 
              Monitor usage patterns, implement auto-scaling, and regularly review your cloud spending.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default CloudMigrationBestPractices;
