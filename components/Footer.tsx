import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer
      id="contact"
      className="bg-brand-accent text-brand-black py-12 md:py-20 border-t border-brand-black/10 selection:bg-brand-black selection:text-brand-accent"
    >
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-8 text-brand-black">
          Ready to Build?
        </h2>
        <p className="text-brand-black/70 max-w-2xl mx-auto mb-8 md:mb-12 text-sm md:text-base lg:text-lg">
          Currently open for new opportunities in Full Stack Development, AI
          Engineering, and Cloud Architecture.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-4 mb-10 md:mb-16">
          <a href="mailto:debsouryadatta@gmail.com">
            <button className="px-6 py-2.5 md:px-8 md:py-3 bg-brand-black text-brand-accent font-mono text-xs md:text-sm font-medium rounded-full hover:bg-gray-900 transition-colors">
              Send Email
            </button>
          </a>

          {/* Social Media Icons */}
          <div className="flex items-center gap-2 md:gap-3">
            <a
              href="https://github.com/debsouryadatta"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-brand-black/10 border border-brand-black/20 flex items-center justify-center text-brand-black/70 hover:text-brand-black hover:bg-brand-black/20 hover:border-brand-black/40 transition-all"
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
              className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-brand-black/10 border border-brand-black/20 flex items-center justify-center text-brand-black/70 hover:text-brand-black hover:bg-brand-black/20 hover:border-brand-black/40 transition-all"
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
              className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-brand-black/10 border border-brand-black/20 flex items-center justify-center text-brand-black/70 hover:text-brand-black hover:bg-brand-black/20 hover:border-brand-black/40 transition-all"
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
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-6 md:pt-8 border-t border-brand-black/20 text-xs md:text-sm text-brand-black/60">
          <p className="font-mono text-[10px] md:text-sm">
            © 2026 Debsourya Datta. Full Stack Engineer.
          </p>
          <div className="flex space-x-4 md:space-x-6 mt-3 md:mt-0 font-mono text-[10px] md:text-sm">
            <a
              href="https://github.com/debsouryadatta"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-black transition-colors"
            >
              Github
            </a>
            <a
              href="https://twitter.com/debsourya005"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-black transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://www.youtube.com/@souryatalks4201"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-black transition-colors"
            >
              Youtube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
