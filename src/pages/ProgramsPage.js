import React, { useState } from 'react';
import { Search, Filter, Book, Clock, CircleDollarSign, GraduationCap, Building2, ChevronDown, ChevronRight } from 'lucide-react';
import Header from '../components/Header';

const ProgramsPage = () => {
  const [selectedType, setSelectedType] = useState('All');
  const [selectedDuration, setSelectedDuration] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState(null);

  const programs = [
    {
      id: 1,
      type: 'Undergraduate',
      title: 'Bachelor of Engineering',
      university: 'Tokyo Institute of Technology',
      duration: '4 years',
      language: 'English & Japanese',
      tuition: '¥535,800/year',
      deadline: 'March 15, 2025',
      description: 'A comprehensive engineering program with specializations in mechanical, electrical, and computer engineering.',
      requirements: ['IELTS 6.5', 'JLPT N2', 'High School Diploma', 'Math Proficiency']
    },
    {
      id: 2,
      type: 'Language',
      title: 'Intensive Japanese Language Program',
      university: 'Waseda University',
      duration: '1 year',
      language: 'Japanese',
      tuition: '¥800,000/year',
      deadline: 'January 30, 2025',
      description: 'Intensive Japanese language course designed to prepare international students for university studies in Japan.',
      requirements: ['Basic Japanese Knowledge', 'High School Diploma']
    },
    {
      id: 3,
      type: 'Graduate',
      title: 'Master of Business Administration',
      university: 'Keio University',
      duration: '2 years',
      language: 'English',
      tuition: '¥1,200,000/year',
      deadline: 'February 28, 2025',
      description: 'Global MBA program focusing on Asian business practices and international management.',
      requirements: ['IELTS 7.0', 'Bachelor Degree', '2 Years Work Experience']
    },
    {
      id: 4,
      type: 'Certificate',
      title: 'Japanese Culture and Arts',
      university: 'Kyoto University of Arts',
      duration: '6 months',
      language: 'English & Japanese',
      tuition: '¥450,000/program',
      deadline: 'Rolling Admission',
      description: 'Immersive program in traditional Japanese arts, including calligraphy, tea ceremony, and pottery.',
      requirements: ['JLPT N4', 'High School Diploma']
    }
  ];

  const programTypes = ['All', 'Undergraduate', 'Graduate', 'Language', 'Certificate'];
  const durations = ['All', '6 months', '1 year', '2 years', '4 years'];

  const filteredPrograms = programs.filter(program => {
    const matchesType = selectedType === 'All' || program.type === selectedType;
    const matchesDuration = selectedDuration === 'All' || program.duration === selectedDuration;
    const matchesSearch = program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         program.university.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesDuration && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 ">
      <Header />
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-pink-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 font-japanese mb-6">
              Academic Programs in Japan
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover your perfect program among our carefully curated selection of academic opportunities at Japan's leading institutions.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search programs..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Program Type Filter */}
            <select
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              {programTypes.map(type => (
                <option key={type} value={type}>{type} Programs</option>
              ))}
            </select>

            {/* Duration Filter */}
            <select
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(e.target.value)}
            >
              {durations.map(duration => (
                <option key={duration} value={duration}>{duration} Duration</option>
              ))}
            </select>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="space-y-6">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div 
                className="p-6 cursor-pointer"
                onClick={() => setExpandedId(expandedId === program.id ? null : program.id)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-pink-100 text-pink-800 mb-2">
                      {program.type}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    {expandedId === program.id ? <ChevronDown /> : <ChevronRight />}
                  </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center text-gray-600">
                    <Building2 className="w-5 h-5 mr-2" />
                    {program.university}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-2" />
                    {program.duration}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Book className="w-5 h-5 mr-2" />
                    {program.language}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <CircleDollarSign className="w-5 h-5 mr-2" />
                    {program.tuition}
                  </div>
                </div>

                {expandedId === program.id && (
                  <div className="mt-6 pt-6 border-t">
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
                      <ul className="list-disc pl-5 text-gray-600">
                        {program.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-gray-600">
                        <span className="font-semibold">Application Deadline:</span> {program.deadline}
                      </div>
                      <button className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition-colors">
                        Apply Now
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredPrograms.length === 0 && (
          <div className="text-center py-12">
            <GraduationCap className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Programs Found</h3>
            <p className="text-gray-600">Try adjusting your search or filters to find more programs.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgramsPage;