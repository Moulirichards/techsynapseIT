import { Calendar, User, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const BlogSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const blogs = [
    {
      title: "Logistics For Leaders: Smart Strategies For Vehicle Relocation",
      category: "TECHNOLOGY",
      date: "17-06-2025",
      excerpt: "For business leaders and fleet managers, vehicle relocation is a recurring challenge that requires business intelligence and strategic planning...",
      image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=400&q=80",
      tags: ["Logistics", "Vehicle", "Strategy"],
      slug: "logistics-leaders-vehicle-relocation"
    },
    {
      title: "Discover Key Insights About The Automation Software Testing Course",
      category: "SOFTWARE TRAINING",
      date: "12-06-2025",
      excerpt: "Key Things To Know About Automation Software Testing Course. There has been a huge demand for automation testing professionals in recent years...",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
      tags: ["Testing", "Automation", "Training"],
      slug: "automation-software-testing-course"
    },
    {
      title: "The Future of AI in Enterprise Solutions",
      category: "ARTIFICIAL INTELLIGENCE",
      date: "08-06-2025",
      excerpt: "Exploring how artificial intelligence is revolutionizing enterprise software development and creating new opportunities for businesses...",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=400&q=80",
      tags: ["AI", "Enterprise", "Innovation"],
      slug: "ai-future-enterprise-solutions"
    },
    {
      title: "Cloud Security Best Practices for Modern Businesses",
      category: "CLOUD COMPUTING",
      date: "05-06-2025",
      excerpt: "Essential security measures and best practices for protecting your data and applications in cloud environments...",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80",
      tags: ["Cloud", "Security", "Best Practices"],
      slug: "cloud-security-best-practices"
    }
  ];

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + blogs.length) % blogs.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % blogs.length);
  };

  const visibleBlogs = [
    blogs[currentIndex],
    blogs[(currentIndex + 1) % blogs.length]
  ];

  return (
    <section className="py-20 text-white relative overflow-hidden bg-black">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-20 h-20 border-2 border-blue-400/40 rotate-45 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-16 h-16 border-2 border-purple-400/40 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 border-2 border-cyan-400/40 rotate-12 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
      </div>

      {/* Gradient Lines */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent"></div>
        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-pink-500 to-transparent"></div>
      </div>

      {/* Animated Dots Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-1/3 left-1/6 w-4 h-4 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-2/3 right-1/6 w-4 h-4 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/6 right-1/3 w-4 h-4 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Additional Large Shapes */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute top-10 left-10 w-32 h-32 border border-blue-300/50 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 border border-purple-300/50 rotate-45 animate-bounce" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-lg animate-spin" style={{ animationDuration: '10s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-stretch justify-between">
          {/* Blog Logo and Heading */}
          <div className="w-full md:w-1/3 flex flex-col justify-center md:justify-center md:pt-8 md:pb-16">
            <div className="text-center md:text-left md:pl-4">
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center mb-4 md:mb-8 mx-auto md:mx-0 shadow-2xl animate-pulse-glow" style={{ background: 'linear-gradient(to right, #7deff6, #0154b4)' }}>
                <svg className="w-8 h-8 md:w-12 md:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 md:mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                OUR BLOGS
              </h2>
              <div className="w-16 md:w-24 h-1 mx-auto md:mx-0 rounded-full" style={{ background: 'linear-gradient(to right, #7deff6, #0154b4)' }}></div>
            </div>
          </div>

          {/* Blog Cards */}
          <div className="w-full md:w-2/3 relative flex flex-col items-center mt-6 md:mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {visibleBlogs.map((blog, index) => (
                <article
                  key={currentIndex + index}
                  className="bg-white/95 backdrop-blur-sm text-gray-900 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:-translate-y-2 md:hover:-translate-y-3 animate-fade-in border border-purple-200/50 group p-2 md:p-0"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-20 md:h-48 object-cover group-hover:scale-105 md:group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-2 md:p-6">
                    <div className="flex items-center justify-between mb-2 md:mb-4">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 md:px-3 py-1 md:py-2 rounded-full font-semibold shadow-lg">
                        {blog.category}
                      </span>
                      <span className="text-gray-500 text-xs md:text-sm flex items-center">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                        {blog.date}
                      </span>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-2 md:mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-xs md:text-base text-gray-600 mb-2 md:mb-4 line-clamp-3">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-1 md:space-x-2">
                        {blog.tags.map((tag) => (
                          <span key={tag} className="text-xs bg-purple-50 text-purple-600 px-2 md:px-3 py-0.5 md:py-1 rounded-full border border-purple-200">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        to={`/blog/${blog.slug}`}
                        className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors group-hover:translate-x-1 transition-transform text-xs md:text-base"
                      >
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3 md:h-4 md:w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            {/* Navigation Buttons at bottom center */}
            <div className="flex justify-center mt-4 md:mt-8 space-x-2 md:space-x-4">
              <button
                onClick={goToPrevious}
                className="w-8 h-8 md:w-10 md:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 border border-white/30 hover:scale-105 md:hover:scale-110 shadow-lg"
              >
                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button
                onClick={goToNext}
                className="w-8 h-8 md:w-10 md:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 border border-white/30 hover:scale-105 md:hover:scale-110 shadow-lg"
              >
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
            {/* View all blogs button */}
            <div className="flex justify-center mt-6">
              <Link
                to="/blog"
                className="inline-flex items-center px-6 py-3 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-base md:text-lg"
                style={{ background: 'linear-gradient(to right, #0154b4, #7deff6)' }}
                onMouseEnter={e => e.currentTarget.style.background = 'linear-gradient(to right, #7deff6, #0154b4)'}
                onMouseLeave={e => e.currentTarget.style.background = 'linear-gradient(to right, #0154b4, #7deff6)'}
              >
                View all our blogs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
