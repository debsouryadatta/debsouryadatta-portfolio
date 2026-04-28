import { Project } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Olloi",
    category: "Backend Architecture",
    description:
      "Multi-tenant social media platform for corporate teams with serverless AWS architecture (Lambda, Aurora, SQS, EventBridge). Features a 15+ sub-agent AI system for content generation and moderation, vector-based personalization, and multilingual TTS via ElevenLabs.",
    image:
      "https://res.cloudinary.com/diyxwdtjd/image/upload/v1769290223/projects/olloi-pic_fy2jly.png",
    size: "large",
    color:
      "linear-gradient(135deg, rgba(63,72,162,0.85) 0%, rgba(23,23,23,0.2) 52%, rgba(215,164,73,0.46) 100%)",
    tech: [
      "Hono.js",
      "AI SDK",
      "LLM Evals",
      "AWS Lambda",
      "Aurora",
      "SQS",
      "EventBridge",
      "EC2",
      "SES",
    ],
    liveUrl: "https://olloi.com",
    aboutUrl: "/projects/olloi",
  },
  {
    id: 2,
    title: "YAP",
    category: "Mobile App",
    description:
      "Multilingual language learning app with AI-powered pronunciation grading, real-time voice tutoring, and on-chain token rewards on Sei blockchain. Features CEFR-based adaptive learning across 5+ languages.",
    image:
      "https://res.cloudinary.com/diyxwdtjd/image/upload/v1769290224/projects/yap-pic_uscwvo.png",
    size: "medium",
    color:
      "linear-gradient(135deg, rgba(6,120,108,0.84) 0%, rgba(23,23,23,0.2) 48%, rgba(215,164,73,0.38) 100%)",
    tech: [
      "React Native",
      "Expo",
      "Azure Speech",
      "ElevenLabs",
      "Ethers.js",
      "Express.js",
      "Postgres",
      "Docker Compose",
      "Kubernetes",
    ],
    liveUrl: "https://www.goyap.ai/",
    playStoreUrl: "https://play.google.com/store/apps/details?id=io.yapapp.mobile",
    aboutUrl: "/projects/yap",
  },
  {
    id: 3,
    title: "VOKK",
    category: "AI Video Platform",
    description:
      "AI video autopilot that turns raw footage into production-ready viral-style clips with AI-generated captions, scene pacing, B-roll, transitions, filters, music, trims, thumbnails, canvas presets, and export settings. Every generated layer stays editable, so creators can customize any segment before export.",
    image:
      "https://res.cloudinary.com/diyxwdtjd/image/upload/v1777090035/projects/9f9ac2ce-4cc8-48e5-ad4b-074b5adc00b3.png",
    size: "medium",
    color:
      "linear-gradient(135deg, rgba(80,77,185,0.84) 0%, rgba(23,23,23,0.18) 48%, rgba(215,164,73,0.32) 100%)",
    tech: [
      "Next.js",
      "TypeScript",
      "Remotion",
      "OpenAI",
      "FFmpeg",
      "Redis",
      "BullMQ Worker",
      "AssemblyAI",
      "Pexels",
    ],
    githubUrl: "https://github.com/debsouryadatta/vokk",
    aboutUrl: "/projects/vokk",
  },
  {
    id: 4,
    title: "MCP Desk",
    category: "Desktop App",
    description:
      "Polished Electron desktop client for chatting with OpenRouter models and attaching local MCP tools from a personal command-center dashboard.",
    image:
      "https://res.cloudinary.com/diyxwdtjd/image/upload/v1769290224/projects/mcpdesk-pic_u00wtp.png",
    size: "medium",
    color:
      "linear-gradient(135deg, rgba(171,90,18,0.84) 0%, rgba(23,23,23,0.2) 50%, rgba(215,164,73,0.38) 100%)",
    tech: [
      "Electron",
      "React",
      "TypeScript",
      "MCP",
      "LangChain",
      "OpenRouter",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/debsouryadatta/mcp-desk",
    downloadUrl: "https://github.com/debsouryadatta/mcp-desk/releases",
    aboutUrl: "/projects/mcp-desk",
  },
];
