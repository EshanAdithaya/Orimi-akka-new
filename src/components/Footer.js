import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import siteConfig from '../config/siteConfig';

const Footer = () => {
  const navigate = useNavigate();

  const socialLinks = [
    { 
      icon: <Facebook className="w-5 h-5" />, 
      url: siteConfig.socialMedia.facebook,
      name: 'Facebook'
    },
    { 
      icon: <Twitter className="w-5 h-5" />, 
      url: siteConfig.socialMedia.twitter,
      name: 'Twitter'
    },
    { 
      icon: <Instagram className="w-5 h-5" />, 
      url: siteConfig.socialMedia.instagram,
      name: 'Instagram'
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      url: siteConfig.socialMedia.linkedin,
      name: 'LinkedIn'
    },
  ];

  const contactInfo = [
    { 
      icon: <Mail className="w-5 h-5" />, 
      text: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`
    },
    { 
      icon: <Phone className="w-5 h-5" />, 
      text: siteConfig.contact.phone,
      href: `tel:${siteConfig.contact.phone}`
    },
    { 
      icon: <MapPin className="w-5 h-5" />, 
      text: siteConfig.contact.address,
      href: `https://maps.google.com/?q=${encodeURIComponent(siteConfig.contact.address)}`
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
                alt={`${siteConfig.companyName} Logo`}
                className="h-10 w-10 object-contain"
              />
              <span className="text-xl font-japanese font-medium text-white">
                {siteConfig.companyName}
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              {siteConfig.companyTagline}
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
              {siteConfig.navigation.main.map((link) => (
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
              {siteConfig.programs.map((program) => (
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
              © {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.
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