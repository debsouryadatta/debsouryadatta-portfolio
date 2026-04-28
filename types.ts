import React from "react";

export interface Project {
  id: number;
  title: string;
  category: string;
  description?: string;
  image: string;
  size: "small" | "medium" | "large";
  color?: string;
  tech?: string[];
  liveUrl?: string;
  githubUrl?: string;
  downloadUrl?: string;
  playStoreUrl?: string;
  aboutUrl?: string;
}

export interface Skill {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient?: string;
  accentColor?: string;
}
