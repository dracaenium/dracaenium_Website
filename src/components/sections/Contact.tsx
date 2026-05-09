"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const channels = [
  "Early access requests",
  "Private collaboration signals",
  "Launch witness list",
];

export default function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="contact" className="relative overflow-hidden bg-[#060611] px-6 py-32 text-white" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,208,89,0.13),transparent_28%),radial-gradient(circle_at_70%_75%,rgba(0,213,255,0.12),transparent_32%),linear-gradient(180deg,#02030a,#080817)]" />
      <motion.div
        className="absolute left-1/2 top-20 h-[44rem] w-[44rem] -translate-x-1/2 rounded-full border border-amber-100/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative mx-auto max-w-5xl text-center">
        <motion.p
          className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-amber-100/70"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          The gate is not open
        </motion.p>
        <motion.h2
          className="text-5xl font-black leading-tight tracking-normal md:text-7xl"
          initial={{ opacity: 0, y: 26 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.08 }}
        >
          But the first names can be written into orbit.
        </motion.h2>
        <motion.p
          className="mx-auto mt-7 max-w-2xl text-xl leading-8 text-slate-300/80"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.16 }}
        >
          Dracaenium is approaching its first public threshold. Send a signal if you
          want to be near the reveal, without demanding the secret before its time.
        </motion.p>

        <motion.div
          className="mx-auto mt-12 max-w-2xl border border-white/10 bg-white/[0.04] p-7 text-left backdrop-blur-xl"
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.24 }}
        >
          <div className="grid gap-4 sm:grid-cols-3">
            {channels.map((channel) => (
              <div key={channel} className="border-t border-white/10 pt-4 text-sm uppercase tracking-[0.2em] text-slate-300/70">
                {channel}
              </div>
            ))}
          </div>
          <a
            href="mailto:dracaenium@gmail.com?subject=Dracaenium%20Signal%20Request"
            className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-cyan-200/30 bg-cyan-100 px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-slate-950 shadow-[0_0_35px_rgba(103,232,249,0.25)] transition hover:bg-white sm:w-auto"
          >
            Send signal
          </a>
        </motion.div>
      </div>
    </section>
  );
}
