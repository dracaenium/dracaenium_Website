"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { useRef } from "react";
import { useTheme } from "@/contexts/ThemeContext";

export default function Features() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const containerRef = useRef(null);
  const { theme } = useTheme();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const features = [
    {
      title: "Enterprise AI Implementation",
      description: "End-to-end AI solutions from strategy to production deployment across all domains",
      icon: "🚀",
      details: ["Strategy & Planning", "Architecture Design", "Production Deployment"],
    },
    {
      title: "Spec-Driven Development",
      description: "Precision-engineered AI systems built with clear specifications and documentation",
      icon: "📋",
      details: ["API Specifications", "Data Models", "Quality Assurance"],
    },
    {
      title: "Domain Expertise",
      description: "Deep knowledge across finance, healthcare, manufacturing, retail, and technology",
      icon: "🎓",
      details: ["Industry Best Practices", "Compliance Ready", "Proven Patterns"],
    },
  ];

  return (
    <section id="features" ref={containerRef} className="relative py-32 px-6 overflow-hidden">
      {/* Background with theme support */}
      <motion.div 
        className={`absolute inset-0 transition-colors duration-500 ${
          theme === "dark" ? "bg-black" : "bg-white"
        }`}
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]),
        }}
      />
      
      {/* Mesh gradient overlay */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${
        theme === "dark" ? "opacity-40" : "opacity-20"
      }`}>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.2) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(20, 184, 166, 0.2) 0%, transparent 50%)`
        }} />
      </div>
      
      {/* Floating sparkles - only in dark mode */}
      {theme === "dark" && [...Array(50)].map((_, i) => (
        <motion.div
          key={`feature-sparkle-${i}`}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: "0 0 4px rgba(255, 255, 255, 0.8)",
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      <div ref={ref} className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-block mb-4 px-4 py-2 bg-emerald-500/20 backdrop-blur-sm rounded-full border border-emerald-400/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
          >
            <span className="text-emerald-300 text-sm font-medium">What We Offer</span>
          </motion.div>
          
          <h2 className={`text-5xl lg:text-6xl font-bold mb-6 transition-colors duration-500 ${
            theme === "dark" ? "text-white" : "text-stone-900"
          }`}>
            Grow Beyond Limits
          </h2>
          <p className={`text-xl max-w-3xl mx-auto transition-colors duration-500 ${
            theme === "dark" ? "text-stone-300" : "text-stone-600"
          }`}>
            Our solutions are designed to scale seamlessly, adapting to your evolving requirements
          </p>
        </motion.div>

        {/* Bento-style grid layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}
            >
              <div className={`relative h-full backdrop-blur-xl rounded-3xl p-8 border transition-all duration-500 ease-out overflow-hidden ${
                theme === "dark"
                  ? "bg-gradient-to-br from-white/10 to-white/5 border-white/10 hover:border-emerald-400/50"
                  : "bg-white border-stone-200 hover:border-emerald-400 shadow-lg"
              } ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
                {/* Hover glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/10 group-hover:to-teal-500/10 transition-all duration-500`} />
                
                <div className="relative z-10">
                  <div
                    className={`text-6xl mb-6 transition-colors duration-500 ${
                      theme === "dark" ? "text-emerald-400" : "text-emerald-600"
                    }`}
                  >
                    {feature.icon}
                  </div>
                  
                  <h3 className={`text-3xl font-bold mb-4 transition-colors duration-500 ${
                    theme === "dark" ? "text-white" : "text-stone-900"
                  }`}>
                    {feature.title}
                  </h3>
                  
                  <p className={`mb-6 leading-relaxed transition-colors duration-500 ${
                    theme === "dark" ? "text-stone-300" : "text-stone-600"
                  }`}>
                    {feature.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {feature.details.map((detail, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-sm border transition-colors duration-500 ${
                          theme === "dark"
                            ? "bg-emerald-500/20 text-emerald-300 border-emerald-400/30"
                            : "bg-emerald-50 text-emerald-700 border-emerald-200"
                        }`}
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Decorative corner element */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
