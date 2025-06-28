import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Users, Target, Award, Globe, Rocket, Cloud, TrendingUp } from 'lucide-react';
import React, { useEffect, useState } from 'react';

// Iconic Moments in Our History Section
const iconicMoments = [
  {
    year: 2015,
    icon: <Rocket size={80} stroke="#22d3ee" strokeWidth={1.5} />,
    title: '2015',
    description: 'TechSynapse is founded by a small team of passionate technologists with a vision to drive business growth through technology.'
  },
  {
    year: 2017,
    icon: <Users size={80} stroke="#38bdf8" strokeWidth={1.5} />,
    title: '2017',
    description: 'Expanded our team and launched our first enterprise software solution, gaining our first major clients.'
  },
  {
    year: 2019,
    icon: <Cloud size={80} stroke="#4ade80" strokeWidth={1.5} />,
    title: '2019',
    description: 'Opened a new office, expanded into cloud and AI services, and began serving international clients.'
  },
  {
    year: 2021,
    icon: <Award size={80} stroke="#facc15" strokeWidth={1.5} />,
    title: '2021',
    description: 'Recognized as a leader in digital transformation, with a growing portfolio of innovative projects and partnerships.'
  },
  {
    year: 2023,
    icon: <TrendingUp size={80} stroke="#f472b6" strokeWidth={1.5} />,
    title: '2023',
    description: 'Celebrated a decade of growth, innovation, and client success—continuing to shape the future of technology.'
  },
  {
    year: 2025,
    icon: <Globe size={80} stroke="#818cf8" strokeWidth={1.5} />,
    title: '2025',
    description: 'Looking ahead to new horizons, TechSynapse continues to drive innovation and deliver value to clients worldwide.'
  }
];

function IconicMomentsSection() {
  const [current, setCurrent] = React.useState(0);
  const moment = iconicMoments[current];

  return (
    <section 
      className="w-full py-20 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url('/public/iconicbg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center text-white mb-4">Iconic Moments in Our History</h2>
        <p className="text-xl text-center text-blue-100 mb-12 max-w-3xl mx-auto">
        From a humble garage to a global tech partner, TechSynapse transformed vision into reality. Empowering startups and enterprises alike, we've shaped digital journeys with innovation at every step.
        </p>
        {/* Timeline */}
        <div className="relative flex items-center justify-center mb-16">
          <div className="absolute left-0 right-0 top-1/2 border-t border-blue-300" style={{ zIndex: 0 }} />
          {/* Mobile: scrollable timeline */}
          <div className="relative z-10 flex items-center gap-4 overflow-x-auto whitespace-nowrap px-2 w-full scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-blue-50 sm:hidden">
            {iconicMoments.map((m, idx) => (
              <button
                key={m.year}
                className={`flex flex-col items-center focus:outline-none ${idx === current ? 'text-blue-300 font-bold' : 'text-blue-200'}`}
                onClick={() => setCurrent(idx)}
              >
                <span className="text-2xl mb-2">{m.year}</span>
                <span className={`w-3 h-3 rounded-full ${idx === current ? 'bg-blue-300' : 'bg-blue-200'}`}></span>
              </button>
            ))}
          </div>
          {/* Desktop: centered, no scroll, large gap */}
          <div className="relative z-10 hidden sm:flex items-center gap-8">
            {iconicMoments.map((m, idx) => (
              <button
                key={m.year}
                className={`flex flex-col items-center focus:outline-none ${idx === current ? 'text-blue-300 font-bold' : 'text-blue-200'}`}
                onClick={() => setCurrent(idx)}
              >
                <span className="text-2xl mb-2">{m.year}</span>
                <span className={`w-3 h-3 rounded-full ${idx === current ? 'bg-blue-300' : 'bg-blue-200'}`}></span>
              </button>
            ))}
          </div>
        </div>
        {/* Card */}
        <div className="flex justify-center">
          <div className={`relative rounded-2xl shadow-2xl p-10 pl-20 flex items-center gap-8 max-w-3xl w-full min-h-[200px] bg-white/90 backdrop-blur-sm`}>
            {/* Left arrow */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-blue-100 text-gray-900 rounded-full p-2 shadow transition disabled:opacity-30"
              onClick={() => setCurrent((c) => Math.max(0, c - 1))}
              disabled={current === 0}
              aria-label="Previous"
            >
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </button>
            {/* Icon */}
            <div className="flex-shrink-0">{moment.icon}</div>
            {/* Content */}
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{moment.title}</div>
              <div className="text-lg text-gray-900">{moment.description}</div>
            </div>
            {/* Right arrow */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-blue-100 text-gray-900 rounded-full p-2 shadow transition disabled:opacity-30"
              onClick={() => setCurrent((c) => Math.min(iconicMoments.length - 1, c + 1))}
              disabled={current === iconicMoments.length - 1}
              aria-label="Next"
            >
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const About = () => {
  const stats = [
    { icon: Users, label: 'Team Members', value: '150+' },
    { icon: Target, label: 'Projects Completed', value: '500+' },
    { icon: Award, label: 'Awards Won', value: '25+' },
    { icon: Globe, label: 'Countries Served', value: '30+' }
  ];

  const team = [
    {
      name: 'Michael Johnson',
      position: 'VP of Engineering',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
      bio: 'Leading engineering teams to deliver innovative solutions.'
    },
    {
      name: 'Faize hamzari',
      position: 'SVP of Products',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&w=300&h=300&fit=crop',
      bio: 'Driving product vision and strategy for global markets.'
    },
    {
      name: 'David Lee',
      position: 'Chief Operating Officer',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&w=300&h=300&fit=crop',
      bio: 'Ensuring operational excellence and organizational growth.'
    },
    {
      name: 'Sophia zurezi',
      position: 'SVP of Development',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&w=300&h=300&fit=crop',
      bio: 'Overseeing software development and delivery.'
    },
    {
      name: 'James Kim',
      position: 'Head of Technology',
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=300&q=80',
      bio: 'Leading technology innovation and architecture.'
    }
  ];

  const [isBrochureHovered, setIsBrochureHovered] = useState(false);

  useEffect(() => {
    // Intersection Observer for scroll animations (copied from Index.tsx)
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-scroll-in');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);
    const sections = document.querySelectorAll('.scroll-animate');
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section
        className="scroll-animate opacity-0 translate-y-10 transition-all duration-700 ease-out pt-40 md:pt-60 pb-32 md:pb-56 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.45)), url('/public/aboutbg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transitionDelay: '0ms',
        }}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 drop-shadow-lg">About Techsynapse</h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 tracking-wide font-medium mb-2">We are a passionate team dedicated to delivering innovative technology solutions.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="scroll-animate opacity-0 translate-y-10 transition-all duration-700 ease-out py-10 md:py-16" style={{ transitionDelay: '100ms' }}>
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 w-full">
            {stats.map((stat, index) => {
              const isSecondRowMobile = index >= 2;
              const isNotFirstColDesktop = index % 4 !== 0;
              return (
                <div
                  key={stat.label}
                  className={[
                    "flex flex-col justify-center items-center text-center animate-fade-in py-4 md:py-0",
                    isSecondRowMobile ? "border-t border-gray-300 md:border-t-0" : "",
                    isNotFirstColDesktop ? "md:border-l md:border-gray-300" : ""
                  ].join(" ")}
                >
                  <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[linear-gradient(135deg,_#13303d_0%,_#4fd1c5_100%)] rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-4">
                    <stat.icon className="h-5 w-5 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.value}</div>
                  <div className="text-xs sm:text-base text-gray-700">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="scroll-animate opacity-0 translate-y-10 transition-all duration-700 ease-out pt-16 md:pt-36 pb-12 md:pb-24 bg-[#13303d] relative z-10" style={{ transitionDelay: '200ms' }}>
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="bg-[linear-gradient(135deg,_#13303d_0%,_#4fd1c5_100%)] rounded-xl shadow-2xl py-8 md:py-16 px-4 md:px-16 -mt-8 md:-mt-20 mb-8 md:mb-12 border border-gray-100 flex flex-col items-center w-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-3xl hover:shadow-blue-400/50 cursor-pointer">
            <div className="w-full">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white drop-shadow-md mb-2 md:mb-4">Our Story</h2>
              <div className="space-y-4 text-blue-100 drop-shadow-md text-justify text-base md:text-lg leading-relaxed">
                <p>
                  TechSynapse began in a small garage with a big dream in 2015: to empower businesses through technology. Our founders, a group of passionate technologists, believed that innovation and dedication could transform the way companies operate and grow. From the very beginning, our mission has been to deliver solutions that not only solve problems but also create new opportunities for our clients.
                </p>
                <p>
                  Over the years, we have evolved from a startup into a global technology partner, serving clients across industries and continents. Our journey has been marked by a relentless pursuit of excellence, a commitment to our core values, and a culture that celebrates creativity, collaboration, and continuous learning.
                </p>
                <p>
                  <strong>Our Mission:</strong> To drive digital transformation for businesses of all sizes by providing innovative, reliable, and scalable technology solutions.
                </p>
                <p>
                  <strong>Our Vision:</strong> To be a global leader in technology services, recognized for our expertise, integrity, and impact on the success of our clients.
                </p>
                <p>
                  <strong>Our Values:</strong> Innovation, Integrity, Excellence, Collaboration, and Customer Success.
                </p>
                <p>
                  Today, TechSynapse is proud to have a diverse team of experts, a portfolio of successful projects, and a reputation for delivering results. We continue to embrace new challenges, invest in emerging technologies, and build lasting partnerships with our clients. Our story is one of growth, resilience, and a shared passion for making a difference through technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Iconic Moments in Our History Section */}
      <div className="scroll-animate opacity-0 translate-y-10 transition-all duration-700 ease-out" style={{ transitionDelay: '300ms' }}>
        <IconicMomentsSection />
        </div>

      {/* What makes us different? / Why us? / Why TechSynapse? Section */}
      <section className="scroll-animate opacity-0 translate-y-10 transition-all duration-700 ease-out py-16 bg-[linear-gradient(135deg,_#80d9ee_0%,_#1a50b2_100%)]" style={{ transitionDelay: '400ms' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-white mb-4">What Makes Us Different</h2>
            <p className="text-xl text-blue-50 max-w-2xl mx-auto">We focus on client-first approach, innovation, and long-term partnerships.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-0">
            <div className="bg-blue-200 rounded-2xl p-8 shadow-sm text-center mb-0 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:ring-4 hover:ring-blue-100">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Client-First Approach</h3>
              <p className="text-blue-900">We put our clients at the center of everything we do.</p>
            </div>
            <div className="bg-blue-400 rounded-2xl p-8 shadow-sm text-center mb-0 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:ring-4 hover:ring-blue-300">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Innovation at Heart</h3>
              <p className="text-blue-900">Innovation drives our solutions and services.</p>
            </div>
            <div className="bg-teal-400 rounded-2xl p-8 shadow-sm text-center mb-0 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:ring-4 hover:ring-teal-300">
              <h3 className="text-xl font-semibold text-teal-900 mb-3">Proven Expertise</h3>
              <p className="text-teal-900">Our team brings years of experience and technical know-how.</p>
            </div>
            <div className="bg-cyan-400 rounded-2xl p-8 shadow-sm text-center mb-0 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:ring-4 hover:ring-cyan-300">
              <h3 className="text-xl font-semibold text-cyan-900 mb-3">Long-Term Partnerships</h3>
              <p className="text-cyan-900">We build lasting relationships with our clients.</p>
            </div>
          </div>
          <div className="flex justify-center mt-8 mb-4">
        <a
          href="/brochure.pdf"
          download
          className="inline-flex items-center px-8 py-4 text-white text-lg font-semibold rounded-xl shadow-lg transition-all duration-300"
          style={{
            background: isBrochureHovered
              ? 'linear-gradient(to right, #7deff6, #0154b4)'
              : 'linear-gradient(to right, #0154b4, #7deff6)'
          }}
          onMouseEnter={() => setIsBrochureHovered(true)}
          onMouseLeave={() => setIsBrochureHovered(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 mr-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0l-6-6m6 6l6-6" />
          </svg>
          Download Brochure
        </a>
      </div>
        </div>
      </section>

      {/* Connecting Businesses Around the World Section */}
      <section className="scroll-animate opacity-0 translate-y-10 transition-all duration-700 ease-out py-2 bg-[#13303d] relative overflow-hidden min-h-[770px] flex flex-col justify-center w-full" style={{ transitionDelay: '500ms' }}>
        {/* Top Row: Text and Map */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full mb-8 gap-0">
          {/* Left: Text */}
          <div className="flex-1 flex flex-col justify-center items-start text-left px-8 lg:pl-32 lg:pr-8 mb-6 lg:mb-0 z-10">
            <h2 className="text-4xl font-bold text-white mb-6 leading-tight">Connecting Businesses</h2>
            <p className="text-blue-100 text-lg lg:text-xl max-w-lg">We empower businesses by expertly matching them with the perfect technology solutions. This strategic alignment ensures you leverage innovation to achieve your goals and thrive in today's digital landscape.</p>
              </div>
          {/* Right: Map */}
          <div className="flex-[2] flex justify-center items-center w-full relative">
            <img src="/map1.png" alt="World Map" className="w-full h-auto object-contain lg:-ml-24" />
            </div>
            </div>
        {/* Bottom Row: Stats */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 w-full px-8 lg:px-32">
          <div className="flex-1 bg-transparent border border-blue-200 rounded-2xl p-10 text-center flex flex-col justify-center items-center">
            <div className="text-5xl font-extrabold text-white mb-2">50+</div>
            <div className="text-white text-xl font-medium">Countries where local providers are listed</div>
              </div>
          <div className="flex-1 bg-transparent border border-blue-200 rounded-2xl p-10 text-center flex flex-col justify-center items-center">
            <div className="text-5xl font-extrabold text-white mb-2">1000+</div>
            <div className="text-white text-xl font-medium">Service providers across the globe</div>
            </div>
          <div className="flex-1 bg-transparent border border-blue-200 rounded-2xl p-10 text-center flex flex-col justify-center items-center">
            <div className="text-5xl font-extrabold text-white mb-2">30+</div>
            <div className="text-white text-xl font-medium">Specialized business service categories</div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="scroll-animate opacity-0 translate-y-10 transition-all duration-700 ease-out py-16 bg-[#13303d]" style={{ transitionDelay: '600ms' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Leadership Team</h2>
            <p className="text-xl text-blue-100">Meet the visionaries behind TechSynapse's success</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={member.name} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover object-top"
                />
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-200 font-medium mb-3">{member.position}</p>
                <p className="text-blue-100">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Highlight Section */}
      <section className="scroll-animate opacity-0 translate-y-10 transition-all duration-700 ease-out w-full bg-gray-100 pt-12 pb-2 px-4 flex flex-col md:flex-row items-center gap-8 mb-0" style={{ transitionDelay: '700ms' }}>
        <div className="relative flex-shrink-0">
          <span className="absolute left-0 top-1/2 -translate-y-1/2 w-56 h-56 bg-[#6ee7b7] rounded-full -z-10"></span>
          <img
            src="https://images.pexels.com/photos/1138903/pexels-photo-1138903.jpeg?auto=compress&w=400&h=400&fit=crop"
            alt="Founder & CEO"
            className="w-56 h-56 rounded-full object-cover border-4 border-white relative z-10"
          />
        </div>
        <div className="flex-1 text-gray-900">
          <div className="text-5xl leading-none mb-4 text-gray-400">"</div>
          <p className="text-2xl font-medium mb-4">
          "For us, true innovation means delivering solutions that don't just meet today's needs, but also anticipate tomorrow's opportunities for our clients."
          </p>
          <div className="mt-6">
            <div className="font-bold text-lg">Ben Smith</div>
            <div className="text-blue-900 text-base">Founder & CEO</div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#13303d] h-2 m-0 p-0"></section>

      <Footer />
    </div>
  );
};

export default About;
