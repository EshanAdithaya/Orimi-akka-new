import React from 'react';
import { Globe2, Award, Users, Target, BookOpen, Clock } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
  const milestones = [
    { year: "2015", title: "Foundation", description: "Established in Colombo with a vision to connect Sri Lankan students with Japanese education." },
    { year: "2017", title: "First Partnership", description: "Signed MOU with top 5 Japanese universities for direct student placement." },
    { year: "2019", title: "Expansion", description: "Opened branches in Kandy and Galle, serving students across Sri Lanka." },
    { year: "2021", title: "Recognition", description: "Received 'Best Education Consultant' award from Japan Education Foundation." },
    { year: "2023", title: "Digital Transform", description: "Launched innovative online preparation programs and virtual counseling." }
  ];

  const values = [
    {
      icon: <Globe2 className="w-6 h-6" />,
      title: "Global Perspective",
      description: "We bridge cultures and create international opportunities for ambitious students."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Student Success",
      description: "Every decision we make is centered around ensuring our students' academic and personal growth."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Educational Excellence",
      description: "We maintain high standards in our services and partner only with top-tier institutions."
    }
  ];

  // Inline Card components
  const Card = ({ children, className }) => (
    <div className={`bg-white rounded-lg shadow-sm border ${className}`}>
      {children}
    </div>
  );

  const CardContent = ({ children, className }) => (
    <div className={`${className}`}>
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 ">
      <Header />
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 font-japanese mb-6">
              Bridging Dreams Between Sri Lanka and Japan
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For over 8 years, Orimi Sasaki has been the trusted gateway for Sri Lankan students pursuing higher education in Japan, with a legacy of excellence and student success.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { count: "1500+", label: "Students Placed", icon: <Users className="w-6 h-6" /> },
            { count: "98%", label: "Visa Success Rate", icon: <Award className="w-6 h-6" /> },
            { count: "90+", label: "University Partners", icon: <BookOpen className="w-6 h-6" /> },
            { count: "8+", label: "Years of Excellence", icon: <Clock className="w-6 h-6" /> }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex p-3 bg-pink-100 rounded-full text-pink-600 mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.count}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16 font-japanese">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-pink-100 rounded-xl text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-colors duration-300">
                      {value.icon}
                    </div>
                    <h3 className="ml-4 text-xl font-semibold text-gray-900">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16 font-japanese">
          Our Journey
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-pink-200"></div>
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative">
                <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-1 md:w-1/2"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-pink-600 border-4 border-pink-200"></div>
                  </div>
                  <div className="flex-1 md:w-1/2">
                    <Card className="mx-2 md:mx-8">
                      <CardContent className="p-6">
                        <div className="text-pink-600 font-bold mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;