import { ArrowRight, TrendingUp, Code, Smartphone, Monitor, Palette, Users, Brain, Bug } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const ServicesOverview = () => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const services = [
    {
      icon: TrendingUp,
      title: "Online Marketing",
      description: "Comprehensive digital marketing solutions including SEO, SEM, and social media marketing.",
      path: "/services",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Code,
      title: "Web Design & Development",
      description: "Custom websites, web applications, and specialized portal development.",
      path: "/services/web-development",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Native, hybrid, and cross-platform mobile app development solutions.",
      path: "/services/mobile-apps",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Monitor,
      title: "Software Solutions",
      description: "Enterprise software including CRM, HR, inventory, and management systems.",
      path: "/services",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "UI/UX design, logo design, and creative brochure design services.",
      path: "/services/ui-ux-design",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: Users,
      title: "Consulting Services",
      description: "Expert consulting for NetSuite, SharePoint, recruitment, and software solutions.",
      path: "/services",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Brain,
      title: "Data Science",
      description: "AI, machine learning, and advanced data analytics solutions.",
      path: "/services/ai-ml",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: Bug,
      title: "Testing Services",
      description: "Comprehensive software, security, and performance testing solutions.",
      path: "/services",
      gradient: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <section id="services" className="pt-10 pb-20 bg-[linear-gradient(to_right,_#7deff6,_#0154b4)]">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 md:mb-4">Our Services</h2>
          <p className="text-base md:text-xl text-blue-100 max-w-xs sm:max-w-md md:max-w-3xl mx-auto">
            We offer comprehensive IT solutions tailored to meet your business needs and drive digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-white p-2 md:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-8 h-8 md:w-14 md:h-14 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-4 w-4 md:h-7 md:w-7 text-white" />
              </div>
              <h3 className="text-sm md:text-lg font-bold text-blue-900 mb-1 md:mb-3">{service.title}</h3>
              <p className="text-xs md:text-sm text-gray-700 mb-2 md:mb-4">{service.description}</p>
              
              <Link
                to={service.path}
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group text-xs md:text-sm"
              >
                Learn More
                <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Link
            to="/services"
            className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-sm md:text-base"
            style={{
              background: isButtonHovered
                ? 'linear-gradient(to right, #7deff6, #0154b4)'
                : 'linear-gradient(to right, #0154b4, #7deff6)',
              transition: 'background 0.3s',
            }}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
            View All Services
            <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
