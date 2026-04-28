import {
  ProjectCaseStudyContent,
  parseProjectCaseStudyMarkdown,
} from "../utils/projectMarkdown";

const projectMarkdownFiles = import.meta.glob("../content/projects/*.md", {
  eager: true,
  import: "default",
  query: "?raw",
}) as Record<string, string>;

const getSlugFromPath = (path: string) =>
  path.match(/\/([^/]+)\.md$/)?.[1] ?? path;

export const projectCaseStudies = Object.entries(projectMarkdownFiles).reduce<
  Record<string, ProjectCaseStudyContent>
>((projects, [path, markdown]) => {
  const slug = getSlugFromPath(path);

  if (slug.startsWith("_")) {
    return projects;
  }

  const project = parseProjectCaseStudyMarkdown(markdown, slug);
  projects[project.slug] = project;
  return projects;
}, {});

export const getProjectCaseStudy = (slug: string) => projectCaseStudies[slug];
