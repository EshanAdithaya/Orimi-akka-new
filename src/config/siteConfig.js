// src/config/siteConfig.js

const siteConfig = {
    // Company Information
    companyName: "Orimi Sasaki",
    companyTagline: "Your trusted partner for educational opportunities in Japan. We bridge cultures and create futures through quality education.",
    
    // Contact Information
    contact: {
      email: "info@orimisasaki.com",
      phone: "+94 11 234 5678",
      address: "Colombo 03, Sri Lanka",
      workingHours: "Mon - Fri: 9:00 AM - 6:00 PM"
    },
  
    // Social Media Links
    socialMedia: {
      facebook: "https://facebook.com/orimisasaki",
      twitter: "https://twitter.com/orimisasaki",
      instagram: "https://instagram.com/orimisasaki",
      linkedin: "https://linkedin.com/company/orimisasaki"
    },
  
    // Navigation Links
    navigation: {
      main: [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/AboutPage' },
        { name: 'Programs', path: '/ProgramsPage' },
        { name: 'Contact', path: '/ContactPage' },
        { name: 'Privacy Policy', path: '/privacy' },
      ]
    },
  
    // Programs
    programs: [
      'Undergraduate Programs',
      'Graduate Programs',
      'Language Courses',
      'Summer Schools',
      'Exchange Programs'
    ],
  
    // Meta Information
    meta: {
      description: "Orimi Sasaki - Your gateway to education in Japan. We provide comprehensive support for Sri Lankan students seeking quality education in Japan.",
      keywords: "Japan education, study in Japan, Sri Lanka to Japan, university admission, Japanese language",
    },
  
    // Company Details
    companyDetails: {
      registration: "REG12345",
      taxId: "TAX67890",
      address: {
        street: "123 Main Street",
        city: "Colombo",
        region: "Western Province",
        country: "Sri Lanka",
        postalCode: "00300"
      }
    }
  };
  
  export default siteConfig;