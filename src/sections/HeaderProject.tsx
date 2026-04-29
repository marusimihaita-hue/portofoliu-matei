import Image from "next/image";
import avatar from "@/assets/images/avatar.png";
import Link from "next/link";
import { ArrowBigLeftDash, ArrowLeft } from "lucide-react";
import { ArrowUUpLeftIcon } from "@phosphor-icons/react/dist/ssr";

export const HeaderProject = () => {
    return (
        <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-white/[0.06] bg-[rgba(10,10,12,0.72)] backdrop-blur-[16px] py-5">
            <div className="w-full px-8">
                <div className="mx-auto flex h-full w-full max-w-7xl items-center ">
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

                        <ul className="flex shrink-0 list-none gap-8 items-center justify-center">
                            <Link
                                href="/"
                                className=" inline-block text-sm font-medium text-white hover:underline"
                            >
                                <ArrowUUpLeftIcon
                                    size={28}
                                    className="text-white md:hidden"
                                    aria-hidden
                                />
                                <span className="hidden text-[13px] font-semibold tracking-wide md:inline">
                                    <p> ← Back</p>
                                </span>
                            </Link>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};
