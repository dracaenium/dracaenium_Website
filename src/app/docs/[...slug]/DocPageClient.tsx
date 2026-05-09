"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

type DocPageClientProps = {
  content: string;
  slug: string[];
};

export default function DocPageClient({ slug }: DocPageClientProps) {
  return (
    <div className="min-h-screen bg-[#02030a] text-white">
      <Navigation />

      <main className="relative overflow-hidden px-6 pb-24 pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(0,213,255,0.16),transparent_32%),radial-gradient(circle_at_82%_72%,rgba(255,208,89,0.10),transparent_28%)]" />
        <div className="relative mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-cyan-100/70">
              Sealed fragment
            </p>
            <h1 className="text-5xl font-black leading-tight tracking-normal md:text-7xl">
              This record is not ready to be read.
            </h1>
            <p className="mt-7 text-xl leading-8 text-slate-300/80">
              The requested path exists only as a shadow for now: {slug.join(" / ")}.
              Dracaenium will disclose its inner language when the reveal sequence begins.
            </p>
            <Link
              href="/docs"
              className="mt-10 inline-flex rounded-full border border-cyan-200/30 bg-cyan-100 px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-slate-950 transition hover:bg-white"
            >
              Return to sealed archive
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
