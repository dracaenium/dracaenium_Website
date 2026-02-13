"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-xl shadow-lg ${
        theme === "dark" ? "bg-black/50" : "bg-white/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="120 100 280 340" 
                role="img" 
                aria-label="Dracaenium logo"
                width="40"
                height="40"
                className="drop-shadow-lg"
              >
                <defs>
                  <linearGradient id="nav-leaf-gradient" x1="0.15" y1="0.2" x2="0.9" y2="0.85">
                    <stop offset="0" stopColor="#2ECC71"/>
                    <stop offset="1" stopColor="#12B3C7"/>
                  </linearGradient>
                </defs>
                <path 
                  d="M170 402C138 350 140 280 170 228C205 168 270 130 340 126C388 124 404 146 404 192C404 270 360 360 294 410C240 450 196 442 170 402 Z" 
                  fill="url(#nav-leaf-gradient)"
                />
                <path 
                  d="M200 406C182 332 196 262 236 212C272 166 320 146 372 142" 
                  fill="none" 
                  stroke="#ffffff"
                  strokeWidth="16" 
                  strokeLinecap="round" 
                  opacity="0.92"
                />
              </svg>
            </motion.div>
            <span className={`text-xl font-bold transition-colors ${theme === "dark" ? "text-white" : "text-stone-900"}`}>
              Dracaenium
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Features', 'Docs', 'Contact'].map((item) => (
              <Link 
                key={item}
                href={item === 'Docs' ? '/docs' : `#${item.toLowerCase()}`}
                className={`relative font-medium transition-colors ${
                  theme === "dark" ? "text-white/90 hover:text-white" : "text-stone-600 hover:text-stone-900"
                }`}
              >
                {item}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                theme === "dark" ? "bg-white/10 hover:bg-white/20" : "bg-stone-200 hover:bg-stone-300"
              }`}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-stone-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
