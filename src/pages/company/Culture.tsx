import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Heart, Lightbulb, Target, Users } from 'lucide-react';

const Culture = () => {
  const values = [
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "We believe in maintaining a healthy balance between work and personal life."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We encourage creative thinking and innovative solutions to complex problems."
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "We focus on delivering exceptional results for our clients and stakeholders."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "We foster a collaborative environment where everyone's voice is heard."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Culture
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At TechSynapse, we've built a culture that values innovation, collaboration, and personal growth. 
              Join us in creating the future of technology.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center p-6">
                  <IconComponent className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work With Us</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible Work</h3>
              <p className="text-gray-600">Remote-first culture with flexible schedules</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Learning & Development</h3>
              <p className="text-gray-600">Continuous learning opportunities and skill development</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Competitive Benefits</h3>
              <p className="text-gray-600">Comprehensive health, dental, and retirement benefits</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Culture;
