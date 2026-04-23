"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function FadeInOnView({ children }: { children: ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const obs = new IntersectionObserver(
            ([entry]) => {
                setVisible(entry.isIntersecting);
            },
            { threshold: 0, rootMargin: "0px" },
        );

        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`transition-[opacity,transform,filter] duration-[1200ms] ease-out motion-reduce:transition-none motion-reduce:duration-0 motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:blur-none ${
                visible
                    ? "translate-y-0 opacity-100 blur-none"
                    : "translate-y-8 opacity-0 blur-md"
            }`}
        >
            {children}
        </div>
    );
}
