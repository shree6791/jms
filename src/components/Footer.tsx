import React from 'react';
import { Instagram, Facebook, Music as TikTok } from 'lucide-react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const handleNavClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-black pt-20 pb-10">
      <div className="container-custom">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand Block */}
          <div className="md:col-span-4">
            <Logo />
            <p className="mt-6 text-red max-w-xs leading-relaxed">
              Let Your Talent Shine
            </p>
            <p className="mt-4 font-heading italic text-white/80">
              Founded by Heydi Robledo, California Runway Top Model 2013
            </p>
          </div>
          
          {/* Navigation Links */}
          <div className="md:col-span-4 md:px-8">
            <h3 className="text-xl font-heading font-semibold mb-6 text-white">Explore</h3>
            <nav className="grid gap-4">
              <Link 
                to="/"
                onClick={handleNavClick}
                className="text-red hover:text-white transition-all duration-300 hover:translate-x-1 transform relative group"
              >
                <span className="inline-block">Home</span>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                to="/about"
                onClick={handleNavClick}
                className="text-red hover:text-white transition-all duration-300 hover:translate-x-1 transform relative group"
              >
                <span className="inline-block">About Us</span>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                to="/services"
                onClick={handleNavClick}
                className="text-red hover:text-white transition-all duration-300 hover:translate-x-1 transform relative group"
              >
                <span className="inline-block">Services</span>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                to="/contact"
                onClick={handleNavClick}
                className="text-red hover:text-white transition-all duration-300 hover:translate-x-1 transform relative group"
              >
                <span className="inline-block">Contact</span>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </nav>
          </div>
          
          {/* Social Media and CTA */}
          <div className="md:col-span-4 text-center">
            {/* CTA Section */}
            <div className="mb-12">
              <h3 className="text-xl font-heading font-semibold mb-6 text-white">Ready to take the stage?</h3>
              <Link 
                to="/contact"
                onClick={handleNavClick}
                className="inline-block px-6 py-2 text-sm bg-red text-white border-2 border-red hover:bg-transparent hover:text-red transition-all duration-300"
              >
                Enroll Now
              </Link>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-heading font-semibold mb-6 text-white">Follow Us</h3>
              <div className="flex justify-center gap-6">
                <a 
                  href="https://www.instagram.com/joshley_modeling_school" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Instagram"
                  className="bg-black p-3 rounded-full border border-red/20 hover:border-red transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="w-6 h-6 text-red hover:text-white transition-colors" />
                </a>
                <a 
                  href="https://www.facebook.com/JoshleyModelingSchool" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Facebook"
                  className="bg-black p-3 rounded-full border border-red/20 hover:border-red transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="w-6 h-6 text-red hover:text-white transition-colors" />
                </a>
                <a 
                  href="https://www.tiktok.com/@joshleymodelingschool" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="TikTok"
                  className="bg-black p-3 rounded-full border border-red/20 hover:border-red transition-all duration-300 hover:scale-110"
                >
                  <TikTok className="w-6 h-6 text-red hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="pt-8 border-t border-red/20">
          <p className="text-sm text-red text-center">© 2025 Joshley Modelling School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;