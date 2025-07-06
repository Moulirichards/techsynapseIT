import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogs = [
    {
      title: "Logistics For Leaders: Smart Strategies For Vehicle Relocation",
      category: "TECHNOLOGY",
      date: "17-06-2025",
      author: "Sarah Johnson",
      excerpt: "For business leaders and fleet managers, vehicle relocation is a recurring challenge that requires business intelligence and strategic planning...",
      image: "/container.jpg",
      tags: ["Logistics", "Vehicle", "Strategy"],
      slug: "logistics-leaders-vehicle-relocation",
      readTime: "6 min read"
    },
    {
      title: "Discover Key Insights About The Automation Software Testing Course",
      category: "SOFTWARE TRAINING",
      date: "12-06-2025",
      author: "Michael Chen",
      excerpt: "Key Things To Know About Automation Software Testing Course. There has been a huge demand for automation testing professionals in recent years...",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
      tags: ["Testing", "Automation", "Training"],
      slug: "automation-software-testing-course",
      readTime: "8 min read"
    },
    {
      title: "The Future of AI in Enterprise Solutions",
      category: "ARTIFICIAL INTELLIGENCE",
      date: "08-06-2025",
      author: "John Smith",
      excerpt: "Exploring how artificial intelligence is revolutionizing enterprise software development and creating new opportunities for businesses...",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=400&q=80",
      tags: ["AI", "Enterprise", "Innovation"],
      slug: "ai-future-enterprise-solutions",
      readTime: "7 min read"
    },
    {
      title: "Cloud Security Best Practices for Modern Businesses",
      category: "CLOUD COMPUTING",
      date: "05-06-2025",
      author: "Emily Davis",
      excerpt: "Essential security measures and best practices for protecting your data and applications in cloud environments...",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80",
      tags: ["Cloud", "Security", "Best Practices"],
      slug: "cloud-security-best-practices",
      readTime: "5 min read"
    },
    {
      title: "React Development Best Practices in 2025",
      category: "WEB DEVELOPMENT",
      date: "01-06-2025",
      author: "Alex Rodriguez",
      excerpt: "Latest trends and best practices for React development, including performance optimization and modern patterns...",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=400&q=80",
      tags: ["React", "JavaScript", "Frontend"],
      slug: "react-development-best-practices",
      readTime: "9 min read"
    },
    {
      title: "Mobile App Development Trends to Watch",
      category: "MOBILE DEVELOPMENT",
      date: "28-05-2025",
      author: "Lisa Wang",
      excerpt: "Discover the latest mobile app development trends that are shaping the future of mobile technology...",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&q=80",
      tags: ["Mobile", "Apps", "Trends"],
      slug: "mobile-app-development-trends",
      readTime: "6 min read"
    }
  ];

  const categories = ['All', 'TECHNOLOGY', 'SOFTWARE TRAINING', 'ARTIFICIAL INTELLIGENCE', 'CLOUD COMPUTING', 'WEB DEVELOPMENT', 'MOBILE DEVELOPMENT'];

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="pt-32 pb-16 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url('/blogsbg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Insights</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Stay updated with the latest insights, trends, and innovations in technology and software development.
            </p>
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white h-5 w-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-white bg-transparent text-white placeholder-white rounded-xl focus:ring-2 focus:ring-blue-200 focus:border-transparent"
              />
            </div>
            {/* Filter Categories (moved inside hero section) */}
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'border-white text-white hover:bg-blue-100 hover:border-blue-200 hover:text-blue-800'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredBlogs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No articles found matching your search.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog, index) => (
                <article
                  key={blog.slug}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-semibold">
                        {blog.category}
                      </span>
                      <span className="text-gray-500 text-sm flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {blog.date}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {blog.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {blog.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="w-4 h-4 mr-1" />
                        {blog.author}
                      </div>
                      <span className="text-sm text-gray-500">{blog.readTime}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        {blog.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <Link
                        to={`/blog/${blog.slug}`}
                        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                      >
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
