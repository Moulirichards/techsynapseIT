import { ArrowRight, TrendingUp, Code, Smartphone, Monitor, Palette, Users, Brain, Bug } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const ServicesOverview = () => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const navigate = useNavigate();
  const services = [
    {
      icon: TrendingUp,
      title: "Online Marketing",
      description: "Comprehensive digital marketing solutions including SEO, SEM, and social media marketing.",
      path: "/services/social-media-marketing",
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
      path: "/services/crm-software",
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
      path: "/services/netsuite-consultant",
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
      path: "/services/software-testing",
      gradient: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <section
      className="py-4 sm:py-8 relative overflow-hidden"
      style={{
        background: 'linear-gradient(45deg, #9358f7, #6197ee, #10d7e2)',
        minHeight: 'auto',
        maxHeight: 'none',
        // On mobile, set minHeight to 0 and maxHeight to 100vh to prevent white space
        ...(window.innerWidth <= 768 ? { minHeight: 0, maxHeight: '100dvh' } : {})
      }}
    >
      {/* Decorative SVG line - hide on mobile */}
      <svg
        className="absolute left-0 top-0 w-full h-full z-10 pointer-events-none hidden sm:block"
        viewBox="0 0 1600 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="servicesLineGradient" x1="0" y1="0" x2="1600" y2="500" gradientUnits="userSpaceOnUse">
            <stop stopColor="#10d7e2" />
            <stop offset="0.5" stopColor="#6197ee" />
            <stop offset="1" stopColor="#9358f7" />
          </linearGradient>
        </defs>
        <path d="M 0 350 Q 400 100 900 400 Q 1300 600 1600 100" stroke="url(#servicesLineGradient)" strokeWidth="4" fill="none" />
      </svg>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 relative z-20">
        <div className="text-center mb-4 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-cyan-200 mb-2 sm:mb-3 tracking-tight leading-tight">
            OUR SERVICES
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-white to-cyan-300 mx-auto mb-2 sm:mb-4 rounded-full"></div>
          <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-xl mx-auto font-light tracking-wide">
            We offer comprehensive IT solutions tailored to meet your business needs and drive digital transformation.
          </p>
        </div>
        <div className="relative">
          {/* Single Background Card Container */}
          <div className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-black rounded-2xl sm:rounded-3xl p-2 sm:p-6 md:p-8 border border-gray-700/50 backdrop-blur-sm shadow-2xl">
            {/* Glowing Border Effect - hide on mobile */}
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-xl opacity-30 hidden sm:block"></div>
            {/* Inner Content */}
            <div className="relative z-10">
              {/* Grid of Service Cards - adjust gap and columns for mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
                {services.map((service, index) => (
                  <div
                    key={service.title}
                    className={`group relative bg-white p-2 md:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in flex flex-col`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-8 h-8 md:w-14 md:h-14 bg-gradient-to-r ${service.gradient} rounded-lg sm:rounded-xl flex items-center justify-center mb-1 sm:mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="h-4 w-4 md:h-7 md:w-7 text-white" />
                    </div>
                    <h3 className="text-xs sm:text-sm md:text-lg font-bold text-blue-900 mb-0.5 sm:mb-1 md:mb-3">{service.title}</h3>
                    <p className="text-[11px] sm:text-xs md:text-sm text-gray-700 mb-1 sm:mb-2 md:mb-4">{service.description}</p>
                    <button
                      type="button"
                      onClick={() => navigate('/services')}
                      className="mt-auto inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 text-white rounded-full font-semibold shadow transition-colors group text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                      style={{ backgroundColor: '#0080ff' }}
                      onMouseEnter={e => (e.target as HTMLElement).style.backgroundColor = '#0080ff'}
                      onMouseLeave={e => (e.target as HTMLElement).style.backgroundColor = '#0080ff'}
                    >
                      View More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    {/* Decorative gradient overlay - hide on mobile */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 rounded-xl sm:rounded-2xl transition-opacity duration-300 pointer-events-none hidden sm:block`}></div>
                  </div>
                ))}
              </div>
            </div>
            {/* Decorative Elements - hide on mobile */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse hidden sm:block"></div>
            <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse hidden sm:block" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 right-6 w-1 h-1 bg-cyan-400 rounded-full animate-pulse hidden sm:block" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
        <div className="flex justify-center mt-6 sm:mt-8 md:mt-12">
          <button
            className="animated-button"
            onClick={() => navigate('/services')}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
            <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
              ></path>
            </svg>
            <span className="text">{isButtonHovered ? "Explore More" : "View All Services"}</span>
            <span className="circle"></span>
            <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
