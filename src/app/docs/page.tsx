"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const sealedRecords = [
  "Origin record: sealed",
  "Architecture record: sealed",
  "Evolution record: sealed",
  "Access record: pending",
];

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-[#02030a] text-white">
      <Navigation />

      <main className="relative overflow-hidden px-6 pb-24 pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(129,92,255,0.20),transparent_36%),radial-gradient(circle_at_18%_80%,rgba(0,213,255,0.10),transparent_28%)]" />
        <div className="relative mx-auto max-w-5xl">
          <motion.p
            className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-cyan-100/70"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Archive status
          </motion.p>
          <motion.h1
            className="max-w-4xl text-5xl font-black leading-tight tracking-normal md:text-7xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08 }}
          >
            The public records are still behind the veil.
          </motion.h1>
          <motion.p
            className="mt-7 max-w-2xl text-xl leading-8 text-slate-300/80"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16 }}
          >
            Dracaenium will not explain itself through ordinary documentation yet.
            Fragments will surface when the first phase is ready.
          </motion.p>

          <motion.div
            className="mt-14 grid gap-4 md:grid-cols-2"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24 }}
          >
            {sealedRecords.map((record) => (
              <div key={record} className="border border-white/10 bg-white/[0.035] p-6 text-sm uppercase tracking-[0.2em] text-slate-300/75 backdrop-blur-xl">
                {record}
              </div>
            ))}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
