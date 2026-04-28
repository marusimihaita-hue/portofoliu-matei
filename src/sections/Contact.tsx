import { FadeInOnView } from "@/components/FadeInOnView";

export const Contact = () => {
    return (
        <section
            id="contact"
            className="scroll-mt-28 bg-transparent px-8 py-28 md:px-8"
            aria-labelledby="contact-heading"
        >
            {/*   <div className="mx-auto max-w-[1200px] mb-10">
                <div className="font-display text-[clamp(1.9rem,4vw,2.8rem)] font-bold leading-tight tracking-tight text-white">
                    Contact
                </div>
            </div> */}
            <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
                <FadeInOnView>
                    <div className="flex flex-col gap-4 rounded-2xl border border-brand/20 bg-gradient-to-br from-brand/[0.12] to-brand/[0.04] p-10">
                        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-brand">
                            Let&apos;s collaborate
                        </p>
                        <h2
                            id="contact-heading"
                            className="font-display text-[1.8rem] font-bold leading-[1.15] tracking-tight text-white"
                        >
                            Let&apos;s build
                            <br />
                            something epic.
                        </h2>
                        <p className="text-sm font-light text-white/45">
                            Open to freelance opportunities and full-time jobs.
                            full-time.
                        </p>
                        <div className="mt-2 flex flex-wrap gap-3">
                            <a
                                href="mailto:marusimihaita@gmail.com"
                                className="inline-flex items-center justify-center rounded-lg bg-brand px-5 py-2.5 font-display text-[13px] font-semibold text-white transition hover:-translate-y-px hover:bg-[#5aa0f0]"
                            >
                                Send an email
                            </a>
                        </div>
                    </div>
                </FadeInOnView>

                <FadeInOnView>
                    <div className="flex h-full flex-col justify-center gap-4 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-8">
                        <h3 className="font-display text-3xl font-bold tracking-wide text-white mb-3">
                            Contact Me.
                        </h3>
                        <button className="flex items-center gap-2.5 text-sm text-white/60 transition-colors hover:text-white cursor-default">
                            <span
                                className="flex size-7 shrink-0 items-center justify-center rounded-md border border-brand/20 bg-brand-dim text-[13px]"
                                aria-hidden
                            >
                                ✉
                            </span>
                            <span className="break-all">
                                marusimihaita@gmail.com
                            </span>
                        </button>
                        <div className="flex items-center gap-2.5 text-sm text-white/60">
                            <span
                                className="flex size-7 shrink-0 items-center justify-center rounded-md border border-brand/20 bg-brand-dim text-[13px]"
                                aria-hidden
                            >
                                📱
                            </span>
                            <button className="transition-colors hover:text-white cursor-default">
                                0771170885
                            </button>
                        </div>
                    </div>
                </FadeInOnView>
            </div>
        </section>
    );
};
