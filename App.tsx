import React, { useState } from "react";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { motion, useScroll, useSpring } from "framer-motion";

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="font-sans antialiased bg-brand-black min-h-screen selection:bg-brand-accent selection:text-brand-black overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-accent origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${isMenuOpen ? "bg-brand-black" : "bg-brand-black/80 backdrop-blur-md border-b border-white/5"}`}
      >
        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
          <a
            href="#"
            className="text-white font-display font-bold text-lg md:text-xl tracking-tight flex items-center gap-1.5 md:gap-2"
          >
            <div className="w-7 h-7 md:w-8 md:h-8 bg-brand-accent rounded flex items-center justify-center text-brand-black font-mono font-bold text-xs md:text-sm">
              DD
            </div>
            <span className="hidden sm:inline">
              Debsourya<span className="text-brand-accent">.</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {["Skills", "Projects"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs lg:text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-widest font-mono hover:text-brand-accent"
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-1.5 md:px-5 md:py-2 rounded border border-white/20 text-white font-mono text-[10px] md:text-xs hover:bg-white hover:text-black transition-colors"
            >
              CONTACT_ME
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-brand-black p-4 md:p-6 border-b border-white/10 shadow-2xl">
            <div className="flex flex-col space-y-4 md:space-y-6">
              {["Skills", "Projects"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-base md:text-lg font-medium text-gray-300 hover:text-brand-accent font-mono"
                >
                  {item}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-brand-accent font-mono text-base md:text-lg"
              >
                CONTACT_ME
              </a>
            </div>
          </div>
        )}
      </nav>

      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
};

export default App;
