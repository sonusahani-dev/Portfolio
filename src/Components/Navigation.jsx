import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      {/* ── Navbar ── */}
      <nav className="fixed top-0 w-full z-[60] bg-black bg-opacity-60 backdrop-filter backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">

            {/* Logo */}
            <div className="text-xl font-bold gradient-text">Sonu Sahani</div>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map(({ href, label }) => (
                <a key={href} href={href} className="nav-link">{label}</a>
              ))}
            </div>

            {/* Hamburger / Close button — nav is z-[60] so always above overlay */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-white focus:outline-none hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(prev => !prev)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

          </div>
        </div>
      </nav>

      {/* ── Mobile Full-Screen Overlay — outside <nav> so stacking context is separate ── */}
      <div
        className={`fixed inset-0 z-[55] md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(10, 10, 30, 0.97)', backdropFilter: 'blur(16px)' }}
        onClick={(e) => { if (e.target === e.currentTarget) setIsMenuOpen(false); }}
      >
        <div
          className={`flex flex-col items-center justify-start pt-24 space-y-3 w-full transition-transform duration-300 ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-6'
          }`}
        >
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-lg font-semibold text-white hover:text-indigo-400 transition-colors py-2 px-8 w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;