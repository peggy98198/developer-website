import React, { useContext } from 'react';
import { ThemeContext } from '../App';

const Footer: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.theme || 'light';

  const socialLinks = [
    { name: 'GitHub', url: '#', icon: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' },
    { name: 'LinkedIn', url: '#', icon: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0z' },
    { name: 'X', url: '#', icon: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' },
  ];

  return (
    <footer className="bg-background border-t border-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-sm text-text-secondary mb-4 md:mb-0">
            &copy; {new Date().getFullYear()}{' '}
            {theme === 'dark' ? 'zziraengi' : 'Suemin Hong'}. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="text-text-secondary hover:text-accent transition-colors duration-300"
                aria-label={link.name}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={link.icon}></path>
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
