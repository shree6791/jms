import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Logo and Address */}
          <div className="flex flex-col">
            <Logo />
            <p className="mt-4 text-gray-600 max-w-xs">
              Transforming aspiring models into confident professionals since 2018.
            </p>
            <p className="mt-4 text-gray-600">
              123 Fashion Avenue<br />
              Los Angeles, CA 90210
            </p>
          </div>
          
          {/* Navigation Links */}
          <div className="flex flex-col md:items-center">
            <h3 className="text-lg font-heading font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              <a href="#" className="hover:text-red transition-colors">Home</a>
              <a href="#" className="hover:text-red transition-colors">About Us</a>
              <a href="#" className="hover:text-red transition-colors">Services</a>
              <a href="#" className="hover:text-red transition-colors">Contact</a>
            </nav>
          </div>
          
          {/* Social Media */}
          <div className="flex flex-col md:items-end">
            <h3 className="text-lg font-heading font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://instagram.com/joshley_models" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="social-icon w-7 h-7" />
              </a>
              <a href="https://facebook.com/joshleymodels" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="social-icon w-7 h-7" />
              </a>
              <a href="https://youtube.com/@joshleymodelschool" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Youtube className="social-icon w-7 h-7" />
              </a>
            </div>
            <p className="text-gray-600">
              Instagram: @joshley_models<br />
              Facebook: facebook.com/joshleymodels<br />
              YouTube: youtube.com/@joshleymodelschool
            </p>
          </div>
        </div>
        
        {/* Bottom Row */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="font-heading italic mb-4 md:mb-0">"Let Your Talent Shine"</p>
          <p className="text-sm text-gray-600">© 2025 Joshley Modelling School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;