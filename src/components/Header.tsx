import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" onClick={handleNavClick} className="flex-shrink-0">
          <Logo />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            onClick={handleNavClick}
            className={`font-medium transition-colors ${
              location.pathname === '/' ? 'text-red' : 'text-black hover:text-red'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/about"
            onClick={handleNavClick}
            className={`font-medium transition-colors ${
              location.pathname === '/about' ? 'text-red' : 'text-black hover:text-red'
            }`}
          >
            About Us
          </Link>
          <Link 
            to="/services"
            onClick={handleNavClick}
            className={`font-medium transition-colors ${
              location.pathname === '/services' ? 'text-red' : 'text-black hover:text-red'
            }`}
          >
            Services
          </Link>
          <Link 
            to="/contact"
            onClick={handleNavClick}
            className={`font-medium transition-colors ${
              location.pathname === '/contact' ? 'text-red' : 'text-black hover:text-red'
            }`}
          >
            Contact
          </Link>
        </nav>
        
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
            <Link 
              to="/"
              onClick={handleNavClick}
              className={`font-medium transition-colors py-2 ${
                location.pathname === '/' ? 'text-red' : 'text-black hover:text-red'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about"
              onClick={handleNavClick}
              className={`font-medium transition-colors py-2 ${
                location.pathname === '/about' ? 'text-red' : 'text-black hover:text-red'
              }`}
            >
              About Us
            </Link>
            <Link 
              to="/services"
              onClick={handleNavClick}
              className={`font-medium transition-colors py-2 ${
                location.pathname === '/services' ? 'text-red' : 'text-black hover:text-red'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/contact"
              onClick={handleNavClick}
              className={`font-medium transition-colors py-2 ${
                location.pathname === '/contact' ? 'text-red' : 'text-black hover:text-red'
              }`}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;