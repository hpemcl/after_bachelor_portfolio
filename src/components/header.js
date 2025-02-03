import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white p-4 flex justify-between items-center shadow-md">
      <div className="text-primary pt-3 font-heading text-3xl flex items-center">
        HANNAH CLAUSEN
      </div>
      <nav className="flex items-center text-lg">
        <NavLink exact to="/" className="font-body mx-4 py-2 hover:text-secondary" activeClassName="underline">Home</NavLink>
        <NavLink to="/resume" className="font-body font-medium mx-4 py-2 hover:text-secondary" activeClassName="underline">Resume</NavLink>
        <NavLink to="/work" className="font-body font-medium mx-4 py-2 hover:text-secondary" activeClassName="underline">Work</NavLink>
        <NavLink to="/about" className="font-body font-medium mx-4 py-2 hover:text-secondary" activeClassName="underline">About Me</NavLink>
        <button className="bg-primary font-body font-medium text-white px-5 py-2 rounded hover:bg-secondary flex items-center justify-center">
          Contact
        </button>
      </nav>
    </header>
  );
}

export default Header;
