import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  ExternalLink,
  Sparkles,
  Layers,
  Download,
} from "lucide-react";
import { Project } from "../types";

// Custom Play Store Icon
const PlayStoreIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
  </svg>
);

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const projects: Project[] = [
  // Professional Projects
  {
    id: 1,
    title: "Olloi",
    category: "Professional · Backend Architecture",
    description:
      "Multi-tenant social media platform for corporate teams with serverless AWS architecture (Lambda, Aurora, SQS, EventBridge). Features a 15+ sub-agent AI system for content generation & moderation, vector-based personalization, and multilingual TTS via ElevenLabs.",
    image:
      "https://res.cloudinary.com/diyxwdtjd/image/upload/v1769290223/projects/olloi-pic_fy2jly.png",
    size: "large",
    color: "from-indigo-600 to-purple-700",
    tech: ["Honojs", "AI SDK", "AWS Lambda", "Aurora", "SQS", "EventBridge"],
    liveUrl: "https://olloi.com",
  },
  {
    id: 2,
    title: "YAP",
    category: "Professional · Mobile App",
    description:
      "Multilingual language learning app with AI-powered pronunciation grading (Azure Speech), real-time voice tutoring (ElevenLabs), and on-chain token rewards on Sei blockchain. Features CEFR-based adaptive learning across 5+ languages.",
    image:
      "https://res.cloudinary.com/diyxwdtjd/image/upload/v1769290224/projects/yap-pic_uscwvo.png",
    size: "medium",
    color: "from-emerald-600 to-teal-700",
    tech: ["React Native", "Expo", "Azure Speech", "ElevenLabs", "Ethers.js"],
    liveUrl: "https://www.goyap.ai/",
    playStoreUrl: "https://play.google.com/store/apps/details?id=io.yapapp.mobile",
  },
  {
    id: 3,
    title: "Mesmer AI",
    category: "Professional · AI Platform",
    description:
      "AI-driven outbound calling platform automating sales outreach at scale. Orchestrates 10,000+ lead workflows with Twilio, Retell AI, and OpenAI. Includes RAG-powered support chatbot with ~85% resolution rate.",
    image:
      "https://res.cloudinary.com/diyxwdtjd/image/upload/v1769290222/projects/mesmer-pic_c8p8qh.png",
    size: "medium",
    color: "from-rose-600 to-pink-700",
    tech: ["Next.js", "FastAPI", "LangChain", "Pinecone", "Twilio"],
    liveUrl: "https://www.linkedin.com/company/mesmer-ai",
  },
  // Personal Projects
  {
    id: 4,
    title: "AIVerse",
    category: "Personal · AI Learning Platform",
    description:
      "AI-powered learning platform with automated course generation via LangChain, real-time AI Voice Mentor (Groq Whisper + Deepgram), Stripe credits monetization, and social features including profiles, follows, and gamified leaderboards.",
    image:
      "https://res.cloudinary.com/diyxwdtjd/image/upload/v1769290224/projects/aiverse-pic_vuprir.png",
    size: "large",
    color: "from-violet-600 to-purple-700",
    tech: ["Next.js", "FastAPI", "LangChain", "Prisma", "Stripe", "AWS"],
    liveUrl: "https://aiverse.souryax.online/",
    githubUrl: "https://github.com/debsouryadatta/AiVerse",
  },
  {
    id: 5,
    title: "Snapcast",
    category: "Personal · Screen Recording",
    description:
      "Screen recording and video sharing platform with WebRTC MediaRecorder for real-time capture, ImageKit CDN delivery, Arcjet security (bot detection, rate limiting), and Google OAuth via Better Auth.",
    image:
      "https://res.cloudinary.com/diyxwdtjd/image/upload/v1769290223/projects/snapcast-pic_l9j7dz.png",
    size: "medium",
    color: "from-blue-600 to-cyan-700",
    tech: ["Next.js 15", "Drizzle ORM", "Neon", "ImageKit", "Arcjet"],
    liveUrl: "https://snapcast-tau.vercel.app/",
    githubUrl: "https://github.com/debsouryadatta/snapcast",
  },
  {
    id: 6,
    title: "MCPDesk",
    category: "Personal · Desktop App",
    description:
      "Cross-platform desktop MCP client for AI agents and tool-enabled LLMs. Features dynamic model selection via OpenRouter, configurable MCP server connections, and multi-step agentic execution (up to 30 reasoning steps).",
    image:
      "https://res.cloudinary.com/diyxwdtjd/image/upload/v1769290224/projects/mcpdesk-pic_u00wtp.png",
    size: "medium",
    color: "from-orange-600 to-amber-700",
    tech: ["Electron", "React", "TypeScript", "LangChain", "OpenRouter"],
    githubUrl: "https://github.com/debsouryadatta/mcp-desk",
    downloadUrl: "https://github.com/debsouryadatta/mcp-desk/releases",
  },
];

// Project Panel Component for Stacking Effect
const ProjectPanel: React.FC<{
  project: Project;
  index: number;
  total: number;
}> = ({ project, index, total }) => {
  return (
    <div className="project-panel w-full min-h-screen flex items-center justify-center px-3 md:px-8 py-12 md:py-20 relative bg-brand-black">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 via-transparent to-gray-900/30" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern
            id={`project-grid-${index}`}
            x="0"
            y="0"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
          </pattern>
          <rect
            width="100%"
            height="100%"
            fill={`url(#project-grid-${index})`}
          />
        </svg>
      </div>

      {/* Accent blur */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Left Side - Project Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              {/* Image with gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-60`}
              />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[200px] sm:h-[260px] md:h-[340px] lg:h-[400px] object-cover opacity-60"
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* View Project Button Overlay */}
              <div className="absolute bottom-3 md:bottom-6 left-3 md:left-6 right-3 md:right-6 flex justify-between items-end">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-brand-accent text-black rounded-full font-mono text-[10px] md:text-sm font-medium hover:bg-white transition-colors cursor-pointer"
                  >
                    <span>View Live</span>
                    <ArrowUpRight className="w-2.5 h-2.5 md:w-4 md:h-4" />
                  </a>
                )}
                {!project.liveUrl && project.downloadUrl && (
                  <a
                    href={project.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-brand-accent text-black rounded-full font-mono text-[10px] md:text-sm font-medium hover:bg-white transition-colors cursor-pointer"
                  >
                    <span>Download</span>
                    <Download className="w-2.5 h-2.5 md:w-4 md:h-4" />
                  </a>
                )}
                {!project.liveUrl && !project.downloadUrl && project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-brand-accent text-black rounded-full font-mono text-[10px] md:text-sm font-medium hover:bg-white transition-colors cursor-pointer"
                  >
                    <span>View Code</span>
                    <Github className="w-2.5 h-2.5 md:w-4 md:h-4" />
                  </a>
                )}
                <div className="flex gap-1.5 md:gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 md:p-2 bg-white/10 backdrop-blur rounded-full hover:bg-white/20 transition-colors cursor-pointer"
                    >
                      <Github className="w-3 h-3 md:w-4 md:h-4 text-white" />
                    </a>
                  )}
                  {project.downloadUrl && (
                    <a
                      href={project.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 md:p-2 bg-white/10 backdrop-blur rounded-full hover:bg-white/20 transition-colors cursor-pointer"
                    >
                      <Download className="w-3 h-3 md:w-4 md:h-4 text-white" />
                    </a>
                  )}
                  {project.playStoreUrl && (
                    <a
                      href={project.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 md:p-2 bg-white/10 backdrop-blur rounded-full hover:bg-white/20 transition-colors cursor-pointer"
                    >
                      <PlayStoreIcon className="w-3 h-3 md:w-4 md:h-4 text-white" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 md:p-2 bg-white/10 backdrop-blur rounded-full hover:bg-white/20 transition-colors cursor-pointer"
                    >
                      <ExternalLink className="w-3 h-3 md:w-4 md:h-4 text-white" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            {/* Project Number & Progress */}
            <div className="flex items-center gap-2 md:gap-4 mb-3 md:mb-6">
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white/20 font-display">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 flex items-center gap-1 md:gap-2">
                {Array.from({ length: total }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-0.5 md:h-1 flex-1 rounded-full transition-colors ${
                      i === index ? "bg-brand-accent" : "bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Category Badge */}
            <div className="inline-flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-1 md:py-1.5 bg-brand-accent/20 border border-brand-accent/40 rounded-full mb-3 md:mb-4">
              <Sparkles className="w-2.5 h-2.5 md:w-3 md:h-3 text-brand-accent" />
              <span className="text-brand-accent text-[10px] md:text-xs font-mono uppercase tracking-wider font-semibold">
                {project.category}
              </span>
            </div>

            {/* Title */}
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-4 leading-tight">
              {project.title}
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed mb-4 md:mb-8 max-w-lg">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mb-4 md:mb-8">
              <span className="text-[9px] md:text-xs text-gray-400 font-mono uppercase tracking-wider mb-1.5 md:mb-3 block">
                Technologies
              </span>
              <div className="flex flex-wrap gap-1 md:gap-2">
                {project.tech?.map((tech) => (
                  <span
                    key={tech}
                    className="px-1.5 py-0.5 md:px-3 md:py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded md:rounded-lg text-[10px] md:text-sm font-mono text-white hover:bg-white/20 hover:border-brand-accent/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - on all panels */}
      <div className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 md:gap-2">
        <span className="text-[8px] md:text-[10px] text-gray-400 font-mono uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-4 h-6 md:w-5 md:h-8 border border-white/30 rounded-full flex items-start justify-center p-0.5 md:p-1"
        >
          <div className="w-0.5 md:w-1 h-1 md:h-1.5 bg-brand-accent rounded-full" />
        </motion.div>
      </div>
    </div>
  );
};

export const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const panels = panelsRef.current;

    // Create ScrollTrigger for each panel - stacking effect
    panels.forEach((panel, index) => {
      const isLast = index === panels.length - 1;
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        // For the last panel, add a short end so it unpins quickly
        end: isLast ? "+=100" : undefined,
        pin: true,
        // Add pinSpacing for the last panel so Footer can appear
        pinSpacing: isLast,
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !panelsRef.current.includes(el)) {
      panelsRef.current[index] = el;
    }
  };

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative bg-brand-black"
    >
      {/* Section Header - Sticky */}
      <div className="sticky top-0 z-50 bg-gradient-to-b from-brand-black via-brand-black/98 to-brand-black/90 py-3 md:py-6 lg:py-8 px-3 md:px-6 border-b border-white/10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-row justify-between items-center md:items-end gap-2 md:gap-4">
            {/* Left - Main Title */}
            <div className="flex items-center gap-2 md:gap-4">
              <div className="p-1.5 md:p-3 bg-brand-accent rounded-lg md:rounded-xl">
                <Layers className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 text-brand-black" />
              </div>
              <div>
                <span className="text-white/50 font-mono text-[8px] md:text-xs uppercase tracking-widest block mb-0 md:mb-1">
                  // Portfolio
                </span>
                <h2 className="font-display text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight">
                  Selected <span className="text-brand-accent">Works</span>
                </h2>
              </div>
            </div>
            {/* Right - Counter */}
            <div className="flex items-center gap-2 md:gap-3">
              <div className="flex items-center gap-1.5 md:gap-2 px-2 py-1 md:px-4 md:py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-white font-mono text-[10px] md:text-sm font-medium">
                  {projects.length} Projects
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Panels - Stack on scroll */}
      {projects.map((project, index) => (
        <div
          key={project.id}
          ref={(el) => addToRefs(el, index)}
          className="will-change-transform"
        >
          <ProjectPanel
            project={project}
            index={index}
            total={projects.length}
          />
        </div>
      ))}
    </section>
  );
};
