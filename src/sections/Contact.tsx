import { Reveal } from "@/components/Reveal";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="scroll-mt-28 bg-[var(--bg-section)] px-8 py-24 md:px-8"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto grid max-w-[960px] gap-6 md:grid-cols-2">
        <Reveal>
          <div className="flex flex-col gap-4 rounded-2xl border border-brand/20 bg-gradient-to-br from-brand/[0.12] to-brand/[0.04] p-10">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-brand">
              Hai să colaborăm
            </p>
            <h2
              id="contact-heading"
              className="font-display text-[1.8rem] font-bold leading-[1.15] tracking-tight text-white"
            >
              Să construim
              <br />
              ceva epic.
            </h2>
            <p className="text-sm font-light text-white/45">
              Deschis pentru oportunități freelance și job full-time.
            </p>
            <div className="mt-2 flex flex-wrap gap-3">
              <a
                href="mailto:marusimihaia@gmail.com"
                className="inline-flex items-center justify-center rounded-lg bg-brand px-5 py-2.5 font-display text-[13px] font-semibold text-white transition hover:-translate-y-px hover:bg-[#5aa0f0]"
              >
                Trimite un email
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={100}>
          <div className="flex h-full flex-col justify-center gap-4 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-8">
            <h3 className="font-display text-base font-semibold text-white">
              Contact direct
            </h3>
            <a
              href="mailto:marusimihaia@gmail.com"
              className="flex items-center gap-2.5 text-sm text-white/60 transition-colors hover:text-white"
            >
              <span
                className="flex size-7 shrink-0 items-center justify-center rounded-md border border-brand/20 bg-brand-dim text-[13px]"
                aria-hidden
              >
                ✉
              </span>
              <span className="break-all">marusimihaia@gmail.com</span>
            </a>
            <div className="flex items-center gap-2.5 text-sm text-white/60">
              <span
                className="flex size-7 shrink-0 items-center justify-center rounded-md border border-brand/20 bg-brand-dim text-[13px]"
                aria-hidden
              >
                📱
              </span>
              <a
                href="tel:+40771170885"
                className="transition-colors hover:text-white"
              >
                0771170885
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
