import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './TechnologyStack.css';
import { useIsMobile } from '../hooks/use-mobile';

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

// Add short generic descriptions for each technology
const techDescriptions = {
  'HTML/HTML5': 'Markup language for structuring web content.',
  'CSS3': 'Stylesheet language for designing web pages.',
  'JavaScript': 'Programming language for interactive web apps.',
  'AngularJS': 'Framework for building dynamic web apps.',
  'jQuery': 'JavaScript library for DOM manipulation.',
  'WordPress': 'Popular CMS for websites and blogs.',
  'PHP': 'Server-side scripting language for web development.',
  'Java': 'Versatile programming language for many platforms.',
  'Spring': 'Java framework for building applications.',
  'Python': 'Powerful, easy-to-learn programming language.',
  'Shell': 'Command-line scripting for automation.',
  'Perl': 'Text processing and scripting language.',
  'AWS': 'Cloud computing services by Amazon.',
  'Google Cloud': 'Cloud platform by Google.',
  'Docker': 'Containerization platform for apps.',
  'Azure': 'Microsoft cloud computing platform.',
  'Kubernetes': 'Container orchestration platform.',
  'Heroku': 'Cloud platform for deploying apps.',
  'Oracle': 'Enterprise database management system.',
  'MongoDB': 'NoSQL document database.',
  'Redis': 'In-memory data structure store.',
  'MySQL': 'Popular open-source relational database.',
  'PostgreSQL': 'Advanced open-source relational database.',
  'Elasticsearch': 'Search and analytics engine.',
  'Apache': 'Widely-used web server software.',
  'Tomcat': 'Java servlet container and web server.',
  'Nginx': 'High-performance web server.',
  'IIS': 'Microsoft web server.',
  'Caddy': 'Automatic HTTPS web server.',
  'Lighttpd': 'Lightweight web server.',
  'Jest': 'JavaScript testing framework.',
  'Selenium': 'Browser automation for testing.',
  'Git': 'Version control system for code.',
  'Jenkins': 'Automation server for CI/CD.',
  'Travis CI': 'Continuous integration service.',
  'Mocha': 'JavaScript test framework.',
};

// Unique gradient for each technology
const techGradients = {
  'HTML/HTML5': 'bg-gradient-to-br from-orange-400 via-pink-500 to-red-500',
  'CSS3': 'bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-500',
  'JavaScript': 'bg-gradient-to-br from-yellow-300 via-yellow-500 to-orange-400',
  'AngularJS': 'bg-gradient-to-br from-red-400 via-pink-500 to-yellow-500',
  'jQuery': 'bg-gradient-to-br from-blue-300 via-blue-500 to-cyan-400',
  'WordPress': 'bg-gradient-to-br from-blue-600 via-blue-400 to-gray-400',
  'PHP': 'bg-gradient-to-br from-indigo-400 via-indigo-500 to-purple-500',
  'Java': 'bg-gradient-to-br from-yellow-700 via-yellow-500 to-orange-400',
  'Spring': 'bg-gradient-to-br from-green-400 via-green-500 to-teal-500',
  'Python': 'bg-gradient-to-br from-blue-400 via-yellow-300 to-green-300',
  'Shell': 'bg-gradient-to-br from-gray-700 via-gray-500 to-gray-400',
  'Perl': 'bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400',
  'AWS': 'bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500',
  'Google Cloud': 'bg-gradient-to-br from-blue-400 via-red-400 to-yellow-400',
  'Docker': 'bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-600',
  'Azure': 'bg-gradient-to-br from-blue-500 via-blue-700 to-cyan-400',
  'Kubernetes': 'bg-gradient-to-br from-teal-300 via-blue-400 to-purple-400',
  'Heroku': 'bg-gradient-to-br from-purple-300 via-indigo-300 to-blue-300',
  'Oracle': 'bg-gradient-to-br from-red-500 via-orange-400 to-yellow-400',
  'MongoDB': 'bg-gradient-to-br from-green-400 via-green-600 to-teal-500',
  'Redis': 'bg-gradient-to-br from-red-400 via-pink-500 to-orange-400',
  'MySQL': 'bg-gradient-to-br from-blue-400 via-blue-500 to-cyan-400',
  'PostgreSQL': 'bg-gradient-to-br from-blue-400 via-blue-600 to-indigo-500',
  'Elasticsearch': 'bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-400',
  'Apache': 'bg-gradient-to-br from-red-400 via-orange-400 to-yellow-400',
  'Tomcat': 'bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400',
  'Nginx': 'bg-gradient-to-br from-green-300 via-emerald-400 to-teal-500',
  'IIS': 'bg-gradient-to-br from-blue-400 via-blue-600 to-gray-400',
  'Caddy': 'bg-gradient-to-br from-green-400 via-green-600 to-teal-500',
  'Lighttpd': 'bg-gradient-to-br from-gray-400 via-gray-500 to-gray-700',
  'Jest': 'bg-gradient-to-br from-pink-400 via-red-400 to-yellow-400',
  'Selenium': 'bg-gradient-to-br from-green-400 via-green-600 to-gray-400',
  'Git': 'bg-gradient-to-br from-orange-400 via-red-400 to-yellow-400',
  'Jenkins': 'bg-gradient-to-br from-orange-400 via-yellow-400 to-red-400',
  'Travis CI': 'bg-gradient-to-br from-green-400 via-gray-400 to-red-400',
  'Mocha': 'bg-gradient-to-br from-pink-200 via-orange-300 to-yellow-200',
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
  // Responsive page size: 1 for mobile, 2 for desktop
  const getPageSize = () => (window.innerWidth < 768 ? 1 : 2);
  const [pageSize, setPageSize] = useState(getPageSize());
  useEffect(() => {
    const handleResize = () => setPageSize(getPageSize());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Split categories into pages of pageSize
  const pages = [];
  for (let i = 0; i < technologyCategories.length; i += pageSize) {
    pages.push(technologyCategories.slice(i, i + pageSize));
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

  const isMobile = useIsMobile();

  return (
    <section
      className="technology-stack py-2 md:py-4 relative overflow-hidden bg-[linear-gradient(135deg,_#1e3a8a_0%,_#6d28d9_50%,_#0f172a_100%)] md:bg-gradient-to-br md:from-slate-900 md:via-purple-900 md:to-slate-900"
      style={{ position: 'relative' }}
    >
      {/* Subtle radial gradients and grid overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)] pointer-events-none -z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.05),transparent_50%)] pointer-events-none -z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.05),transparent_50%)] pointer-events-none -z-10"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(120,119,198,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(120,119,198,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none -z-10"></div>
      <div className="max-w-5xl mx-auto px-8 sm:px-16 lg:px-24 relative z-20 pt-8 md:pt-12">
        <div className="text-center mb-2 md:mb-4">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-cyan-200 mb-2 tracking-tight leading-tight"
            style={{ fontFamily: 'Orbitron, Arial, sans-serif' }}
          >
            TECHNOLOGY STACK
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-white to-cyan-300 mx-auto mb-2 rounded-full"></div>
          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto font-light tracking-wide">
            We leverage cutting-edge technologies to build robust, scalable, and efficient solutions across all domains.
          </p>
        </div>
      </div>
      {/* Horizontal scrollable pages with scroll snap, full width */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-8 pb-2 w-full relative px-10 md:px-20"
        style={{scrollbarWidth: 'none'}}
      >
        {pages.map((categories, pageIdx) => (
          <div
            key={pageIdx}
            className={
              pageIdx === 0
                ? "min-w-full flex-shrink-0 snap-center flex flex-row gap-4 justify-center items-start md:pl-10 md:pr-10"
                : "min-w-full flex-shrink-0 snap-center flex flex-row gap-4 justify-center items-start"
            }
          >
            {categories.map((category, idx) => (
              <div
                key={pageIdx + '-' + idx + '-' + category.name}
                className={
                  pageIdx === 0
                    ? "flex flex-col items-center w-[98vw] md:w-5/12"
                    : "flex flex-col items-center w-[98vw] md:w-1/2"
                }
              >
                <div className="w-full">
                  <div className="rounded-3xl bg-slate-800/90 shadow-2xl p-2 md:p-5 w-full">
                    <div className="mb-3 md:mb-4 flex items-center justify-center">
                      <div className="px-2 py-1 md:px-4 md:py-2 rounded-2xl bg-white/20 backdrop-blur-md shadow-lg border border-blue-200 text-center">
                        <span className="text-sm md:text-base font-bold text-white leading-tight whitespace-pre-line drop-shadow-lg" style={{textShadow: '0 2px 8px rgba(0,0,0,0.25)'}}>{category.name}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 md:gap-4 w-full">
                      {category.technologies.map((tech) => {
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
                            key={category.name + '-' + tech.name}
                            className={`relative flex flex-row items-center justify-between p-1 md:p-3 rounded-2xl shadow-lg overflow-hidden ${techGradients[tech.name] || 'bg-gradient-to-br from-gray-300 to-gray-500'} transition-transform duration-300 hover:scale-105 hover:shadow-2xl`}
                            style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)', backgroundColor: 'rgba(51, 65, 85, 0.7)', maxWidth: '95%' }}
                          >
                            {/* Content: left side */}
                            <div className="flex flex-col gap-1 md:gap-1 flex-1">
                              <span className="text-white text-xs md:text-base font-bold leading-tight drop-shadow-lg">{tech.name}</span>
                              <span className="text-white/90 text-[9px] md:text-[11px] font-medium mb-1 md:mb-1 drop-shadow" style={{textShadow: '0 2px 8px rgba(0,0,0,0.10)'}}>
                                {techDescriptions[tech.name] || 'A modern technology for digital solutions.'}
                              </span>
                              <Link
                                to={`/technologies/${pageName}`}
                                className="mt-1 px-1 py-0.5 md:px-2 md:py-1 bg-white/90 hover:bg-white text-gray-900 rounded-lg font-semibold text-[9px] md:text-[11px] shadow transition-colors duration-200 w-fit"
                                style={{textShadow: 'none'}}>
                                Learn More
                              </Link>
                            </div>
                            {/* Icon: right side */}
                            <img
                              src={tech.logo}
                              alt={tech.name}
                              className="w-16 h-16 md:w-24 md:h-24 object-contain ml-2"
                              loading={isMobile ? 'eager' : 'lazy'}
                              style={{ filter: 'brightness(1.15)' }}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
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
