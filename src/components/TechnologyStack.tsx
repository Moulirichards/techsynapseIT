import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './TechnologyStack.css';

const technologyCategories = [
  {
    name: 'UI Design',
    technologies: [
      { name: "HTML/HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "AngularJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "jQuery", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" },
      { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
    ]
  },
  {
    name: 'Server Side Scripting',
    technologies: [
      { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Spring", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Shell", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
      { name: "Perl", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/perl/perl-original.svg" },
    ]
  },
  {
    name: 'Cloud Computing',
    technologies: [
      { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
      { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
      { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "Heroku", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg" },
    ]
  },
  {
    name: 'Database & Analytics',
    technologies: [
      { name: "Oracle", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Elasticsearch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg" },
    ]
  },
  {
    name: 'Web Server Technology',
    technologies: [
      { name: "Apache", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" },
      { name: "Tomcat", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tomcat/tomcat-original.svg" },
      { name: "Nginx", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
      { name: "IIS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" },
      { name: "Caddy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "Lighttpd", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg" },
    ]
  },
  {
    name: 'Testing & Process',
    technologies: [
      { name: "Jest", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },
      { name: "Selenium", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" },
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Jenkins", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
      { name: "Travis CI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/travis/travis-plain.svg" },
      { name: "Mocha", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg" },
    ]
  },
];

// Map technology names to their correct technology page kebab-case route paths
const techPageMap = {
  'HTML/HTML5': 'html-css',
  'CSS3': 'html-css',
  'JavaScript': 'angular-js',
  'AngularJS': 'angular-js',
  'jQuery': 'jquery',
  'WordPress': 'wordpress',
  'PHP': 'php',
  'Java': 'java',
  'Spring': 'java-frameworks',
  'Python': 'python',
  'Shell': 'shell',
  'Perl': 'perl',
  'AWS': 'aws',
  'Google Cloud': 'google-cloud',
  'Docker': 'deployment-automation',
  'Azure': 'aws',
  'Kubernetes': 'deployment-automation',
  'Heroku': 'deployment-automation',
  'Oracle': 'oracle',
  'MongoDB': 'mongodb',
  'Redis': 'redis',
  'MySQL': 'sql-database',
  'PostgreSQL': 'sql-database',
  'Elasticsearch': 'sql-database',
  'Apache': 'apache',
  'Tomcat': 'tomcat',
  'Nginx': 'apache',
  'IIS': 'iis',
  'Caddy': 'apache',
  'Lighttpd': 'apache',
  'Jest': 'unit-testing',
  'Selenium': 'system-testing',
  'Git': 'software-testing',
  'Jenkins': 'software-testing',
  'Travis CI': 'software-testing',
  'Mocha': 'unit-testing',
};

// Styled Switch component
const StyledWrapper = styled.div`
  /* The switch - the box around the slider */
  .switch {
    --a: 0.5s ease-out;
    cursor: pointer;
    position: relative;
    display: inline-flex;
    height: 1.5em;
    border-radius: 1.5em;
    box-shadow: 0 0 0 0.5em #aaa;
    aspect-ratio: 212.4992/84.4688;
    background-color: #aaa;
  }

  /* Hide default HTML checkbox */
  #check {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .switch svg {
    height: 100%;
  }

  .switch svg path {
    color: #fff;
    stroke-width: 16;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 136 224;
    transition:
      all var(--a),
      0s transform;
    transform-origin: center;
  }

  #check:checked ~ .switch svg path {
    stroke-dashoffset: 180;
    transform: scaleY(-1);
  }
`;

const Switch = ({ checked, onChange }) => (
  <StyledWrapper>
    <div>
      <input id="check" type="checkbox" checked={checked} onChange={onChange} />
      <label className="switch" htmlFor="check">
        <svg viewBox="0 0 212.4992 84.4688" overflow="visible">
          <path pathLength={360} fill="none" stroke="currentColor" d="M 42.2496 0 A 42.24 42.24 90 0 0 0 42.2496 A 42.24 42.24 90 0 0 42.2496 84.4688 A 42.24 42.24 90 0 0 84.4992 42.2496 A 42.24 42.24 90 0 0 42.2496 0 A 42.24 42.24 90 0 0 0 42.2496 A 42.24 42.24 90 0 0 42.2496 84.4688 L 170.2496 84.4688 A 42.24 42.24 90 0 0 212.4992 42.2496 A 42.24 42.24 90 0 0 170.2496 0 A 42.24 42.24 90 0 0 128 42.2496 A 42.24 42.24 90 0 0 170.2496 84.4688 A 42.24 42.24 90 0 0 212.4992 42.2496 A 42.24 42.24 90 0 0 170.2496 0 L 42.2496 0" />
        </svg>
      </label>
    </div>
  </StyledWrapper>
);

export const TechnologyStack = () => {
  // Split categories into pages of 3
  const pages = [];
  for (let i = 0; i < technologyCategories.length; i += 3) {
    pages.push(technologyCategories.slice(i, i + 3));
  }

  // Swipe indicator logic
  const [showIndicator, setShowIndicator] = useState(true);
  const scrollRef = useRef(null);
  useEffect(() => {
    const timer = setTimeout(() => setShowIndicator(false), 4000);
    return () => clearTimeout(timer);
  }, []);
  const [currentPage, setCurrentPage] = useState(0);
  // Update current page based on scroll position
  const handleScroll = (e) => {
    const el = e.target;
    const pageWidth = el.offsetWidth;
    const page = Math.round(el.scrollLeft / pageWidth);
    setCurrentPage(page);
  };

  // Scroll to page when dot is clicked
  const scrollToPage = useCallback((pageIdx) => {
    if (scrollRef.current) {
      const el = scrollRef.current;
      el.scrollTo({ left: pageIdx * el.offsetWidth, behavior: 'smooth' });
    }
  }, []);

  return (
    <section
      className="technology-stack py-20 relative overflow-hidden bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-6 md:mb-8">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-cyan-200 mb-3 tracking-tight leading-tight"
            style={{ fontFamily: 'Orbitron, Arial, sans-serif' }}
          >
            TECHNOLOGY STACK
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-white to-cyan-300 mx-auto mb-4 rounded-full"></div>
          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto font-light tracking-wide">
            We leverage cutting-edge technologies to build robust, scalable, and efficient solutions across all domains.
          </p>
        </div>
      </div>
      {/* Horizontal scrollable pages with scroll snap, full width */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-4 w-full relative" style={{scrollbarWidth: 'none'}}
      >
        {pages.map((categories, pageIdx) => (
          <div
            key={pageIdx}
            className="min-w-full flex-shrink-0 snap-center grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center items-start min-h-[400px]"
          >
            {categories.map((category, idx) => (
              <div key={pageIdx + '-' + idx + '-' + category.name} className="flex flex-col items-center w-full">
                <div className="w-full mb-6">
                  <div className="w-full flex items-center justify-center">
                    <div className="px-6 py-3 rounded-2xl bg-white/30 backdrop-blur-md shadow-lg border border-blue-200 text-center">
                      <span className="text-lg font-bold text-white leading-tight whitespace-pre-line drop-shadow-lg" style={{textShadow: '0 2px 8px rgba(0,0,0,0.25)'}}>{category.name}</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6 w-full">
                  {category.technologies.map((tech) => {
                    // Use mapping if available, otherwise fallback to current logic
                    const pageName = techPageMap[tech.name] ||
                      tech.name
                        .toLowerCase()
                        .replace(/\s+/g, '-')
                        .replace(/\//g, '-')
                        .replace(/\+/, 'plus')
                        .replace(/\./g, '')
                        .replace(/\&/g, 'and')
                        .replace(/[^a-z0-9\-]/g, '');
                    return (
                      <div
                        key={tech.name}
                        className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/30 backdrop-blur-md shadow-lg border-2 border-blue-200 glassmorphic-card transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400 hover:bg-white/40"
                        style={{
                          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
                          backdropFilter: 'blur(18px)',
                        }}
                      >
                        <div className="w-16 h-16 flex items-center justify-center mb-2">
                          <img src={tech.logo} alt={tech.name} className="w-20 h-20 object-contain" />
                        </div>
                        <span className="mt-1 text-white text-sm font-semibold text-center drop-shadow-lg" style={{textShadow: '0 2px 8px rgba(0,0,0,0.25)'}}>{tech.name}</span>
                        <Link
                          to={`/technologies/${pageName}`}
                          className="mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-xs shadow transition-colors duration-200"
                          style={{textShadow: 'none'}}
                        >
                          Learn More
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      {/* Swipe indicator below scroll area */}
      {pages.length > 1 && (
        <div className="flex justify-center items-center mt-2 gap-4 select-none">
          {(currentPage > 0) && (
            <div className="flex flex-col items-center">
              <span className="text-white text-xs font-semibold mb-1 drop-shadow animate-pulse">Swipe to go back</span>
              <svg className="bounce-left" width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 8H2M2 8L8 2M2 8L8 14" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          )}
          {(currentPage < pages.length - 1) && (
            <div className="flex flex-col items-center">
              <span className="text-white text-xs font-semibold mb-1 drop-shadow animate-pulse">Swipe to see more</span>
              <svg className="bounce-right" width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 8H30M30 8L24 2M30 8L24 14" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          )}
        </div>
      )}
      {/* Navigation dots */}
      {pages.length > 1 && (
        <div className="flex justify-center items-center gap-2 mt-4">
          {pages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToPage(idx)}
              className={`w-3 h-3 rounded-full border-2 border-white transition-all duration-200 ${currentPage === idx ? 'bg-blue-400 scale-125 shadow-lg' : 'bg-white/40 hover:bg-blue-200'}`}
              aria-label={`Go to page ${idx + 1}`}
              style={{ outline: 'none' }}
            />
          ))}
        </div>
      )}
    </section>
  );
};
