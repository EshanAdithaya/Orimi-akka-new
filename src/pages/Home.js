import { useState, useEffect, useRef } from 'react';
import { Menu, X, Cherry, Users, GraduationCap, Building2, Award, ChevronRight, MapPin, ChevronLeft } from 'lucide-react';
import Header from '../components/Header';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      badge: "Study in Japan",
      title: "Your Journey to Japan Starts Here",
      description: "Transform your future with quality education in Japan. We guide Sri Lankan students through every step - from visa applications to university admissions.",
      image: "https://uchi.imgix.net/properties/30_2023-10-24-051426_vwbl.png?crop=focalpoint&domain=uchi.imgix.net&fit=crop&fm=webp&fp-x=0.5&fp-y=0.5&h=576&ixlib=php-3.3.1&q=60&usm=20&w=768"
    },
    {
      badge: "Cultural Experience",
      title: "Immerse in Japanese Culture",
      description: "Experience the perfect blend of traditional values and modern innovation. Live and learn in one of the world's most unique cultures.",
      image: "https://english.moe.gov.tw/Public/Images/202411/80924112815469f5a3.jpg"
    },
    {
      badge: "Career Opportunities",
      title: "Build Your Global Career",
      description: "Open doors to international opportunities. Gain valuable skills and qualifications recognized worldwide.",
      image: "https://media.istockphoto.com/id/1483832805/photo/female-worker-with-helmet.jpg?s=612x612&w=0&k=20&c=W3IaVPEcb1EoIbRDHSb7fFjIRSksWZ6bEvcQ-VlimoQ="
    }
  ];

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        handleSlideChange((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isPaused]);

  const handleSlideChange = (getNextSlide) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide(getNextSlide);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500); // Match this with transition duration
    }
  };

  const nextSlide = () => {
    handleSlideChange((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    handleSlideChange((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div 
      className="relative pt-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0zMCAzMG0tMjAgMGEyMCwyMCAwIDEsMCAyMCwwYTIwLDIwIDAgMSwwIC0yMCwwIiBzdHJva2U9InJnYmEoMjQ5LCAxNjgsIDE4NCwgMC4yKSIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4=')] opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div 
              className={`transition-opacity duration-500 ${
                isTransitioning ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <div className="inline-block">
                <span className="bg-pink-100 text-pink-800 text-sm font-medium px-4 py-1 rounded-full">
                  {slides[currentSlide].badge}
                </span>
              </div>
              <h1 className="mt-6 text-4xl lg:text-5xl font-bold text-gray-900 font-japanese leading-tight">
                {slides[currentSlide].title}
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                {slides[currentSlide].description}
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
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-pink-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className={`transition-opacity duration-500 ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}>
              <img 
                src={slides[currentSlide].image}
                alt="Students in Japan"
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
            
            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>

            {/* Dots Navigation with Progress Bar */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideChange(() => index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-pink-600 w-8' 
                      : 'bg-gray-400/50 w-2 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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
      <Header />

      {/* Hero Section with Carousel */}
      <HeroCarousel />

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

      {/* How to Join Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 font-japanese">
              How to Join
            </h2>
            <div className="mt-4 w-24 h-1 bg-pink-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to begin your journey to study in Japan
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-pink-200"></div>

            {/* Timeline steps */}
            {[
              {
                step: "1",
                title: "Initial Consultation",
                description: "Schedule a free consultation with our education advisors to discuss your goals and requirements."
              },
              {
                step: "2",
                title: "Document Preparation",
                description: "We'll help you prepare all necessary documents for university application and visa process."
              },
              {
                step: "3",
                title: "Language Training",
                description: "Begin your Japanese language courses while your application is being processed."
              },
              {
                step: "4",
                title: "University Application",
                description: "We'll submit your applications to selected universities and follow up until acceptance."
              },
              {
                step: "5",
                title: "Visa Processing",
                description: "Once accepted, we'll assist with your student visa application process."
              }
            ].map((item, index) => (
              <div key={index} className={`relative flex md:items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                <div className="flex-1">
                  <div className={`md:${index % 2 === 0 ? 'pr-8' : 'pl-8'} 
                    p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow
                    border-2 border-pink-100 hover:border-pink-300`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="absolute md:static left-0 md:flex-none flex items-center justify-center w-8 h-8 md:w-12 md:h-12 
                  rounded-full bg-pink-600 text-white font-bold transform md:translate-x-0 -translate-x-1/2
                  md:mx-4 z-10">
                  {item.step}
                </div>

                <div className="flex-1 md:block hidden"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition-colors">
              Start Your Journey Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;