import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/achievements", label: "Achievements" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <nav className="fixed w-full bg-[#010101] backdrop-blur-sm z-50 px-3 sm:px-4 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="flex items-center space-x-2">
          <span className="text-white text-lg sm:text-3xl mt-1 font-bold">
            <span className="text-[#c135ff]" >Praveen</span> Kumar
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `text-[20px] py-2 text-${
                    isActive ? "[#c135ff]" : "gray-300"
                  } hover:text-[#c135ff] transition-colors`
            }
          >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#010101] py-4 border-t border-gray-800">
          {navItems.map((item) => (
            <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `block px-4 py-2 text-sm text-${
                    isActive ? "[#c135ff]" : "gray-300"
                  } hover:text-[#c135ff] transition-colors`
            }
            onClick={() => setIsOpen(false)}
          >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
