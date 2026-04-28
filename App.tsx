import React, { useEffect, useState } from "react";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { ProjectCaseStudy } from "./components/ProjectCaseStudy";

const navigationItems = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const projectSlug =
    typeof window !== "undefined"
      ? window.location.pathname.match(/^\/projects\/([^/]+)\/?$/)?.[1]
      : undefined;

  useEffect(() => {
    if (projectSlug) return;

    const scrollFromHash = () => {
      const raw = window.location.hash.replace(/^#/, "");
      if (!raw) return;

      const el = raw.startsWith("project-")
        ? document.getElementById(raw)
        : ["projects", "skills", "contact"].includes(raw)
          ? document.getElementById(raw)
          : null;

      if (!el) return;

      window.requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    };

    scrollFromHash();
    window.addEventListener("hashchange", scrollFromHash);
    return () => window.removeEventListener("hashchange", scrollFromHash);
  }, [projectSlug]);

  if (projectSlug) {
    return <ProjectCaseStudy slug={projectSlug} />;
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-brand-canvas font-sans text-brand-ink antialiased selection:bg-brand-accent selection:text-brand-ink">
      <div className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 md:px-6 md:pt-5">
        <nav
          className={`mx-auto max-w-6xl border border-brand-ink/10 bg-white/82 shadow-[0_18px_45px_rgba(23,23,23,0.08)] backdrop-blur-xl transition-all duration-300 ${
            isMenuOpen ? "rounded-[30px]" : "rounded-full"
          }`}
        >
          <div className="flex items-center justify-between px-4 py-3 sm:px-5">
            <a
              href="#"
              className="flex items-center gap-3 text-brand-ink"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-brand-accent text-xs font-semibold uppercase tracking-[0.24em] text-brand-ink">
                DD
              </div>
              <div className="hidden sm:block">
                <p className="font-display text-lg font-bold leading-none">
                  Debsourya Datta
                </p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.24em] text-brand-muted">
                  Full Stack Engineer
                </p>
              </div>
            </a>

            <div className="hidden items-center gap-7 md:flex">
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-mono text-xs uppercase tracking-[0.24em] text-brand-muted transition-colors hover:text-brand-ink"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="mailto:debsouryadatta@gmail.com"
                className="rounded-full bg-brand-ink px-5 py-2 font-mono text-[11px] uppercase tracking-[0.24em] text-brand-canvas transition-colors hover:bg-brand-ink/90"
              >
                Email Me
              </a>
            </div>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-brand-ink transition-colors hover:bg-brand-ink/5 md:hidden"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {isMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>

          {isMenuOpen && (
            <div className="border-t border-brand-ink/10 px-5 pb-5 pt-3 md:hidden">
              <div className="flex flex-col gap-4">
                {navigationItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-mono text-xs uppercase tracking-[0.24em] text-brand-muted transition-colors hover:text-brand-ink"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="mailto:debsouryadatta@gmail.com"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex w-fit rounded-full bg-brand-ink px-4 py-2 font-mono text-[11px] uppercase tracking-[0.24em] text-brand-canvas"
                >
                  Email Me
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>

      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
};

export default App;
