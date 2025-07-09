import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Reduced nav items for mobile
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Work' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
      
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPos = scrollPosition + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-700/50 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div className="flex-shrink-0 group">
            <span className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white relative">
              <span className="relative z-10">Portfolio</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-teal-400 opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300"></span>
            </span>
          </div>

          {/* Theme Toggle and Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-4">
            <ThemeToggle />
            
            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-1">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                      activeSection === item.id
                        ? 'text-white dark:text-white'
                        : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {activeSection === item.id && (
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg animate-pulse"></span>
                    )}
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-teal-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700/50 focus:outline-none transition-all duration-300 group"
              >
                <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                  <Menu className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
                  <X className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Updated with different color scheme */}
      <div className={`lg:hidden transition-all duration-500 ease-in-out ${
        isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 dark:from-slate-800 dark:via-slate-900 dark:to-black backdrop-blur-md border-t border-indigo-400/30 dark:border-slate-700/50 shadow-xl">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block px-4 py-3 rounded-lg text-base font-medium w-full text-left transition-all duration-300 group relative overflow-hidden ${
                activeSection === item.id
                  ? 'bg-white/20 text-white shadow-lg backdrop-blur-sm border border-white/20'
                  : 'text-white/90 hover:bg-white/10 hover:text-white hover:shadow-md backdrop-blur-sm'
              }`}
              style={{ 
                animationDelay: `${index * 50}ms`,
                transform: isOpen ? 'translateX(0)' : 'translateX(-20px)',
                transition: `all 0.3s ease-out ${index * 50}ms`
              }}
            >
              {/* Animated background for active item */}
              {activeSection === item.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-lg"></div>
              )}
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              
              {/* Content */}
              <span className="relative z-10 flex items-center">
                <div className={`w-2 h-2 rounded-full mr-3 transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'bg-white shadow-lg' 
                    : 'bg-white/50 group-hover:bg-white/80'
                }`}></div>
                {item.label}
              </span>
              
              {/* Active indicator line */}
              {activeSection === item.id && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full shadow-lg"></div>
              )}
            </button>
          ))}
          
          {/* Mobile menu footer decoration */}
          <div className="pt-2 mt-2 border-t border-white/20">
            <div className="flex justify-center space-x-2">
              {[...Array(3)].map((_, i) => (
                <div 
                  key={i}
                  className="w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;