import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO, TechCorp",
      company: "TechCorp Solutions",
      rating: 5,
      text: "Infocera transformed our entire digital infrastructure. Their expertise in cloud migration and AI implementation exceeded our expectations.",
      image: "https://i.pravatar.cc/150?img=47"
    },
    {
      name: "Michael Chen",
      position: "CEO, InnovateLabs",
      company: "InnovateLabs",
      rating: 5,
      text: "Outstanding service and technical expertise. The mobile app they developed for us has increased our user engagement by 300%.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Emily Rodriguez",
      position: "VP Technology, DataFlow",
      company: "DataFlow Inc",
      rating: 5,
      text: "Their data analytics solutions provided insights that revolutionized our business strategy. Truly a game-changing partnership.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "David Kim",
      position: "Head of IT, FinEdge",
      company: "FinEdge Finance",
      rating: 5,
      text: "The cybersecurity solutions from Infocera gave us peace of mind and protected our sensitive data. Highly recommended!",
      image: "https://i.pravatar.cc/150?img=12"
    },
    {
      name: "Priya Singh",
      position: "Product Manager, HealthSync",
      company: "HealthSync Solutions",
      rating: 5,
      text: "From concept to launch, Infocera's team was proactive, creative, and always available. Our healthcare platform is now faster and more secure than ever.",
      image: "https://i.pravatar.cc/150?img=32"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section 
      className="py-20 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url('/testmonialbg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 md:mb-4">What Our Clients Say</h2>
          <p className="text-base md:text-xl text-blue-100 max-w-xs sm:max-w-md md:max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about our services.
          </p>
        </div>

        <div className="relative max-w-2xl md:max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-8 md:p-12">
            <div className="flex items-center justify-center mb-2 md:mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 md:h-6 md:w-6 text-yellow-400 fill-current" />
              ))}
            </div>

            <blockquote className="text-sm md:text-xl text-gray-700 text-center mb-2 md:mb-8 leading-relaxed">
              "{testimonials[currentIndex].text}"
            </blockquote>

            <div className="flex items-center justify-center space-x-1 md:space-x-4">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-8 h-8 md:w-16 md:h-16 rounded-full object-cover"
              />
              <div className="text-center">
                <div className="font-bold text-gray-900 text-xs md:text-base">{testimonials[currentIndex].name}</div>
                <div className="text-gray-600 text-xs md:text-sm">{testimonials[currentIndex].position}</div>
                <div className="text-blue-600 text-xs md:text-sm">{testimonials[currentIndex].company}</div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 w-8 h-8 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 w-8 h-8 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-4 md:mt-8 space-x-1 md:space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
