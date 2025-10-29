import React from 'react';

const Support: React.FC = () => {
  return (
    <section id="support" className="bg-primary/20 py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary">Support & Contact</h2>
          <p className="mt-4 text-lg text-text-secondary">
            Have questions, feedback, or need assistance with any of my apps? I'm here to help.
          </p>
          <div className="mt-8">
            <p className="text-text-secondary">
              The best way to reach me is by email. I'll do my best to respond as quickly as possible.
            </p>
            <a
              href="mailto:contact@zziraengi.com"
              className="mt-6 inline-block bg-secondary text-background font-bold py-3 px-8 rounded-full hover:bg-primary transition-all duration-300 transform hover:scale-105"
            >
              contact@zziraengi.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;