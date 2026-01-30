"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { name: "Expertise", href: "#expertise" },
  { name: "Projects", href: "#projects" },
  { name: "My Workflow", href: "#workflow" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 z-50 w-full transition-all ${
        isScrolled
          ? "border-b border-zinc-200 dark:border-zinc-900 bg-white/80 dark:bg-black/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-xl font-semibold text-slate-900 dark:text-white"
        >
          Portfolio
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              whileHover={{ y: -2 }}
              className="text-sm font-medium text-slate-600 dark:text-zinc-400 transition-colors hover:text-slate-900 dark:hover:text-white"
            >
              {item.name}
            </motion.a>
          ))}
          <ThemeToggle />
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-full border border-slate-300 dark:border-zinc-800 bg-transparent px-4 py-2 text-sm font-medium text-slate-900 dark:text-white transition-colors hover:border-slate-400 dark:hover:border-zinc-700 hover:bg-slate-100 dark:hover:bg-zinc-900"
          >
            <Download className="h-4 w-4" />
            Download CV
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-slate-900 dark:text-white"
            aria-label="Toggle menu"
          >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-zinc-200 dark:border-zinc-900 bg-white/95 dark:bg-black/95 backdrop-blur-md md:hidden"
        >
          <div className="flex flex-col space-y-4 px-4 py-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-slate-600 dark:text-zinc-400 transition-colors hover:text-slate-900 dark:hover:text-white"
              >
                {item.name}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 rounded-full border border-slate-300 dark:border-zinc-800 bg-transparent px-4 py-2 text-sm font-medium text-slate-900 dark:text-white transition-colors hover:border-slate-400 dark:hover:border-zinc-700 hover:bg-slate-100 dark:hover:bg-zinc-900"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
