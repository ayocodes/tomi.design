"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { name: "X", href: "https://x.com/VisualsByTomi" },
  { name: "YouTube", href: "https://www.youtube.com/channel/UCDXcDzES5fCNhV6tcqgs7tg" },
  { name: "Instagram", href: "https://www.instagram.com/visualsbytomi/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/tomi-omotola-39948239a/" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-primary text-button-text mt-20">
      {/* Animated top border */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="h-1 bg-primary-accent origin-left"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Brand & Tagline */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-4">Tomi</h3>
            <p className="text-button-text/70 text-sm leading-relaxed">
              Motion designer crafting visual stories that move, inspire, and captivate.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4 text-primary-accent">
              Navigate
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-button-text/70 hover:text-primary-accent transition-colors text-sm inline-block group"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-primary-accent group-hover:w-full transition-all duration-300" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social & Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4 text-primary-accent">
              Connect
            </h4>
            <ul className="space-y-3 mb-6">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-button-text/70 hover:text-primary-accent transition-colors text-sm inline-block group"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-primary-accent group-hover:w-full transition-all duration-300" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="mailto:omotolatomi01@gmail.com"
              className="text-button-text/70 hover:text-primary-accent transition-colors text-sm block"
            >
              omotolatomi01@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-button-text/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-button-text/50 text-sm">
              © {currentYear} Tomi. All rights reserved.
            </p>
            <p className="text-button-text/50 text-sm">
              Designed & Developed with ✨
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}