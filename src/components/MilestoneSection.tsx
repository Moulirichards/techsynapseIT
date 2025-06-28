import { TrendingUp, Users, Award, Globe } from 'lucide-react';

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
    <section className="pt-8 pb-20 md:py-20 bg-[linear-gradient(to_right,_#7deff6,_#0154b4)] text-white relative overflow-hidden" style={{ height: '300px' }}>
      {/* Animated background elements - only on desktop */}
      <div className="hidden md:block absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-red-900/20"></div>
      
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 h-full relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 h-full items-center">
          {milestones.map((milestone, index) => (
            <div
              key={milestone.label}
              className="text-center animate-fade-in group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`${milestone.color} mb-2 md:mb-4 flex justify-center bg-white bg-opacity-20 rounded-full w-12 h-12 md:w-20 md:h-20 items-center mx-auto backdrop-blur-sm border border-white/30 group-hover:bg-opacity-30 transition-all duration-300 group-hover:scale-110 animate-pulse-glow`}>
                {milestone.icon}
              </div>
              <div className="text-2xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
                {milestone.number}
              </div>
              <div className="text-xs md:text-sm lg:text-base opacity-90 font-medium">
                {milestone.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
