import { useState, useEffect } from "react";
import Logo from "../assets/img/pama.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isBlur, setIsBlur] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const handleNavigation = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 20) {
        setIsBlur(true);
        setIsHidden(true);
      } else {
        setIsBlur(false);
        setIsHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed w-full z-50 shadow-md transition-all duration-500 ease-in-out
        ${isBlur ? "bg-yellow-500/50 backdrop-blur" : "bg-yellow-500"}
        ${isHidden ? "opacity-0 -translate-y-full" : "opacity-100 translate-y-0"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">

        {/* Logo */}
        <div
          className={`flex items-center rounded-lg p-2 shadow-lg cursor-pointer transition-all duration-300
                      ${isBlur ? "bg-yellow-500/50 backdrop-blur" : "bg-yellow-500"}`}
          onClick={() => handleNavigation("home")}
        >
          <img
            src={Logo}
            alt="Company Logo"
            className="h-16 w-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center font-semibold">
          <ul className="flex space-x-6">
            {["Home", "About", "Services", "Portfolio", "Award"].map((item) => (
              <li
                key={item}
                className="hover:text-white cursor-pointer"
                onClick={() => handleNavigation(item.toLowerCase())}
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Dropdown Menu */}
          <div className="relative">
            <button
              className="hover:text-white cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              More
            </button>
            {isDropdownOpen && (
              <ul className="absolute bg-yellow-500/50 backdrop-blur text-black mt-2 w-40 py-2 rounded-lg shadow-lg right-0 z-50">
                {["Partner", "Career", "Gallery", "Team", "News"].map((item) => (
                  <li
                    key={item}
                    className="px-4 py-2 hover:text-white cursor-pointer"
                    onClick={() => {
                      handleNavigation(item.toLowerCase());
                      setIsDropdownOpen(false);
                    }}
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
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-yellow-500/90 dark:bg-yellow-600/90 backdrop-blur py-4 space-y-4 text-center">
          {["Home", "About", "Services", "Portfolio", "Award", "Partner", "Career", "Gallery", "Team", "News"].map((item) => (
            <div
              key={item}
              className="block hover:text-white dark:hover:text-gray-200 p-2 shadow-lg cursor-pointer"
              onClick={() => {
                handleNavigation(item.toLowerCase());
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
