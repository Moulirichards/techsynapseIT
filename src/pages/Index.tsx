import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { ServicesOverview } from '@/components/ServicesOverview';
import { TechnologyStack } from '@/components/TechnologyStack';
import { ClientsSection } from '@/components/ClientsSection';
import { TestimonialsCarousel } from '@/components/TestimonialsCarousel';
import { MilestoneSection } from '@/components/MilestoneSection';
import { BlogSection } from '@/components/BlogSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { ContactCTA } from '@/components/ContactCTA';
import { ScrollToTop } from '@/components/ScrollToTop';
import { IndustriesSection } from '@/components/IndustriesSection';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    // Show popup only if not previously closed
    if (!localStorage.getItem('quotePopupClosed')) {
      // setShowQuotePopup(true);
    }

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-scroll-in');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('.scroll-animate');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      <main className="relative">
        <div className="relative z-10">
          <div className="scroll-animate">
            <HeroSection />
          </div>
          
          <div className="scroll-animate" style={{ transitionDelay: '100ms' }}>
            <ServicesOverview />
          </div>
          
          <div className="scroll-animate" style={{ transitionDelay: '200ms' }}>
            <TechnologyStack />
          </div>
          <div className="scroll-animate" style={{ transitionDelay: '250ms' }}>
            <IndustriesSection />
          </div>
          
          <div className="scroll-animate" style={{ transitionDelay: '300ms' }}>
            <ClientsSection />
          </div>
          
          <div className="scroll-animate" style={{ transitionDelay: '400ms' }}>
            <TestimonialsCarousel />
          </div>
          
          <div className="scroll-animate" style={{ transitionDelay: '500ms' }}>
            <PortfolioSection />
          </div>
          
          <div className="scroll-animate" style={{ transitionDelay: '600ms' }}>
            <MilestoneSection />
          </div>
          
          <div className="scroll-animate" style={{ transitionDelay: '700ms' }}>
            <BlogSection />
          </div>
          
          <div className="scroll-animate" style={{ transitionDelay: '800ms' }}>
            <ContactCTA />
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
