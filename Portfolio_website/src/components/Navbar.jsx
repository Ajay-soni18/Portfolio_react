import React from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
    { path: "/resume", label: "Resume" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full transition-colors duration-200 shadow-sm bg-white/80 backdrop-blur-sm">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`${
                    location.pathname === item.path
                      ? "text-indigo-600"
                      : "text-gray-600 hover:text-indigo-600"
                  } transition-colors duration-200`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-indigo-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 transition-colors duration-200 bg-white sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${
                  location.pathname === item.path
                    ? "text-indigo-600 bg-indigo-50"
                    : "text-gray-600 hover:text-indigo-600 hover:bg-indigo-50"
                } block px-3 py-2 rounded-md text-base transition-colors duration-200`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
