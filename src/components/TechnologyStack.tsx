import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

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
  const [orbitAngle, setOrbitAngle] = useState(0);
  const [page, setPage] = useState(0); // 0: first 3, 1: next 3
  const requestRef = useRef();

  useEffect(() => {
    let animationId: number;
    let startTime = performance.now();
    const speed = 360 / 10; // degrees per second (10s for full rotation)
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const newAngle = (speed * elapsed / 1000) % 360;
      setOrbitAngle(newAngle);
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  // Increased size for orbits and icons
  const containerSize = 260;
  const center = containerSize / 2;
  const radius = center;

  // Pagination logic
  const categoriesToShow = technologyCategories.slice(page * 3, page * 3 + 3);

  return (
    <section 
      className="technology-stack py-20 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url('/techstackbg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        willChange: 'auto',
        transform: 'translateZ(0)'
      }}
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
        {/* Grid layout for perfect alignment */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center items-center min-h-[400px]">
          {categoriesToShow.map((category, idx) => (
            <div key={category.name} className="flex flex-col items-center">
              <div className="relative" style={{ width: containerSize, height: containerSize }}>
                {/* Orbit circle */}
                <div className="absolute" style={{ left: 0, top: 0, width: containerSize, height: containerSize, borderRadius: '50%', border: '2px solid #d1d5db' }}></div>
                {/* Orbiting logos with JS-driven animation and pill label */}
                {category.technologies.map((tech, i) => {
                  const baseAngle = (360 / category.technologies.length) * i;
                  // Anti-clockwise for Server Side Scripting, Database & Analytics, and Testing & Process
                  const isAntiClockwise =
                    category.name === 'Server Side Scripting' ||
                    category.name === 'Database & Analytics' ||
                    category.name === 'Testing & Process';
                  const angle = isAntiClockwise
                    ? (baseAngle - (orbitAngle + (page * 3 + idx) * 60)) % 360
                    : (baseAngle + orbitAngle + (page * 3 + idx) * 60) % 360;
                  const rad = (angle * Math.PI) / 180;
                  const x = center + radius * Math.cos(rad);
                  const y = center + radius * Math.sin(rad);
                  return (
                    <div
                      key={tech.name}
                      className="absolute flex flex-col items-center"
                      style={{
                        left: x,
                        top: y,
                        transform: 'translate(-50%, -50%)',
                        willChange: 'transform',
                        backfaceVisibility: 'hidden',
                        perspective: '1000px'
                      }}
                    >
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-200">
                        <img src={tech.logo} alt={tech.name} className="w-8 h-8 object-contain" />
                      </div>
                      <span className="mt-3 px-4 py-2 rounded-full bg-blue-900/80 text-white text-sm font-semibold shadow-md border border-blue-400 whitespace-nowrap">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
                {/* Center circle with category name */}
                <div className="absolute" style={{ left: center, top: center, transform: 'translate(-50%, -50%)' }}>
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-blue-400 text-center">
                    <span className="text-base font-bold text-blue-700 leading-tight whitespace-pre-line">{category.name}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Switch for navigation */}
        <div className="flex justify-center mt-12">
          <Switch checked={page === 1} onChange={() => setPage(page === 0 ? 1 : 0)} />
        </div>
      </div>
    </section>
  );
};
