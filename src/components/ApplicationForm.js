import React, { useState } from 'react';
import { 
  ChevronRight, 
  ChevronLeft, 
  Upload,
  User,
  BookOpen,
  GraduationCap,
  FileText,
  Check
} from 'lucide-react';

const ApplicationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    nationality: '',
    passportNumber: '',
    address: '',

    // Educational Background
    highestEducation: '',
    institution: '',
    graduationYear: '',
    gpa: '',

    // Program Preferences
    preferredProgram: '',
    studyLevel: '',
    intendedStartDate: '',
    japaneseLevel: '',

    // Documents
    passport: null,
    academicTranscripts: null,
    languageCertificates: null,
    recommendationLetters: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files[0]
    }));
  };

  const nextStep = () => {
    setStep(prev => Math.min(prev + 1, 4));
  };

  const prevStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const renderProgressBar = () => (
    <div className="mb-8">
      <div className="flex justify-between mb-2">
        {['Personal Information', 'Educational Background', 'Program Preferences', 'Documents'].map((label, index) => (
          <div 
            key={index}
            className={`flex flex-col items-center ${index < step ? 'text-pink-600' : 'text-gray-400'}`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2
              ${index + 1 === step ? 'bg-pink-600 text-white' : 
                index + 1 < step ? 'bg-pink-100 text-pink-600' : 'bg-gray-200 text-gray-400'}`}>
              {index + 1 < step ? <Check className="w-5 h-5" /> : index + 1}
            </div>
            <span className="text-sm hidden md:block">{label}</span>
          </div>
        ))}
      </div>
      <div className="h-2 bg-gray-200 rounded-full">
        <div 
          className="h-full bg-pink-600 rounded-full transition-all duration-300"
          style={{ width: `${(step - 1) * 33.33}%` }}
        ></div>
      </div>
    </div>
  );

  const renderPersonalInfo = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Nationality</label>
          <input
            type="text"
            name="nationality"
            value={formData.nationality}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          rows="3"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
          required
        ></textarea>
      </div>
    </div>
  );

  const renderEducation = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Highest Level of Education</label>
        <select
          name="highestEducation"
          value={formData.highestEducation}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
          required
        >
          <option value="">Select Education Level</option>
          <option value="high_school">High School</option>
          <option value="bachelors">Bachelor's Degree</option>
          <option value="masters">Master's Degree</option>
          <option value="phd">PhD</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Institution Name</label>
        <input
          type="text"
          name="institution"
          value={formData.institution}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Graduation Year</label>
          <input
            type="number"
            name="graduationYear"
            value={formData.graduationYear}
            onChange={handleInputChange}
            min="1900"
            max="2024"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">GPA</label>
          <input
            type="number"
            name="gpa"
            value={formData.gpa}
            onChange={handleInputChange}
            step="0.01"
            min="0"
            max="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            required
          />
        </div>
      </div>
    </div>
  );

  const renderProgramPreferences = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Program</label>
        <select
          name="preferredProgram"
          value={formData.preferredProgram}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
          required
        >
          <option value="">Select Program</option>
          <option value="engineering">Engineering</option>
          <option value="business">Business</option>
          <option value="science">Science</option>
          <option value="arts">Arts</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Study Level</label>
        <select
          name="studyLevel"
          value={formData.studyLevel}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
          required
        >
          <option value="">Select Level</option>
          <option value="undergraduate">Undergraduate</option>
          <option value="graduate">Graduate</option>
          <option value="phd">PhD</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Japanese Language Level</label>
        <select
          name="japaneseLevel"
          value={formData.japaneseLevel}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
          required
        >
          <option value="">Select Level</option>
          <option value="n5">N5 (Beginner)</option>
          <option value="n4">N4 (Basic)</option>
          <option value="n3">N3 (Intermediate)</option>
          <option value="n2">N2 (Advanced)</option>
          <option value="n1">N1 (Native-like)</option>
          <option value="none">No Japanese</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Intended Start Date</label>
        <select
          name="intendedStartDate"
          value={formData.intendedStartDate}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
          required
        >
          <option value="">Select Start Date</option>
          <option value="april_2024">April 2024</option>
          <option value="october_2024">October 2024</option>
          <option value="april_2025">April 2025</option>
          <option value="october_2025">October 2025</option>
        </select>
      </div>
    </div>
  );

  const renderDocuments = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Passport Copy</label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
          <div className="space-y-1 text-center">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <div className="flex text-sm text-gray-600">
              <label className="relative cursor-pointer rounded-md font-medium text-pink-600 hover:text-pink-500">
                <span>Upload a file</span>
                <input
                  type="file"
                  name="passport"
                  onChange={handleFileChange}
                  className="sr-only"
                  accept=".pdf,.jpg,.jpeg,.png"
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-500">PDF, PNG, JPG up to 10MB</p>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Academic Transcripts</label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
          <div className="space-y-1 text-center">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <div className="flex text-sm text-gray-600">
              <label className="relative cursor-pointer rounded-md font-medium text-pink-600 hover:text-pink-500">
                <span>Upload a file</span>
                <input
                  type="file"
                  name="academicTranscripts"
                  onChange={handleFileChange}
                  className="sr-only"
                  accept=".pdf"
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-500">PDF files up to 10MB</p>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Language Certificates (JLPT/English)</label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
          <div className="space-y-1 text-center">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <div className="flex text-sm text-gray-600">
              <label className="relative cursor-pointer rounded-md font-medium text-pink-600 hover:text-pink-500">
                <span>Upload a file</span>
                <input
                  type="file"
                  name="languageCertificates"
                  onChange={handleFileChange}
                  className="sr-only"
                  accept=".pdf"
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-500">PDF files up to 10MB</p>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Recommendation Letters</label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
          <div className="space-y-1 text-center">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <div className="flex text-sm text-gray-600">
              <label className="relative cursor-pointer rounded-md font-medium text-pink-600 hover:text-pink-500">
                <span>Upload a file</span>
                <input
                  type="file"
                  name="recommendationLetters"
                  onChange={handleFileChange}
                  className="sr-only"
                  accept=".pdf"
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-500">PDF files up to 10MB</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return renderPersonalInfo();
      case 2:
        return renderEducation();
      case 3:
        return renderProgramPreferences();
      case 4:
        return renderDocuments();
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 font-japanese">Student Application</h2>
            <p className="mt-2 text-gray-600">Please fill out all required information carefully</p>
          </div>

          {renderProgressBar()}

          <form onSubmit={handleSubmit}>
            {renderStepContent()}

            <div className="mt-8 flex justify-between">
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex items-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 mr-2" />
                  Previous
                </button>
              )}
              {step < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="ml-auto flex items-center px-6 py-3 bg-pink-600 rounded-lg text-white hover:bg-pink-700 transition-colors"
                >
                  Next
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="ml-auto flex items-center px-6 py-3 bg-pink-600 rounded-lg text-white hover:bg-pink-700 transition-colors"
                >
                  Submit Application
                  <Check className="w-5 h-5 ml-2" />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;