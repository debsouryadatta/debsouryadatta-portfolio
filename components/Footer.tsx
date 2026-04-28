import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer
      id="contact"
      className="bg-brand-ink text-brand-canvas selection:bg-brand-accent selection:text-brand-ink"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.06fr_0.94fr] lg:items-end">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-brand-canvas/50">
              Contact
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Ready to build something clean, useful, and scalable?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-canvas/72 sm:text-lg">
              Currently open to full-stack product work, AI systems, and cloud
              architecture projects where thoughtful execution matters as much as
              the underlying tech.
            </p>
          </div>

          <div className="lg:justify-self-end">
            <a
              href="mailto:debsouryadatta@gmail.com"
              className="inline-flex items-center gap-3 rounded-full bg-brand-canvas px-6 py-3 text-sm font-semibold text-brand-ink transition-colors hover:bg-white"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-brand-muted">
                Email
              </span>
              debsouryadatta@gmail.com
            </a>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/debsouryadatta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/5 text-brand-canvas/72 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-brand-canvas"
                aria-label="GitHub"
              >
                <svg
                  className="h-5 w-5"
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
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/5 text-brand-canvas/72 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-brand-canvas"
                aria-label="Twitter"
              >
                <svg
                  className="h-5 w-5"
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
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/5 text-brand-canvas/72 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-brand-canvas"
                aria-label="YouTube"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-brand-canvas/55 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em]">
            © 2026 Debsourya Datta
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-brand-canvas/60">
            <a
              href="https://github.com/debsouryadatta"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-brand-canvas"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/debsourya005"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-brand-canvas"
            >
              Twitter
            </a>
            <a
              href="https://www.youtube.com/@souryatalks4201"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-brand-canvas"
            >
              YouTube
            </a>
            <a
              href="mailto:debsouryadatta@gmail.com"
              className="transition-colors hover:text-brand-canvas"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
