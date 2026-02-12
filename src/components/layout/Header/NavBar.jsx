

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, CircleUser, Menu, X } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";
import { languages } from "../../../content"; // centralized language object

const NavBar = () => {
  const { lang } = useLanguage();
const t = languages[lang]?.navBar || languages.en.navBar; // <- access navBar directly
const navLinks = t.navLinks;

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setMobileOpen(false);
    }
  };

  useEffect(() => {
    if (mobileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [mobileOpen]);

  const menuVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 30 } },
    exit: { x: "-100%", opacity: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
  };

  return (
    <nav
      className={`sticky top-0 z-9999 transition-all duration-500 ${
        scrolled
          ? "bg-[#0F1710]/95 backdrop-blur-xl shadow-2xl py-3 border-b border-[#D4C78A]/20"
          : "bg-transparent py-2"
      }`}
    >
      <div className="max-w-8xl mx-auto px-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
  <motion.div
    whileHover={{ scale: 1.08, rotate: 8 }}
    className="w-8 h-8 border border-[#D4C78A]/70 rounded-full flex items-center justify-center bg-gradient-to-br from-[#1A2A1C] to-[#0F1710] shadow-inner"
  >
    <Heart size={18} className="text-[#bd1010]" fill="#bd1010" />
  </motion.div>

  {/* Dynamic brand name */}
  <span className="text-xl font-serif font-medium">
    {t.brandName?.beforeHighlight || "Ndoa"}
    <span className="text-[#D4C78A]">
      {t.brandName?.highlight || "Africa"}
    </span>
  </span>
</Link>


        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-[#F5F5F0]/80">
          {navLinks.map((link) => (
            <motion.a
              key={link.to}
              href={link.to}
              whileHover={{ y: -2, color: "#D4C78A" }}
              className="transition-colors"
            >
              {link.label}
            </motion.a>
          ))}

          <Link to="/membershipForm">
            <motion.button
              whileHover={{ backgroundColor: "rgba(212,199,138,0.12)" }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 border border-[#D4C78A]/60 text-[#D4C78A] px-5 py-2 rounded-full text-sm font-medium transition-colors hover:bg-[#D4C78A]/10 active:bg-[#D4C78A]/20"
            >
              <CircleUser size={16} /> {t.signInText || "Sign In"}
            </motion.button>
          </Link>
        </div>

        <button
          className="md:hidden flex items-center text-[#D4C78A]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            ref={sidebarRef}
            className="md:hidden fixed top-[3.5rem] left-0 h-[calc(100%-3.5rem)] w-64 bg-[#0F1710]/95 backdrop-blur-xl px-5 py-4 border-r border-[#D4C78A]/20 flex flex-col gap-4 z-50"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#F5F5F0]/80 hover:text-[#D4C78A] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <Link to="/membershipForm">
              <motion.button
                whileHover={{ backgroundColor: "rgba(212,199,138,0.12)" }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 border border-[#D4C78A]/60 text-[#D4C78A] px-5 py-2 rounded-full text-sm font-medium transition-colors hover:bg-[#D4C78A]/10 active:bg-[#D4C78A]/20"
              >
                <CircleUser size={16} /> {t.signInText || "Sign In"}
              </motion.button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
