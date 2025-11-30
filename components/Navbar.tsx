import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavItem {
  label: string;
  id: string;
}

const navItems: NavItem[] = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'Team', id: 'team' },
  { label: 'Contact', id: 'contact' },
];

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for navbar
        behavior: 'smooth'
      });
    }
  };

  // Determine nav styles based on scroll and theme
  const navBackground = scrolled
    ? 'bg-white/90 dark:bg-nearing-black/90 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-white/10'
    : 'bg-transparent border-b border-transparent';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBackground}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('home')}>
            <span className="font-display font-bold text-2xl tracking-tighter text-gray-900 dark:text-white transition-colors">
              NEARING<span className="text-blue-600 dark:text-blue-500">POINT</span>
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${activeSection === item.id
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-white/5'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'
                    }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white focus:outline-none transition-colors"
                aria-label="Toggle Theme"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 focus:outline-none ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {/* Mobile menu - Full Screen Overlay */}
      <div className={`md:hidden fixed inset-0 z-40 bg-white/95 dark:bg-nearing-black/95 backdrop-blur-xl transition-all duration-500 ease-in-out transform ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>

        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 p-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors"
          aria-label="Close Menu"
        >
          <X size={32} />
        </button>

        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-3xl font-display font-bold tracking-tight transition-colors duration-300 ${activeSection === item.id
                ? 'text-blue-600 dark:text-blue-500'
                : 'text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400'
                }`}
            >
              {item.label}
            </button>
          ))}

          <div className="w-12 h-0.5 bg-gray-200 dark:bg-white/10 my-8"></div>

          <button
            onClick={() => {
              toggleTheme();
              // Don't close menu immediately so user sees the change
            }}
            className="flex items-center space-x-3 text-lg font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors"
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
            <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;