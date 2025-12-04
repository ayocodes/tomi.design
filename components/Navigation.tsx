"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  // Handle scroll to show/hide nav
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
        setIsOpen(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="font-cursive text-5xl font-bold text-text-primary hover:text-primary-accent transition-colors cursor-pointer">
              <motion.span
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}
              >
                Titoo
              </motion.span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-body text-base transition-colors ${
                    pathname === link.href
                      ? "text-primary-accent font-semibold"
                      : "text-text-primary hover:text-primary-accent"
                  }`}
                >
                  {link.name}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
              
              {/* Contact Button */}
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className={`px-6 py-2.5 rounded-full font-body font-semibold transition-colors cursor-pointer ${
                    pathname === "/contact"
                      ? "bg-primary-accent text-button-text"
                      : "bg-button-bg text-button-text hover:bg-primary-accent"
                  }`}
                >
                  Contact Me
                </motion.button>
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col gap-1.5">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-0.5 bg-text-primary block"
                />
                <motion.span
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-0.5 bg-text-primary block"
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-0.5 bg-text-primary block"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background md:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute top-20 left-0 right-0 bottom-0 bg-background px-6 py-8"
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className={`block text-3xl font-heading transition-colors ${
                        pathname === link.href
                          ? "text-primary-accent font-bold"
                          : "text-text-primary hover:text-primary-accent"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Contact Button in Mobile Menu */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-4"
                >
                  <Link href="/contact">
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className={`w-full px-6 py-3 rounded-full font-body font-semibold text-lg transition-colors cursor-pointer ${
                        pathname === "/contact"
                          ? "bg-primary-accent text-button-text"
                          : "bg-button-bg text-button-text hover:bg-primary-accent"
                      }`}
                    >
                      Contact Me
                    </motion.button>
                  </Link>
                </motion.div>
              </div>

              {/* Social Links in Mobile Menu (optional) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-8 left-6 right-6"
              >
                <p className="text-text-secondary text-sm font-body">
                  Let's create something amazing together
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from going under fixed nav */}
      <div className="h-20" />
    </>
  );
}