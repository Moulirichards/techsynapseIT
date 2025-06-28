import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      description: "A modern e-commerce platform built with React and Node.js, featuring real-time inventory management and payment processing.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      date: "2023",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Healthcare Mobile App",
      category: "Mobile Development",
      description: "A comprehensive healthcare app for patient management and telemedicine consultations with real-time chat and video calling.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80",
      tags: ["React Native", "Firebase", "WebRTC", "Redux"],
      date: "2023",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "AI-Powered Analytics Dashboard",
      category: "AI & Analytics",
      description: "Business intelligence dashboard with machine learning insights for predictive analytics and automated reporting.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      tags: ["Python", "TensorFlow", "React", "D3.js"],
      date: "2022",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Cloud Infrastructure Platform",
      category: "Cloud Solutions",
      description: "Scalable cloud infrastructure management platform with automated deployment and monitoring capabilities.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
      tags: ["AWS", "Docker", "Kubernetes", "Terraform"],
      date: "2022",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Financial Trading Platform",
      category: "Web Development",
      description: "Real-time trading platform with advanced charting, portfolio management, and risk assessment tools.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80",
      tags: ["Vue.js", "Express", "PostgreSQL", "WebSocket"],
      date: "2021",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "IoT Smart Home System",
      category: "IoT Development",
      description: "Comprehensive smart home automation system with mobile app control and voice integration.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
      tags: ["React Native", "Arduino", "MQTT", "AWS IoT"],
      date: "2021",
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  const categories = ["All", "Web Development", "Mobile Development", "AI & Analytics", "Cloud Solutions", "IoT Development"];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="pt-24 md:pt-32 pb-8 md:pb-16 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url('/public/portfoliobg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl md:text-5xl font-bold text-white mb-3 md:mb-6">Our Portfolio</h1>
            <p className="text-base md:text-xl text-blue-100 max-w-xs sm:max-w-md md:max-w-3xl mx-auto">
              Explore our collection
            </p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-4 md:mt-8">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-3 md:px-6 py-1 md:py-2 rounded-full border border-cyan-400 text-cyan-200 hover:bg-cyan-700 hover:text-white transition-all duration-300 font-semibold shadow text-xs md:text-base"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 md:h-48 object-cover group-hover:scale-105 md:group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-2 md:top-4 right-2 md:right-4 flex space-x-1 md:space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.demoUrl}
                      className="w-6 md:w-8 h-6 md:h-8 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink className="h-3 md:h-4 w-3 md:w-4" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="w-6 md:w-8 h-6 md:h-8 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <Github className="h-3 md:h-4 w-3 md:w-4" />
                    </a>
                  </div>
                </div>
                
                <div className="p-4 md:p-6">
                  <div className="flex items-center justify-between mb-2 md:mb-3">
                    <span className="text-xs md:text-sm font-medium text-blue-600 bg-blue-50 px-2 md:px-3 py-0.5 md:py-1 rounded-full">
                      {project.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-xs md:text-sm">
                      <Calendar className="h-3 md:h-4 w-3 md:w-4 mr-1" />
                      {project.date}
                    </div>
                  </div>
                  
                  <h3 className="text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs md:text-base text-gray-600 mb-2 md:mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-gray-600 bg-gray-100 px-1.5 md:px-2 py-0.5 md:py-1 rounded-md flex items-center"
                      >
                        <Tag className="h-2 md:h-3 w-2 md:w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-16" style={{ background: 'linear-gradient(to right, #7deff6, #0154b4)' }}>
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 text-center">
          <h2 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-4">Have a project in mind?</h2>
          <p className="text-base md:text-xl text-blue-100 mb-4 md:mb-8 max-w-xs sm:max-w-md md:max-w-2xl mx-auto">
            Let's discuss your project
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-4 md:px-8 py-2 md:py-4 bg-white text-black font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-sm md:text-base"
          >
            Start Project
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
