"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t bg-stone-900 text-stone-300 border-stone-800">
      {/* Decorative gradient */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 30% 50%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)`
        }} />
      </div>
      
      {/* Footer sparkles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`footer-sparkle-${i}`}
          className="absolute w-1 h-1 bg-emerald-400/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: "0 0 3px rgba(16, 185, 129, 0.6)",
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="120 100 280 340" 
                role="img" 
                aria-label="Dracaenium logo"
                width="44"
                height="44"
              >
                <defs>
                  <linearGradient id="footer-leaf-gradient" x1="0.15" y1="0.2" x2="0.9" y2="0.85">
                    <stop offset="0" stopColor="#2ECC71"/>
                    <stop offset="1" stopColor="#12B3C7"/>
                  </linearGradient>
                </defs>
                <path 
                  d="M170 402C138 350 140 280 170 228C205 168 270 130 340 126C388 124 404 146 404 192C404 270 360 360 294 410C240 450 196 442 170 402 Z" 
                  fill="url(#footer-leaf-gradient)"
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
              <span className="text-2xl font-bold text-white">Dracaenium</span>
            </div>
            <p className={`text-stone-400 mb-6 max-w-md leading-relaxed`}>
              Empowering enterprises with AI transformation strategies, SSOT architecture, 
              and rapid prototyping excellence.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-500/20 transition-colors"
                >
                  <span className="text-xs">{social[0]}</span>
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3 text-sm">
              {['AI Strategy', 'SSOT Architecture', 'Rapid Prototyping', 'Spec-Driven Development'].map((link) => (
                <li key={link}>
                  <a 
                    href="/docs" 
                    className="hover:text-emerald-400 transition-colors inline-flex items-center gap-2"
                  >
                    <span className="text-emerald-500">→</span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <p className="text-sm text-stone-400 mb-4">
              Documentation and guides
            </p>
            <a 
              href="/docs"
              className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              View Documentation →
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-500">
          <p>&copy; {new Date().getFullYear()} Dracaenium. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-emerald-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
