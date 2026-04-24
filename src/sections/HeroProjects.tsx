import React from "react";

export const HeroProjects = ({
    title,
    subtitle,
    githubUrl,
    liveDemo,
}: {
    title: string;
    subtitle: string;
    githubUrl: string;
    liveDemo: string;
}) => {
    return (
        <div className="w-full max-w-7xl mx-auto ">
            <div>
                <h1 className="mt-2 font-display w-[50%] text-6xl sm:text-4xl font-extrabold tracking-tighter text-white/80">
                    {title}
                </h1>
                <p className="mt-4 text-base sm:text-[0.9rem] font-light leading-relaxed text-white/70">
                    {subtitle}
                </p>
                <div className="flex gap-4">
                    <a href={githubUrl}>
                        <button className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-5 py-2.5 font-display text-[13px] font-semibold text-white transition hover:bg-[#5aa0f0] hover:-translate-y-px md:mt-9 md:w-auto md:self-start">
                            github
                        </button>
                    </a>
                    <a href={liveDemo}>
                        <button className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-transparent border border-white/10 hover:border-white/20 hover:border-white/50 transition-all duration-300image.png px-5 py-2.5 font-display text-[13px] font-semibold text-white transition  hover:-translate-y-px md:mt-9 md:w-auto md:self-start">
                            Live Demo
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};
