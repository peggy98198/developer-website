import React, { useState, useContext } from 'react';
import { ThemeContext } from '../App';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const themeContext = useContext(ThemeContext);

  if (!themeContext) return null;
  const { theme, toggleTheme } = themeContext;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navLinks = [
    { id: 'apps', title: 'Apps' },
    { id: 'privacy', title: '스티커 크롭' },
    { id: 'support', title: 'Support' },
  ];

  const ThemeToggleButton = () => (
    <button
      onClick={toggleTheme}
      className="text-text-secondary hover:bg-primary hover:text-text-primary p-2 rounded-full transition-colors duration-300"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M12 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0z" />
        </svg>
      )}
    </button>
  );

  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 w-full border-b border-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button onClick={() => scrollToSection('hero')} className="text-2xl font-bold text-text-primary hover:text-accent transition-colors duration-300">
              zziraengi
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-text-secondary hover:bg-primary hover:text-text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  {link.title}
                </button>
              ))}
              <ThemeToggleButton />
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="bg-primary inline-flex items-center justify-center p-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-text-secondary hover:bg-primary hover:text-text-primary block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
              >
                {link.title}
              </button>
            ))}
             <button
                onClick={toggleTheme}
                className="text-text-secondary hover:bg-primary hover:text-text-primary block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
              >
                Toggle Theme ({theme === 'light' ? 'Dark' : 'Light'})
              </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;