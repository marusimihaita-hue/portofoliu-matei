import Image from "next/image";
import avatar from "@/assets/images/avatar.png";
import { Briefcase, User, Mail } from "lucide-react";

export const Header = () => {
    return (
        <header className="fixed inset-x-0 top-0 z-50 h-18 border-b border-white/[0.06] bg-[rgba(10,10,12,0.72)] backdrop-blur-[16px] py-5">
            <div className="w-full px-8">
                <div className="mx-auto flex h-full w-full max-w-7xl items-center ">
                    <nav className="flex w-full items-center justify-between gap-3 ">
                        <a
                            href="#hero"
                            className="flex min-w-0 items-center gap-2.5"
                        >
                            <Image
                                src={avatar}
                                alt="Marusi Matei"
                                width={46}
                                height={46}
                                className="size-[32px] sm:size-[36px] md:size-[50px] shrink-0 rounded-full object-cover"
                            />
                            <div className="min-w-0">
                                <p className="font-display text-sm sm:text-xs font-semibold tracking-wide text-white">
                                    Marusi Matei
                                </p>
                                <p className="text-[11px] sm:text-[9px] font-normal uppercase tracking-wider text-white/45">
                                    Full-Stack Dev
                                </p>
                            </div>
                        </a>

                        <ul className="flex shrink-0 list-none gap-8 sm:gap-5">
                            <li>
                                <a
                                    href="#projects"
                                    className="text-[13px] font-normal tracking-wide text-white/45 transition hover:text-white"
                                >
                                    <Briefcase
                                        className="size-5 md:hidden"
                                        aria-hidden
                                    />
                                    <span className="hidden text-[13px] font-normal tracking-wide md:inline">
                                        Projects
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className="text-[13px] font-normal tracking-wide text-white/45 transition hover:text-white"
                                >
                                    <User
                                        className="size-5 md:hidden"
                                        aria-hidden
                                    />
                                    <span className="hidden text-[13px] font-normal tracking-wide md:inline">
                                        About
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="text-[13px] font-normal tracking-wide text-white/45 transition hover:text-white"
                                >
                                    <Mail
                                        className="size-6 md:hidden"
                                        aria-hidden
                                    />
                                    <span className="hidden text-[13px] font-normal tracking-wide md:inline">
                                        Contact Me
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};
