import React from 'react';
import { Shield, Lock, Eye, FileText, Database, Bell, Settings, Mail } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Introduction",
      content: `Last updated: January 12, 2025

At Orimi Sasaki, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.`
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Information We Collect",
      content: `We collect information that you provide directly to us, including:

• Personal identification information (Name, email address, phone number, etc.)
• Educational background and academic records
• Payment information for program fees
• Communication preferences and history
• Documents submitted as part of your application

We may also automatically collect certain information when you visit our website, including:
• IP address and device information
• Browser type and version
• Pages visited and interactions with our site
• Time spent on our website`
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "How We Use Your Information",
      content: `We use the information we collect to:

• Process your application and program enrollment
• Communicate with you about our services
• Improve our website and services
• Send you updates and marketing communications
• Comply with legal obligations
• Protect against fraud and unauthorized access
• Provide customer support and respond to inquiries`
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Information Sharing",
      content: `We may share your information with:

• Partner universities in Japan for application processing
• Third-party service providers who assist in our operations
• Government authorities when required by law
• Payment processors for secure transaction handling

We do not sell your personal information to third parties.`
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Data Security",
      content: `We implement appropriate technical and organizational measures to protect your personal information, including:

• Encryption of sensitive data
• Regular security assessments
• Access controls and authentication
• Secure data storage and transmission
• Regular staff training on data protection

However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.`
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Your Rights",
      content: `You have the right to:

• Access your personal information
• Correct inaccurate or incomplete data
• Request deletion of your data
• Withdraw consent for data processing
• Object to certain data processing activities
• Request data portability
• Lodge a complaint with supervisory authorities`
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Cookie Policy",
      content: `We use cookies and similar tracking technologies to improve your browsing experience. Types of cookies we use:

• Essential cookies for website functionality
• Analytics cookies to understand user behavior
• Preference cookies to remember your settings
• Marketing cookies for targeted advertising

You can control cookie settings through your browser preferences.`
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Contact Us",
      content: `If you have questions about this Privacy Policy or our data practices, please contact us at:

Orimi Sasaki
Email: privacy@orimisasaki.com
Phone: +94 11 234 5678
Address: Colombo 03, Sri Lanka

We will respond to your inquiry as soon as possible and within legal requirements.`
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 ">
        <Header />
      {/* Header */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-300 max-w-2xl">
            Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid gap-8">
          {sections.map((section, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-pink-100 rounded-xl text-pink-600">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  {section.title}
                </h2>
              </div>
              <div className="prose prose-pink max-w-none">
                {section.content.split('\n').map((paragraph, i) => (
                  <p key={i} className="text-gray-600 whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Last Updated */}
        <div className="mt-12 text-center text-gray-600">
          <p>This privacy policy was last updated on January 12, 2025.</p>
          <p className="mt-2">
            For questions about this policy, please contact{' '}
            <a href="mailto:privacy@orimisasaki.com" className="text-pink-600 hover:text-pink-700">
              privacy@orimisasaki.com
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;