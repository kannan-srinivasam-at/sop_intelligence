import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const location = useLocation();

  const primaryNavItems = [
    { name: 'Product Demo', path: '/product-demo' },
    { name: 'Solutions', path: '/solutions-by-industry' },
    { name: 'Security', path: '/security-compliance' },
    { name: 'Customer Stories', path: '/customer-stories' },
  ];

  const secondaryNavItems = [
    { name: 'Get Started', path: '/get-started-hub' },
  ];

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMoreMenu = () => {
    setIsMoreMenuOpen(!isMoreMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/homepage" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-soft group-hover:shadow-medium transition-all duration-300">
                  <Icon name="FileText" size={18} color="white" strokeWidth={2.5} />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full opacity-80 animate-pulse-soft"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-primary tracking-tight">
                  SOP Intelligence
                </h1>
                <p className="text-xs text-muted-foreground -mt-1">
                  AI-Powered Compliance
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {primaryNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-muted ${
                  isActivePath(item.path)
                    ? 'text-primary bg-primary/5 border border-primary/10' :'text-foreground hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* More Menu */}
            <div className="relative">
              <button
                onClick={toggleMoreMenu}
                className="px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:text-primary hover:bg-muted transition-all duration-200 flex items-center space-x-1"
              >
                <span>More</span>
                <Icon 
                  name={isMoreMenuOpen ? "ChevronUp" : "ChevronDown"} 
                  size={16} 
                  className="transition-transform duration-200"
                />
              </button>
              
              {isMoreMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-strong border border-gray-100 py-2 z-50">
                  {secondaryNavItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMoreMenuOpen(false)}
                      className={`block px-4 py-2 text-sm font-medium transition-colors duration-200 hover:bg-muted ${
                        isActivePath(item.path)
                          ? 'text-primary bg-primary/5' :'text-foreground hover:text-primary'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button variant="default" size="sm" className="shadow-soft hover:shadow-medium">
              Start Free Trial
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg text-foreground hover:text-primary hover:bg-muted transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-2">
              {primaryNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                    isActivePath(item.path)
                      ? 'text-primary bg-primary/5 border border-primary/10' :'text-foreground hover:text-primary hover:bg-muted'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {secondaryNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                    isActivePath(item.path)
                      ? 'text-primary bg-primary/5 border border-primary/10' :'text-foreground hover:text-primary hover:bg-muted'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <Button variant="ghost" fullWidth className="justify-start">
                  Sign In
                </Button>
                <Button variant="default" fullWidth className="justify-start shadow-soft">
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Overlay for more menu */}
      {isMoreMenuOpen && (
        <div 
          className="fixed inset-0 z-40"
          onClick={() => setIsMoreMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;