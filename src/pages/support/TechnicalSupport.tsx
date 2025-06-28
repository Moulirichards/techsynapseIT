
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Phone, Mail, MessageCircle, Clock } from 'lucide-react';

const TechnicalSupport = () => {
  const supportOptions = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Direct phone support for urgent technical issues",
      contact: "+1 (555) 123-4567",
      availability: "24/7 for critical issues"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Detailed technical assistance via email",
      contact: "support@techflow.com",
      availability: "Response within 4 hours"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant chat support for quick questions",
      contact: "Available on our website",
      availability: "Mon-Fri, 9 AM - 6 PM EST"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Technical Support
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get expert technical assistance from our experienced support team whenever you need it.
            </p>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Reach Us</h2>
            <p className="text-xl text-gray-600">
              Multiple ways to get the technical help you need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg border p-8 text-center">
                  <IconComponent className="h-12 w-12 text-red-600 mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{option.title}</h3>
                  <p className="text-gray-600 mb-4">{option.description}</p>
                  <p className="font-semibold text-gray-900 mb-2">{option.contact}</p>
                  <div className="flex items-center justify-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {option.availability}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Support Levels */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Support Levels</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Basic Support</h3>
              <p className="text-gray-600 mb-4">Email support during business hours</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Email support</li>
                <li>• Knowledge base access</li>
                <li>• Community forums</li>
                <li>• 48-hour response time</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-blue-500">
              <div className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full inline-block mb-4">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Premium Support</h3>
              <p className="text-gray-600 mb-4">Priority support with faster response times</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Priority email support</li>
                <li>• Phone support</li>
                <li>• Live chat</li>
                <li>• 4-hour response time</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise Support</h3>
              <p className="text-gray-600 mb-4">24/7 dedicated support for enterprise clients</p>
              <ul className="space-y-2 text-gray-600">
                <li>• 24/7 phone support</li>
                <li>• Dedicated support manager</li>
                <li>• Custom SLA</li>
                <li>• 1-hour response time</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TechnicalSupport;
