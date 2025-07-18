import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Code, MousePointerClick, TrendingUp, MonitorSmartphone, ArrowRight, LayoutGrid } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const faqs = [
  { q: 'What is jQuery UI?', a: 'jQuery UI is a curated set of user interface interactions, effects, widgets, and themes built on top of jQuery.' },
  { q: 'Is jQuery UI still relevant?', a: 'jQuery UI is still used for legacy projects and quick UI enhancements, though modern frameworks are preferred for new apps.' },
  { q: 'Do you support jQuery UI migration?', a: 'Yes, Infocera offers migration and modernization services for jQuery UI-based projects.' },
  { q: 'Can you build custom widgets with jQuery UI?', a: 'Absolutely! We create custom, interactive UI widgets using jQuery UI and modern JavaScript.' },
];

const industries = [
  'E-commerce',
  'Education',
  'Healthcare',
  'Startups',
  'Enterprises',
  'Media',
  'Retail',
  'Finance',
];

export default function JqueryUI() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-gray-800 to-blue-400 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">jQuery UI Development</h1>
          <p className="text-xl mb-6">Enhance your web projects with interactive, cross-browser UI widgets using jQuery UI by Infocera.</p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-gray-800 font-bold shadow hover:bg-blue-100">Start Your Web Project</Button>
          </Link>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <LayoutGrid className="h-10 w-10 text-gray-800 mb-2" />
            <h3 className="font-bold text-lg mb-2">UI Widgets</h3>
            <p>Ready-to-use widgets and effects for rich interfaces.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <Code className="h-10 w-10 text-gray-800 mb-2" />
            <h3 className="font-bold text-lg mb-2">Legacy Support</h3>
            <p>Maintain and modernize existing jQuery UI-based projects.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <MonitorSmartphone className="h-10 w-10 text-gray-800 mb-2" />
            <h3 className="font-bold text-lg mb-2">Cross-Browser</h3>
            <p>Consistent experience across all browsers and devices.</p>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-blue-100 to-gray-200">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Infocera for jQuery UI?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><TrendingUp className="h-8 w-8 text-gray-800 mb-2" />jQuery UI Experts</div>
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><MonitorSmartphone className="h-8 w-8 text-gray-800 mb-2" />Mobile-First</div>
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><Code className="h-8 w-8 text-gray-800 mb-2" />Custom Solutions</div>
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><LayoutGrid className="h-8 w-8 text-gray-800 mb-2" />UI Widgets</div>
          </div>
        </div>
      </section>
      {/* Industries/Use Cases */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Industries & Use Cases</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((ind) => (
              <span key={ind} className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full">{ind}</span>
            ))}
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="py-16 bg-gradient-to-r from-blue-100 to-gray-200">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Our jQuery UI Development Process</h2>
          <ol className="space-y-4">
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-gray-800">1.</span> Discovery & Planning</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-gray-800">2.</span> UI/UX & Architecture</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-gray-800">3.</span> jQuery UI Development</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-gray-800">4.</span> Testing & QA</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-gray-800">5.</span> Launch & Support</li>
          </ol>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible>
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={String(idx)}>
                <AccordionTrigger onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}>
                  <span className="font-semibold">{faq.q}</span>
                </AccordionTrigger>
                <AccordionContent className={faqOpen === idx ? 'block' : 'hidden'}>
                  <p className="text-gray-700 py-2">{faq.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-800 to-blue-400 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Ready to Enhance Your Web Project?</h2>
          <p className="mb-6">Contact Infocera for a free consultation and see how jQuery UI can add interactivity to your website.</p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-gray-800 font-bold shadow hover:bg-blue-100">Get Started</Button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
} 