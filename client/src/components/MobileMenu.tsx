import { useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}

const MobileMenu = ({ isOpen, onClose, links }: MobileMenuProps) => {
  const [location] = useLocation();

  useEffect(() => {
    onClose();
  }, [location, onClose]);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="absolute top-full left-0 w-full bg-[#F5F5F5] shadow-md md:hidden"
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
        >
          <div className="container mx-auto py-3 flex flex-col space-y-3">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <div
                  className={`py-2 px-4 rounded font-['Poppins',sans-serif] uppercase tracking-wide cursor-pointer ${
                    isActive(link.href)
                      ? "bg-[#EAEAEA] text-[#C9A227] font-bold"
                      : "hover:bg-[#EAEAEA] text-[#333333]"
                  }`}
                  onClick={onClose}
                >
                  {link.label}
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
