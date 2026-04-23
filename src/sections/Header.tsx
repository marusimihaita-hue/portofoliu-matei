import Image from "next/image";
import avatar from "@/assets/images/avatar.png";

export const Header = () => {
    return (
        <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-white/[0.06] bg-[rgba(10,10,12,0.72)] backdrop-blur-[16px] py-5">
            <div className="mx-auto flex h-full w-full max-w-[1200px] items-center ">
                <nav className="flex w-full items-center justify-between gap-3">
                    <a
                        href="#hero"
                        className="flex min-w-0 items-center gap-2.5"
                    >
                        <Image
                            src={avatar}
                            alt="Marusi Matei"
                            width={40}
                            height={40}
                            className="size-[40px] shrink-0 rounded-full object-cover"
                        />
                        <div className="min-w-0">
                            <p className="font-display text-sm font-semibold tracking-wide text-white">
                                Marusi Matei
                            </p>
                            <p className="text-[11px] font-normal uppercase tracking-wider text-white/45">
                                Full-Stack Dev
                            </p>
                        </div>
                    </a>

                    <ul className="flex shrink-0 list-none gap-8">
                        <li>
                            <a
                                href="#projects"
                                className="text-[13px] font-normal tracking-wide text-white/45 transition hover:text-white"
                            >
                                Portofoliu
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className="text-[13px] font-normal tracking-wide text-white/45 transition hover:text-white"
                            >
                                Despre
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="text-[13px] font-normal tracking-wide text-white/45 transition hover:text-white"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
