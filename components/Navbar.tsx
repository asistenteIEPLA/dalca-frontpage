"use client";

import { useState, useEffect } from "react";
import { Hexagon } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Hexagon className={`w-8 h-8 ${scrolled ? "text-primary-orange" : "text-white"} transition-colors duration-300`} />
          <span className={`font-inter font-bold text-xl tracking-tight ${scrolled ? "text-deep-onyx" : "text-white"} transition-colors duration-300`}>
            DALCA COATING
          </span>
        </div>
        <button className="bg-[#F57C00] hover:bg-[#E65100] text-white font-mono rounded-full px-6 py-2.5 text-sm uppercase tracking-wide transition-colors shadow-lg shadow-orange-500/20">
          Cotizar Proyecto
        </button>
      </div>
    </motion.nav>
  );
}
