"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { useState } from "react";

export default function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden" ref={ref}>
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-black to-zinc-950" />
      
      {/* Decorative glowing elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl" />
      
      {/* Sparkles */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={`contact-sparkle-${i}`}
          className="absolute w-1 h-1 bg-emerald-400/60 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: "0 0 4px rgba(16, 185, 129, 0.8)",
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.2, 0],
          }}
          transition={{
            duration: 2.5 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-4 px-4 py-2 bg-emerald-500/20 backdrop-blur-sm rounded-full border border-emerald-500/30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
            >
              <span className="text-emerald-300 text-sm font-medium">Get In Touch</span>
            </motion.div>
            
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-teal-400 bg-clip-text text-transparent">
                Let's Grow Together
              </span>
            </h2>
            
            <p className="text-xl text-stone-300 mb-8 leading-relaxed">
              Ready to cultivate something extraordinary? 
              Reach out and let's start building your future.
            </p>

            <div className="space-y-4">
              {[
                { icon: "📧", text: "hello@dracaenium.com" },
                { icon: "📍", text: "Growing globally" },
                { icon: "⏰", text: "24/7 Support" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3 text-stone-300"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-lg">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10">
              <form className="space-y-6">
                <div className="space-y-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Your Name"
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border-2 border-white/10 focus:border-emerald-500 focus:outline-none transition-all text-white placeholder:text-stone-500"
                    />
                    {focused === 'name' && (
                      <motion.div
                        layoutId="focus-indicator"
                        className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl -z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.2 }}
                      />
                    )}
                  </div>
                  
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Your Email"
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border-2 border-white/10 focus:border-emerald-500 focus:outline-none transition-all text-white placeholder:text-stone-500"
                    />
                    {focused === 'email' && (
                      <motion.div
                        layoutId="focus-indicator"
                        className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl -z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.2 }}
                      />
                    )}
                  </div>
                  
                  <div className="relative">
                    <textarea
                      placeholder="Your Message"
                      rows={5}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border-2 border-white/10 focus:border-emerald-500 focus:outline-none transition-all resize-none text-white placeholder:text-stone-500"
                    />
                    {focused === 'message' && (
                      <motion.div
                        layoutId="focus-indicator"
                        className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl -z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.2 }}
                      />
                    )}
                  </div>
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
