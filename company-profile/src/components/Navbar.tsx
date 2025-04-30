import { useState } from "react";
import Logo from "../assets/img/pama.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Fungsi navigasi manual
  const handleNavigation = (path: string) => {
    window.location.href = path;
  };

  return (
    <nav className="bg-yellow-500 text-black fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Company Logo"
            className="w-34 h-20 rounded-lg bg-yellow-500 p-2 shadow-lg cursor-pointer"
            onClick={() => handleNavigation("/")}
          />
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <ul className="flex space-x-6">
            {["Home", "About", "Services", "Portfolio", "Award"].map((item) => (
              <li
                key={item}
                className="hover:text-black p-2 shadow-lg cursor-pointer"
                onClick={() => handleNavigation(`/${item.toLowerCase()}`)}
              >
                {item}
              </li>
            ))}
          </ul>
          
          {/* More Dropdown */}
          <div className="relative">
            <button
              className="hover:text-black p-2 shadow-lg cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              More
            </button>
            {isDropdownOpen && (
              <ul className="absolute bg-yellow-500 text-black mt-2 w-40 py-2 rounded-lg shadow-lg right-0">
                {["Partner", "Career", "Gallery", "Team", "News"].map((item) => (
                  <li
                    key={item}
                    className="px-4 py-2 hover:bg-gray-500 p-2 shadow-lg cursor-pointer"
                    onClick={() => handleNavigation(`/${item.toLowerCase()}`)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 py-4 space-y-4 text-center">
          {["Home", "About", "Services", "Portfolio", "Award", "Partner", "Career", "Gallery", "Team", "News"].map((item) => (
            <div
              key={item}
              className="block hover:text-gray-500 p-2 shadow-lg cursor-pointer"
              onClick={() => {
                handleNavigation(`/${item.toLowerCase()}`);
                setIsOpen(false);
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
