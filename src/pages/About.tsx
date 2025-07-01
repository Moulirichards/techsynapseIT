import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Users, Target, Award, Globe, Rocket, Cloud, TrendingUp } from 'lucide-react';
import React, { useEffect, useState, useRef } from 'react';

// Iconic Moments in Our History Section
const iconicMoments = [
  {
    year: 2015,
    icon: <Rocket size={80} stroke="#22d3ee" strokeWidth={1.5} />,
    title: '2015',
    description: 'Infocera is founded by a small team of passionate technologists with a vision to drive business growth through technology.'
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
    description: 'Looking ahead to new horizons, Infocera continues to drive innovation and deliver value to clients worldwide.'
  }
];

function IconicMomentsSection() {
  const [current, setCurrent] = React.useState(0);
  const moment = iconicMoments[current];

  return (
    <section 
      className="w-full py-20 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url('/iconicbg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center text-white mb-4">Iconic Moments in Our History</h2>
        <p className="text-xl text-center text-blue-100 mb-12 max-w-3xl mx-auto">
        From a humble garage to a global tech partner, Infocera transformed vision into reality. Empowering startups and enterprises alike, we've shaped digital journeys with innovation at every step.
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

// Culture cards data
const cultureCards = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#38bdf8" className="w-12 h-12 mb-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
    title: 'Care',
    text: `At Infocera, care is the foundation of a strong, unified team and exceptional outcomes. We believe true care begins with meaningful communication — from acknowledging presence in team channels to responding promptly and showing empathy. By staying present and supportive, we cultivate a culture of trust and connection that drives us forward together.`
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#facc15" className="w-12 h-12 mb-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m0 0c-2.21 0-4-1.79-4-4H6a6 6 0 0012 0h-2c0 2.21-1.79 4-4 4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 6h8" />
      </svg>
    ),
    title: 'Learn',
    text: `We are committed to continuous learning, as it is essential to achieving our goals. We encourage our employees to cultivate a growth mindset, believing that we can always learn and improve. - As limiting beliefs can prevent us from reaching our full potential, we overcome them by taking risks, trying new things, and focusing on growth and development.`
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fbbf24" className="w-12 h-12 mb-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 17v4m-4-4a4 4 0 018 0m-8 0V5a4 4 0 018 0v12" />
      </svg>
    ),
    title: 'Achieve',
    text: `Having clear goals is crucial to achieving success. At Infocera, we don't tolerate problems that stand in the way of our goals. We diagnose the root causes of these problems, design plans to overcome them, and take action to bring these plans to completion. Action leads to clarity, motivation, ideas, inspiration, and increased faith in our goals, shaping who we are.`
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#60a5fa" className="w-12 h-12 mb-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 8a3 3 0 11-6 0 3 3 0 016 0zm-6 8a3 3 0 100-6 3 3 0 000 6zm12-3a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.59 13.51l6.83-3.02M8.59 10.49l6.83 3.02" />
      </svg>
    ),
    title: 'Share',
    text: `In this context, everyone's an expert in their own life experiences. At Infocera, we recognize the power of collaborating knowledge and expertise to achieve success. Our team members are encouraged to share their ideas, skills, and knowledge with colleagues and clients alike. We foster an environment of collaboration, where everyone's input is valued, and teamwork is key.`
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#a78bfa" className="w-12 h-12 mb-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M1.5 12s3.75-7.5 10.5-7.5S22.5 12 22.5 12s-3.75 7.5-10.5 7.5S1.5 12 1.5 12z" />
        <circle cx="12" cy="12" r="3" stroke="#a78bfa" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    title: 'Transparency',
    text: `We believe in open communication and sharing information freely. Transparency builds trust, encourages collaboration, and ensures everyone is aligned and empowered to do their best work.`
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#34d399" className="w-12 h-12 mb-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3C7.03 3 3 7.03 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-4.97-4.03-9-9-9zm0 0v9m0 0l3.5 3.5M12 12l-3.5 3.5" />
      </svg>
    ),
    title: 'Social Responsibility',
    text: `At Infocera, we take social responsibility seriously. Being a responsible corporate citizen means giving back to the community and positively impacting society. We strive to integrate social responsibility into every aspect of our business and work to support charitable causes and promote sustainability. With a commitment to integrity, we aim to create a better world for all.`
  }
];

// Custom hook for count up animation
function useCountUp(target, duration = 1200, start = 0) {
  const [count, setCount] = React.useState(start);
  const ref = useRef();
  React.useEffect(() => {
    let frame;
    let startTime;
    function animate(ts) {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(progress * (target - start) + start));
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [target, duration, start]);
  return count;
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
  const [cardSet, setCardSet] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const autoPlayRef = React.useRef(autoPlay);
  autoPlayRef.current = autoPlay;

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

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCardSet((prev) => (prev === 0 ? 1 : 0));
    }, 6000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const handleArrow = (dir) => {
    setCardSet((prev) => {
      if (dir === 'left') return prev === 0 ? 1 : 0;
      if (dir === 'right') return prev === 1 ? 0 : 1;
      return prev;
    });
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 6000);
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section
        className="scroll-animate opacity-0 translate-y-10 transition-all duration-700 ease-out pt-40 md:pt-60 pb-32 md:pb-56 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.45)), url('/aboutbg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transitionDelay: '0ms',
        }}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 drop-shadow-lg">About Infocera</h1>
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
              // Extract number from stat.value (e.g., '150+' -> 150)
              const num = parseInt(stat.value.replace(/\D/g, ''));
              const count = useCountUp(num);
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
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                    {count}
                    {stat.value.replace(/\d+/g, '')}
                  </div>
                  <div className="text-xs sm:text-base text-gray-700">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="scroll-animate opacity-0 translate-y-10 transition-all duration-700 ease-out pt-16 md:pt-36 pb-12 md:pb-24 relative z-10" style={{ transitionDelay: '200ms', backgroundImage: `linear-gradient(rgba(20,30,48,0.85),rgba(20,30,48,0.85)), url('/culture1.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="rounded-xl shadow-2xl py-8 md:py-16 px-4 md:px-16 -mt-8 md:-mt-20 mb-8 md:mb-12 border border-gray-100 flex flex-col items-center w-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-3xl hover:shadow-blue-400/50 cursor-pointer">
            <div className="w-full">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white drop-shadow-md mb-2 md:mb-4">Our Story</h2>
              <div className="space-y-4 text-blue-100 drop-shadow-md text-justify text-base md:text-lg leading-relaxed">
                <p>
                  At INFOCERA, our journey began with a simple yet powerful mission: to deliver intelligent technology solutions that make a real difference. Driven by a passionate team of engineers, developers, and domain experts, we've grown into a trusted partner for startups, small businesses, government agencies, and large enterprises alike. From custom mobile apps and web development to data visualization, IoT, and full-scale IT consulting, we craft solutions that are innovative, impactful, and people-centered.
                </p>
                <p>
                  Our story is built on core values of dedication, integrity, and collaboration. We don't just solve problems — we listen, understand, and align our work with your vision. Every project we take on is an opportunity to create lasting value and build long-term partnerships. By staying ahead of the curve and delivering consistent excellence, we've earned a reputation for overcoming even the most complex challenges with empathy and expertise. At INFOCERA, we're not just building technology — we're building the future, together.
                </p>
                <p>
                  With every new challenge, we evolve — exploring emerging technologies and embracing continuous learning. Our cross-functional teams work seamlessly to transform ideas into robust, scalable solutions. We take pride in designing experiences that are not only functional but also intuitive and engaging. Client success is our true benchmark, and we measure ours by the impact we help create. As we move forward, our story continues to grow — fueled by innovation, guided by purpose, and grounded in trust.
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

      {/* What makes us different? / Why us? / Why Infocera? Section */}
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
            <div className="text-5xl font-extrabold text-white mb-2">20+</div>
            <div className="text-white text-xl font-medium">Countries where we are providing the services</div>
              </div>
          <div className="flex-1 bg-transparent border border-blue-200 rounded-2xl p-10 text-center flex flex-col justify-center items-center">
            <div className="text-5xl font-extrabold text-white mb-2">200+</div>
            <div className="text-white text-xl font-medium">Service clients across the globe</div>
            </div>
          <div className="flex-1 bg-transparent border border-blue-200 rounded-2xl p-10 text-center flex flex-col justify-center items-center">
            <div className="text-5xl font-extrabold text-white mb-2">30+</div>
            <div className="text-white text-xl font-medium">Specialized IT service categories</div>
          </div>
        </div>
      </section>

      {/* culture Section */}
      <section className="scroll-animate opacity-0 translate-y-10 transition-all duration-700 ease-out py-16 relative overflow-hidden" style={{ transitionDelay: '600ms', backgroundImage: `linear-gradient(rgba(20,30,48,0.85),rgba(20,30,48,0.85)), url('/culturebg.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Culture: Class, Care, Learn, Achieve, Share, Social Responsibility and Transparency</h2>
          </div>
          <div className="relative flex justify-center gap-6 flex-wrap items-center">
            <button
              aria-label="Previous"
              className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/70 text-gray-900 rounded-full p-2 shadow transition z-10"
              onClick={() => handleArrow('left')}
              style={{left: '-40px'}}
            >
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </button>
            {cultureCards.slice(cardSet * 3, cardSet * 3 + 3).map((card, idx) => (
              <div key={card.title} className="bg-white/10 border border-white/60 rounded-xl p-2 md:p-3 max-w-xs w-full min-h-[420px] text-center shadow-lg flex flex-col items-center transition-all duration-200 hover:border-white hover:bg-white/20 hover:shadow-xl">
                {card.icon}
                <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                <p className="text-blue-100 text-sm md:text-base">{card.text}</p>
              </div>
            ))}
            <button
              aria-label="Next"
              className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/70 text-gray-900 rounded-full p-2 shadow transition z-10"
              onClick={() => handleArrow('right')}
              style={{right: '-40px'}}
            >
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
          <div className="flex justify-center mt-6">
            {[0, 1].map((i) => (
              <span
                key={i}
                className={`mx-2 transition-all duration-500 rounded-full ${cardSet === i ? 'w-6 h-3 bg-white/90 opacity-100' : 'w-3 h-3 bg-white/50 opacity-60'} inline-block`}
                style={{ boxShadow: cardSet === i ? '0 0 8px 2px #fff' : 'none' }}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
