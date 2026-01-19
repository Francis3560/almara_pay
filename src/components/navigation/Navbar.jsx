import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Sun, Moon, Phone } from "lucide-react";
import { Logo } from "../Logo";
import { Button } from "../ui/button";
import { useTheme } from "../theme-provider";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Products", path: "/products" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
  ];

  const handleNavClick = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrolled
          ? "bg-background/95 shadow-2xl backdrop-blur-lg border-b border-border"
          : "bg-transparent backdrop-blur-[2px]"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <Link to="/" className="hover:opacity-90 transition-opacity flex items-center gap-2 group">
            <Logo className="h-10 md:h-12 transition-transform duration-300 group-hover:scale-105" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                onClick={() => handleNavClick(link.path)}
                className={cn(
                  "font-medium px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 text-sm",
                  location.pathname === link.path 
                    ? "bg-primary/20 text-primary hover:bg-primary/30" 
                    : "text-foreground/80 hover:text-foreground hover:bg-secondary"
                )}
              >
                {link.name}
              </Button>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
             <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full transition-colors hover:scale-105 text-foreground/80 hover:text-foreground hover:bg-secondary"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Button
              className="font-semibold px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl text-almara-navy bg-gradient-to-r from-almara-gold to-amber-500 hover:from-amber-500 hover:to-almara-gold shadow-lg"
              onClick={() => navigate("/contact")}
            >
              Contact Now
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
               className="p-2 rounded-full text-foreground hover:bg-secondary transition-colors"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl transition-all duration-300 text-foreground hover:bg-secondary hover:scale-105"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div
                className={cn(
                  "py-4 space-y-2 border-t rounded-b-2xl",
                  scrolled
                    ? "bg-background/95 border-border backdrop-blur-lg"
                    : "bg-background/95 border-border backdrop-blur-lg"
                )}
              >
                {navLinks.map((link) => (
                  <Button
                    key={link.name}
                    variant="ghost"
                    onClick={() => handleNavClick(link.path)}
                    className="w-full justify-start px-4 py-3 text-foreground/90 hover:text-foreground hover:bg-secondary font-normal transition-all duration-200 rounded-lg"
                  >
                    {link.name}
                  </Button>
                ))}
                
                <div className="px-4 pt-2 space-y-3">
                  <Button 
                    className="w-full bg-gradient-to-r from-almara-gold to-amber-500 hover:from-amber-500 hover:to-almara-gold text-almara-navy font-semibold py-3 rounded-full transition-all duration-300 hover:shadow-xl"
                    onClick={() => handleNavClick("/contact")}
                  >
                    Contact Now
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
