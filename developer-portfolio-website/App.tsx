
import React, { useState, useEffect, createContext } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Apps from './components/Apps';
import Support from './components/Support';
import Privacy from './components/Privacy';
import Footer from './components/Footer';

/*
  배포 안내 (Deployment Guide):
  이 React 애플리케이션은 정적 웹사이트로 빌드될 수 있습니다. 
  `npm run build`와 같은 명령을 사용하여 프로젝트를 빌드하면 `dist` 또는 `build` 폴더가 생성됩니다.
  이 폴더의 내용을 Netlify, Vercel, GitHub Pages와 같은 정적 호스팅 서비스에 업로드하면 개인 도메인을 연결하여 웹사이트를 배포할 수 있습니다.

  This React application can be built as a static website.
  By using a command like `npm run build`, a `dist` or `build` folder will be created.
  You can upload the contents of this folder to a static hosting service like Netlify, Vercel, or GitHub Pages, 
  and then connect your personal domain to deploy the website.
*/

type Theme = 'light' | 'dark';
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = window.localStorage.getItem('theme') as Theme;
      if (savedTheme) return savedTheme;
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="bg-background font-sans">
        <Header />
        <main>
          <Hero />
          <Apps />
          <Support />
          <Privacy />
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;