import Image from "next/image";
import avatar from "@/assets/images/avatar.png";
import { Briefcase, User } from "lucide-react";
import {
    EnvelopeSimple,
    FolderUserIcon,
    UserIcon,
} from "@phosphor-icons/react/ssr";

export const Header = () => {
    return (
        <header className="fixed inset-x-0 top-0 z-50 h-18 border-b border-white/[0.06] bg-[rgba(10,10,12,0.72)] backdrop-blur-[16px] py-3">
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
                                className="size-[36px] md:size-[44px] shrink-0 rounded-full object-cover"
                            />
                            <div className="min-w-0">
                                <p className="font-display text-sm md:text-base font-semibold tracking-wide text-white">
                                    Marusi Matei
                                </p>
                                <p className="text-[10px] md:text[14px] font-normal uppercase tracking-wider text-white/45">
                                    Full-Stack Dev
                                </p>
                            </div>
                        </a>

                        <ul className="flex shrink-0 list-none gap-5 md:gap-8">
                            <li>
                                <a
                                    href="#projects"
                                    className="text-white/45 transition hover:text-white"
                                >
                                    <FolderUserIcon
                                        size={24}
                                        className=" md:hidden"
                                        aria-hidden
                                    />
                                    <span className="hidden text-[14px]  font-normal tracking-wide md:inline">
                                        Projects
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className=" text-white/45 transition hover:text-white"
                                >
                                    <UserIcon
                                        size={24}
                                        className=" md:hidden"
                                        aria-hidden
                                    />
                                    <span className="hidden text-[14px] font-normal tracking-wide md:inline">
                                        About
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="text-white/45 transition hover:text-white"
                                >
                                    <EnvelopeSimple
                                        size={24}
                                        className=" md:hidden"
                                        aria-hidden
                                    />
                                    <span className="hidden text-[14px]  font-normal tracking-wide md:inline">
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
