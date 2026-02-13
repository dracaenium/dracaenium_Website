"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

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
      className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-xl shadow-lg bg-transparent`}
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
            <span className="text-xl font-bold transition-colors text-white">
              Dracaenium
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Features', 'Contact'].map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="relative font-medium transition-colors text-white/90 hover:text-white"
              >
                {item}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
