import React from 'react';

const Logo: React.FC = () => {
  return (
    <a href="/" className="flex items-center group">
      <img 
        src="/JMS_Logo.jpg" 
        alt="Joshley Modelling School Logo" 
        className="h-12 w-12 object-cover rounded-full transition-transform duration-300 group-hover:scale-105"
      />
    </a>
  );
};

export default Logo;