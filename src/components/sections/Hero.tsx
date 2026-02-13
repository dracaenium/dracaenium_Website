"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useMemo } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Memoize static stars to prevent re-renders
  const staticStars = useMemo(() => 
    [...Array(80)].map((_, i) => {
      const size = Math.random() > 0.8 ? 2 : 1;
      return {
        key: `static-star-${i}`,
        size,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      };
    }), []
  );

  const twinklingStars = useMemo(() =>
    [...Array(60)].map((_, i) => {
      const size = Math.random() > 0.7 ? 2 : 1;
      const duration = 2 + Math.random() * 3;
      const delay = Math.random() * 5;
      return {
        key: `twinkle-${i}`,
        size,
        duration,
        delay,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      };
    }), []
  );

  const emeraldSparkles = useMemo(() =>
    [...Array(25)].map((_, i) => {
      const isEmerald = Math.random() > 0.5;
      return {
        key: `emerald-sparkle-${i}`,
        color: isEmerald ? 'rgba(16, 185, 129, 1)' : 'rgba(20, 184, 166, 1)',
        shadow: isEmerald ? 'rgba(16, 185, 129, 0.8)' : 'rgba(20, 184, 166, 0.8)',
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 5,
      };
    }), []
  );

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Pure black background with subtle gradients */}
      <div className="absolute inset-0 bg-black">
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 30% 50%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 70% 60%, rgba(20, 184, 166, 0.12) 0%, transparent 50%)",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Static stars in background */}
        {staticStars.map((star) => (
          <div
            key={star.key}
            className="absolute rounded-full bg-white/40"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: star.left,
              top: star.top,
              boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.3)`,
            }}
          />
        ))}
        
        {/* Twinkling sparkles */}
        {twinklingStars.map((star) => (
          <motion.div
            key={star.key}
            className="absolute rounded-full bg-white"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: star.left,
              top: star.top,
              boxShadow: `0 0 ${star.size * 3}px rgba(255, 255, 255, 0.8)`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Emerald sparkles */}
        {emeraldSparkles.map((sparkle) => (
          <motion.div
            key={sparkle.key}
            className="absolute rounded-full"
            style={{
              width: "2px",
              height: "2px",
              left: sparkle.left,
              top: sparkle.top,
              background: `radial-gradient(circle, ${sparkle.color}, transparent)`,
              boxShadow: `0 0 8px ${sparkle.shadow}`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.2, 0],
            }}
            transition={{
              duration: 2.5 + Math.random() * 2,
              repeat: Infinity,
              delay: sparkle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.div
              className="inline-block mb-4 px-4 py-2 bg-nature-600/20 backdrop-blur-sm rounded-full border border-nature-500/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-nature-300 text-sm font-medium">Rooted in Innovation</span>
            </motion.div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <motion.span 
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(120deg, #10b981, #34d399, #5eead4, #2dd4bf, #14b8a6, #10b981)",
                  backgroundSize: "300% 100%",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                Dracaenium
              </motion.span>
            </h1>
            
            <p className="text-xl md:text-2xl text-stone-300 mb-8 leading-relaxed">
              Where nature's resilience meets cutting-edge innovation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-semibold overflow-hidden"
              >
                <span className="relative z-10">Get Started</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </a>
              <a
                href="#about"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full font-semibold hover:bg-white/20 transition-all"
              >
                Explore More
              </a>
            </div>
          </motion.div>

          {/* Right side - Enhanced 3D-like visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative h-[500px] hidden md:block"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Multiple orbiting rings with circles */}
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={`orbit-${i}`}
                  className="absolute"
                  style={{
                    width: `${180 + i * 40}px`,
                    height: `${180 + i * 40}px`,
                  }}
                  animate={{
                    rotate: i % 2 === 0 ? 360 : -360,
                  }}
                  transition={{
                    duration: 15 + i * 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {/* Orbit path */}
                  <div 
                    className="absolute inset-0 rounded-full border border-emerald-400/10"
                    style={{
                      boxShadow: `inset 0 0 20px rgba(16, 185, 129, 0.05)`,
                    }}
                  />
                  
                  {/* Orbiting circles */}
                  {[0, 1, 2].map((j) => (
                    <motion.div
                      key={`circle-${i}-${j}`}
                      className="absolute top-0 left-1/2 -ml-2 w-4 h-4 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400"
                      style={{
                        boxShadow: "0 0 20px rgba(52, 211, 153, 0.6)",
                        rotate: `${j * 120}deg`,
                        transformOrigin: `center ${90 + i * 20}px`,
                      }}
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: j * 0.3,
                      }}
                    />
                  ))}
                </motion.div>
              ))}
              
              {/* Center element - simplified but fancier */}
              <div className="relative">
                {/* Outer glow ring */}
                <motion.div
                  className="absolute -inset-8 rounded-full border border-emerald-400/20"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    boxShadow: "0 0 40px rgba(16, 185, 129, 0.2)",
                  }}
                />
                
                {/* Main rotating square */}
                <motion.div
                  className="relative w-32 h-32 backdrop-blur-xl rounded-2xl overflow-hidden"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    background: "linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(20, 184, 166, 0.15))",
                    boxShadow: "0 0 80px rgba(52, 211, 153, 0.4), inset 0 0 60px rgba(16, 185, 129, 0.1)",
                  }}
                >
                  {/* Animated gradient overlay */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(45deg, transparent, rgba(16, 185, 129, 0.3), transparent)",
                    }}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  
                  {/* Border effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-emerald-400/40" />
                  
                  {/* Inner pulsing core */}
                  <motion.div
                    className="absolute inset-6 bg-gradient-to-br from-emerald-400/40 to-teal-400/40 rounded-xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{
                      boxShadow: "0 0 30px rgba(16, 185, 129, 0.5)",
                    }}
                  />
                </motion.div>
              </div>
              
              {/* Floating particles around the center */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute w-2 h-2 rounded-full bg-emerald-400/60"
                  style={{
                    left: "50%",
                    top: "50%",
                    boxShadow: "0 0 10px rgba(16, 185, 129, 0.8)",
                  }}
                  animate={{
                    x: [0, Math.cos(i * 45 * Math.PI / 180) * 100, 0],
                    y: [0, Math.sin(i * 45 * Math.PI / 180) * 100, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -ml-4"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
