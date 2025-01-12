import { useState, useEffect } from 'react';
import { Menu, X, Cherry, Users, GraduationCap, Building2, Award, ChevronRight, MapPin } from 'lucide-react';

const HomePage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { icon: <Users />, count: "45k+", label: "Active Students" },
    { icon: <GraduationCap />, count: "72+", label: "Programs" },
    { icon: <Building2 />, count: "90+", label: "Partner Universities" },
    { icon: <Award />, count: "35", label: "Awards" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar - Glass morphism effect */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-20">
            <div className="flex items-center space-x-2">
              <Cherry className="h-8 w-8 text-pink-600" />
              <span className="text-xl font-japanese font-medium">
                Orimi Sasaki
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {["Home", "About", "Programs", "Contact"].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-pink-600 transition-colors font-medium"
                >
                  {item}
                </a>
              ))}
              <button className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition-colors">
                Apply Now
              </button>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsNavOpen(!isNavOpen)}
                className="text-gray-700"
              >
                {isNavOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isNavOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              {["Home", "About", "Programs", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 text-gray-700 hover:text-pink-600"
                  onClick={() => setIsNavOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Japanese Pattern */}
      <div className="relative pt-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0zMCAzMG0tMjAgMGEyMCwyMCAwIDEsMCAyMCwwYTIwLDIwIDAgMSwwIC0yMCwwIiBzdHJva2U9InJnYmEoMjQ5LCAxNjgsIDE4NCwgMC4yKSIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4=')] opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 pt-20 pb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-block">
                <span className="bg-pink-100 text-pink-800 text-sm font-medium px-4 py-1 rounded-full">
                  Study in Japan
                </span>
              </div>
              <h1 className="mt-6 text-4xl lg:text-5xl font-bold text-gray-900 font-japanese leading-tight">
                Your Journey to Japan Starts Here
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                Transform your future with quality education in Japan. We guide Sri Lankan students through every step - from visa applications to university admissions.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition-colors">
                  Start Application
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:border-pink-600 hover:text-pink-600 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-pink-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <img 
                src="/api/placeholder/600/400" 
                alt="Students in Japan" 
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section with Japanese-inspired cards */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="relative group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-pink-100 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
              <div className="relative">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-pink-100 rounded-xl text-pink-600">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 text-center mb-2">
                  {stat.count}
                </div>
                <div className="text-gray-600 text-center font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section with Japanese-inspired design */}
      <div className="bg-gradient-to-b from-white to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 font-japanese">
              Our Services
            </h2>
            <div className="mt-4 w-24 h-1 bg-pink-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Visa Support",
                description: "Expert guidance through the Japanese student visa application process with high success rates.",
                icon: <MapPin />
              },
              {
                title: "Language Training",
                description: "Comprehensive Japanese language courses from N5 to N1 levels with experienced instructors.",
                icon: <GraduationCap />
              },
              {
                title: "University Placement",
                description: "Direct partnerships with top Japanese universities ensuring successful admissions.",
                icon: <Building2 />
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-pink-100 rounded-xl text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <button className="text-pink-600 flex items-center group-hover:text-pink-700">
                  Learn more <ChevronRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;