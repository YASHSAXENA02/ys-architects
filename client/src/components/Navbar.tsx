import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const MobileMenu = ({ isOpen, onClose, links }) => {
  return (
    <div
      className={`fixed inset-0 bg-gray-500 bg-opacity-95 p-6 z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <button className="absolute top-4 right-4 text-white" onClick={onClose}>
        <X className="h-6 w-6" />
      </button>
      <nav className="mt-10 flex flex-col space-y-6">
        {links.map((link) => (
          <Link key={link.href} href={link.href} onClick={onClose}>
            <div className="text-lg font-semibold text-white">{link.label}</div>
          </Link>
        ))}
      </nav>
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 bg-white shadow-lg transition-all duration-300 
        ${isScrolled ? "py-2 shadow-md" : "py-4"}`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <Logo />

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <div className={`nav-link py-2 cursor-pointer text-gray-800 font-medium`}>{link.label}</div>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-gray-800"
          onClick={toggleMobileMenu}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} links={navLinks} />
    </header>
  );
};

export default Navbar;
