"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const docCategories = [
  {
    id: "getting-started",
    title: "Getting Started",
    description: "Begin your AI transformation journey",
    icon: "🚀",
    docs: [
      { id: "introduction", title: "Introduction", path: "/docs/getting-started/introduction" },
      { id: "getting-started", title: "Getting Started", path: "/docs/getting-started/installation" },
      { id: "methodology", title: "Our Methodology", path: "/docs/getting-started/quick-start" },
    ],
  },
  {
    id: "core-concepts",
    title: "Core Concepts",
    description: "AI implementation fundamentals",
    icon: "💡",
    docs: [
      { id: "ssot", title: "SSOT Architecture", path: "/docs/core-concepts/architecture" },
      { id: "rapid-prototyping", title: "Rapid Prototyping", path: "/docs/core-concepts/rapid-prototyping" },
      { id: "spec-driven", title: "Spec-Driven Development", path: "/docs/core-concepts/spec-driven" },
    ],
  },
  {
    id: "implementation",
    title: "Implementation Guides",
    description: "Step-by-step implementation strategies",
    icon: "🛠️",
    docs: [
      { id: "llm-integration", title: "LLM Integration", path: "/docs/guides/llm-integration" },
      { id: "data-pipelines", title: "Data Pipelines", path: "/docs/guides/data-pipelines" },
      { id: "deployment", title: "Production Deployment", path: "/docs/guides/deployment" },
    ],
  },
  {
    id: "best-practices",
    title: "Best Practices",
    description: "Industry standards and proven patterns",
    icon: "⭐",
    docs: [
      { id: "ai-ethics", title: "AI Ethics & Governance", path: "/docs/best-practices/ethics" },
      { id: "security", title: "Security & Compliance", path: "/docs/best-practices/security" },
      { id: "optimization", title: "Performance Optimization", path: "/docs/best-practices/optimization" },
    ],
  },
];

export default function DocsPage() {
  const { theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = docCategories.map(category => ({
    ...category,
    docs: category.docs.filter(doc =>
      doc.title.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(category => category.docs.length > 0);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className={`pt-24 pb-20 transition-colors duration-500 ${
        theme === "dark" ? "bg-black" : "bg-stone-50"
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 transition-colors duration-500 ${
              theme === "dark" ? "text-white" : "text-stone-900"
            }`}>
              AI Transformation Documentation
            </h1>
            <p className={`text-xl max-w-3xl mx-auto mb-8 transition-colors duration-500 ${
              theme === "dark" ? "text-stone-300" : "text-stone-600"
            }`}>
              Comprehensive guides for implementing AI across your organization
            </p>

            {/* Search */}
            <div className="max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full px-6 py-4 rounded-2xl border-2 focus:outline-none transition-all ${
                  theme === "dark"
                    ? "bg-white/5 border-white/10 focus:border-emerald-500 text-white placeholder:text-stone-500"
                    : "bg-white border-stone-300 focus:border-emerald-500 text-stone-900 placeholder:text-stone-400"
                }`}
              />
            </div>
          </motion.div>

          {/* Documentation Categories */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`rounded-3xl p-8 border transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-white/5 border-white/10 hover:border-emerald-500/50"
                    : "bg-white border-stone-200 hover:border-emerald-400 shadow-lg"
                }`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-4xl">{category.icon}</div>
                  <div>
                    <h2 className={`text-2xl font-bold mb-2 transition-colors duration-500 ${
                      theme === "dark" ? "text-white" : "text-stone-900"
                    }`}>
                      {category.title}
                    </h2>
                    <p className={`transition-colors duration-500 ${
                      theme === "dark" ? "text-stone-400" : "text-stone-600"
                    }`}>
                      {category.description}
                    </p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {category.docs.map((doc) => (
                    <li key={doc.id}>
                      <Link
                        href={doc.path}
                        className={`block px-4 py-3 rounded-xl transition-all duration-300 ${
                          theme === "dark"
                            ? "hover:bg-white/10 text-stone-300 hover:text-white"
                            : "hover:bg-stone-100 text-stone-700 hover:text-stone-900"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-emerald-500">→</span>
                          {doc.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <h3 className={`text-2xl font-bold mb-6 transition-colors duration-500 ${
              theme === "dark" ? "text-white" : "text-stone-900"
            }`}>
              Need Help?
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:consulting@dracaenium.com"
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-emerald-600 text-white hover:bg-emerald-500"
                    : "bg-emerald-700 text-white hover:bg-emerald-600"
                }`}
              >
                Schedule Consultation
              </a>
              <Link
                href="/#contact"
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-white/10 text-white hover:bg-white/20"
                    : "bg-stone-200 text-stone-900 hover:bg-stone-300"
                }`}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
