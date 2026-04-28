import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Cloud,
  Coins,
  Database,
  Globe,
  Layers,
  Server,
  Workflow,
} from "lucide-react";

interface SkillGroup {
  title: string;
  icon: React.ReactNode;
  items: string[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    icon: <Code2 className="h-5 w-5 md:h-6 md:w-6" />,
    items: ["JavaScript", "TypeScript", "Python", "Solidity"],
  },
  {
    title: "Frontend",
    icon: <Globe className="h-5 w-5 md:h-6 md:w-6" />,
    items: [
      "React",
      "React Native",
      "Next JS",
      "Web Extensions",
      "Electron",
    ],
  },
  {
    title: "Backend",
    icon: <Server className="h-5 w-5 md:h-6 md:w-6" />,
    items: [
      "GraphQL",
      "NodeJS",
      "Express.js",
      "Hono",
      "BullMQ",
      "Hasura",
      "Turborepo",
      "FastAPI",
      "Flask",
    ],
  },
  {
    title: "Databases",
    icon: <Database className="h-5 w-5 md:h-6 md:w-6" />,
    items: ["MongoDB", "Supabase", "Convex", "Postgres"],
  },
  {
    title: "Infrastructure",
    icon: <Cloud className="h-5 w-5 md:h-6 md:w-6" />,
    items: [
      "Docker/Docker-Compose",
      "AWS - RDS/Lambda/SQS/S3/API Gateway/EC2/ECS",
      "Cloudflare Workers",
      "Kubernetes",
      "Terraform",
      "Redis",
      "Kafka",
    ],
  },
  {
    title: "AI",
    icon: <Workflow className="h-5 w-5 md:h-6 md:w-6" />,
    items: [
      "n8n/ai sdk",
      "RAG/GraphRAG",
      "LangChain/Langgraph",
      "MCP/Skills",
      "Agent Harness",
      "Sandboxing Agents",
      "LLM Observation & Evals",
      "OpenClaw/Hermes",
    ],
  },
  {
    title: "Blockchain",
    icon: <Coins className="h-5 w-5 md:h-6 md:w-6" />,
    items: ["Solidity", "Hardhat", "Ethers", "Viem", "Ponder"],
  },
];

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-white/55 py-20 text-brand-ink md:py-28"
    >
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.16] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,_rgba(255,255,255,0.75)_0%,_rgba(255,255,255,0)_100%)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(260px,0.42fr)_minmax(0,1fr)]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="lg:sticky lg:top-28 lg:h-fit"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-brand-ink/10 bg-white/80 px-4 py-2 shadow-[0_12px_30px_rgba(23,23,23,0.04)]">
              <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-brand-accent text-brand-ink">
                <Layers className="h-4 w-4" />
              </div>
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-brand-muted">
                Capabilities
              </span>
            </div>

            <h2 className="mt-6 max-w-sm font-display text-4xl font-bold leading-[1.02] tracking-[-0.04em] sm:text-5xl">
              Simple product thinking.
              <br />
              Deep technical range.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-brand-ink/70">
              A current view of the languages, frameworks, infrastructure, AI
              tooling, and blockchain stack I work with.
            </p>

            <div className="mt-8 space-y-4 text-sm text-brand-ink/68">
              <div className="flex items-start gap-3 border-t border-brand-ink/10 pt-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-brand-muted">
                  01
                </span>
                <p>Frontend, backend, infra, AI, and blockchain in one flow.</p>
              </div>
              <div className="flex items-start gap-3 border-t border-brand-ink/10 pt-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-brand-muted">
                  02
                </span>
                <p>Built for products that move from prototype to scale.</p>
              </div>
              <div className="flex items-start gap-3 border-t border-brand-ink/10 pt-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-brand-muted">
                  03
                </span>
                <p>Tooling chosen for real-world shipping, not just demos.</p>
              </div>
            </div>
          </motion.div>

          <div>
            {skillGroups.map((group, index) => {
              const isBlockchain = group.title === "Blockchain";
              return (
                <motion.article
                  key={group.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  className="border-t border-brand-ink/10 py-8 first:border-t-0 first:pt-0 last:pb-2"
                >
                  <div className="flex items-center justify-between gap-3 sm:gap-4">
                    <h3 className="min-w-0 flex-1 font-display text-2xl font-bold leading-tight tracking-[-0.03em] text-brand-ink sm:text-[1.85rem]">
                      {group.title}
                    </h3>
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-brand-ink sm:h-12 sm:w-12 ${
                        isBlockchain
                          ? "border border-brand-accent/35 bg-gradient-to-br from-brand-accent/25 to-brand-accent/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]"
                          : "bg-brand-accent/18"
                      }`}
                    >
                      {group.icon}
                    </div>
                  </div>

                  <div
                    className={
                      isBlockchain
                        ? "mt-5 rounded-2xl border border-brand-ink/[0.07] bg-gradient-to-b from-white/90 to-brand-canvas/35 p-4 shadow-[0_12px_40px_rgba(23,23,23,0.04)] sm:p-5"
                        : "mt-5"
                    }
                  >
                    <div className="flex flex-wrap gap-2.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className={`inline-flex max-w-full items-center rounded-full border px-3 py-1.5 font-mono text-[10.5px] uppercase leading-snug tracking-[0.1em] text-brand-muted sm:text-[11px] ${
                            isBlockchain
                              ? "border-brand-ink/[0.09] bg-white/95 text-brand-ink/80 shadow-sm"
                              : "border-brand-ink/10 bg-white"
                          } ${
                            item.length > 28 ? "w-full sm:w-auto" : ""
                          }`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
