import React from 'react'
import { Card } from '../card'

const SkillTag = ({ name, color }: { name: string, color: string }) => (
    <div className="group px-4 py-2.5 text-zinc-300 bg-zinc-800/30 rounded-xl hover:bg-zinc-800/50 transform hover:scale-[1.02] transition-all duration-300 cursor-default">
        <div className="flex items-center gap-2.5">
            <div className={`w-2 h-2 rounded-full ${color} group-hover:animate-pulse`} />
            <span className="font-medium tracking-wide">{name}</span>
        </div>
    </div>
)

export default function Technical() {
    const skills = {
        frontend: [
            { name: "React.js", color: "bg-blue-600" },
            { name: "React Native", color: "bg-sky-600" },
            { name: "Next.js", color: "bg-violet-600" },
            { name: "WebExtensions", color: "bg-orange-600" },
            { name: "TypeScript", color: "bg-indigo-600" },
            { name: "JavaScript", color: "bg-amber-600" }
        ],
        backend: [
            { name: "Node.js", color: "bg-emerald-600" },
            { name: "Express.js", color: "bg-teal-600" },
            { name: "FastAPI", color: "bg-red-600" },
            { name: "Prisma", color: "bg-fuchsia-600" },
            { name: "Python", color: "bg-blue-700" }
        ],
        database: [
            { name: "PostgreSQL", color: "bg-blue-600" },
            { name: "MongoDB", color: "bg-green-600" },
            { name: "Firebase", color: "bg-orange-600" }
        ],
        aiml: [
            { name: "LangChain", color: "bg-green-700" },
            { name: "Ollama", color: "bg-purple-600" }
        ],
        blockchain: [
            { name: "Solidity", color: "bg-slate-600" },
            { name: "Hardhat", color: "bg-yellow-600" },
            { name: "Foundry", color: "bg-red-700" }
        ],
        devops: [
            { name: "Linux", color: "bg-slate-600" },
            { name: "Docker", color: "bg-cyan-600" },
            { name: "AWS", color: "bg-yellow-700" },
            { name: "CI/CD", color: "bg-pink-600" },
            { name: "Git/Github", color: "bg-orange-700" }
        ],
        learning: [
            { name: "ElectronJs", color: "bg-slate-600" },
            { name: "WebRTC", color: "bg-blue-600" },
            { name: "Grafana", color: "bg-orange-600" },
            { name: "Kubernetes", color: "bg-blue-700" },
            { name: "Unit Testing", color: "bg-purple-600" }
        ]
    }

    return (
        <div className='mb-10'>
            <Card>
                <div className="p-8 w-[80vw] mx-auto">
                    <h3 className="text-3xl font-bold text-zinc-100 mb-10">Technical Skills</h3>
                    <div className="space-y-10">
                        <div className="space-y-5">
                            <h4 className="text-xl text-zinc-200 font-semibold tracking-wide">Frontend Development</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {skills.frontend.map((skill, i) => (
                                    <SkillTag key={i} {...skill} />
                                ))}
                            </div>
                        </div>

                        <div className="space-y-5">
                            <h4 className="text-xl text-zinc-200 font-semibold tracking-wide">Backend Development</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {skills.backend.map((skill, i) => (
                                    <SkillTag key={i} {...skill} />
                                ))}
                            </div>
                        </div>

                        <div className="space-y-5">
                            <h4 className="text-xl text-zinc-200 font-semibold tracking-wide">Database & Storage</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {skills.database.map((skill, i) => (
                                    <SkillTag key={i} {...skill} />
                                ))}
                            </div>
                        </div>

                        <div className="space-y-5">
                            <h4 className="text-xl text-zinc-200 font-semibold tracking-wide">AI & Machine Learning</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {skills.aiml.map((skill, i) => (
                                    <SkillTag key={i} {...skill} />
                                ))}
                            </div>
                        </div>

                        <div className="space-y-5">
                            <h4 className="text-xl text-zinc-200 font-semibold tracking-wide">Blockchain Development</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {skills.blockchain.map((skill, i) => (
                                    <SkillTag key={i} {...skill} />
                                ))}
                            </div>
                        </div>

                        <div className="space-y-5">
                            <h4 className="text-xl text-zinc-200 font-semibold tracking-wide">DevOps & Tools</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {skills.devops.map((skill, i) => (
                                    <SkillTag key={i} {...skill} />
                                ))}
                            </div>
                        </div>

                        <div className="space-y-5">
                            <h4 className="text-xl text-zinc-200 font-semibold tracking-wide">Currently Learning</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {skills.learning.map((skill, i) => (
                                    <SkillTag key={i} {...skill} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>

    )
}
