
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { TrendingUp, DollarSign, Users, Calendar } from 'lucide-react';

const Investors = () => {
  const metrics = [
    { icon: TrendingUp, label: "Annual Growth", value: "150%" },
    { icon: DollarSign, label: "Revenue", value: "$50M+" },
    { icon: Users, label: "Clients", value: "500+" },
    { icon: Calendar, label: "Founded", value: "2018" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Investor Relations
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn about our growth story, financial performance, and strategic vision for the future of technology.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Metrics</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <div key={index} className="text-center p-6">
                  <IconComponent className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</h3>
                  <p className="text-gray-600">{metric.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Investment Highlights</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Market Leadership</h3>
              <p className="text-gray-600">
                Established position in the rapidly growing enterprise software market with innovative solutions.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Strong Financial Performance</h3>
              <p className="text-gray-600">
                Consistent revenue growth and improving margins driven by operational excellence.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Experienced Team</h3>
              <p className="text-gray-600">
                Proven leadership team with track record of building successful technology companies.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Strategic Vision</h3>
              <p className="text-gray-600">
                Clear roadmap for expansion into emerging technologies and new market segments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Investors;
