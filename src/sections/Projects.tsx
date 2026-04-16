import Image from "next/image";
import cvaldavImage from "@/assets/images/cvaldav.png";
import Card from "@/components/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const techPill =
  "inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-neutral-200";

const frontendStack = ["React", "Next.js", "Tailwind CSS", "TypeScript"];
const backendStack = ["Sanity", "Stripe", "Clerk"];

const showcaseCards = [
  { id: "1", title: "CValdav Store", link: "#" },
  { id: "2", title: "CValdav Store", link: "#" },
  { id: "3", title: "CValdav Store", link: "#" },
];

export const ProjectsSection = () => {
  return (
    <section id="portfolio" className="pb-16">
      <div className="container">
        <div className="mt-10 flex flex-col gap-12 md:mt-16 md:gap-16 lg:mt-20 lg:gap-20">
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {showcaseCards.map((project, projectIndex) => (
                <CarouselItem key={project.id}>
                  <Card className="overflow-hidden p-8 md:p-10 lg:p-12">
                    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
                      <div className="flex flex-col">
                        <h3 className="text-3xl font-bold tracking-tight text-[#8CB4E0] md:text-4xl">
                          {project.title}
                        </h3>
                        <p className="mt-2 text-lg text-neutral-300 md:text-xl">
                          Platforma ecommerce completa
                        </p>

                        <div className="mt-8 md:mt-10">
                          <p className="text-sm font-semibold text-white md:text-base">
                            The Tech Stack:
                          </p>
                          <div className="mt-4 space-y-4">
                            <div>
                              <p className="mb-2 text-xs font-medium uppercase tracking-wide text-neutral-500">
                                FrontEnd
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {frontendStack.map((label) => (
                                  <span key={label} className={techPill}>
                                    {label}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <p className="mb-2 text-xs font-medium uppercase tracking-wide text-neutral-500">
                                BackEnd
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {backendStack.map((label) => (
                                  <span key={label} className={techPill}>
                                    {label}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        <a
                          href={project.link}
                          className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#4a72b2] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#5a82c2] md:mt-10 md:w-auto md:self-start"
                        >
                          Vezi mai multe detalii →
                        </a>
                      </div>

                      <div className="relative flex min-h-[260px] items-center justify-center lg:min-h-[380px]">
                        <Image
                          src={cvaldavImage}
                          alt="Previzualizare CValdav Store — laptop cu magazinul online"
                          className="h-auto w-full max-w-5xl object-contain drop-shadow-2xl lg:max-w-none"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          priority={projectIndex === 0}
                        />
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
