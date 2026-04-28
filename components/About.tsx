import React from 'react';
import { motion } from 'framer-motion';
import { Server, Workflow, Box } from 'lucide-react';

const FeatureCard = ({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="flex flex-col items-start text-left p-6 md:p-8 border border-gray-100 bg-white rounded-3xl hover:border-brand-accent/50 transition-colors duration-300 shadow-sm"
  >
    <div className="mb-6 p-4 rounded-xl bg-gray-50 text-brand-black">
      {icon}
    </div>
    <h3 className="font-display text-xl md:text-2xl font-bold mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed font-light text-sm md:text-base">{description}</p>
  </motion.div>
);

export const About: React.FC = () => {
  return (
    <section id="about" className="bg-white text-black py-20 md:py-32 rounded-t-[40px] -mt-10 relative z-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-16 md:mb-20">
          <div className="md:w-1/3">
             <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-sm font-mono font-bold uppercase tracking-widest text-brand-accent mb-3 block"
            >
              // Engineering Approach
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl md:text-6xl font-bold mb-4 md:mb-6"
            >
              System <br />Architecture
            </motion.h2>
          </div>
          
          <div className="md:w-2/3 md:pt-10">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
            >
              I don't just write code; I engineer solutions. With a background in <span className="font-semibold">Electrical Engineering</span> and extensive full-stack experience, I build systems that are scalable, secure, and efficient. From orchestrating complex <span className="font-semibold">AI Agents</span> to managing <span className="font-semibold">AWS infrastructure</span> handling 10k+ daily requests.
            </motion.p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          <FeatureCard 
            icon={<Server size={32} strokeWidth={1.5} />}
            title="Backend Infrastructure"
            description="Designing multi-tenant architectures using Honojs, NodeJS, and Python. Experienced with Docker, Kubernetes, and AWS services like Lambda, SQS, and EventBridge."
            delay={0.2}
          />
          <FeatureCard 
            icon={<Workflow size={32} strokeWidth={1.5} />}
            title="AI Systems & RAG"
            description="Building complex multi-agent AI systems with LangChain and n8n. Implementing vector embeddings, RAG pipelines, and text-to-speech workflows for real-time interactions."
            delay={0.3}
          />
          <FeatureCard 
            icon={<Box size={32} strokeWidth={1.5} />}
            title="Full Stack & Web3"
            description="Creating responsive web apps with Next.js and React. Experienced in Blockchain development (Solidity, Hardhat) and cross-chain platforms."
            delay={0.4}
          />
        </div>

        {/* Highlight Section */}
        <div className="mt-20 md:mt-32 bg-brand-black text-white rounded-[2rem] p-8 md:p-20 overflow-hidden relative">
             {/* Tech grid overlay */}
             <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
             
             <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none hidden md:block">
                <svg width="300" height="300" viewBox="0 0 200 200" fill="none">
                  <path d="M20 20 L180 20 L180 180 L20 180 Z" stroke="white" strokeWidth="2" strokeDasharray="10 10"/>
                  <path d="M40 40 L160 160" stroke="white" strokeWidth="2"/>
                  <path d="M160 40 L40 160" stroke="white" strokeWidth="2"/>
                </svg>
             </div>
             
             <div className="max-w-3xl relative z-10">
                <div className="font-mono text-brand-accent mb-4 text-xs md:text-sm">&gt; Performance_Metrics.log</div>
                <h3 className="font-display text-3xl md:text-5xl font-bold mb-8">
                  Optimized for<br/>Scale & Speed
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                   <div className="border-l border-brand-accent/30 pl-4 md:border-l-0 md:pl-0">
                      <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">10k+</div>
                      <div className="text-gray-400 font-mono text-xs md:text-sm">Daily Requests Processed</div>
                   </div>
                   <div className="border-l border-brand-accent/30 pl-4 md:border-l-0 md:pl-0">
                      <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">85%</div>
                      <div className="text-gray-400 font-mono text-xs md:text-sm">Query Resolution Rate (AI)</div>
                   </div>
                   <div className="border-l border-brand-accent/30 pl-4 md:border-l-0 md:pl-0">
                      <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">37%</div>
                      <div className="text-gray-400 font-mono text-xs md:text-sm">SEO Performance Boost</div>
                   </div>
                </div>
             </div>
        </div>
      </div>
    </section>
  );
};
