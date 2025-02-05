import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Funktion til at lukke menuen, når et link klikkes
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-white p-4 flex justify-between items-center shadow-md w-full">
      {/* Logo / Navn */}
      <div className="text-primary font-heading pt-3 lg:text-2xl text-xl">
        HANNAH CLAUSEN
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-6">
        <NavLink to="/" className="font-body hover:text-secondary" activeClassName="underline">Home</NavLink>
        <NavLink to="/resume" className="font-body hover:text-secondary" activeClassName="underline">Resume</NavLink>
        <NavLink to="/work" className="font-body hover:text-secondary" activeClassName="underline">Work</NavLink>
        <NavLink to="/about" className="font-body hover:text-secondary" activeClassName="underline">About Me</NavLink>
        <Link to="/contact">
          <button className="bg-primary text-white font-body px-6 py-2 rounded-lg hover:bg-secondary">
            Let's talk
          </button>
        </Link>
      </nav>

      {/* Mobile Burger Menu Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="text-primary focus:outline-none lg:hidden"
      >
        <svg 
          viewBox="0 0 100 60" width="30" height="30" 
          className="rounded-lg"
        >
          <rect width="100" height="10" rx="5"></rect>
          <rect y="25" width="100" height="10" rx="5"></rect>
          <rect y="50" width="100" height="10" rx="5"></rect>
        </svg>
      </button>

      {/* Mobile Navigation Menu */}
      <nav className={`fixed top-0 right-0 h-full bg-white shadow-md z-50 transform 
                      ${isOpen ? "translate-x-0" : "translate-x-full"} 
                      ease-in-out transition-all duration-300 w-64 sm:w-80 lg:hidden`}>

        {/* Close Button */}
        <button 
          onClick={closeMenu} 
          className="text-primary focus:outline-none absolute top-5 right-5"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" 
            stroke="currentColor" strokeWidth="2" fill="none" 
            strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Mobile Links */}
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          <NavLink to="/" className="font-body hover:text-secondary text-center" activeClassName="underline" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/resume" className="font-body hover:text-secondary text-center" activeClassName="underline" onClick={closeMenu}>Resume</NavLink>
          <NavLink to="/work" className="font-body hover:text-secondary text-center" activeClassName="underline" onClick={closeMenu}>Work</NavLink>
          <NavLink to="/about" className="font-body hover:text-secondary text-center" activeClassName="underline" onClick={closeMenu}>About Me</NavLink>
          <Link to="/contact">
            <button className="bg-primary text-white font-body px-6 py-3 rounded-lg hover:bg-secondary mt-4" onClick={closeMenu}>
              Let's talk
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
