export interface ProjectDetail {
  label: string;
  value: string;
}

export interface ProjectTextBlock {
  title: string;
  body: string;
}

/** One slide per `![alt](image-url)` line in order. */
export interface ProductImageSlide {
  image: string;
  alt: string;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectCaseStudyContent {
  slug: string;
  title: string;
  category: string;
  summary: string;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  tags: string[];
  overview: {
    heading: string;
    body: string;
    details: ProjectDetail[];
  };
  techStack: ProjectDetail[];
  features: ProjectTextBlock[];
  architecture: {
    heading: string;
    images: ProductImageSlide[];
    notes: string[];
  };
  productImages: ProductImageSlide[];
  ctaLinks: ProjectLink[];
}

const normalizeHeading = (value: string) =>
  value.trim().toLowerCase().replace(/\s+/g, " ");

const cleanBody = (value: string) =>
  value
    .trim()
    .replace(/\n{3,}/g, "\n\n")
    .replace(/^\s+|\s+$/g, "");

const splitHeadingPair = (heading: string) => {
  const [first, ...rest] = heading.split("|").map((part) => part.trim());

  return {
    first,
    second: rest.join(" | ").trim(),
  };
};

const parseIntro = (source: string, fallbackSlug: string) => {
  const firstSectionIndex = source.search(/^##\s+/m);
  const intro =
    firstSectionIndex === -1 ? source : source.slice(0, firstSectionIndex);
  const title = intro.match(/^#\s+(.+)$/m)?.[1]?.trim() ?? fallbackSlug;
  const category = intro.match(/^>\s+(.+)$/m)?.[1]?.trim() ?? "Project";
  const image = intro.match(/!\[[^\]]*]\(([^)]+)\)/)?.[1]?.trim() ?? "";
  const githubUrl =
    intro.match(/^-\s*GitHub:\s*(.+)$/im)?.[1]?.trim() || undefined;
  const liveUrl =
    intro.match(/^-\s*Live:\s*(.+)$/im)?.[1]?.trim() || undefined;
  const tags =
    intro
      .match(/^-\s*Tags:\s*(.+)$/im)?.[1]
      ?.split(",")
      .map((tag) => tag.trim())
      .filter(Boolean) ?? [];
  const summary = cleanBody(
    intro
      .split("\n")
      .filter((line) => {
        const trimmed = line.trim();

        return (
          trimmed &&
          !trimmed.startsWith("#") &&
          !trimmed.startsWith(">") &&
          !trimmed.startsWith("![") &&
          !trimmed.match(/^-\s*(GitHub|Live|Tags):/i)
        );
      })
      .join("\n"),
  );

  return {
    title,
    category,
    summary,
    image,
    githubUrl,
    liveUrl,
    tags,
  };
};

const splitSections = (body: string) => {
  const sections: Record<string, { title: string; content: string }> = {};
  const matches = [...body.matchAll(/^##\s+(.+)$/gm)];

  matches.forEach((match, index) => {
    const { first } = splitHeadingPair(match[1]);
    const title = normalizeHeading(first);
    const start = match.index ?? 0;
    const contentStart = start + match[0].length;
    const nextStart = matches[index + 1]?.index ?? body.length;
    sections[title] = {
      title: first,
      content: body.slice(contentStart, nextStart).trim(),
    };
  });

  return sections;
};

const sectionByName = (
  sections: Record<string, { title: string; content: string }>,
  names: string[],
) => names.map((name) => sections[name]).find(Boolean);

const parseDetailList = (source: string): ProjectDetail[] =>
  source
    .split("\n")
    .map((line) => line.match(/^-\s+([^:]+):\s*(.+)$/))
    .filter((match): match is RegExpMatchArray => Boolean(match))
    .map((match) => ({
      label: match[1].trim(),
      value: match[2].trim(),
    }));

const removeDetailList = (source: string) =>
  cleanBody(
    source
      .split("\n")
      .filter((line) => !line.match(/^-\s+([^:]+):\s*(.+)$/))
      .join("\n"),
  );

const parseThirdLevelBlocks = (source: string) => {
  const matches = [...source.matchAll(/^###\s+(.+)$/gm)];

  return matches.map((match, index) => {
    const start = match.index ?? 0;
    const contentStart = start + match[0].length;
    const nextStart = matches[index + 1]?.index ?? source.length;

    return {
      heading: match[1].trim(),
      body: cleanBody(source.slice(contentStart, nextStart)),
    };
  });
};

const parseFeatures = (source: string): ProjectTextBlock[] =>
  parseThirdLevelBlocks(source).map((block) => ({
    title: block.heading,
    body: block.body,
  }));

const parseProductImageSlides = (source: string): ProductImageSlide[] => {
  const matches = [...source.matchAll(/!\[([^\]]*)]\(([^)]+)\)/g)];
  return matches
    .map((m) => ({
      alt: m[1]?.trim() || "Product screenshot",
      image: m[2]?.trim() ?? "",
    }))
    .filter((s) => Boolean(s.image));
};

const parseArchitecture = (source: string) => {
  const noMermaid = source.replace(/```mermaid\n[\s\S]*?\n```/g, "");
  const images = parseProductImageSlides(noMermaid).map((s) => ({
    ...s,
    alt: s.alt || "Architecture diagram",
  }));
  const stripped = noMermaid.replace(/!\[[^\]]*]\([^)]+\)/g, "").trim();
  const notes = stripped
    .split("\n")
    .map((line) => line.match(/^-\s+(.+)$/)?.[1]?.trim())
    .filter((note): note is string => Boolean(note));

  return { images, notes };
};

const parseCtaLinks = (source: string): ProjectLink[] =>
  source
    .split("\n")
    .map((line) => line.match(/^-\s+([^:]+):\s*(.+)$/))
    .filter((match): match is RegExpMatchArray => Boolean(match))
    .map((match) => ({
      label: match[1].trim(),
      url: match[2].trim(),
    }));

/** Case study pages: GitHub (optional), Live/Download, Play Store (optional), Back — fixed order. */
const buildCaseStudyCtaLinks = (links: ProjectLink[]): ProjectLink[] => {
  const normalize = (l: ProjectLink): ProjectLink => {
    const n = l.label.toLowerCase().trim();
    if (n === "live demo") return { ...l, label: "Live" };
    return l;
  };
  const list = links.map(normalize);
  const isBackLink = (l: ProjectLink) =>
    l.label.toLowerCase().includes("back") ||
    l.url === "/#projects" ||
    l.url.startsWith("/#/");

  const isPlayStore = (l: ProjectLink) => {
    const x = l.label.toLowerCase();
    return x.includes("play") && x.includes("store");
  };

  const github = list.find((l) => l.label.toLowerCase() === "github");
  const playStore = list.find(isPlayStore);
  const primaryMid = list.find((l) => {
    if (l.label.toLowerCase() === "github") return false;
    if (isBackLink(l)) return false;
    if (isPlayStore(l)) return false;
    const x = l.label.toLowerCase();
    return (
      x.includes("download") ||
      x.includes("release") ||
      x.includes("live")
    );
  });
  let back = list.find(isBackLink);
  if (!back) back = { label: "Back to Projects", url: "/#projects" };
  const out: ProjectLink[] = [];
  if (github) out.push(github);
  if (primaryMid) out.push(primaryMid);
  if (playStore) out.push(playStore);
  out.push(back);
  return out;
};

export const parseProjectCaseStudyMarkdown = (
  source: string,
  fallbackSlug: string,
): ProjectCaseStudyContent => {
  const intro = parseIntro(source, fallbackSlug);
  const sections = splitSections(source);
  const overviewSection = sectionByName(sections, [
    "overview",
    "overview/desc",
    "overview / desc",
    "project snapshot",
  ]);
  const techStackSection = sectionByName(sections, ["tech stack"]);
  const featuresSection = sectionByName(sections, ["features", "what it does"]);
  const architectureSection = sectionByName(sections, [
    "architecture",
    "how it works",
  ]);
  const productImagesSection = sectionByName(sections, [
    "product images",
    "screenshots",
    "screenshots / preview",
  ]);
  const ctaSection = sectionByName(sections, ["cta", "cta buttons"]);
  const overviewSource = overviewSection?.content ?? "";
  const architecture = parseArchitecture(architectureSection?.content ?? "");
  const explicitCtaLinks = parseCtaLinks(ctaSection?.content ?? "");
  const introMidLabel = (url: string) =>
    /\/releases(\/|$|\?)/i.test(url) ? "Download" : "Live";

  const rawCtaLinks =
    explicitCtaLinks.length > 0
      ? explicitCtaLinks
      : [
          intro.githubUrl ? { label: "GitHub", url: intro.githubUrl } : null,
          intro.liveUrl
            ? { label: introMidLabel(intro.liveUrl), url: intro.liveUrl }
            : null,
          { label: "Back to Projects", url: "/#projects" },
        ].filter((link): link is ProjectLink => Boolean(link));

  const ctaLinks = buildCaseStudyCtaLinks(rawCtaLinks);

  return {
    slug: fallbackSlug,
    ...intro,
    overview: {
      heading: overviewSection?.title || "Overview",
      body: removeDetailList(overviewSource),
      details: parseDetailList(overviewSource),
    },
    techStack:
      parseDetailList(techStackSection?.content ?? "").length > 0
        ? parseDetailList(techStackSection?.content ?? "")
        : intro.tags.map((tag) => ({ label: tag, value: "" })),
    features: parseFeatures(featuresSection?.content ?? ""),
    architecture: {
      heading: architectureSection?.title || "Architecture",
      images: architecture.images,
      notes: architecture.notes,
    },
    productImages: parseProductImageSlides(
      productImagesSection?.content ?? "",
    ),
    ctaLinks,
  };
};
