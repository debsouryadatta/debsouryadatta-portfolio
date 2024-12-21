import React from "react";
import { Card } from "../card";
import Image from "next/image";

const experienceData = [
  {
    title: "AI Full Stack Developer Intern",
    company: "MESMER AI",
    type: "Internship",
    location: "Remote",
    period: "Sept 2024 - Current",
    logo: "https://res.cloudinary.com/diyxwdtjd/image/upload/v1734166441/Personal/mesmer_ai_logo_zlhxju.jpg",
    achievements: [
      "Handling both the Frontend and Backend of their product website for AI calling agent",
      "Also contributed to the support chatbot using RAG pipeline and vector stores"
    ],
    skills: ["React", "FastApi", "Postgres", "Gen AI", "LangChain", "Docker"]
  },
  {
    title: "Full Stack Developer Intern",
    company: "YUPCHA SOFTWARES",
    type: "Internship",
    location: "In Office",
    period: "April 2024 - Aug 2024",
    logo: "https://res.cloudinary.com/diyxwdtjd/image/upload/v1734166441/Personal/yupcha_softwares_logo_lfbbja.jpg",
    achievements: [
      "Developed NextJS-based documentation and blog site, boosting SEO performance by 37%",
      "Enhanced web extension for captcha solver product, implementing robust error handling and modifying Javascript events",
      "Collaborated on backend development with FastApi for company's internal tool"
    ],
    skills: ["NextJs", "WebExtensions", "FastApi", "Postgres", "CI/CD", "AWS"]
  }
];

export default function Experience() {
  return (
    <Card>
      <div className="p-4 sm:p-8 w-full sm:w-[80vw]">
        <h3 className="text-2xl font-bold text-zinc-100 mb-8">
          Work Experience
        </h3>
        <div className="relative space-y-8 sm:space-y-12">
          {/* Timeline line */}
          <div className="hidden w-0.5 h-full bg-zinc-800 absolute left-8 top-3 md:block"></div>

          {/* Experience Items */}
          {experienceData.map((experience, index) => (
            <div key={index} className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6 group">
              <div className="flex sm:flex-col items-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-zinc-800 border border-zinc-600 group-hover:border-zinc-400 transition-colors">
                  <Image
                    src={experience.logo}
                    alt={experience.company}
                    width={24}
                    height={24}
                    className="rounded-sm sm:w-8 sm:h-8"
                  />
                </div>
                {index !== experienceData.length - 1 && (
                  <div className="hidden md:block w-0.5 h-full bg-zinc-800 group-hover:bg-zinc-600"></div>
                )}
              </div>
              <div className="flex-1 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="text-lg sm:text-xl font-semibold text-zinc-100">
                    {experience.title}
                  </h4>
                  <span className="text-sm text-zinc-400 shrink-0">
                    {experience.period}
                  </span>
                </div>
                <p className="text-zinc-400 font-medium text-sm sm:text-base">
                  {experience.company} • {experience.type} • {experience.location}
                </p>
                {/* <ul className="space-y-2 text-zinc-300 text-sm sm:text-base">
                  {experience.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-zinc-400">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul> */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {experience.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs text-zinc-300 bg-zinc-800/50 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
