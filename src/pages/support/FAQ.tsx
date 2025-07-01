import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What services does Infocera offer?",
      answer: "Infocera offers a comprehensive range of technology services including web development, mobile app development, cloud solutions, AI/ML implementation, cybersecurity, and data analytics."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity and scope. Simple projects may take 2-4 weeks, while enterprise solutions can take 3-6 months. We provide detailed timelines during our initial consultation."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive support and maintenance packages to ensure your solutions continue to perform optimally. This includes regular updates, monitoring, and technical support."
    },
    {
      question: "What technologies do you work with?",
      answer: "We work with a wide range of modern technologies including React, Node.js, Python, AWS, Azure, Google Cloud, and many others. Our team stays current with the latest technology trends."
    },
    {
      question: "Can you help with legacy system modernization?",
      answer: "Absolutely! We specialize in modernizing legacy systems, migrating to cloud platforms, and implementing new technologies while ensuring minimal disruption to your business operations."
    },
    {
      question: "What is your pricing model?",
      answer: "We offer flexible pricing models including fixed-price projects, time and materials, and retainer agreements. Pricing depends on project scope, complexity, and duration."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services, processes, and solutions.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Can't find what you're looking for? Our team is here to help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
          >
            Contact Support
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
