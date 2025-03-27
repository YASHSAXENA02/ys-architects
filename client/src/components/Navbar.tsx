import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

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
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 bg-[#F5F5F5] bg-opacity-95 backdrop-blur-sm transition-all duration-300 ${
        isScrolled ? "py-2 shadow-md" : "py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Logo />

        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <div
                className={`nav-link py-2 relative cursor-pointer ${
                  isActive(link.href) ? "text-[#333333] font-bold" : "text-[#333333]"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C9A227]"
                    layoutId="navbar-underline"
                  />
                )}
              </div>
            </Link>
          ))}
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-[#333333]"
          onClick={toggleMobileMenu}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
        links={navLinks}
      />
    </header>
  );
};

export default Navbar;
