import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Careers = () => {
  const jobOpenings = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Build scalable web applications using React, Node.js, and cloud technologies."
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Manage cloud infrastructure and implement CI/CD pipelines for our development teams."
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description: "Create beautiful and intuitive user experiences for our web and mobile applications."
    },
    {
      title: "Data Scientist",
      department: "Analytics",
      location: "New York, NY",
      type: "Full-time",
      description: "Analyze complex datasets to drive business insights and build predictive models."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="pt-12 md:pt-20 pb-16 md:pb-28 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url('/public/careersbg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="text-center">
            <h1 className="pt-8 md:pt-16 text-2xl md:text-5xl font-bold text-white mb-3 md:mb-6">
              Join Our Team
            </h1>
            <p className="text-base md:text-xl text-blue-100 max-w-xs sm:max-w-md md:max-w-3xl mx-auto">
              Be part of a dynamic team that's shaping the future of technology. 
              We're looking for talented individuals who are passionate about innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-4 md:py-8 bg-black">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-4">Why Work With Us?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            <div className="text-center p-3 md:p-6">
              <div className="w-10 h-10 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4">
                <span className="text-lg md:text-2xl">🚀</span>
              </div>
              <h3 className="text-base md:text-xl font-bold text-white mb-1 md:mb-3">Innovation First</h3>
              <p className="text-xs md:text-base text-white">Work with cutting-edge technologies and solve complex challenges</p>
            </div>
            
            <div className="text-center p-3 md:p-6">
              <div className="w-10 h-10 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4">
                <span className="text-lg md:text-2xl">🌍</span>
              </div>
              <h3 className="text-base md:text-xl font-bold text-white mb-1 md:mb-3">Remote Friendly</h3>
              <p className="text-xs md:text-base text-white">Flexible work arrangements with a global team</p>
            </div>
            
            <div className="text-center p-3 md:p-6">
              <div className="w-10 h-10 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4">
                <span className="text-lg md:text-2xl">📈</span>
              </div>
              <h3 className="text-base md:text-xl font-bold text-white mb-1 md:mb-3">Growth Opportunities</h3>
              <p className="text-xs md:text-base text-white">Continuous learning and career development programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-8 md:py-16 bg-black">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-4">Open Positions</h2>
            <p className="text-base md:text-xl text-white">Find your next opportunity with us</p>
          </div>

          <div className="space-y-4 md:space-y-6">
            {jobOpenings.map((job, index) => (
              <div
                key={index}
                className="group bg-black p-3 md:p-6 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-700 hover:bg-none"
                style={{ background: undefined }}
              >
                <div
                  className="w-full h-full transition-all duration-300 rounded-2xl"
                  style={{}}
                  onMouseEnter={e => e.currentTarget.parentElement!.setAttribute('style', 'background: linear-gradient(to right, #0154b4, #7deff6);')}
                  onMouseLeave={e => e.currentTarget.parentElement!.setAttribute('style', '')}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-base md:text-xl font-bold text-white mb-1 md:mb-2">{job.title}</h3>
                      <p className="text-xs md:text-base text-white mb-2 md:mb-4">{job.description}</p>
                      
                      <div className="flex flex-wrap gap-2 md:gap-4 text-xs md:text-sm text-gray-300">
                        <div className="flex items-center">
                          <MapPin className="h-3 md:h-4 w-3 md:w-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 md:h-4 w-3 md:w-4 mr-1" />
                          {job.type}
                        </div>
                        <span className="bg-blue-100 text-blue-800 px-1.5 md:px-2 py-0.5 md:py-1 rounded">
                          {job.department}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mt-2 md:mt-0 md:ml-6">
                      <Link
                        to="/contact"
                        className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-blue-600 text-white font-semibold rounded-lg transition-colors text-sm md:text-base"
                        style={{ background: undefined }}
                        onMouseEnter={e => e.currentTarget.setAttribute('style', 'background: linear-gradient(to right, #00796B, #00BCD4); color: #fff;')}
                        onMouseLeave={e => e.currentTarget.setAttribute('style', 'background: #2563eb; color: #fff;')}
                      >
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
