"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { useTheme } from "@/contexts/ThemeContext";

export default function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const { theme } = useTheme();

  const values = [
    {
      title: "AI Strategy",
      description: "Comprehensive AI roadmaps aligned with business objectives",
      icon: "🎯",
      color: "from-emerald-500 to-teal-600",
    },
    {
      title: "SSOT Architecture",
      description: "Single source of truth for reliable AI systems",
      icon: "🏗️",
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Rapid Prototyping",
      description: "Transform ideas into working AI prototypes in weeks",
      icon: "⚡",
      color: "from-teal-500 to-cyan-600",
    },
  ];

  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden" ref={ref}>
      {/* Background with theme support */}
      <div className={`absolute inset-0 transition-colors duration-500 ${
        theme === "dark" 
          ? "bg-gradient-to-br from-zinc-950 via-black to-zinc-950" 
          : "bg-gradient-to-br from-stone-100 via-emerald-50 to-stone-50"
      }`} />
      <div 
        className={`absolute inset-0 transition-opacity duration-500 ${
          theme === "dark" ? "opacity-100" : "opacity-30"
        }`}
        style={{ 
          clipPath: "polygon(0 20%, 100% 0, 100% 100%, 0 100%)",
          background: theme === "dark" 
            ? "linear-gradient(to top left, rgba(6, 78, 59, 0.2), transparent)"
            : "linear-gradient(to top left, rgba(16, 185, 129, 0.1), transparent)"
        }}
      />
      
      {/* Ambient sparkles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`about-sparkle-${i}`}
          className="absolute w-1 h-1 bg-emerald-400/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: "0 0 4px rgba(16, 185, 129, 0.6)",
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto">
        {/* Asymmetric layout */}
        <div className="grid lg:grid-cols-5 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="sticky top-32">
              <motion.div
                className="inline-block mb-4 px-4 py-2 bg-emerald-500/20 backdrop-blur-sm rounded-full border border-emerald-500/30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
              >
                <span className="text-emerald-300 text-sm font-medium">Our Philosophy</span>
              </motion.div>
              
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-teal-400 bg-clip-text text-transparent">
                  AI Transformation Excellence
                </span>
              </h2>
              
              <p className={`text-xl leading-relaxed transition-colors duration-500 ${
                theme === "dark" ? "text-stone-300" : "text-stone-600"
              }`}>
                Like the Dracaena plant that thrives in diverse environments, 
                we help your organization adapt and grow with AI, providing resilient solutions 
                that stand the test of time.
              </p>
            </div>
          </motion.div>

          <div className="lg:col-span-3 space-y-6">
            {values.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="group relative"
              >
                <div className={`flex items-start gap-6 backdrop-blur-xl rounded-3xl p-8 border transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 will-change-transform ${
                  theme === "dark"
                    ? "bg-white/5 border-white/10 hover:border-emerald-500/50"
                    : "bg-white/80 border-stone-200 hover:border-emerald-400"
                }`}>
                  <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-3xl transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold mb-2 transition-colors duration-500 ${
                      theme === "dark" ? "text-white" : "text-stone-900"
                    }`}>
                      {item.title}
                    </h3>
                    <p className={`leading-relaxed transition-colors duration-500 ${
                      theme === "dark" ? "text-stone-400" : "text-stone-600"
                    }`}>{item.description}</p>
                  </div>
                  
                  {/* Decorative element */}
                  <div className={`absolute -right-2 -top-2 w-20 h-20 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-300`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
