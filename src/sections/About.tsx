import Image from "next/image";
import aboutFoto from "@/assets/images/about-foto.jpg";
import { RiNextjsFill, RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiFirebase, SiSanity, SiTypescript } from "react-icons/si";
import { IconType } from "react-icons";
import { FadeInOnView } from "@/components/FadeInOnView";
import { SiPrisma } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaStripe } from "react-icons/fa6";

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
    { label: "Prisma", Icon: SiPrisma },
    { label: "MySQL", Icon: SiMysql },
    { label: "Stripe", Icon: FaStripe },
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
            className="scroll-mt-28 bg-transparent px-8 pb-24 pt-16 md:px-8"
            aria-labelledby="about-heading"
        >
            <div className="mx-auto grid max-w-7xl items-start gap-16 md:grid-cols-2">
                <FadeInOnView>
                    <div className="relative aspect-[4/4] overflow-hidden rounded-2xl border border-[var(--card-border)] bg-[#111118] shadow-none transition-colors duration-300 hover:border-[rgba(74,144,226,0.25)]">
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
                </FadeInOnView>

                <FadeInOnView>
                    <div className="flex flex-col gap-6">
                        <div>
                            <h2
                                id="about-heading"
                                className="mt-3 font-display text-[clamp(1.9rem,4vw,2.8rem)] font-bold leading-[1.1] tracking-wider text-white"
                            >
                                Focused on building modern, scalable web
                                applications
                            </h2>
                        </div>

                        <p className="text-[15px] font-light leading-[1.8] text-white/70">
                            I enjoy turning ideas into real, functional
                            applications. I&apos;m pretty detail-oriented, maybe
                            even a little perfectionist, so I like things to
                            feel right, clean, and consistent. I&apos;m also not
                            the type to leave things unfinished. If I work on
                            something, I want it to be done right and feel
                            complete.
                        </p>

                        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/70">
                            The stack I prefer, modern & fast.
                        </p>

                        <div className="space-y-3">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/30">
                                FrontEnd
                            </p>
                            <StackChips items={frontendStack} />
                        </div>

                        <div className="space-y-3">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/30">
                                BackEnd
                            </p>
                            <StackChips items={backendStack} />
                        </div>
                    </div>
                </FadeInOnView>
            </div>
        </section>
    );
};
