import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest('.mobile-menu') && !e.target.closest('button[aria-label="Toggle menu"]')) {
        setIsMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    window.addEventListener('resize', handleResize);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Mobile menu button - shown only on mobile/tablet */}
            <button 
              className="md:hidden text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            
            <div className="text-xl font-bold gradient-text">Sonu Sahani</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#hero" className="nav-link">Home</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#services" className="nav-link">Services</a>
              <a href="#skills" className="nav-link">Skills</a>
              <a href="#projects" className="nav-link">Projects</a>
              <a href="#experience" className="nav-link">Experience</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu with smooth collapse animation */}
        <div 
          className={`mobile-menu md:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'bg-black bg-opacity-80 backdrop-filter backdrop-blur-lg pt-16 opacity-100 visible' 
              : 'opacity-0 invisible'
          }`}
        >
          <div className={`flex flex-col items-center space-y-2 py-8 transition-transform duration-300 ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-5'
          }`}>
            <a href="#hero" className="nav-link-mobile" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" className="nav-link-mobile" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#services" className="nav-link-mobile" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#skills" className="nav-link-mobile" onClick={() => setIsMenuOpen(false)}>Skills</a>
            <a href="#projects" className="nav-link-mobile" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#experience" className="nav-link-mobile" onClick={() => setIsMenuOpen(false)}>Experience</a>
            <a href="#contact" className="nav-link-mobile" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;