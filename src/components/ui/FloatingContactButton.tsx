"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

export default function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.97 }}
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-3 rounded-full border border-cyan-100/30 bg-cyan-100 px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-slate-950 shadow-2xl shadow-cyan-950/30 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-transparent"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls="contact-popup"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
          <svg
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M2.94 5.5A2.5 2.5 0 015.3 4h9.4a2.5 2.5 0 012.36 1.5L10 9.92 2.94 5.5z" />
            <path d="M2.5 7.25V14A2.5 2.5 0 005 16.5h10a2.5 2.5 0 002.5-2.5V7.25l-7.08 4.18a.75.75 0 01-.84 0L2.5 7.25z" />
          </svg>
        </span>
          Signal
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close contact popup"
              className="fixed inset-0 z-40 bg-black/45 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              id="contact-popup"
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-popup-title"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className={`fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] max-w-sm overflow-hidden rounded-3xl border shadow-2xl ${
                theme === "dark"
                  ? "border-white/10 bg-[#02030a]/95 text-white"
                  : "border-cyan-100 bg-white/95 text-stone-900"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/15 via-transparent to-violet-400/15" />
              <div className="relative p-6">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-2 inline-flex rounded-full border border-cyan-200/30 bg-cyan-200/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-100">
                      Signal
                    </p>
                    <h2 id="contact-popup-title" className="text-xl font-semibold">
                      Request the first threshold
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className={`rounded-full p-2 transition-colors ${
                      theme === "dark"
                        ? "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                        : "bg-stone-100 text-stone-500 hover:bg-stone-200 hover:text-stone-900"
                    }`}
                    aria-label="Close contact popup"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M5.22 5.22a.75.75 0 011.06 0L10 8.94l3.72-3.72a.75.75 0 111.06 1.06L11.06 10l3.72 3.72a.75.75 0 11-1.06 1.06L10 11.06l-3.72 3.72a.75.75 0 11-1.06-1.06L8.94 10 5.22 6.28a.75.75 0 010-1.06z" />
                    </svg>
                  </button>
                </div>

                <p className={theme === "dark" ? "text-white/80" : "text-stone-600"}>
                  The project is still veiled. Send a quiet request to{" "}
                  <a
                    href="mailto:dracaenium@gmail.com"
                    className="font-semibold text-cyan-300 transition-colors hover:text-white"
                  >
                    dracaenium@gmail.com
                  </a>
                  .
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
