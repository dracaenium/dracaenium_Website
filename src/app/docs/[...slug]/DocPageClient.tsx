"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

type DocPageClientProps = {
  content: string;
  slug: string[];
};

export default function DocPageClient({ content, slug }: DocPageClientProps) {
  const { theme } = useTheme();

  const renderMarkdown = (markdown: string) => {
    if (!markdown) return "";

    let html = markdown.replace(/^---[\s\S]*?---\n/, "");

    html = html.replace(/^### (.*$)/gim, '<h3 class="text-2xl font-bold mt-8 mb-4">$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2 class="text-3xl font-bold mt-10 mb-6">$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1 class="text-4xl font-bold mt-12 mb-8">$1</h1>');
    html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="bg-stone-900 text-stone-100 p-4 rounded-xl overflow-x-auto my-6"><code>$2</code></pre>');
    html = html.replace(/`([^`]+)`/g, '<code class="bg-stone-200 dark:bg-stone-800 px-2 py-1 rounded text-sm">$1</code>');
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-bold">$1</strong>');
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-emerald-500 hover:text-emerald-400 underline">$1</a>');
    html = html.replace(/^\* (.*$)/gim, '<li class="ml-6 mb-2">* $1</li>');
    html = html.replace(/^- (.*$)/gim, '<li class="ml-6 mb-2">* $1</li>');
    html = html.replace(/\n\n/g, '</p><p class="mb-4">');

    return `<p class="mb-4">${html}</p>`;
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className={`pt-24 pb-20 transition-colors duration-500 ${
        theme === "dark" ? "bg-black" : "bg-stone-50"
      }`}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 text-sm">
              <Link
                href="/docs"
                className={`hover:text-emerald-500 transition-colors ${
                  theme === "dark" ? "text-stone-400" : "text-stone-600"
                }`}
              >
                Documentation
              </Link>
              {slug.map((part, index) => (
                <span key={part} className="flex items-center gap-2">
                  <span className={theme === "dark" ? "text-stone-600" : "text-stone-400"}>
                    /
                  </span>
                  <span className={`${
                    index === slug.length - 1
                      ? theme === "dark" ? "text-emerald-400" : "text-emerald-600"
                      : theme === "dark" ? "text-stone-400" : "text-stone-600"
                  }`}>
                    {part.replace(/-/g, " ")}
                  </span>
                </span>
              ))}
            </div>
          </motion.div>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`prose prose-lg max-w-none ${
              theme === "dark"
                ? "prose-invert prose-headings:text-white prose-p:text-stone-300 prose-li:text-stone-300"
                : "prose-headings:text-stone-900 prose-p:text-stone-700 prose-li:text-stone-700"
            }`}
          >
            <div
              className={`rounded-3xl p-8 border ${
                theme === "dark"
                  ? "bg-white/5 border-white/10"
                  : "bg-white border-stone-200 shadow-lg"
              }`}
              dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
            />
          </motion.article>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 flex justify-between items-center"
          >
            <Link
              href="/docs"
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                theme === "dark"
                  ? "bg-white/10 text-white hover:bg-white/20"
                  : "bg-stone-200 text-stone-900 hover:bg-stone-300"
              }`}
            >
              Back to Docs
            </Link>

            <a
              href="mailto:consulting@dracaenium.com"
              className="px-6 py-3 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-500 transition-all"
            >
              Get Help
            </a>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
