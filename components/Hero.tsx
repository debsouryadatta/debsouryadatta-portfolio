import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./ui/Button";
import {
  ArrowUpRight,
  Github,
  Mail,
  Youtube,
} from "lucide-react";

export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 42]);

  const socialLinks = [
    {
      href: "https://github.com/debsouryadatta",
      label: "GitHub",
      icon: <Github className="h-4 w-4" />,
    },
    {
      href: "https://twitter.com/debsourya005",
      label: "X",
      icon: (
        <svg
          className="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      href: "https://www.youtube.com/@souryatalks4201",
      label: "YouTube",
      icon: <Youtube className="h-4 w-4" />,
    },
    {
      href: "mailto:debsouryadatta@gmail.com",
      label: "Email",
      icon: <Mail className="h-4 w-4" />,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pb-16 pt-28 sm:pb-20 md:pb-24 md:pt-36"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(215,164,73,0.18),_transparent_34%),radial-gradient(circle_at_82%_18%,_rgba(255,255,255,0.9),_transparent_26%),linear-gradient(180deg,_rgba(255,255,255,0.55)_0%,_rgba(246,241,232,0.2)_100%)]" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40" />
      <div className="absolute right-0 top-16 h-64 w-64 rounded-full bg-brand-accent/15 blur-[120px] sm:h-80 sm:w-80" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-ink/10 bg-white/70 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.24em] text-brand-muted shadow-[0_10px_30px_rgba(23,23,23,0.04)]">
              <span className="h-2 w-2 rounded-full bg-brand-accent" />
              Available for product, AI, and backend builds
            </div>

            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.28em] text-brand-muted">
              Full Stack Engineer
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-[clamp(3.4rem,9vw,6.4rem)] font-bold leading-[0.94] tracking-[-0.04em] text-brand-ink">
              Debsourya Datta
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-ink/72 sm:text-xl">
              I build calm interfaces, AI workflows, and cloud-backed systems
              that scale without feeling overbuilt. The focus is simple:
              reliable architecture, cleaner product decisions, and thoughtful
              execution across web, mobile, and desktop.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="min-w-[180px]"
              >
                View Projects
              </Button>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-ink/12 bg-white/70 px-6 py-3 text-sm font-semibold text-brand-ink transition-colors hover:border-brand-ink/20 hover:bg-white"
              >
                Start a Conversation
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-brand-ink/10 pt-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="inline-flex items-center gap-2 rounded-full border border-brand-ink/10 bg-white/72 px-4 py-2 text-sm text-brand-ink/78 transition-all hover:-translate-y-0.5 hover:border-brand-ink/16 hover:text-brand-ink"
                >
                  {link.icon}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            style={{ y: portraitY }}
            className="relative"
          >
            <div className="relative mx-auto max-w-[440px]">
              <div className="relative overflow-hidden rounded-[34px] border border-brand-ink/10 bg-white p-3 shadow-[0_28px_80px_rgba(23,23,23,0.12)]">
                <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,_rgba(215,164,73,0.22)_0%,_rgba(255,255,255,0)_100%)]" />
                <div className="relative overflow-hidden rounded-[26px] bg-brand-ink/5 ring-1 ring-brand-ink/8">
                  <img
                    src="/profile.png"
                    alt="Debsourya Datta"
                    className="aspect-[4/5] w-full object-cover object-[center_22%]"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
