import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Link from "next/link";
import { Github, ExternalLink, Youtube } from "lucide-react";

const projects = [
  {
    title: "AiVerse",
    description: "An AI-powered platform for building and deploying conversational agents",
    techStack: [
      "NextJs", "Shadcn/ui", "Zustand", "NextAuth", "Prisma", 
      "PostgreSQL", "FastApi", "LangChain", "Stripe", "Docker", "CI-CD", "AWS"
    ],
    links: {
      live: "https://aiverse.souryax.tech",
      github: "https://github.com/debsouryadatta/aiverse",
      youtube: "https://youtube.com/your-aiverse-demo"
    }
  },
  {
    title: "SnapWire",
    description: "A mobile-first social media platform for photographers and visual artists",
    techStack: ["React Native", "Node.js", "Express.js", "MongoDB"],
    links: {
      live: "https://expo.dev/preview/update?message=Image%20upload%20to%20cloudinary%20feature&updateRuntimeVersion=1.0.0&createdAt=2024-05-26T09:02:26.423Z&slug=exp&projectId=5ecb9c0d-6217-4c2b-b9e3-654922adeb67&group=d68465a8-bfeb-463c-8868-630a6ae747ce",
      github: "https://github.com/debsouryadatta/SnapWire",
      youtube: "https://youtube.com/your-snapwire-demo"
    }
  }
];

export default function ProjectsPage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-4 sm:px-6 pt-16 sm:pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Showcasing my journey through code and creativity
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index}>
              <article className="flex flex-col h-full p-4 sm:p-6">
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h2 className="text-xl sm:text-2xl font-bold text-zinc-100 font-display">
                      {project.title}
                    </h2>
                  </div>

                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-400">
                    {project.description}
                  </p>

                  <div className="mt-6">
                    <h3 className="text-sm font-semibold text-zinc-300 mb-3">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-xs text-zinc-300 bg-zinc-800/50 rounded-full whitespace-nowrap"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-8 pt-4 border-t border-zinc-800">
                  <Link
                    href={project.links.live}
                    className="text-zinc-200 hover:text-zinc-50 flex items-center gap-1.5 text-sm"
                    target="_blank"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>{project.title == "SnapWire" ? "Expo Link" : "Live Site"}</span>
                  </Link>
                  <Link
                    href={project.links.github}
                    className="text-zinc-200 hover:text-zinc-50 flex items-center gap-1.5 text-sm"
                    target="_blank"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </Link>
                  {/* <Link
                    href={project.links.youtube}
                    className="text-zinc-200 hover:text-zinc-50 flex items-center gap-1.5 text-sm"
                    target="_blank"
                  >
                    <Youtube className="w-4 h-4" />
                    <span>Demo</span>
                  </Link> */}
                </div>
              </article>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
