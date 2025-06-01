import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex-shrink-0">
          <Logo />
        </Link>
        
        <nav className="hidden md:flex items-center justify-center space-x-8">
          <Link to="/" className={`font-medium hover:text-red transition-colors ${location.pathname === '/' ? 'text-red' : ''}`}>Home</Link>
          <Link to="/about" className={`font-medium hover:text-red transition-colors ${location.pathname === '/about' ? 'text-red' : ''}`}>About Us</Link>
          <Link to="/services" className="font-medium hover:text-red transition-colors">Services</Link>
          <Link to="/contact" className="font-medium hover:text-red transition-colors">Contact</Link>
        </nav>
        
        <div className="hidden md:flex items-center space-x-6">
          <p className="text-sm italic font-heading">Let Your Talent Shine</p>
          <div className="flex space-x-4">
            <a href="https://instagram.com/joshley_models" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="social-icon" />
            </a>
            <a href="https://facebook.com/joshleymodels" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="social-icon" />
            </a>
            <a href="https://youtube.com/@joshleymodelschool" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Youtube className="social-icon" />
            </a>
          </div>
        </div>
        
        <button 
          className="md:hidden text-black hover:text-red transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-white`}>
        <div className="container-custom py-4">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="font-medium hover:text-red transition-colors py-2">Home</Link>
            <Link to="/about" className="font-medium hover:text-red transition-colors py-2">About Us</Link>
            <Link to="/services" className="font-medium hover:text-red transition-colors py-2">Services</Link>
            <Link to="/contact" className="font-medium hover:text-red transition-colors py-2">Contact</Link>
          </nav>
          
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm italic font-heading">Let Your Talent Shine</p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/joshley_models" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="social-icon" />
              </a>
              <a href="https://facebook.com/joshleymodels" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="social-icon" />
              </a>
              <a href="https://youtube.com/@joshleymodelschool" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Youtube className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;