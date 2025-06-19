import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo1.png';

const Navbar = () => {
  // Define the links outside for readability and scalability
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-20 py-5 flex justify-between items-center shadow-xl">
      {/* Logo */}
      <NavLink to="/" className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="h-8 w-auto" />
      </NavLink>

      {/* Navigation Links */}
      <ul className="flex gap-8 text-base font-medium">
        {navLinks.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? 'relative text-blue-400 after:content-[""] after:block after:h-[2px] after:bg-blue-400 after:rounded-full after:mt-1'
                  : 'hover:text-pink-400 transition-all duration-300'
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
