import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { 
  Search, Code, Smartphone, Monitor, Palette, Users, Brain, Bug, 
  ArrowRight, TrendingUp, Share2, ShoppingCart, FileText, 
  Building, Heart, GraduationCap, Plane, Home, Database,
  UserCheck, Briefcase, Settings, Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const serviceCategories = [
    {
      title: "Online Marketing",
      icon: TrendingUp,
      services: [
        { name: 'SEO Services', path: '/services/seo-services' },
        { name: 'Search Engine Marketing', path: '/services/search-engine-marketing' },
        { name: 'Social Media Marketing', path: '/services/social-media-marketing' },
        { name: 'Pay Per Click Management', path: '/services/pay-per-click-management' },
        { name: 'SEO Copywriting', path: '/services/seo-copywriting' },
        { name: 'Digital Marketing', path: '/services/digital-marketing' },
        { name: 'Brand Consulting', path: '/services/brand-consulting' },
        { name: 'Lead Management System', path: '/services/lead-management-system' }
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Web Design & Development",
      icon: Code,
      services: [
        { name: 'Website Design', path: '/services/website-design' },
        { name: 'Website Development', path: '/services/web-development' },
        { name: 'CRM Software Development', path: '/services/crm-software-development' },
        { name: 'Software Development', path: '/services/software-development' },
        { name: 'Educational Web Portal Development', path: '/services/educational-web-portal' },
        { name: 'Restaurant Web Portal Development', path: '/services/restaurant-web-portal' },
        { name: 'Health Care Portal Development', path: '/services/healthcare-portal' },
        { name: 'Travel Portal Development', path: '/services/travel-portal' },
        { name: 'Real Estate Portal Development', path: '/services/real-estate-portal' },
        { name: 'E-commerce Website Development', path: '/services/ecommerce-development' }
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Mobile Application",
      icon: Smartphone,
      services: [
        { name: 'Mobile App Development', path: '/services/mobile-apps' },
        { name: 'Windows App Development', path: '/services/windows-app-development' },
        { name: 'Xamarin App Development', path: '/services/xamarin-app-development' },
        { name: 'Hybrid App Development', path: '/services/hybrid-app-development' },
        { name: 'Native App Development', path: '/services/native-app-development' }
      ],
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Software",
      icon: Monitor,
      services: [
        { name: 'HR and Payroll Management Software', path: '/services/hr-payroll-software' },
        { name: 'Jewellery Software', path: '/services/jewellery-software' },
        { name: 'CRM Software', path: '/services/crm-software' },
        { name: 'Real Estate Software', path: '/services/real-estate-software' },
        { name: 'Inventory Management Software', path: '/services/inventory-management-software' },
        { name: 'Hospital Management Software', path: '/services/hospital-management-software' },
        { name: 'School Management Software', path: '/services/school-management-software' }
      ],
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Creative Design",
      icon: Palette,
      services: [
        { name: 'UI/UX Design', path: '/services/ui-ux-design' },
        { name: 'Logo Design', path: '/services/logo-design' },
        { name: 'Brochure Design', path: '/services/brochure-design' }
      ],
      gradient: "from-pink-500 to-rose-500"
    },
    {
      title: "Consultant",
      icon: Users,
      services: [
        { name: 'NetSuite Solution Consultant', path: '/services/netsuite-consultant' },
        { name: 'Recruitment Service', path: '/services/recruitment-service' },
        { name: 'SharePoint Development', path: '/services/sharepoint-development' },
        { name: 'Software Consultant', path: '/services/software-consultant' }
      ],
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Data Science",
      icon: Brain,
      services: [
        { name: 'AI & Machine Learning', path: '/services/ai-ml' },
        { name: 'Data Analytics', path: '/services/data-analytics' }
      ],
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      title: "Testing",
      icon: Bug,
      services: [
        { name: 'Software Testing', path: '/services/software-testing' },
        { name: 'Security Testing', path: '/services/security-testing' },
        { name: 'Performance Testing', path: '/services/performance-testing' }
      ],
      gradient: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              We offer comprehensive IT solutions tailored to meet your business needs and drive digital transformation across all industries.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <div
                key={category.title}
                className={`group bg-gradient-to-r ${category.gradient} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 animate-fade-in border border-gray-100`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 bg-white/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                <ul className="space-y-2 mb-6">
                  {category.services.map((service) => (
                    <li key={service.name} className="flex items-center text-white/90 hover:text-white transition-colors">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <Link to={service.path} className="hover:underline">
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-white font-semibold hover:text-blue-100 transition-colors group"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help transform your business and drive growth.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            Contact Us Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
