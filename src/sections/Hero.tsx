import Image from "next/image";
import avatar from "@/assets/images/avatar.png";
import heroBg from "@/assets/images/hero-bg.jpg";
import textHeroBg from "@/assets/images/text-hero-bg.png";

export const HeroSection = () => {
  return (
    <section className="relative z-0 overflow-x-clip bg-black text-white">
      <div
        className="relative flex min-h-[60vh] flex-col items-center justify-end bg-black pt-24"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.50), rgba(0,0,0,0.50)), url(${heroBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
        }}
      >
        <div className="relative flex flex-col items-center translate-y-5">
          <Image
            src={avatar}
            alt="Marusi Matei Bruno"
            width={200}
            height={200}
            priority
            className="size-40 rounded-full"
          />
          <div className="pointer-events-none absolute bottom-1 left-1/2  text-white/85"></div>
        </div>
      </div>

      <div
        className="relative flex min-h-[52vh] flex-col items-center justify-between bg-black px-4 pb-10 pt-12 md:min-h-[40vh] md:pt-16"
        style={{
          backgroundImage: `url(${textHeroBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-56"
          aria-hidden
        />

        <div className="relative z-10 flex max-w-xl flex-col items-center gap-3 text-center">
          <h1 className="text-4xl font-bold tracking-wider text-warm-muted  ">
            Marusi Matei Bruno
          </h1>
          <p className="text-2xl text-warm-muted  tracking-wide">
            Junior Full-Stack Developer.
          </p>
          <p className=" text-sm leading-relaxed text-warm-muted ">
            I craft digital products for those who expect more than average.
          </p>
        </div>

        <a
          href="#portfolio"
          className="relative z-10 mt-10 flex flex-col items-center gap-1 font-mono text-xs text-white/70 transition hover:text-white md:text-sm"
        >
          <span>view my portfolio</span>
        </a>
      </div>
    </section>
  );
};
