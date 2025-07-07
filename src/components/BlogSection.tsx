import { Calendar, User, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  button {
   width: 150px;
   height: 50px;
   cursor: pointer;
   display: flex;
   align-items: center;
   background: none;
   border: none;
   border-radius: 10px;
   box-shadow: 1px 1px 3px rgba(0,0,0,0.15);
   background: linear-gradient(to right, #8b5cf6, #ec4899);
   position: relative;
   overflow: hidden;
  }

  button, button span {
   transition: 200ms;
  }

  button .text {
   transform: translateX(35px);
   color: white;
   font-weight: bold;
   font-size: 16px;
  }

  button .icon {
   position: absolute;
   border-left: 1px solid rgba(255,255,255,0.3);
   transform: translateX(110px);
   height: 40px;
   width: 40px;
   display: flex;
   align-items: center;
   justify-content: center;
  }

  button svg {
   width: 15px;
   fill: #eee;
  }

  button:hover {
   background: linear-gradient(to right, #ec4899, #8b5cf6);
  }

  button:hover .text {
   color: transparent;
  }

  button:hover .icon {
   width: 150px;
   border-left: none;
   transform: translateX(0);
  }

  button:focus {
   outline: none;
  }

  button:active .icon svg {
   transform: scale(0.8);
  }
`;

const StyledButton = () => {
  return (
    <StyledWrapper>
      <button className="noselect">
        <span className="text">View All</span>
        <span className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg>
        </span>
      </button>
    </StyledWrapper>
  );
}

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
    <section className="py-20 text-black relative overflow-hidden" style={{ backgroundColor: '#111' }}>
      {/* Large Outlined Triangle in the background */}
      <div className="absolute left-0 top-0 w-full h-full pointer-events-none z-0 hidden md:block">
        <svg width="100%" height="100%" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', left: 0, top: 0 }}>
          <defs>
            <linearGradient id="triangleGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#0154b4" />
              <stop offset="100%" stopColor="#7deff6" />
            </linearGradient>
          </defs>
          <polygon points="-270,0 -270,800 650,400" stroke="#111" strokeWidth="24" fill="url(#triangleGradient)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-stretch justify-between">
          {/* Blog Logo and Heading */}
          <div className="w-full md:w-1/3 flex flex-col justify-center md:justify-center md:pt-8 md:pb-16">
            <div className="text-left md:pl-4">
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center mb-4 md:mb-8 mx-0 shadow-2xl animate-pulse-glow" style={{ background: 'linear-gradient(to right, #7deff6, #0154b4)' }}>
                <svg className="w-8 h-8 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 md:mb-6 text-white md:text-black" style={{ fontFamily: 'Orbitron, Arial, sans-serif' }}>
                Our Insights
              </h2>
              <div className="w-16 md:w-24 h-1 mx-0 rounded-full" style={{ background: 'linear-gradient(to right, #7deff6, #0154b4)' }}></div>
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
              <Link to="/blog">
                <StyledButton />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
