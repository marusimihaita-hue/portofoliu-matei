const footerLinks = [
    {
        title: "Instagram",
        href: "https://www.instagram.com/mateei55/",
    },
    {
        title: "GitHub",
        href: "https://github.com/marusimihaita-hue",
    },
    {
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/marusi-matei/",
    },
];

export const Footer = () => {
    return (
        <footer className="relative z-10 overflow-x-clip">
            <div className="absolute bottom-0 left-1/2 -z-10 h-[400px] w-[1600px] -translate-x-1/2 bg-brand/10 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]"></div>
            <div className="w-full px-8">
                <div className="mx-auto w-full max-w-7xl">
                    <div className="flex flex-col items-start sm:items-center gap-8 border-t border-white/[0.06] py-8 text-sm md:flex-row md:items-center md:justify-between">
                        <div className="text-[13px] text-white/45">
                            © 2024 Marusi Matei Bruno. All rights reserved.
                        </div>
                        <nav className="flex items-start gap-6 md:flex-row sm:items-center md:gap-8 sm:justify-center">
                            {footerLinks.map((link) => (
                                <div key={link.title}>
                                    <a
                                        href={link.href}
                                        className="inline-flex items-center gap-1 text-[13px] tracking-wide text-white/40 transition hover:text-brand"
                                    >
                                        <span>{link.title}</span>
                                        <span
                                            className="text-[10px] opacity-70"
                                            aria-hidden
                                        >
                                            ↗
                                        </span>
                                    </a>
                                </div>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
};
