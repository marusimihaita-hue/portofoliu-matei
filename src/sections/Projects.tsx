"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import Card from "@/components/Card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import { projects, type Project, type StackItem } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import { FadeInOnView } from "@/components/FadeInOnView";

const pillBase =
    "inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-normal tracking-wide";

function StackRow({ label, items }: { label: string; items: StackItem[] }) {
    return (
        <div>
            <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/30">
                {label}
            </p>
            <div className="flex flex-wrap gap-1.5">
                {items.map(({ label: techLabel, Icon, highlight }) => (
                    <span
                        key={techLabel}
                        className={
                            highlight
                                ? `${pillBase} border-[rgba(74,144,226,0.25)] bg-brand-dim text-brand-pill [&_svg]:text-brand-pill`
                                : `${pillBase} border-white/10 bg-white/[0.06] text-off-white [&_svg]:text-white/50`
                        }
                    >
                        <Icon className="size-3.5 shrink-0" aria-hidden />
                        {techLabel}
                    </span>
                ))}
            </div>
        </div>
    );
}

function ProjectSlide({ project, index }: { project: Project; index: number }) {
    const n = String(index + 1).padStart(2, "0");

    return (
        <Card className="group w-full max-w-none overflow-hidden rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-8 shadow-none transition-colors duration-300 hover:border-[rgba(74,144,226,0.25)] md:p-10">
            <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-14">
                <div className="flex min-w-0 flex-col">
                    <p className="font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
                        Project {n}
                    </p>

                    <h3 className="mt-3 font-display text-[1.9rem] font-bold leading-tight tracking-tight text-white">
                        {project.title}
                    </h3>
                    <p className="mt-4 max-w-xl text-sm font-light leading-relaxed text-white/45 md:text-[15px]">
                        {project.subtitle}
                    </p>

                    <div className="mt-8 space-y-5">
                        <StackRow label="Frontend" items={project.frontend} />
                        <StackRow label="Backend" items={project.backend} />
                    </div>

                    <Link
                        href={`/projects/${project.id}`}
                        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-5 py-2.5 font-display text-[13px] font-semibold text-white transition hover:bg-[#5aa0f0] hover:-translate-y-px md:mt-9 md:w-auto md:self-start"
                    >
                        More details
                        <ArrowRight className="size-3.5" aria-hidden />
                    </Link>
                </div>
                <div className="relative mx-auto aspect-[1/1] w-full max-w-xl overflow-hidden rounded-[10px] border border-white/[0.07] bg-white/[0.02] lg:mx-0 lg:max-w-none">
                    <span
                        className="pointer-events-none absolute -right-1 top-0 select-none font-display text-[clamp(4rem,14vw,10rem)] font-bold leading-none text-blue-300/20"
                        aria-hidden
                    >
                        {n}
                    </span>
                    <div className="relative z-[1] flex h-full min-h-[220px] items-center justify-center p-4 md:min-h-[280px] lg:min-h-[300px]">
                        <Image
                            src={project.image}
                            alt={project.imageAlt}
                            fill
                            className="object-contain object-center p-2 drop-shadow-2xl"
                            sizes="(max-width: 1024px) 100vw, 42vw"
                            priority={index === 0}
                        />
                    </div>
                </div>
            </div>
        </Card>
    );
}

const navBtnClass =
    "!static !top-auto !bottom-auto !left-auto !right-auto !h-[38px] !w-[38px] !translate-x-0 !translate-y-0 rounded-full border-[var(--card-border)] bg-[var(--card-bg)] text-white/45 hover:border-brand hover:bg-transparent hover:text-brand";

export const ProjectsSection = () => {
    const [api, setApi] = useState<CarouselApi | null>(null);
    const [current, setCurrent] = useState(0);
    const count = projects.length;

    const onSelect = useCallback((carousel: CarouselApi | undefined) => {
        if (!carousel) return;
        setCurrent(carousel.selectedScrollSnap());
    }, []);

    useEffect(() => {
        if (!api) return;
        onSelect(api);
        api.on("reInit", onSelect);
        api.on("select", onSelect);
        return () => {
            api.off("select", onSelect);
            api.off("reInit", onSelect);
        };
    }, [api, onSelect]);

    return (
        <section
            id="projects"
            className="scroll-mt-28 bg-transparent px-8 pb-20 pt-12 md:px-8 md:pb-24 md:pt-16"
        >
            <div className="mx-auto w-full max-w-7xl">
                <Carousel
                    opts={{ align: "start", loop: true }}
                    setApi={setApi}
                    className="w-full max-w-full"
                >
                    <div className="flex w-full min-w-0 flex-col gap-8 md:gap-10">
                        <FadeInOnView>
                            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                                <div className="min-w-0 space-y-4">
                                    <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-brand">
                                        Selected Projects
                                    </p>
                                    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between lg:block lg:space-y-4">
                                        <h2 className="font-display text-[clamp(1.9rem,4vw,2.8rem)] font-bold leading-tight tracking-tight text-white">
                                            What I built
                                        </h2>
                                        <div className="flex items-center justify-between gap-4 sm:justify-start lg:hidden">
                                            <span className="text-sm tabular-nums text-white/45">
                                                {current + 1}/{count}
                                            </span>
                                            <div className="flex gap-2">
                                                <CarouselPrevious
                                                    variant="outline"
                                                    size="icon-lg"
                                                    className={navBtnClass}
                                                />
                                                <CarouselNext
                                                    variant="outline"
                                                    size="icon-lg"
                                                    className={navBtnClass}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="hidden shrink-0 gap-2 lg:flex">
                                    <CarouselPrevious
                                        variant="outline"
                                        size="icon-lg"
                                        className={navBtnClass}
                                    />
                                    <CarouselNext
                                        variant="outline"
                                        size="icon-lg"
                                        className={navBtnClass}
                                    />
                                </div>
                            </div>
                        </FadeInOnView>

                        <FadeInOnView>
                            <CarouselContent className="-ml-0 w-full">
                                {projects.map((project, projectIndex) => (
                                    <CarouselItem
                                        key={project.id}
                                        className="pl-0"
                                    >
                                        <ProjectSlide
                                            project={project}
                                            index={projectIndex}
                                        />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </FadeInOnView>
                        <FadeInOnView>
                            <div
                                className="flex justify-center gap-2 pt-2"
                                role="tablist"
                                aria-label="Paginare proiecte"
                            >
                                {projects.map((project, i) => (
                                    <button
                                        key={project.id}
                                        type="button"
                                        role="tab"
                                        aria-selected={current === i}
                                        aria-label={`Salt la proiectul ${i + 1}`}
                                        className={
                                            current === i
                                                ? "h-1.5 w-10 rounded-full bg-brand transition-colors"
                                                : "h-1.5 w-10 rounded-full bg-white/20 transition-colors hover:bg-white/30"
                                        }
                                        onClick={() => api?.scrollTo(i)}
                                    />
                                ))}
                            </div>
                        </FadeInOnView>
                    </div>
                </Carousel>
            </div>
        </section>
    );
};
