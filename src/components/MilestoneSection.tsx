import { TrendingUp, Users, Award, Globe } from 'lucide-react';
import React, { useRef } from 'react';

// Custom hook for count up animation with intersection observer
function useCountUp(target, duration = 1200, start = 0) {
  const [count, setCount] = React.useState(start);
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = useRef();
  
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  React.useEffect(() => {
    if (!isVisible) return;
    
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
  }, [target, duration, start, isVisible]);
  
  return { count, ref };
}

export const MilestoneSection = () => {
  const milestones = [
    {
      icon: <Users className="h-8 w-8" />,
      number: "500+",
      label: "Happy Clients",
      color: "text-white"
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: "1000+",
      label: "Projects Completed",
      color: "text-white"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      number: "98%",
      label: "Success Rate",
      color: "text-white"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      number: "50+",
      label: "Countries Served",
      color: "text-white"
    }
  ];

  return (
    <section className="pt-8 pb-20 md:py-20 text-white relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements - match clients section */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(120,119,198,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(120,119,198,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-red-900/20"></div>
      
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 h-full relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 h-full items-center">
          {milestones.map((milestone, index) => {
            // Extract number from milestone.number (e.g., '500+' -> 500, '98%' -> 98)
            const num = parseInt(milestone.number.replace(/\D/g, ''));
            const { count, ref } = useCountUp(num);
            return (
              <div
                key={milestone.label}
                ref={ref}
                className="text-center animate-fade-in group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`${milestone.color} mb-2 md:mb-4 flex justify-center bg-white bg-opacity-20 rounded-full w-12 h-12 md:w-20 md:h-20 items-center mx-auto backdrop-blur-sm border border-white/30 group-hover:bg-opacity-30 transition-all duration-300 group-hover:scale-110 animate-pulse-glow`}>
                  {milestone.icon}
                </div>
                <div className="text-2xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
                  {count}
                  {milestone.number.replace(/\d+/g, '')}
                </div>
                <div className="text-xs md:text-sm lg:text-base opacity-90 font-medium">
                  {milestone.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
