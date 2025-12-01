import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavItem {
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/thesis' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Team', path: '/team' },
  { label: 'Insights', path: '/insights' },
  { label: 'Contact', path: '/contact' },
];

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine nav styles based on scroll and theme
  const navBackground = scrolled
    ? 'bg-white/90 dark:bg-nearing-black/90 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-white/10'
    : 'bg-transparent border-b border-transparent';

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBackground}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex-shrink-0 cursor-pointer">
            <span className="font-display font-bold text-2xl tracking-tighter text-gray-900 dark:text-white transition-colors">
              NEARING<span className="text-blue-600 dark:text-blue-500">POINT</span>
            </span>
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive(item.path)
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-white/5'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'
                    }`}
                >
                  {item.label}
                </Link>
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

      {/* Mobile menu - Full Screen Overlay via Portal */}
      {isOpen && createPortal(
        <div className={`fixed inset-0 z-[100] bg-white/98 dark:bg-nearing-black/98 backdrop-blur-xl transition-all duration-500 ease-in-out flex flex-col`}>

          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 p-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors z-50"
            aria-label="Close Menu"
          >
            <X size={32} />
          </button>

          <div className="flex flex-col items-center justify-center h-full space-y-8 animate-fade-in-up">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`text-3xl font-display font-bold tracking-tight transition-colors duration-300 ${isActive(item.path)
                  ? 'text-blue-600 dark:text-blue-500'
                  : 'text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
              >
                {item.label}
              </Link>
            ))}

            <div className="w-12 h-0.5 bg-gray-200 dark:bg-white/10 my-8"></div>

            <button
              onClick={() => {
                toggleTheme();
              }}
              className="flex items-center space-x-3 text-lg font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors"
            >
              {darkMode ? <Sun size={24} /> : <Moon size={24} />}
              <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>
        </div>,
        document.body
      )}
    </nav>
  );
};

export default Navbar;