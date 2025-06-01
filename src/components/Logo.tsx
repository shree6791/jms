import React from 'react';
import { Sparkles } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <a href="#" className="flex items-center space-x-2 group">
      <Sparkles size={28} className="text-red group-hover:text-black transition-colors duration-300" />
      <span className="text-xl font-heading font-bold tracking-wide">JMS</span>
    </a>
  );
};

export default Logo;