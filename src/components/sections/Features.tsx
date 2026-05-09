"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { useRef } from "react";

const phases = [
  {
    title: "Phase Zero",
    subtitle: "The silence before contact",
    description: "The first layer remains private while the foundation is aligned.",
  },
  {
    title: "Phase One",
    subtitle: "Fragments begin to move",
    description: "Selected signals, artifacts, and invitations appear without revealing the core.",
  },
  {
    title: "Phase Two",
    subtitle: "The constellation opens",
    description: "The project begins to show how its pieces evolve into something larger.",
  },
  {
    title: "Phase Three",
    subtitle: "A new orbit",
    description: "The public form arrives after the hidden structure has proven itself.",
  },
];

export default function Features() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const drift = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="features" ref={containerRef} className="relative overflow-hidden bg-[#02030a] px-6 py-32 text-white">
      <motion.div
        className="absolute inset-x-0 top-0 h-[38rem] bg-[radial-gradient(ellipse_at_center,rgba(129,92,255,0.20),transparent_62%)]"
        style={{ y: drift }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />

      <div ref={ref} className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-3xl"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-violet-100/70">
            Coming soon
          </p>
          <h2 className="text-5xl font-black leading-tight tracking-normal md:text-7xl">
            Revelation will happen in phases.
          </h2>
          <p className="mt-7 text-xl leading-8 text-slate-300/80">
            No full explanation. No crowded roadmap. Only the visible arc of a larger
            evolution, released when each layer becomes stable enough to be seen.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-200/0 via-cyan-200/35 to-cyan-200/0 md:block" />
          <div className="grid gap-5">
            {phases.map((phase, index) => (
              <motion.article
                key={phase.title}
                className="relative grid gap-6 border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl md:grid-cols-[8rem_1fr_1.1fr] md:items-center md:pl-12"
                initial={{ opacity: 0, x: index % 2 === 0 ? -28 : 28 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                <span className="absolute left-4 top-8 hidden h-3 w-3 rounded-full bg-cyan-100 shadow-[0_0_22px_rgba(103,232,249,0.8)] md:block" />
                <div className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-100/70">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-violet-100/55">
                    {phase.subtitle}
                  </p>
                </div>
                <p className="leading-7 text-slate-300/75">{phase.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
