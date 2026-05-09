"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { label: "Veil", href: "#about" },
  { label: "Phases", href: "#features" },
  { label: "Signal", href: "#contact" },
];

export default function Navigation() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#02030a]/70 text-white shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl"
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <motion.div
              className="relative h-10 w-10"
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.3 }}
            >
              <span className="absolute inset-0 rounded-full bg-cyan-200/20 blur-md" />
              <svg viewBox="0 0 44 44" role="img" aria-label="Dracaenium mark" className="relative h-10 w-10">
                <circle cx="22" cy="22" r="18" fill="none" stroke="rgba(255,255,255,0.24)" strokeWidth="1" />
                <circle cx="22" cy="22" r="7" fill="rgba(103,232,249,0.92)" />
                <path d="M22 4a18 18 0 0 1 15.5 27" fill="none" stroke="rgba(196,181,253,0.85)" strokeWidth="2" strokeLinecap="round" />
                <path d="M8 30c7-2 15-10 24-24" fill="none" stroke="rgba(253,230,138,0.9)" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </motion.div>
            <span className="text-lg font-black tracking-[0.18em]">DRACAENIUM</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative text-xs font-semibold uppercase tracking-[0.24em] text-slate-200/75 transition hover:text-white"
              >
                {item.label}
                <motion.span
                  className="absolute -bottom-2 left-0 h-px w-0 bg-cyan-100"
                  whileHover={{ width: "100%" }}
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
