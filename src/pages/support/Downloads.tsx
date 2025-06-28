
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Download, FileText, Code, Smartphone } from 'lucide-react';

const Downloads = () => {
  const downloadCategories = [
    {
      icon: Code,
      title: "SDKs & APIs",
      items: [
        { name: "JavaScript SDK", version: "v2.1.0", size: "1.2 MB", type: "SDK" },
        { name: "Python SDK", version: "v1.8.3", size: "2.1 MB", type: "SDK" },
        { name: "REST API Postman Collection", version: "v3.0", size: "450 KB", type: "Collection" }
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      items: [
        { name: "TechFlow Mobile (iOS)", version: "v1.5.2", size: "15 MB", type: "App" },
        { name: "TechFlow Mobile (Android)", version: "v1.5.1", size: "12 MB", type: "App" }
      ]
    },
    {
      icon: FileText,
      title: "Documentation",
      items: [
        { name: "Developer Guide", version: "2024.1", size: "5.2 MB", type: "PDF" },
        { name: "API Reference", version: "2024.1", size: "3.8 MB", type: "PDF" },
        { name: "Best Practices Guide", version: "2024.1", size: "2.1 MB", type: "PDF" }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Downloads Center
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access SDKs, mobile apps, documentation, and other resources to accelerate your development process.
            </p>
          </div>
        </div>
      </section>

      {/* Downloads Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {downloadCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div key={categoryIndex} className="mb-16">
                <div className="flex items-center mb-8">
                  <IconComponent className="h-8 w-8 text-green-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-white rounded-2xl shadow-lg border p-6 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">{item.name}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>{item.version}</span>
                            <span>{item.size}</span>
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                              {item.type}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <button className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                        <Download className="h-5 w-5 mr-2" />
                        Download
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">System Requirements</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow p-6">
              <h4 className="font-bold text-gray-900 mb-3">Web Development</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Node.js 16.0+</li>
                <li>• npm 8.0+</li>
                <li>• Modern web browser</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow p-6">
              <h4 className="font-bold text-gray-900 mb-3">Mobile Development</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• iOS 13.0+</li>
                <li>• Android 7.0+</li>
                <li>• Xcode 12+ (iOS)</li>
                <li>• Android Studio 4.0+</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow p-6">
              <h4 className="font-bold text-gray-900 mb-3">Backend Services</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Python 3.8+</li>
                <li>• Java 11+</li>
                <li>• Docker 20.0+</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Downloads;
