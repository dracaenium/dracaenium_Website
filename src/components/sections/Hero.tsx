"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";

const starField = Array.from({ length: 96 }, (_, index) => ({
  left: `${(index * 37) % 100}%`,
  top: `${(index * 61) % 100}%`,
  size: index % 9 === 0 ? 2 : 1,
  delay: (index % 13) * 0.22,
  duration: 2.8 + (index % 7) * 0.35,
}));

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "36%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  const fragments = useMemo(
    () => ["Origin sealed", "Signal unstable", "Scale unknown", "Awakening soon"],
    [],
  );

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-[#02030a] px-6 text-white"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(140,92,255,0.24),transparent_24%),radial-gradient(circle_at_20%_20%,rgba(0,213,255,0.16),transparent_32%),radial-gradient(circle_at_80%_72%,rgba(255,208,89,0.12),transparent_28%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,3,10,0.15),#02030a_92%)]" />

        {starField.map((star, index) => (
          <motion.span
            key={index}
            className="absolute rounded-full bg-white"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              boxShadow: "0 0 10px rgba(255,255,255,0.65)",
            }}
            animate={{ opacity: [0.18, 0.95, 0.18], scale: [0.85, 1.45, 0.85] }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        <motion.div
          className="absolute left-1/2 top-1/2 h-[72vmin] w-[72vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 54, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 h-[52vmin] w-[52vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-200/15"
          animate={{ rotate: -360 }}
          transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 h-[34vmin] w-[34vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-100/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,#ffffff_0%,#c7efff_10%,#815cff_28%,rgba(129,92,255,0.22)_46%,transparent_70%)] blur-[1px]"
          animate={{
            scale: [0.92, 1.08, 0.92],
            filter: ["brightness(0.85)", "brightness(1.25)", "brightness(0.85)"],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center pt-24"
      >
        <div className="max-w-4xl">
          <motion.p
            className="mb-6 inline-flex rounded-full border border-cyan-200/20 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.34em] text-cyan-100/80 backdrop-blur"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            The first veil is forming
          </motion.p>

          <motion.h1
            id="hero-title"
            className="max-w-5xl text-6xl font-black leading-[0.9] tracking-normal text-white md:text-8xl lg:text-9xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            Dracaenium
          </motion.h1>

          <motion.p
            className="mt-8 max-w-2xl text-xl leading-8 text-slate-200/80 md:text-2xl"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
          >
            Something ancient in shape and new in intelligence is gathering beyond the visible
            edge. Its purpose remains sealed. Its arrival does not.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-cyan-200/30 bg-cyan-100 px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-slate-950 shadow-[0_0_35px_rgba(103,232,249,0.34)] transition hover:bg-white"
            >
              Request the signal
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white backdrop-blur transition hover:border-white/35 hover:bg-white/[0.08]"
            >
              Enter quietly
            </a>
          </motion.div>
        </div>

        <div className="mt-20 grid gap-3 text-xs uppercase tracking-[0.24em] text-slate-300/70 sm:grid-cols-4">
          {fragments.map((fragment, index) => (
            <motion.div
              key={fragment}
              className="border-t border-white/10 py-4"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.58 + index * 0.08 }}
            >
              {fragment}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -ml-4"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.2, repeat: Infinity }}
      >
        <div className="flex h-12 w-8 items-start justify-center rounded-full border border-white/25 p-2">
          <motion.div
            className="h-1.5 w-1.5 rounded-full bg-cyan-100"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2.2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
