"use client";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Github, Mail, Twitter, Linkedin, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Experience from "../components/about/experience";
import Studies from "../components/about/studies";
import Technical from "../components/about/technical";

const socials = [
	{
		icon: <Github size={20} />,
		href: "https://github.com/debsouryadatta",
		label: "Github",
		handle: "debsouryadatta",
	},
	{
		icon: <Linkedin size={20} />,
		href: "https://www.linkedin.com/in/debsourya-datta-177909225",
		label: "LinkedIn",
		handle: "debsourya-datta-177909225",
	},
	{
		icon: <Twitter size={20} />,
		href: "https://twitter.com/debsourya005",
		label: "Twitter",
		handle: "@debsourya005",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:debsouryadatta@gmail.com",
		label: "Email",
		handle: "debsouryadatta@gmail.com",
	},
];

export default function About() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex flex-col items-center justify-center min-h-screen px-4 mx-auto">
				<div className="container flex flex-col items-center justify-center w-full gap-8">
					{/* Bio Section */}
					<div className="flex flex-col items-center justify-center w-full gap-8 mt-24">
						<div className="relative group">
							<div className="absolute -inset-1 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition duration-500"></div>
							<div className="relative p-1 bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-full">
								<Image
									src="https://res.cloudinary.com/diyxwdtjd/image/upload/v1734124106/Personal/debsouryadatta.png"
									alt="avatar"
									width={140}
									height={140}
									className="rounded-full ring-1 ring-zinc-700/50"
									priority
								/>
							</div>
						</div>
						<div className="flex flex-col items-center gap-5">
							<div className="space-y-1 text-center">
								<h1 className="text-4xl font-bold text-zinc-100 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-zinc-400">
									Debsourya Datta
								</h1>
								{/* <h2 className="text-lg text-zinc-400 font-medium tracking-wide">
									Full Stack Developer
								</h2> */}
								<h2 className="text-lg text-zinc-400 font-medium tracking-wide">
									Chill x Code ☕
								</h2>
							</div>
							<div className="flex items-center gap-1 px-3 py-1 rounded-full bg-zinc-800/30 backdrop-blur-sm">
								<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
								<span className="text-sm text-zinc-400">Available for opportunities</span>
							</div>

							<div className="flex gap-4">
								{socials.map((s, i) => (
									<Link
										key={i}
										href={s.href}
										target="_blank"
										className="p-3 text-zinc-400 hover:text-zinc-100 bg-zinc-800/30 hover:bg-zinc-800/50 rounded-xl transition-all duration-300 backdrop-blur-sm"
										title={s.label}
									>
										{s.icon}
									</Link>
								))}
							</div>

							<div className="flex gap-4">
								<Link
									href="https://drive.google.com/file/d/1rU5k7cn2OVRcjdJvSHqZjHkKBbpYHkid/view"
									download
									target="_blank"
									className="flex items-center gap-2 px-4 py-2 text-sm text-zinc-300 bg-zinc-800/50 hover:bg-zinc-800/70 rounded-xl transition-all duration-300 backdrop-blur-sm group"
									title="Download Resume"
								>
									<Download size={16} className="group-hover:translate-y-0.5 transition-transform duration-300" />
									<span>Resume</span>
								</Link>
							</div>
						</div>
					</div>

					{/* Experience Section */}
                    <Experience />

					{/* Studies Section */}
                    <Studies />

					{/* Skills Section */}
                    <Technical />
				</div>
			</div>
		</div>
	);
}
