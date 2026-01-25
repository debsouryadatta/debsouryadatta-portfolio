import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Server,
  Database,
  Cloud,
  Brain,
  Box,
  Zap,
  Layers,
} from "lucide-react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface Service {
  title: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
  technologies: string[];
  features: string[];
  image: string;
  color: string;
}

const services: Service[] = [
  {
    title: "Languages & Core",
    tagline: "Strong Foundations",
    description:
      "Proficient in multiple programming languages with deep understanding of algorithms, data structures, and software engineering principles.",
    icon: <Code2 className="w-5 h-5 md:w-8 md:h-8" />,
    technologies: ["JavaScript", "TypeScript", "Python", "Solidity", "Rust"],
    features: [
      "Clean Code Architecture",
      "Algorithm Design",
      "Performance Optimization",
      "Code Reviews",
    ],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop",
    color: "from-slate-600 to-gray-700",
  },
  {
    title: "Frontend Development",
    tagline: "Pixel Perfect Interfaces",
    description:
      "Crafting responsive, performant, and visually stunning user interfaces that deliver exceptional user experiences across all devices.",
    icon: <Globe className="w-5 h-5 md:w-8 md:h-8" />,
    technologies: [
      "React",
      "Next.js",
      "React Native",
      "Tailwind CSS",
      "Electron",
    ],
    features: [
      "Responsive Design",
      "Web Extensions",
      "PWA Development",
      "UI/UX Implementation",
    ],
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2564&auto=format&fit=crop",
    color: "from-indigo-600 to-purple-700",
  },
  {
    title: "Backend Development",
    tagline: "Robust & Scalable APIs",
    description:
      "Building high-performance backend systems and RESTful APIs that handle millions of requests with reliability and security.",
    icon: <Server className="w-5 h-5 md:w-8 md:h-8" />,
    technologies: ["Node.js", "Hono.js", "Express", "FastAPI", "GraphQL"],
    features: [
      "REST APIs",
      "WebSocket Services",
      "Microservices",
      "Authentication",
    ],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2574&auto=format&fit=crop",
    color: "from-emerald-600 to-teal-700",
  },
  {
    title: "Database Systems",
    tagline: "Data Architecture",
    description:
      "Designing efficient database schemas and implementing data pipelines for optimal performance and data integrity.",
    icon: <Database className="w-5 h-5 md:w-8 md:h-8" />,
    technologies: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Drizzle"],
    features: [
      "Schema Design",
      "Query Optimization",
      "Data Modeling",
      "Caching Strategies",
    ],
    image:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2621&auto=format&fit=crop",
    color: "from-amber-600 to-orange-700",
  },
  {
    title: "Infrastructure & DevOps",
    tagline: "Cloud Native Solutions",
    description:
      "Deploying and maintaining scalable cloud infrastructure with modern DevOps practices for continuous delivery.",
    icon: <Cloud className="w-5 h-5 md:w-8 md:h-8" />,
    technologies: ["AWS", "Docker", "Kubernetes", "Cloudflare", "Kafka"],
    features: [
      "CI/CD Pipelines",
      "Container Orchestration",
      "Serverless",
      "Monitoring",
    ],
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop",
    color: "from-sky-600 to-blue-700",
  },
  {
    title: "AI & Machine Learning",
    tagline: "Intelligent Systems",
    description:
      "Developing AI-powered applications with cutting-edge LLMs, RAG pipelines, and intelligent automation workflows.",
    icon: <Brain className="w-5 h-5 md:w-8 md:h-8" />,
    technologies: ["LangChain", "OpenAI", "Pinecone", "n8n", "RAG"],
    features: ["AI Agents", "RAG Pipelines", "Vector Databases", "Automation"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop",
    color: "from-rose-600 to-pink-700",
  },
  {
    title: "Blockchain & Web3",
    tagline: "Decentralized Apps",
    description:
      "Building secure smart contracts and decentralized applications across multiple blockchain networks.",
    icon: <Box className="w-5 h-5 md:w-8 md:h-8" />,
    technologies: ["Solidity", "Ethers.js", "Hardhat", "Viem", "Ponder"],
    features: [
      "Smart Contracts",
      "DeFi Protocols",
      "Cross-chain",
      "NFT Systems",
    ],
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2664&auto=format&fit=crop",
    color: "from-violet-600 to-purple-700",
  },
];

// Mobile Service Card Component - Full details for mobile grid
const MobileServiceCard: React.FC<{ service: Service; index: number }> = ({
  service,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group relative rounded-2xl overflow-hidden border border-brand-black/30 shadow-xl"
    >
      {/* Background Gradient Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-90`}
      />

      {/* Background Image */}
      <img
        src={service.image}
        alt={service.title}
        className="absolute inset-0 w-full h-full object-cover opacity-15"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/50" />

      {/* Icon - Absolute positioned top right */}
      <div className="absolute top-4 right-4 z-20">
        <div className="p-2 bg-brand-accent/25 backdrop-blur-sm rounded-xl border border-brand-accent/40">
          <div className="text-brand-accent">{service.icon}</div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-4 flex flex-col">
        {/* Header section - needs padding to avoid icon */}
        <div className="pr-14">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-1.5 px-2 py-1 bg-brand-accent/25 border border-brand-accent/40 rounded-full w-fit mb-3">
            <Zap className="w-2.5 h-2.5 text-brand-accent flex-shrink-0" />
            <span className="text-brand-accent text-[7px] font-mono uppercase tracking-wider font-semibold">
              {service.tagline}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display text-base font-bold text-white mb-2 leading-tight">
            {service.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-[9px] leading-relaxed mb-3">
          {service.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {service.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-white/15 backdrop-blur-sm border border-white/20 rounded-md text-[8px] font-mono text-white font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-3" />

        {/* Features */}
        <div className="grid grid-cols-1 gap-1.5">
          {service.features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-1.5 text-[8px] text-gray-200"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Desktop Service Card Component for Horizontal Scroll
const ServiceCard: React.FC<{ service: Service; index: number }> = ({
  service,
  index,
}) => {
  return (
    <div className="service-card w-[50vw] lg:w-[40vw] flex-shrink-0 p-4">
      <div className="group relative h-[480px] lg:h-[520px] rounded-3xl overflow-hidden border-2 border-brand-black transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
        {/* Background Gradient Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-80`}
        />

        {/* Background Image with Hover Zoom */}
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-30 transition-all duration-700 scale-100 group-hover:scale-110"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        {/* Accent Blur */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-brand-accent/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-[60px] pointer-events-none" />

        {/* Accent Line on Hover */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Icon - Top Right */}
        <div className="absolute top-6 right-6">
          <div className="p-4 bg-brand-accent/20 backdrop-blur-sm rounded-2xl border border-brand-accent/30">
            <div className="text-brand-accent">{service.icon}</div>
          </div>
        </div>

        {/* Content */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-accent/20 border border-brand-accent/30 rounded-full mb-4 w-fit">
            <Zap className="w-3 h-3 text-brand-accent" />
            <span className="text-brand-accent text-xs font-mono uppercase tracking-wider font-medium">
              {service.tagline}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display text-2xl font-bold text-white mb-3 leading-tight">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            {service.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {service.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-xs font-mono text-white/80 hover:bg-white/10 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-2">
            {service.features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-1 text-xs text-gray-400"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0" />
                <span className="truncate">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hover accent line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
};

export const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = React.useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768;
    }
    return false;
  });

  // Track mobile/desktop state
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    
    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(!e.matches);
    };
    
    // Set initial value
    handleChange(mediaQuery);
    
    // Listen for changes
    mediaQuery.addEventListener("change", handleChange);
    
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    // Only run GSAP animation on desktop (md and above)
    if (isMobile) return;

    const wrapper = wrapperRef.current;
    const strip = stripRef.current;

    if (!wrapper || !strip) return;

    // Calculate the horizontal scroll distance
    const getScrollAmount = () => {
      const stripWidth = strip.scrollWidth;
      return -(stripWidth - window.innerWidth);
    };

    // Create the horizontal scroll animation
    const tween = gsap.to(strip, {
      x: getScrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: wrapper,
        start: "top top",
        end: () => `+=${strip.scrollWidth}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });

    // Handle resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === wrapper) {
          trigger.kill();
        }
      });
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="bg-brand-accent text-brand-black relative overflow-hidden selection:bg-brand-black selection:text-brand-accent"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      {/* ==================== MOBILE LAYOUT ==================== */}
      {/* Shown on screens < 768px (md breakpoint) */}
      {isMobile && (
        <div className="py-16 px-4">
          {/* Header */}
          <div className="relative z-10 mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-brand-black rounded-lg">
                <Layers className="w-5 h-5 text-brand-accent" />
              </div>
              <div>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-brand-black/70 font-mono font-bold uppercase tracking-widest text-[10px] block"
                >
                  // Services
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="font-display text-xl font-bold text-brand-black"
                >
                  What I Can Build
                </motion.h2>
              </div>
            </div>
          </div>

          {/* 2-Column Grid */}
          <div className="relative z-10 grid grid-cols-2 gap-4">
            {services.map((service, index) => (
              <MobileServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      )}

      {/* ==================== DESKTOP LAYOUT ==================== */}
      {/* Shown on screens >= 768px (md breakpoint) */}
      {!isMobile && (
        <div
          ref={wrapperRef}
          className="horiz-gallery-wrapper min-h-screen"
        >
        {/* Header - Fixed at top */}
        <div className="absolute top-0 left-0 right-0 z-20 pt-24 lg:pt-28 px-8 lg:px-12">
          <div className="flex flex-row justify-between items-end gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-brand-black rounded-xl">
                <Layers className="w-6 h-6 lg:w-8 lg:h-8 text-brand-accent" />
              </div>
              <div>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-brand-black/70 font-mono font-bold uppercase tracking-widest text-xs lg:text-sm mb-2 block"
                >
                  // Services
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="font-display text-3xl lg:text-4xl font-bold text-brand-black"
                >
                  What I Can <span className="text-brand-black">Build</span>
                </motion.h2>
              </div>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-brand-black/70 max-w-md text-sm lg:text-base font-light"
            >
              Scroll to explore →
            </motion.p>
          </div>
        </div>

        {/* Horizontal Scroll Strip */}
        <div
          ref={stripRef}
          className="horiz-gallery-strip flex items-center min-h-screen pt-48 pb-16"
        >
          {/* Left Padding */}
          <div className="w-12 flex-shrink-0" />

          {/* Service Cards */}
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}

          {/* Right Padding */}
          <div className="w-12 flex-shrink-0" />
        </div>

        {/* Scroll Progress Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
          <div className="w-20 h-1 bg-brand-black/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-brand-black rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </div>
          <span className="text-brand-black/60 font-mono text-xs">
            Scroll →
          </span>
        </div>
      </div>
      )}
    </section>
  );
};
