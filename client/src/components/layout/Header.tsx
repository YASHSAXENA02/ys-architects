import { useState } from "react";
import { Link, useLocation } from "wouter";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="bg-white sticky top-0 z-50 shadow-md h-[120px] flex items-center">
      <div className="container mx-auto px-4 flex justify-between items-center w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-4">
          <div className="h-[100px] w-auto">
            <img
              src="/header_logo.jpeg"
              alt="YS Architects"
              className="h-full object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          {navItems.map((item, index) => (
            <div key={item.path} className="flex items-center">
              <Link
                href={item.path}
                className={`${
                  location === item.path
                    ? "text-[#C9A227] font-semibold hover:text-[#C9A227]"
                    : "text-gray-800 hover:text-[#C9A227]"
                } uppercase text-sm tracking-wide transition-colors`}
              >
                {item.name}
              </Link>
              {index < navItems.length - 1 && (
                <span className="text-[#C9A227] mx-4">|</span>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-darkText focus:outline-none"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            // ❌ Close Icon
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // 🍔 Hamburger Icon
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
          <div className="flex flex-col items-center py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`${
                  location === item.path
                    ? "text-[#C9A227] font-semibold hover:text-[#C9A227]"
                    : "text-gray-800 hover:text-[#C9A227]"
                } uppercase text-sm tracking-wide`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
