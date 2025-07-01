import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const HybridAppDevelopment = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 w-full bg-gradient-to-br from-blue-50 to-white pb-16">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-r from-cyan-700 to-cyan-300 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Hybrid App Development</h1>
              <p className="text-xl mb-8">Reach more users with cross-platform hybrid apps that deliver native-like performance and experience.</p>
              <div className="flex flex-row items-center md:block">
                <button className="bg-white text-indigo-700 font-bold px-8 py-4 rounded-xl shadow hover:bg-indigo-100 transition-all duration-300">Start Hybrid Project</button>
                <span className="inline-block ml-2 md:hidden">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
                    <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
                    <rect x="7" y="7" width="10" height="10" rx="2" stroke="#fff" strokeWidth="2"/>
                    <path d="M9 11h6M9 15h6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
              </div>
            </div>
            <div className="relative justify-center hidden md:flex">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32">
                <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
                <rect x="7" y="7" width="10" height="10" rx="2" stroke="#fff" strokeWidth="2"/>
                <path d="M9 11h6M9 15h6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-800">Why Choose Infocera for Hybrid App Development?</h2>
            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
              <li>One codebase for multiple platforms (iOS, Android, Windows)</li>
              <li>Cost-effective and quick to market</li>
              <li>Consistent user experience</li>
              <li>Access to device features and offline capabilities</li>
              <li>Expert team with deep hybrid framework knowledge</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-800">Our Hybrid App Development Services</h2>
            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
              <li>Custom Hybrid App Development</li>
              <li>Hybrid App UI/UX Design</li>
              <li>App Integration & Maintenance</li>
              <li>Migration to Hybrid Platforms</li>
            </ul>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Benefits of Hybrid Apps by Infocera</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
            <li>Broader audience reach</li>
            <li>Lower development and maintenance costs</li>
            <li>Faster updates and deployment</li>
            <li>Engaging, high-performance apps</li>
          </ul>
        </section>

        <section className="max-w-2xl mx-auto px-4 py-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-800 text-center">Get a Free Quote Now</h2>
            {submitted ? (
              <div className="text-green-600 text-center font-semibold py-8">Thank you! Our team will contact you soon.</div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-gray-900 placeholder-gray-400" />
                <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-gray-900 placeholder-gray-400" />
                <input type="tel" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-gray-900 placeholder-gray-400" />
                <textarea name="message" placeholder="Message" rows={3} value={form.message} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-gray-900 placeholder-gray-400 resize-none" />
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">SUBMIT</Button>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HybridAppDevelopment; 