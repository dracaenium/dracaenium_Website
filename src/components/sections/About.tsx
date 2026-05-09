"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const relics = [
  {
    title: "A Hidden Architecture",
    description:
      "Only the outline is visible: an intelligence layer designed to connect scattered signals into a larger pattern.",
    code: "I",
  },
  {
    title: "Evolution At Scale",
    description:
      "The system is being shaped to learn, adapt, and expand without revealing the full mechanism too early.",
    code: "II",
  },
  {
    title: "Access Before Disclosure",
    description:
      "Early observers will see fragments first. The complete form arrives when the constellation is ready.",
    code: "III",
  },
];

export default function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="relative overflow-hidden bg-[#050611] px-6 py-32 text-white" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(0,213,255,0.12),transparent_30%),radial-gradient(circle_at_82%_20%,rgba(255,208,89,0.10),transparent_26%),linear-gradient(180deg,#02030a,#080817_48%,#02030a)]" />
      <motion.div
        className="absolute left-[-10rem] top-20 h-[34rem] w-[34rem] rounded-full border border-cyan-200/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-[-15rem] right-[-10rem] h-[42rem] w-[42rem] rounded-full border border-violet-200/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 72, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-100/70">
              What can be said
            </p>
            <h2 className="text-5xl font-black leading-tight tracking-normal md:text-7xl">
              A project too large to name plainly.
            </h2>
          </motion.div>

          <motion.p
            className="max-w-2xl text-xl leading-9 text-slate-300/80"
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Dracaenium is not being presented as a finished product, a service menu, or a
            simple tool. It is a concealed framework for emergence: part archive, part
            engine, part threshold. More will be revealed when the first phase opens.
          </motion.p>
        </div>

        <div className="mt-20 grid gap-5 md:grid-cols-3">
          {relics.map((item, index) => (
            <motion.article
              key={item.title}
              className="group relative overflow-hidden border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition hover:border-cyan-200/30 hover:bg-white/[0.055]"
              initial={{ opacity: 0, y: 26 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.18 + index * 0.1 }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-100/45 to-transparent" />
              <div className="mb-12 flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-black/30 text-sm font-semibold text-cyan-100 shadow-[0_0_30px_rgba(103,232,249,0.12)]">
                {item.code}
              </div>
              <h3 className="mb-4 text-2xl font-bold text-white">{item.title}</h3>
              <p className="leading-7 text-slate-300/75">{item.description}</p>
              <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-cyan-300/10 blur-3xl transition group-hover:bg-violet-300/20" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
