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
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      <main className="relative">
        <div className="relative z-10">
          <div><HeroSection /></div>
          <div><ServicesOverview /></div>
          <div><TechnologyStack /></div>
          <div><IndustriesSection /></div>
          <div><ClientsSection /></div>
          <div><TestimonialsCarousel /></div>
          <div><PortfolioSection /></div>
          <div><MilestoneSection /></div>
          <div><BlogSection /></div>
          <div><ContactCTA /></div>
        </div>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
