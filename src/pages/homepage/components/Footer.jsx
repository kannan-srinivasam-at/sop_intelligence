import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Product',
      links: [
        { name: 'Product Demo', path: '/product-demo' },
        { name: 'Features', path: '/product-demo' },
        { name: 'Integrations', path: '/product-demo' },
        { name: 'Security', path: '/security-compliance' },
        { name: 'Pricing', path: '/get-started-hub' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'By Industry', path: '/solutions-by-industry' },
        { name: 'HR & Training', path: '/solutions-by-industry' },
        { name: 'Compliance', path: '/security-compliance' },
        { name: 'Operations', path: '/solutions-by-industry' },
        { name: 'Quality Management', path: '/solutions-by-industry' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Customer Stories', path: '/customer-stories' },
        { name: 'Documentation', path: '/get-started-hub' },
        { name: 'Best Practices', path: '/customer-stories' },
        { name: 'Webinars', path: '/customer-stories' },
        { name: 'Support Center', path: '/get-started-hub' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/homepage' },
        { name: 'Careers', path: '/homepage' },
        { name: 'Partners', path: '/homepage' },
        { name: 'Press', path: '/homepage' },
        { name: 'Contact', path: '/get-started-hub' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: 'Linkedin', url: '#' },
    { name: 'Twitter', icon: 'Twitter', url: '#' },
    { name: 'YouTube', icon: 'Youtube', url: '#' },
    { name: 'GitHub', icon: 'Github', url: '#' }
  ];

  return (
    <footer className="bg-gradient-to-br from-primary to-primary/90 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <Link to="/homepage" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center shadow-soft group-hover:shadow-medium transition-all duration-300">
                    <Icon name="FileText" size={20} color="white" strokeWidth={2.5} />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full opacity-80 animate-pulse"></div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold tracking-tight">
                    SOP Intelligence
                  </h1>
                  <p className="text-sm text-white/80 -mt-1">
                    AI-Powered Compliance
                  </p>
                </div>
              </Link>

              <p className="text-white/80 leading-relaxed max-w-md">
                Transform compliance from burden to advantage with intelligent workflows that make operational excellence effortless and empowering.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <Icon 
                      name={social.icon} 
                      size={18} 
                      className="group-hover:scale-110 transition-transform duration-300" 
                    />
                  </a>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="space-y-3">
                <h3 className="font-semibold text-white">Stay Updated</h3>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                  />
                  <button className="px-4 py-2 bg-secondary hover:bg-secondary/90 rounded-lg font-medium transition-colors duration-300 flex items-center space-x-2">
                    <Icon name="Send" size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h3 className="font-semibold text-white text-lg">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="text-white/80 hover:text-white transition-colors duration-300 text-sm flex items-center group"
                      >
                        <span>{link.name}</span>
                        <Icon 
                          name="ArrowRight" 
                          size={14} 
                          className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" 
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-white/80">
              <p>© {currentYear} SOP Intelligence. All rights reserved.</p>
              <div className="flex items-center space-x-6">
                <Link to="/homepage" className="hover:text-white transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link to="/homepage" className="hover:text-white transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link to="/homepage" className="hover:text-white transition-colors duration-300">
                  Cookie Policy
                </Link>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 px-3 py-1 bg-white/10 rounded-full text-xs text-white/80">
                <Icon name="Shield" size={14} />
                <span>SOC 2 Certified</span>
              </div>
              <div className="flex items-center space-x-2 px-3 py-1 bg-white/10 rounded-full text-xs text-white/80">
                <Icon name="Lock" size={14} />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2 px-3 py-1 bg-white/10 rounded-full text-xs text-white/80">
                <Icon name="Award" size={14} />
                <span>ISO 27001</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none"></div>
    </footer>
  );
};

export default Footer;