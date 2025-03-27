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
          className="absolute top-full left-0 w-full bg-white shadow-md md:hidden"
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
        >
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={`py-2 px-4 rounded font-medium ${
                    isActive(link.href)
                      ? "bg-neutral text-accent"
                      : "hover:bg-neutral text-primary"
                  }`}
                  onClick={onClose}
                >
                  {link.label}
                </a>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
