"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#02030a] px-6 py-14 text-slate-400">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(129,92,255,0.13),transparent_36%)]" />
      <motion.div
        className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full border border-cyan-100/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 46, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-cyan-100 shadow-[0_0_18px_rgba(103,232,249,0.8)]" />
            <span className="text-lg font-black uppercase tracking-[0.24em] text-white">Dracaenium</span>
          </div>
          <p className="max-w-xl leading-7">
            A concealed constellation of intelligence, origin, and evolution. The first
            public threshold is approaching.
          </p>
        </div>

        <div className="text-sm uppercase tracking-[0.22em] text-slate-500">
          &copy; {new Date().getFullYear()} Dracaenium. Coming soon.
        </div>
      </div>
    </footer>
  );
}
