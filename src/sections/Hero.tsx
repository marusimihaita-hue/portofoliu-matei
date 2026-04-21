import Image from "next/image";
import avatar from "@/assets/images/avatar.png";
import textHeroBg from "@/assets/images/text-hero-bg.png";
import StarFall from "@/components/StarFall";

const heroSideFadeMask =
    "linear-gradient(90deg, transparent 0%, #000 5%, #000 95%, transparent 100%)";

const maskLayerStyle = {
    maskImage: heroSideFadeMask,
    WebkitMaskImage: heroSideFadeMask,
    maskSize: "100% 100%",
    WebkitMaskSize: "100% 100%",
    maskRepeat: "no-repeat",
    WebkitMaskRepeat: "no-repeat",
} as const;

export const HeroSection = () => {
    return (
        <section
            id="hero"
            className="relative z-0 flex h-[1000px] flex-col overflow-x-clip bg-black  text-white"
        >
            <StarFall>
                <div className="relative flex h-[500px] flex-1 flex-col items-center justify-end bg-[var(--bg-dark)] pt-24">
                    <div className="relative z-10 flex flex-col items-center translate-y-5">
                        <Image
                            src={avatar}
                            alt="Marusi Matei Bruno"
                            width={300}
                            height={300}
                            priority
                            className="size-40 rounded-full z-10 shadow-[0_20px_50px_rgba(255,_255,_255,_0.4)]"
                        />
                    </div>
                </div>
            </StarFall>

            <div className="relative flex shrink-0 flex-col items-center gap-8 overflow-hidden bg-[var(--bg-dark)] px-4 pb-16 pt-10 md:gap-10 md:pb-20 md:pt-12">
                <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-[clamp(16rem, 38dvh, 30rem)] max-w-none bg-top bg-no-repeat"
                    style={{
                        backgroundImage: `url(${textHeroBg.src})`,
                        backgroundSize:
                            "auto clamp(240px, min(40dvh, calc(82vw * 0.48)), 36rem)",
                        ...maskLayerStyle,
                    }}
                    aria-hidden
                />

                <div className="relative z-10 flex max-w-xl flex-col items-center gap-4 text-center">
                    <span className="mb-1 inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand-dim px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-brand">
                        <span
                            className="size-1.5 rounded-full bg-brand shadow-[0_0_6px_var(--blue)]"
                            aria-hidden
                        />
                        Open for hire
                    </span>
                    <h1 className="font-display text-5xl  font-extrabold leading-[1.05] tracking-[-0.02em] text-white">
                        Marusi Matei Bruno
                    </h1>
                    <p className="max-w-[420px] text-[1.1rem] font-light italic text-white/45">
                        I craft digital products for those who expect more than
                        average.
                    </p>
                </div>

                <a
                    href="#projects"
                    className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-white/45"
                >
                    <span className="h-10 w-px bg-gradient-to-b from-brand/60 to-transparent" />
                    scroll
                </a>
            </div>
        </section>
    );
};
