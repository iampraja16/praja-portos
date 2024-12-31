import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = ['Home', 'About', 'Projects', 'Contact'] as const;
type NavItem = (typeof NAV_ITEMS)[number];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<NavItem>('Home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = NAV_ITEMS.map(item => item.toLowerCase());
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.charAt(0).toUpperCase() + section.slice(1) as NavItem);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (item: NavItem) => {
    const sectionId = item.toLowerCase();
    const element = document.getElementById(sectionId);
    const navHeight = 80; // Approximate navbar height

    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(item);
      setIsOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-3' : 'py-5'
      }`}
      style={{ backdropFilter: 'blur(8px)' }}
    >
      <div className="max-w-xl mx-auto px-4">
        <div className="relative">
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className={`
              bg-gray-900/70 
              rounded-full 
              p-1 
              border border-gray-800/50 
              shadow-lg 
              transition-all 
              duration-200
              ${isScrolled ? 'shadow-blue-500/5' : ''}
            `}>
              <div className="relative flex justify-center items-center">
                {/* Animated Background Pill */}
                <div 
                  className="absolute h-9 transition-all duration-200 ease-in-out"
                  style={{
                    left: '0.375rem',
                    width: '4rem', // Lebar diperpendek
                    transform: `translateX(${NAV_ITEMS.indexOf(activeSection) * 4.5}rem)`, // Sesuaikan jarak tombol
                  }}
                >
                  <div className="w-full h-full rounded-full bg-white/10"></div>
                </div>

                {/* Navigation Items */}
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`
                      relative 
                      z-10 
                      px-3  // Lebar diperpendek
                      py-1.5 
                      text-sm 
                      font-medium 
                      rounded-full 
                      transition-all 
                      duration-200 ease-in-out
                      ${activeSection === item ? 'text-white' : 'text-gray-400 hover:text-white'}
                    `}
                    style={{ width: '4.5rem' }} // Lebar diperpendek
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex justify-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-900/70 backdrop-blur-lg p-2 rounded-full text-gray-400 hover:text-white transition-colors duration-200 border border-gray-800/50"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`
            md:hidden 
            transition-all 
            duration-200 
            ${isOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0'}
            overflow-hidden
          `}
        >
          <div className="bg-gray-900/70 backdrop-blur-lg rounded-2xl border border-gray-800/50">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`
                  block 
                  w-full 
                  text-left 
                  px-6 
                  py-3 
                  text-sm 
                  font-medium 
                  transition-all 
                  duration-200
                  ${activeSection === item 
                    ? 'text-white bg-white/10' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }
                `}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
