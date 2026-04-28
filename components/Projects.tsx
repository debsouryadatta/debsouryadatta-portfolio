import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  FileText,
  Github,
  Layers,
} from "lucide-react";
import { Project } from "../types";
import { projectCaseStudies } from "../data/projectCaseStudies";
import { projects } from "../data/projects";

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

const projectSlugFromTitle = (title: string) =>
  title
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const ProjectPanel: React.FC<{
  project: Project;
  index: number;
  total: number;
}> = ({ project, index, total }) => {
  const panelRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: panelRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [-36, 36]);
  const shellY = useTransform(scrollYProgress, [0, 1], [14, -14]);

  const primaryLink = project.liveUrl || project.downloadUrl || project.githubUrl;
  const primaryLabel = project.liveUrl
    ? "View Live"
    : project.downloadUrl
      ? "Download"
      : "GitHub";
  const hasSecondaryGithubButton = Boolean(
    project.githubUrl && (project.liveUrl || project.downloadUrl),
  );
  const generatedCaseStudySlug = projectSlugFromTitle(project.title);
  const listingSlug =
    project.aboutUrl?.match(/^\/projects\/([^/]+)\/?$/)?.[1] ??
    generatedCaseStudySlug;
  const caseStudyUrl =
    project.aboutUrl ||
    (projectCaseStudies[generatedCaseStudySlug]
      ? `/projects/${generatedCaseStudySlug}`
      : undefined);
  /** Case studies wired in `data/projects.ts`: single CTA, no GitHub / live / store clutter. */
  const aboutOnly = Boolean(project.aboutUrl);

  return (
    <article
      ref={panelRef}
      id={`project-${listingSlug}`}
      className="scroll-mt-28 grid gap-8 border-t border-brand-ink/10 py-10 first:border-t-0 first:pt-0 lg:grid-cols-[minmax(0,1.04fr)_minmax(320px,0.96fr)] lg:items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45 }}
        style={{ y: shellY }}
        className={index % 2 === 1 ? "lg:order-2" : ""}
      >
        <div className="relative overflow-hidden rounded-[30px] border border-brand-ink/10 bg-brand-ink shadow-[0_22px_70px_rgba(23,23,23,0.18)]">
          <div
            className="absolute inset-0 opacity-95"
            style={{ background: project.color }}
          />
          <motion.img
            src={project.image}
            alt={project.title}
            style={{ y: imageY, scale: 1.08 }}
            className="h-[280px] w-full object-cover object-top opacity-72 sm:h-[360px] lg:h-[420px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/80 via-brand-ink/10 to-transparent" />
          <div className="absolute left-4 right-4 top-4 sm:left-6 sm:right-auto sm:top-6">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-black/10 bg-white px-3.5 py-2.5 shadow-[0_18px_40px_rgba(23,23,23,0.18)]">
              <span className="h-2.5 w-2.5 flex-shrink-0 rounded-full bg-brand-accent" />
              <span className="text-[11px] font-semibold tracking-[0.08em] text-brand-ink sm:text-xs">
                {project.category}
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, delay: 0.06 }}
        className={index % 2 === 1 ? "lg:order-1" : ""}
      >
        <div className="flex items-center gap-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-brand-muted">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="flex-1 border-t border-brand-ink/10" />
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-brand-muted">
            {index + 1} / {total}
          </span>
        </div>

        <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-brand-muted">
          {project.category}
        </p>

        <h3 className="mt-4 font-display text-3xl font-bold leading-tight tracking-[-0.04em] text-brand-ink sm:text-4xl">
          {project.title}
        </h3>

        <p className="mt-4 max-w-xl text-base leading-relaxed text-brand-ink/70">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech?.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-brand-ink/10 bg-brand-surface px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-brand-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          {aboutOnly && caseStudyUrl ? (
            <a
              href={caseStudyUrl}
              className="inline-flex items-center gap-2 rounded-full border border-transparent bg-brand-ink px-5 py-3 text-sm font-semibold text-brand-canvas transition-colors duration-200 hover:border-brand-ink hover:bg-transparent hover:text-brand-ink"
            >
              <FileText className="h-4 w-4 shrink-0" />
              About Project
            </a>
          ) : (
            <>
              {primaryLink && (
                <a
                  href={primaryLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-ink px-5 py-3 text-sm font-semibold text-brand-canvas transition-colors hover:bg-brand-ink/90"
                >
                  {primaryLabel}
                  {project.liveUrl ? (
                    <ArrowUpRight className="h-4 w-4" />
                  ) : project.downloadUrl ? (
                    <Download className="h-4 w-4" />
                  ) : (
                    <Github className="h-4 w-4" />
                  )}
                </a>
              )}

              {hasSecondaryGithubButton && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-brand-ink/12 bg-white px-4 py-3 text-sm text-brand-ink transition-colors duration-200 hover:border-brand-ink hover:bg-brand-ink hover:text-brand-canvas"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              )}

              {caseStudyUrl && (
                <a
                  href={caseStudyUrl}
                  className="inline-flex items-center gap-2 rounded-full border border-brand-ink/12 bg-white px-4 py-3 text-sm font-semibold text-brand-ink transition-colors duration-200 hover:border-brand-ink hover:bg-brand-ink hover:text-brand-canvas"
                >
                  <FileText className="h-4 w-4" />
                  About Project
                </a>
              )}

              {project.downloadUrl && (
                <a
                  href={project.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-brand-ink/12 bg-white px-4 py-3 text-sm text-brand-ink transition-colors duration-200 hover:border-brand-ink hover:bg-brand-ink hover:text-brand-canvas"
                >
                  <Download className="h-4 w-4" />
                  Release
                </a>
              )}

              {project.playStoreUrl && (
                <a
                  href={project.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-brand-ink/12 bg-white px-4 py-3 text-sm text-brand-ink transition-colors duration-200 hover:border-brand-ink hover:bg-brand-ink hover:text-brand-canvas"
                >
                  <PlayStoreIcon className="h-4 w-4" />
                  Play Store
                </a>
              )}
            </>
          )}
        </div>
      </motion.div>
    </article>
  );
};

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="scroll-mt-28 relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-brand-ink/10 bg-white/80 px-4 py-2 shadow-[0_12px_30px_rgba(23,23,23,0.04)]">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-brand-accent text-brand-ink">
              <Layers className="h-4 w-4" />
            </div>
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-brand-muted">
              Selected work
            </span>
          </div>

          <h2 className="mt-6 font-display text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-brand-ink sm:text-5xl">
            Selected Projects
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-ink/70 sm:text-lg">
            Product engineering, AI systems, backend architecture, and
            cross-platform apps distilled into focused builds.
          </p>
        </motion.div>

        <div className="mt-12">
          {projects.map((project, index) => (
            <ProjectPanel
              key={project.id}
              project={project}
              index={index}
              total={projects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
