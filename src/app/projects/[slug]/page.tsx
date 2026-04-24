import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectById } from "@/lib/data";
import { SectionsBackground } from "@/components/SectionsBackground";
import Image from "next/image";
import { FadeInOnView } from "@/components/FadeInOnView";
import { HeaderProject } from "@/sections/HeaderProject";
import { HeroProjects } from "@/sections/HeroProjects";

type Props = { params: { slug: string } };

export default function ProjectBySlugPage({ params }: Props) {
    const project = getProjectById(params.slug);
    if (!project) notFound();

    const paragraphs = project.description
        .trim()
        .split(/\n\n+/)
        .filter(Boolean);

    return (
        <SectionsBackground className="py-10">
            <HeaderProject />
            <div className="min-h-screen bg-transparent px-8 py-24 text-white ">
                <div className="mx-auto w-full max-w-7xl">
                    <FadeInOnView>
                        <HeroProjects
                            title={project.title}
                            subtitle={project.subtitle}
                            githubUrl={project.githubUrl}
                            liveDemo={project.liveDemo}
                        />
                    </FadeInOnView>

                    <FadeInOnView>
                        <div className="mt-10">
                            <h1 className="font-display text-2xl sm:text-xl font-bold tracking-wide">
                                About the project
                            </h1>
                            <div className="mt-10 w-full space-y-5 text-[15px] font-light leading-[1.8] text-white/55">
                                {paragraphs.map((block, i) => (
                                    <p key={i}>{block}</p>
                                ))}
                            </div>
                        </div>
                    </FadeInOnView>

                    <FadeInOnView>
                        <div className="mt-10">
                            <h1 className="font-display  text-2xl font-bold tracking-wide">
                                Tehnologii utilizate
                            </h1>
                            <div className="flex">
                                <div>
                                    {project.frontend.map((tech) => (
                                        <span key={tech.label}>
                                            <button className="mt-8 mr-5 inline-flex items-center justify-center gap-2 rounded-lg bg-transparent border border-white/10 hover:border-white/20 hover:border-white/50 transition-all duration-300image.png px-5 py-2.5 font-display text-[13px] font-semibold text-white transition  hover:-translate-y-px md:mt-9 md:w-auto md:self-start cursor-default">
                                                {tech.label}
                                            </button>
                                        </span>
                                    ))}
                                    {project.backend.map((tech) => (
                                        <span key={tech.label}>
                                            <button className="mt-8 mr-5 inline-flex items-center justify-center gap-2 rounded-lg bg-transparent border border-white/10 hover:border-white/20 hover:border-white/50 transition-all duration-300image.png px-5 py-2.5 font-display text-[13px] font-semibold text-white transition  hover:-translate-y-px md:mt-9 md:w-auto md:self-start cursor-default">
                                                {tech.label}
                                            </button>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </FadeInOnView>
                </div>
            </div>
        </SectionsBackground>
    );
}
