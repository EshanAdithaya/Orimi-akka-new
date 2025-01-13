import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  // Debug environment variables
  console.log('Environment Variables:', {
    email: process.env.REACT_APP_EMAIL,
    phone: process.env.REACT_APP_PHONE,
    address: process.env.REACT_APP_ADDRESS,
    facebook: process.env.REACT_APP_FACEBOOK_URL,
  });

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/AboutPage' },
    { name: 'Programs', path: '/ProgramsPage' },
    { name: 'Contact', path: '/ContactPage' },
    { name: 'Privacy Policy', path: '/privacy' },
  ];

  const programs = [
    'Undergraduate Programs',
    'Graduate Programs',
    'Language Courses',
    'Summer Schools',
    'Exchange Programs'
  ];

  // Contact info with fallback values
  const contactInfo = [
    { 
      icon: <Mail className="w-5 h-5" />, 
      text: process.env.REACT_APP_EMAIL || 'info@orimisasaki.com',
      href: `mailto:${process.env.REACT_APP_EMAIL || 'info@orimisasaki.com'}`
    },
    { 
      icon: <Phone className="w-5 h-5" />, 
      text: process.env.REACT_APP_PHONE || '+94 11 234 5678',
      href: `tel:${process.env.REACT_APP_PHONE || '+94 11 234 5678'}`
    },
    { 
      icon: <MapPin className="w-5 h-5" />, 
      text: process.env.REACT_APP_ADDRESS || 'Colombo 03, Sri Lanka',
      href: `https://maps.google.com/?q=${encodeURIComponent(process.env.REACT_APP_ADDRESS || 'Colombo 03, Sri Lanka')}`
    },
  ];

  // Social links with fallback values
  const socialLinks = [
    { 
      icon: <Facebook className="w-5 h-5" />, 
      url: process.env.REACT_APP_FACEBOOK_URL || 'https://facebook.com/orimisasaki',
      name: 'Facebook'
    },
    { 
      icon: <Twitter className="w-5 h-5" />, 
      url: process.env.REACT_APP_TWITTER_URL || 'https://twitter.com/orimisasaki',
      name: 'Twitter'
    },
    { 
      icon: <Instagram className="w-5 h-5" />, 
      url: process.env.REACT_APP_INSTAGRAM_URL || 'https://instagram.com/orimisasaki',
      name: 'Instagram'
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      url: process.env.REACT_APP_LINKEDIN_URL || 'https://linkedin.com/company/orimisasaki',
      name: 'LinkedIn'
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/logo.png"
                alt="Orimi Sasaki Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="text-xl font-japanese font-medium text-white">
                Orimi Sasaki
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Your trusted partner for educational opportunities in Japan. 
              We bridge cultures and create futures through quality education.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="hover:text-pink-500 transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Programs</h3>
            <ul className="space-y-2">
              {programs.map((program) => (
                <li key={program}>
                  <button
                    onClick={() => navigate('/ProgramsPage')}
                    className="hover:text-pink-500 transition-colors text-sm text-left"
                  >
                    {program}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <a 
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 hover:text-pink-500 transition-colors"
                  >
                    <span className="text-pink-500">{info.icon}</span>
                    <span className="text-sm">{info.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm">
              © {new Date().getFullYear()} Orimi Sasaki. All rights reserved.
            </div>
            <a 
              href="https://soluzent.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 text-sm hover:text-pink-500 transition-colors group"
            >
              <span>Designed and Developed by Soluzent</span>
              <ExternalLink className="w-4 h-4 group-hover:text-pink-500 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;