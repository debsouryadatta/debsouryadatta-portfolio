import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { createPortal } from "react-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Download,
  Github,
  Maximize2,
  X,
} from "lucide-react";
import { getProjectCaseStudy } from "../data/projectCaseStudies";
import {
  ProjectLink,
  type ProductImageSlide,
} from "../utils/projectMarkdown";

const navItems = [
  { id: "overview", label: "Overview" },
  { id: "tech-stack", label: "Stack" },
  { id: "features", label: "Features" },
  { id: "architecture", label: "Architecture" },
  { id: "product-images", label: "Product images" },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const PlayStoreGlyph: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
  </svg>
);

const getCaseStudyCtaIcon = (label: string) => {
  const l = label.toLowerCase();
  if (l === "github") return <Github className="h-4 w-4" />;
  if (l.includes("play") && l.includes("store"))
    return <PlayStoreGlyph className="h-4 w-4 shrink-0" />;
  if (l.includes("download") || l.includes("release"))
    return <Download className="h-4 w-4" />;
  if (l.includes("back")) return <ArrowLeft className="h-4 w-4" />;
  return <ArrowUpRight className="h-4 w-4" />;
};

const SWIPE_PX = 48;

const CarouselSlideMedia: React.FC<{
  item: ProductImageSlide;
  loadingImage: "eager" | "lazy";
}> = ({ item, loadingImage }) => {
  if (item.driveEmbedSrc) {
    return (
      <iframe
        src={item.driveEmbedSrc}
        title={item.alt}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen
        className="h-full w-full border-0 bg-black"
        loading={loadingImage === "eager" ? "eager" : "lazy"}
      />
    );
  }
  return (
    <img
      src={item.image}
      alt={item.alt}
      className="h-full w-full object-cover object-top"
      loading={loadingImage}
      decoding="async"
    />
  );
};

const LightboxSlideMedia: React.FC<{ item: ProductImageSlide }> = ({
  item,
}) => {
  if (item.driveEmbedSrc) {
    return (
      <div className="relative mx-auto aspect-video w-full max-w-full max-h-[min(78vh,860px)] overflow-hidden rounded-lg bg-black">
        <iframe
          src={item.driveEmbedSrc}
          title={item.alt}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    );
  }
  return (
    <img
      src={item.image}
      alt={item.alt}
      className="mx-auto max-h-[min(78vh,860px)] w-auto max-w-full object-contain"
      draggable={false}
    />
  );
};

const slideReactKey = (item: ProductImageSlide, i: number) =>
  `${item.driveEmbedSrc ?? item.image}-${i}`;

const lightboxNavBtnClass =
  "pointer-events-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/35 bg-neutral-900 text-white shadow-[0_6px_22px_rgba(0,0,0,0.55),0_0_0_1px_rgba(0,0,0,0.35)] transition-colors hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent sm:h-11 sm:w-11";

const ImageGalleryLightbox: React.FC<{
  items: ProductImageSlide[];
  index: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
  ariaLabel: string;
}> = ({ items, index, onIndexChange, onClose, ariaLabel }) => {
  const n = items.length;
  const touchX = useRef<number | null>(null);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (n < 2) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        onIndexChange((index - 1 + n) % n);
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        onIndexChange((index + 1) % n);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose, onIndexChange, index, n]);

  const active = items[index];
  if (!active) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-5 p-4 pb-8 sm:p-8 sm:pb-10"
      role="dialog"
      aria-modal
      aria-label={ariaLabel}
    >
      <button
        type="button"
        className="absolute inset-0 cursor-default bg-black/78 backdrop-blur-[2px] transition-opacity"
        aria-label="Close"
        onClick={onClose}
      />
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="pointer-events-auto fixed right-4 top-4 z-[110] flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-neutral-900 text-white shadow-[0_6px_22px_rgba(0,0,0,0.55),0_0_0_1px_rgba(0,0,0,0.35)] transition-colors hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent sm:right-6 sm:top-6 sm:h-11 sm:w-11"
        aria-label="Close expanded image"
      >
        <X className="h-5 w-5" strokeWidth={2} />
      </button>

      <div
        className="relative z-10 flex w-full max-w-[min(100%,1240px)] items-center justify-center gap-2 sm:gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        {n > 1 ? (
          <button
            type="button"
            onClick={() => onIndexChange((index - 1 + n) % n)}
            className={`${lightboxNavBtnClass} hidden sm:flex`}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2} />
          </button>
        ) : null}

        <div
          className="min-w-0 max-h-[min(78vh,860px)] flex-1 overflow-hidden rounded-lg bg-zinc-950/50 shadow-2xl ring-1 ring-white/10"
          onTouchStart={(e) => {
            touchX.current = e.targetTouches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchX.current == null || n < 2) return;
            const x = e.changedTouches[0].clientX;
            const d = x - touchX.current;
            touchX.current = null;
            if (Math.abs(d) < SWIPE_PX) return;
            if (d > 0) onIndexChange((index - 1 + n) % n);
            else onIndexChange((index + 1) % n);
          }}
        >
          <LightboxSlideMedia item={active} />
        </div>

        {n > 1 ? (
          <button
            type="button"
            onClick={() => onIndexChange((index + 1) % n)}
            className={`${lightboxNavBtnClass} hidden sm:flex`}
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={2} />
          </button>
        ) : null}
      </div>

      {n > 1 ? (
        <div className="relative z-10 flex items-center justify-center px-4">
          <p className="rounded-full border border-white/12 bg-neutral-950/92 px-3.5 py-1.5 font-mono text-[11px] font-medium tabular-nums tracking-[0.14em] text-white shadow-[0_4px_16px_rgba(0,0,0,0.35)] backdrop-blur-sm">
            {String(index + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
          </p>
        </div>
      ) : null}

      {n > 1 ? (
        <div className="relative z-10 flex justify-center gap-6 sm:hidden">
          <button
            type="button"
            onClick={() => onIndexChange((index - 1 + n) % n)}
            className={lightboxNavBtnClass}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2} />
          </button>
          <button
            type="button"
            onClick={() => onIndexChange((index + 1) % n)}
            className={lightboxNavBtnClass}
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={2} />
          </button>
        </div>
      ) : null}
    </div>,
    document.body,
  );
};

type CarouselVariant = "architecture" | "product";

const ImageCarouselWithExpand: React.FC<{
  items: ProductImageSlide[];
  variant: CarouselVariant;
  carouselLabel: string;
  lightboxAriaLabel: string;
  expandAriaLabel: string;
}> = ({
  items,
  variant,
  carouselLabel,
  lightboxAriaLabel,
  expandAriaLabel,
}) => {
  const [index, setIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);
  const n = items.length;

  const go = (delta: number) => {
    if (n < 2) return;
    setIndex((i) => (i + delta + n) % n);
  };

  const closeExpanded = () => {
    if (expandedIndex !== null) setIndex(expandedIndex);
    setExpandedIndex(null);
  };

  if (!n) return null;

  const navBtnClass =
    "z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-neutral-900 text-white shadow-[0_6px_22px_rgba(0,0,0,0.55),0_0_0_1px_rgba(0,0,0,0.35)] transition-colors hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent sm:h-11 sm:w-11";

  const outerFrame =
    variant === "architecture"
      ? "overflow-hidden rounded-[1.15rem] border border-brand-ink/10 bg-zinc-950 shadow-[0_20px_55px_rgba(23,23,23,0.08)] sm:rounded-[1.35rem]"
      : "overflow-hidden rounded-[1.15rem] border border-neutral-900/18 bg-neutral-100/40 shadow-[0_26px_64px_rgba(0,0,0,0.32),0_10px_24px_rgba(0,0,0,0.18),0_2px_6px_rgba(0,0,0,0.12)] sm:rounded-[1.35rem]";

  const trackBg =
    variant === "architecture"
      ? "relative aspect-[16/10] w-full max-h-[min(38rem,78vh)] bg-zinc-950"
      : "relative aspect-[16/10] w-full bg-neutral-200/30";

  const gradientClass =
    "pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[28%] bg-gradient-to-t from-black/50 via-black/18 to-transparent";

  return (
    <>
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label={carouselLabel}
        tabIndex={0}
        onKeyDown={(e) => {
          if (n < 2) return;
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            go(-1);
          }
          if (e.key === "ArrowRight") {
            e.preventDefault();
            go(1);
          }
        }}
      >
        <div className={outerFrame}>
          <div
            className={trackBg}
            onTouchStart={(e) => {
              touchX.current = e.targetTouches[0].clientX;
            }}
            onTouchEnd={(e) => {
              if (touchX.current == null || n < 2) return;
              const x = e.changedTouches[0].clientX;
              const d = x - touchX.current;
              touchX.current = null;
              if (Math.abs(d) < SWIPE_PX) return;
              if (d > 0) go(-1);
              else go(1);
            }}
          >
            <div
              className="flex h-full w-full [transition:transform_0.55s_cubic-bezier(0.22,1,0.36,1)]"
              style={{
                width: `${n * 100}%`,
                transform: `translateX(-${(index * 100) / n}%)`,
              }}
            >
              {items.map((item, i) => (
                <div
                  key={slideReactKey(item, i)}
                  className="h-full shrink-0"
                  style={{ width: `${100 / n}%` }}
                  aria-hidden={i !== index}
                >
                  <CarouselSlideMedia
                    item={item}
                    loadingImage={i === 0 ? "eager" : "lazy"}
                  />
                </div>
              ))}
            </div>

            <div className={gradientClass} aria-hidden />

            {n > 1 ? (
              <>
                <button
                  type="button"
                  onClick={() => go(-1)}
                  className={`absolute left-2 top-1/2 ${navBtnClass} sm:left-3`}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" strokeWidth={2} />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  className={`absolute right-2 top-1/2 ${navBtnClass} sm:right-3`}
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" strokeWidth={2} />
                </button>
              </>
            ) : null}

            <div className="absolute bottom-3 right-3 z-20 flex pointer-events-auto sm:bottom-4 sm:right-4">
              <button
                type="button"
                onClick={() => setExpandedIndex(index)}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-brand-ink px-3.5 py-2.5 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-brand-canvas shadow-[0_8px_28px_rgba(0,0,0,0.35)] transition-colors hover:border-white/30 hover:bg-brand-ink/95"
                aria-label={expandAriaLabel}
              >
                <Maximize2 className="h-3.5 w-3.5" strokeWidth={2.25} />
                Expand
              </button>
            </div>
          </div>
        </div>

        {n > 1 ? (
          <div className="mt-4 flex justify-center" aria-live="polite">
            <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-3 rounded-full border border-white/12 bg-neutral-900 px-4 py-2.5 text-white shadow-[0_10px_32px_rgba(0,0,0,0.38)] sm:gap-4 sm:px-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/65">
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(n).padStart(2, "0")}
              </p>
              <div className="flex items-center gap-1.5">
                {items.map((_, i) => (
                  <button
                    key={`dot-${i}`}
                    type="button"
                    onClick={() => setIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === index
                        ? "w-7 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.25)]"
                        : "w-2 bg-white/38 hover:bg-white/58"
                    }`}
                    aria-label={`Show image ${i + 1} of ${n}`}
                    aria-current={i === index ? "true" : undefined}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </div>

      {expandedIndex !== null ? (
        <ImageGalleryLightbox
          items={items}
          index={expandedIndex}
          onIndexChange={setExpandedIndex}
          onClose={closeExpanded}
          ariaLabel={lightboxAriaLabel}
        />
      ) : null}
    </>
  );
};

const Section: React.FC<{
  id: string;
  label: string;
  title: string;
  children: React.ReactNode;
}> = ({ id, label, title, children }) => (
  <motion.section
    id={id}
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.18 }}
    transition={{ duration: 0.42, ease: "easeOut" }}
    className="scroll-mt-28 border-t border-brand-ink/10 py-12 md:py-16"
  >
    <div className="grid gap-7 lg:grid-cols-[240px_minmax(0,1fr)]">
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-brand-muted">
          {label}
        </p>
        <h2 className="mt-3 max-w-xs font-display text-3xl font-semibold leading-tight tracking-[-0.03em] text-brand-ink md:text-4xl">
          {title}
        </h2>
      </div>
      <div>{children}</div>
    </div>
  </motion.section>
);

const splitStackItems = (value: string) =>
  value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

const CtaButton: React.FC<{
  link: ProjectLink;
  /** When set, used instead of `link.url` (e.g. deep-link back to homepage project panel). */
  href?: string;
  primary?: boolean;
  /** Use on dark hero imagery so outline + label stay readable (not dark text on dark bg). */
  onDark?: boolean;
}> = ({ link, href: hrefProp, primary, onDark }) => {
  const href = hrefProp ?? link.url;
  const isInternal = href.startsWith("/") || href.startsWith("#");

  const secondaryOnLight =
    "inline-flex items-center gap-2 rounded-full border border-brand-ink/12 bg-white/72 px-5 py-3 text-sm font-semibold text-brand-ink transition-colors hover:bg-white";
  /** Hero: light outline → solid warm “paper” fill + dark type on hover. */
  const secondaryOnDark =
    "inline-flex items-center gap-2 rounded-full border border-white/55 bg-white/14 px-5 py-3 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-sm transition-all duration-200 ease-out hover:border-brand-canvas hover:bg-brand-canvas hover:text-brand-ink hover:shadow-[0_10px_28px_rgba(0,0,0,0.18)]";
  /** Hero: filled dark → same paper fill + dark type on hover (paired invert with secondary). */
  const primaryOnDark =
    "inline-flex items-center gap-2 rounded-full border border-white/28 bg-brand-ink px-5 py-3 text-sm font-semibold text-brand-canvas shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-200 ease-out hover:border-brand-canvas hover:bg-brand-canvas hover:text-brand-ink hover:shadow-[0_10px_28px_rgba(0,0,0,0.18)]";

  const primaryOnLight =
    "inline-flex items-center gap-2 rounded-full bg-brand-ink px-5 py-3 text-sm font-semibold text-brand-canvas transition-colors hover:bg-brand-ink/90";

  return (
    <a
      href={href}
      target={isInternal ? undefined : "_blank"}
      rel={isInternal ? undefined : "noopener noreferrer"}
      className={
        primary
          ? onDark
            ? primaryOnDark
            : primaryOnLight
          : onDark
            ? secondaryOnDark
            : secondaryOnLight
      }
    >
      {primary && getCaseStudyCtaIcon(link.label)}
      {link.label}
      {!primary && getCaseStudyCtaIcon(link.label)}
    </a>
  );
};

export const ProjectCaseStudy: React.FC<{ slug: string }> = ({ slug }) => {
  const project = getProjectCaseStudy(slug);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 38]);

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-brand-canvas px-4 font-sans text-brand-ink">
        <div className="max-w-xl text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand-muted">
            Project not found
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-0.03em]">
            This project write-up is not available yet.
          </h1>
          <a
            href="/#projects"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-ink px-5 py-3 text-sm font-semibold text-brand-canvas transition-colors hover:bg-brand-ink/90"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </a>
        </div>
      </main>
    );
  }

  const isBackCta = (l: ProjectLink) =>
    l.label.toLowerCase().includes("back") || l.url === "/#projects";

  const homeProjectHref = `/#project-${slug}`;

  /** Filled / high-emphasis pill: releases only — Live stays the same glass style as other CTAs. */
  const isFilledPrimaryCta = (l: ProjectLink) => {
    const x = l.label.toLowerCase();
    return x.includes("download") || x.includes("release");
  };

  const ctaHref = (l: ProjectLink) =>
    isBackCta(l) ? homeProjectHref : l.url;

  return (
    <main className="min-h-screen overflow-x-hidden bg-brand-canvas font-sans text-brand-ink antialiased selection:bg-brand-accent selection:text-brand-ink">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-brand-ink/10 bg-brand-canvas/88 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a
            href={homeProjectHref}
            className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-brand-ink transition-colors hover:bg-brand-ink/5"
          >
            <ArrowLeft className="h-4 w-4" />
            Projects
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-full px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-brand-muted transition-colors hover:bg-white/70 hover:text-brand-ink"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section ref={heroRef} id="project-hero-image" className="pt-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.figure
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="relative min-h-[560px] overflow-hidden rounded-[32px] border border-brand-ink/10 bg-brand-ink shadow-[0_24px_70px_rgba(23,23,23,0.14)]"
          >
            <motion.img
              src={project.image}
              alt={`${project.title} hero image`}
              style={{ y: imageY, scale: 1.05 }}
              className="absolute inset-0 h-full w-full object-cover object-top opacity-78"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(23,23,23,0.18)_0%,_rgba(23,23,23,0.82)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-brand-canvas sm:p-8 md:p-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-brand-accent">
                {project.category}
              </p>
              <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-7xl">
                {project.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-canvas/78 sm:text-lg">
                {project.summary}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                {project.ctaLinks.map((link) => (
                  <CtaButton
                    key={`${link.label}-${link.url}`}
                    link={link}
                    href={ctaHref(link)}
                    primary={isFilledPrimaryCta(link)}
                    onDark
                  />
                ))}
              </div>
            </div>
          </motion.figure>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <Section id="overview" label="01 / Overview" title="Overview">
          <p className="max-w-3xl text-xl leading-relaxed tracking-[-0.015em] text-brand-ink/76 md:text-2xl">
            {project.overview.body}
          </p>
        </Section>

        <Section id="tech-stack" label="02 / Stack" title="Stack">
          {project.techStack.some((item) => item.value) ? (
            <div className="divide-y divide-brand-ink/10 border-y border-brand-ink/10">
              {project.techStack.map((group) => (
                <div
                  key={group.label}
                  className="grid gap-4 py-5 md:grid-cols-[180px_minmax(0,1fr)]"
                >
                  <p className="text-sm font-semibold text-brand-ink">
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {splitStackItems(group.value).map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-brand-ink/10 bg-brand-surface px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-brand-muted"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((item) => (
                <span
                  key={item.label}
                  className="rounded-full border border-brand-ink/10 bg-brand-surface px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-brand-muted"
                >
                  {item.label}
                </span>
              ))}
            </div>
          )}
        </Section>

        <Section id="features" label="03 / Features" title="Features">
          <div className="grid gap-4 md:grid-cols-2">
            {project.features.map((feature, index) => (
              <div
                key={feature.title}
                className="rounded-[24px] border border-brand-ink/10 bg-brand-surface p-5"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-muted">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.03em] text-brand-ink">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-ink/66">
                  {feature.body}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="architecture" label="04 / Architecture" title="Architecture">
          <div className="space-y-6">
            {project.architecture.images.length > 0 ? (
              <ImageCarouselWithExpand
                items={project.architecture.images}
                variant="architecture"
                carouselLabel="Architecture diagrams"
                lightboxAriaLabel="Expanded architecture image"
                expandAriaLabel="Expand architecture image"
              />
            ) : null}
            {project.architecture.notes.length > 0 && (
              <div className="grid gap-3 md:grid-cols-2">
                {project.architecture.notes.map((note, index) => (
                  <div
                    key={note}
                    className="flex gap-3 border-t border-brand-ink/10 pt-4"
                  >
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-accent/22 text-[11px] font-semibold text-brand-ink">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-brand-ink/68">
                      {note}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Section>

        <Section id="product-images" label="05 / Product images" title="Product images">
          <ImageCarouselWithExpand
            items={project.productImages}
            variant="product"
            carouselLabel="Product images"
            lightboxAriaLabel="Expanded product image"
            expandAriaLabel="Expand product image"
          />
        </Section>

        <motion.section
          id="cta-buttons"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.24 }}
          transition={{ duration: 0.42, ease: "easeOut" }}
          className="scroll-mt-28 border-t border-brand-ink/10 pb-14 pt-12 md:pb-20"
        >
          <div className="flex flex-col gap-5 rounded-[28px] bg-brand-ink px-6 py-7 text-brand-canvas sm:px-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand-canvas/50">
                CTA buttons
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
                Explore the project.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {project.ctaLinks.map((link) => {
                const useFilledPill = isFilledPrimaryCta(link);
                const href = ctaHref(link);
                return (
                  <a
                    key={`${link.label}-${link.url}`}
                    href={href}
                    target={
                      href.startsWith("/") || href.startsWith("#")
                        ? undefined
                        : "_blank"
                    }
                    rel={
                      href.startsWith("/") || href.startsWith("#")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className={
                      useFilledPill
                        ? "inline-flex items-center gap-2 rounded-full border border-transparent bg-brand-canvas px-5 py-3 text-sm font-semibold text-brand-ink transition-colors duration-200 hover:border-white hover:bg-transparent hover:text-brand-canvas"
                        : "inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/8 px-5 py-3 text-sm font-semibold text-brand-canvas transition-colors duration-200 hover:border-brand-canvas hover:bg-brand-canvas hover:text-brand-ink"
                    }
                  >
                    {getCaseStudyCtaIcon(link.label)}
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
};
