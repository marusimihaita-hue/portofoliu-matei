import Image from "next/image";
import aboutFoto from "@/assets/images/about-foto.jpg";
import { Reveal } from "@/components/Reveal";
import { RiNextjsFill, RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiFirebase, SiSanity, SiTypescript } from "react-icons/si";
import { IconType } from "react-icons";

const chipBase =
    "inline-flex items-center gap-1.5 rounded-lg border border-white/[0.09] bg-white/[0.04] px-3 py-1.5 text-[13px] text-off-white transition hover:border-[rgba(74,144,226,0.4)] hover:bg-brand-dim hover:text-brand-pill";

type StackItem = { label: string; Icon: IconType };

const frontendStack: StackItem[] = [
    { label: "React", Icon: RiReactjsLine },
    { label: "Next.js", Icon: RiNextjsFill },
    { label: "Tailwind", Icon: RiTailwindCssFill },
    { label: "TypeScript", Icon: SiTypescript },
];

const backendStack: StackItem[] = [
    { label: "Sanity", Icon: SiSanity },
    { label: "Firebase", Icon: SiFirebase },
];

function StackChips({ items }: { items: StackItem[] }) {
    return (
        <div className="flex flex-wrap gap-2">
            {items.map(({ label, Icon }) => (
                <span key={label} className={chipBase}>
                    <Icon className="size-4 shrink-0 opacity-80" aria-hidden />
                    {label}
                </span>
            ))}
        </div>
    );
}

export const About = () => {
    return (
        <section
            id="about"
            className="scroll-mt-28 bg-[var(--bg-dark)] px-8 py-24 md:px-8"
            aria-labelledby="about-heading"
        >
            <div className="mx-auto grid max-w-[1200px] items-start gap-16 md:grid-cols-2">
                <Reveal>
                    <div className="relative aspect-[4/4] overflow-hidden rounded-2xl border border-[var(--card-border)] bg-[#111118]">
                        <Image
                            src={aboutFoto}
                            alt="Marusi Matei — fotografie About"
                            fill
                            className="object-cover object-center"
                            sizes="(max-width: 768px) 100vw, 45vw"
                            priority
                        />
                        <div className="pointer-events-none absolute bottom-5 right-5 flex flex-col gap-0.5 rounded-[10px] border border-[var(--card-border)] bg-[rgba(10,10,12,0.85)] px-4 py-3 backdrop-blur-[10px]">
                            <span className="text-[10px] uppercase tracking-[0.20em] text-white/80">
                                Disponibil
                            </span>
                        </div>
                    </div>
                </Reveal>

                <Reveal delayMs={150}>
                    <div className="flex flex-col gap-6">
                        <div>
                            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-brand">
                                Despre mine
                            </p>
                            <h2
                                id="about-heading"
                                className="mt-3 font-display text-[clamp(1.9rem,4vw,2.8rem)] font-bold leading-[1.1] tracking-tight text-white"
                            >
                                Absolvent CS, pasionat de Web Development
                            </h2>
                        </div>

                        <p className="text-[15px] font-light leading-[1.8] text-white/70">
                            I enjoy turning ideas into real, functional
                            applications. I'm pretty detail-oriented, maybe even
                            a little perfectionist, so I like things to feel
                            right, clean, and consistent. I'm also not the type
                            to leave things unfinished. If I work on something,
                            I want it to be done right and feel complete.
                        </p>

                        <div className="space-y-3">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/30">
                                Stack-ul pe care îl prefer
                            </p>
                            <StackChips items={frontendStack} />
                        </div>

                        <div className="space-y-3">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/30">
                                Backend
                            </p>
                            <StackChips items={backendStack} />
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};
