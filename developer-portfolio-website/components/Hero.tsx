import React from 'react';

const Hero: React.FC = () => {
  const scrollToApps = () => {
    document.getElementById('apps')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-background opacity-50 z-10"></div>
       <div 
        className="absolute inset-0 bg-grid-primary/[0.1] z-0" 
        style={{
          backgroundImage: 'linear-gradient(to right, #736D661a 1px, transparent 1px), linear-gradient(to bottom, #736D661a 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
      ></div>
      <div className="relative z-20 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary mb-4">
          Creating Apps for a Better World
        </h1>
        <p className="max-w-2xl mx-auto mt-6 text-lg md:text-xl text-text-secondary">
          Welcome to my digital space. I'm Suemin Hong, an independent developer passionate about building intuitive and useful applications for iOS.
        </p>
        <div className="mt-10">
          <button
            onClick={scrollToApps}
            className="bg-secondary text-background font-bold py-3 px-8 rounded-full hover:bg-primary transition-all duration-300 transform hover:scale-105"
          >
            Explore My Apps
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;