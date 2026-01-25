import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import {
  Terminal,
  Database,
  Cpu,
  Code2,
  Cloud,
  Globe,
  Server,
  Smartphone,
  Monitor,
  Brain,
  Box,
  Layers,
  Zap,
  Settings,
} from "lucide-react";

interface FloatingIconProps {
  children: React.ReactNode;
  delay: number;
  x: string | number;
  y: string | number;
  size?: "small" | "medium" | "large";
}

const FloatingIcon: React.FC<FloatingIconProps> = ({
  children,
  delay,
  x,
  y,
  size = "small",
}) => (
  <motion.div
    animate={{
      y: [0, -12, 0],
      opacity: [0.15, 0.35, 0.15],
    }}
    transition={{
      duration: 4 + delay,
      delay: delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className={`absolute text-brand-accent/20 md:text-brand-accent/30 z-0 pointer-events-none ${
      size === "small"
        ? "scale-50 md:scale-75"
        : size === "medium"
          ? "scale-75 md:scale-90"
          : "scale-90 md:scale-100"
    }`}
    style={{ left: x, top: y }}
  >
    {children}
  </motion.div>
);

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-black text-white pt-20 pb-10 md:pt-0 md:pb-0">
      {/* Technical Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20 pointer-events-none" />

      {/* Floating Technical Icons - More distributed across the screen */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left side icons */}
        <FloatingIcon delay={0} x="5%" y="12%">
          <Terminal size={28} />
        </FloatingIcon>
        <FloatingIcon delay={1.2} x="8%" y="35%">
          <Server size={24} />
        </FloatingIcon>
        <FloatingIcon delay={0.5} x="3%" y="55%">
          <Cloud size={30} />
        </FloatingIcon>
        <FloatingIcon delay={2} x="12%" y="75%">
          <Database size={26} />
        </FloatingIcon>
        <FloatingIcon delay={1.5} x="6%" y="88%">
          <Globe size={24} />
        </FloatingIcon>

        {/* Center-left icons (between text and image) */}
        <FloatingIcon delay={0.8} x="35%" y="15%" size="medium">
          <Brain size={32} />
        </FloatingIcon>
        <FloatingIcon delay={1.8} x="42%" y="70%">
          <Layers size={28} />
        </FloatingIcon>
        <FloatingIcon delay={0.3} x="38%" y="85%">
          <Settings size={22} />
        </FloatingIcon>

        {/* Center-right icons */}
        <FloatingIcon delay={1} x="55%" y="20%" size="small">
          <Smartphone size={26} />
        </FloatingIcon>
        <FloatingIcon delay={2.2} x="50%" y="55%">
          <Monitor size={28} />
        </FloatingIcon>

        {/* Right side icons */}
        <FloatingIcon delay={0.7} x="92%" y="25%">
          <Cpu size={30} />
        </FloatingIcon>
        <FloatingIcon delay={1.4} x="88%" y="50%">
          <Box size={26} />
        </FloatingIcon>
        <FloatingIcon delay={0.2} x="95%" y="70%">
          <Zap size={24} />
        </FloatingIcon>
        <FloatingIcon delay={1.9} x="85%" y="85%">
          <Code2 size={28} />
        </FloatingIcon>

        {/* React Logo Simulation - positioned to fill gap */}
        <motion.svg
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[8%] right-[15%] w-20 h-20 md:w-36 md:h-36 lg:w-44 lg:h-44 opacity-10 text-brand-accent"
          viewBox="0 0 100 100"
        >
          <circle cx="50" cy="50" r="5" fill="currentColor" />
          <ellipse
            cx="50"
            cy="50"
            rx="40"
            ry="10"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            transform="rotate(0 50 50)"
          />
          <ellipse
            cx="50"
            cy="50"
            rx="40"
            ry="10"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            transform="rotate(60 50 50)"
          />
          <ellipse
            cx="50"
            cy="50"
            rx="40"
            ry="10"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            transform="rotate(120 50 50)"
          />
        </motion.svg>

        {/* Additional decorative element in the gap area */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/3 w-64 h-64 md:w-96 md:h-96 bg-brand-accent rounded-full blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-6 lg:gap-10">
          {/* Left Content */}
          <div className="w-full md:w-[55%] lg:w-1/2 text-center md:text-left order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-accent text-xs font-mono mb-4 md:mb-6 tracking-wide"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              FULL STACK ENGINEER
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-4 md:mb-6"
            >
              Architecting
              <br />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Scalable Systems
                <svg
                  className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-4 text-brand-accent -z-10 opacity-60"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-sm md:text-base lg:text-lg text-gray-400 max-w-lg mx-auto md:mx-0 mb-5 md:mb-8 font-light leading-relaxed"
            >
              I build <span className="text-white font-medium">websites</span>,{" "}
              <span className="text-white font-medium">
                full-stack web apps
              </span>
              ,{" "}
              <span className="text-white font-medium">
                mobile & desktop apps
              </span>
              , handle{" "}
              <span className="text-white font-medium">
                cloud backends on AWS
              </span>
              , and create{" "}
              <span className="text-white font-medium">
                multi-agentic AI systems
              </span>
              .
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-3 md:gap-4"
            >
              <Button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Projects
              </Button>

              {/* Social Media Icons */}
              <div className="flex items-center gap-2 md:gap-3">
                <a
                  href="https://github.com/debsouryadatta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all"
                  aria-label="GitHub"
                >
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/debsourya005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@souryatalks4201"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all"
                  aria-label="YouTube"
                >
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="mailto:debsouryadatta@gmail.com"
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all"
                  aria-label="Email"
                >
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full md:w-[45%] lg:w-1/2 flex justify-center md:justify-center relative order-1 md:order-2"
          >
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-64 lg:w-80 xl:w-[22rem] md:h-64 lg:h-80 xl:h-[22rem]">
              {/* Decorative elements behind image */}
              <div className="absolute inset-0 bg-brand-accent/20 rounded-full blur-3xl transform translate-x-4 translate-y-4"></div>
              <div className="absolute -inset-3 md:-inset-4 border border-white/10 rounded-full animate-spin-slow dashed-border opacity-30"></div>

              {/* Profile Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 shadow-2xl bg-brand-dark">
                <img
                  src="https://avatars.githubusercontent.com/u/91617309?v=4"
                  alt="Debsourya Datta"
                  className="w-full h-full object-cover transition-all duration-700"
                />
              </div>

              {/* Floating Tech Icon - Top Left */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-1 -left-1 md:-top-2 md:-left-2 bg-brand-dark border border-white/10 p-1.5 md:p-2.5 rounded-lg md:rounded-xl shadow-xl z-20"
              >
                <Code2 className="text-brand-accent w-4 h-4 md:w-5 md:h-5" />
              </motion.div>

              {/* Additional floating icon - Bottom Right */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3.5,
                  delay: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 bg-brand-dark border border-white/10 p-1.5 md:p-2.5 rounded-lg md:rounded-xl shadow-xl z-20"
              >
                <Brain className="text-brand-accent w-4 h-4 md:w-5 md:h-5" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
