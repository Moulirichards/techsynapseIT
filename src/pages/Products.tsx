import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Smartphone, Cloud, Shield, Database, Code, Brain, Users, BarChart, Globe, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    {
      icon: Cloud,
      name: "CloudSync Pro",
      description: "Enterprise cloud management platform for seamless multi-cloud operations and cost optimization.",
      features: ["Multi-cloud management", "Cost optimization", "Security monitoring", "Automated scaling"],
      category: "Cloud Solutions",
      status: "Best Seller"
    },
    {
      icon: Shield,
      name: "SecureGuard Enterprise",
      description: "Comprehensive cybersecurity platform with AI-powered threat detection and response.",
      features: ["AI threat detection", "Real-time monitoring", "Incident response", "Compliance reporting"],
      category: "Cybersecurity",
      status: "New"
    },
    {
      icon: Brain,
      name: "AI Analytics Suite",
      description: "Advanced analytics platform powered by machine learning for business intelligence.",
      features: ["Predictive analytics", "ML algorithms", "Custom dashboards", "API integration"],
      category: "AI & Analytics",
      status: "Popular"
    },
    {
      icon: Smartphone,
      name: "MobileFlow Builder",
      description: "Low-code platform for rapid mobile app development with cross-platform deployment.",
      features: ["Drag-drop interface", "Cross-platform", "Real-time preview", "App store deployment"],
      category: "Mobile Development",
      status: "Featured"
    },
    {
      icon: Database,
      name: "DataVault Pro",
      description: "Enterprise data management solution with advanced backup and recovery capabilities.",
      features: ["Automated backups", "Point-in-time recovery", "Data encryption", "Compliance tools"],
      category: "Data Management",
      status: "Reliable"
    },
    {
      icon: Code,
      name: "DevOps Accelerator",
      description: "Complete DevOps platform for CI/CD automation and infrastructure management.",
      features: ["CI/CD pipelines", "Infrastructure as code", "Monitoring tools", "Team collaboration"],
      category: "DevOps",
      status: "Trending"
    },
    {
      icon: Users,
      name: "TeamConnect Hub",
      description: "Unified collaboration platform for remote teams with integrated project management.",
      features: ["Video conferencing", "Project tracking", "File sharing", "Team analytics"],
      category: "Collaboration",
      status: "Essential"
    },
    {
      icon: BarChart,
      name: "BusinessIntel Dashboard",
      description: "Real-time business intelligence dashboard with customizable reporting and alerts.",
      features: ["Real-time data", "Custom reports", "Alert system", "Mobile access"],
      category: "Business Intelligence",
      status: "Professional"
    },
    {
      icon: Globe,
      name: "WebForce CMS",
      description: "Enterprise content management system with advanced SEO and performance optimization.",
      features: ["SEO optimization", "Performance monitoring", "Content workflows", "Multi-site management"],
      category: "Web Solutions",
      status: "Scalable"
    },
    {
      icon: Zap,
      name: "AutoFlow Engine",
      description: "Business process automation platform with workflow designer and integration capabilities.",
      features: ["Workflow automation", "API integrations", "Process analytics", "Custom triggers"],
      category: "Automation",
      status: "Innovative"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Best Seller': return 'bg-yellow-100 text-yellow-800';
      case 'New': return 'bg-green-100 text-green-800';
      case 'Popular': return 'bg-blue-100 text-blue-800';
      case 'Featured': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="pt-24 md:pt-32 pb-8 md:pb-16 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url('/productsbg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl md:text-5xl font-bold text-white mb-3 md:mb-6">Our Products</h1>
            <p className="text-base md:text-xl text-blue-100 max-w-xs sm:max-w-md md:max-w-3xl mx-auto">
              Discover our suite of innovative software products designed to accelerate your digital transformation and drive business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {products.map((product, index) => (
              <div
                key={product.name}
                className="bg-white p-4 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 animate-fade-in border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4 md:mb-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-2 md:mr-4">
                      <product.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-2xl font-bold text-gray-900">{product.name}</h3>
                      <p className="text-xs md:text-base text-gray-600">{product.category}</p>
                    </div>
                  </div>
                  <span className={`px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs md:text-sm font-medium ${getStatusColor(product.status)}`}>
                    {product.status}
                  </span>
                </div>
                
                <p className="text-xs md:text-base text-gray-600 mb-4 md:mb-6">{product.description}</p>
                
                <div className="space-y-2 md:space-y-3">
                  <h4 className="font-semibold text-gray-900 text-sm md:text-base">Key Features:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 md:gap-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600 text-xs md:text-sm">
                        <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-blue-500 rounded-full mr-1 md:mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-100">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 md:py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-sm md:text-base">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-16" style={{ background: 'linear-gradient(to right, #7deff6, #0154b4)' }}>
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 text-center">
          <h2 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-4">Ready to Transform Your Business?</h2>
          <p className="text-base md:text-xl text-blue-100 mb-4 md:mb-8 max-w-xs sm:max-w-md md:max-w-2xl mx-auto">
            Contact our team to learn how our products can accelerate your digital transformation journey.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-4 md:px-8 py-2 md:py-4 bg-white text-black font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-sm md:text-base"
          >
            Contact Sales Team
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
