"use client";

import {
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
    type ReactNode,
} from "react";

function intersectsViewport(el: HTMLElement) {
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight;
    const vw = window.innerWidth;
    return r.top < vh && r.bottom > 0 && r.left < vw && r.right > 0;
}

/**
 * Fade când blocul intră în viewport; se repetă la fiecare intrare (ex. scroll în sus).
 * useLayoutEffect pe mount aliniază starea vizibilă înainte de paint → la refresh cu multe
 * secțiuni în ecran (zoom out), tranzițiile pornesc sincron.
 */
export function FadeInOnView({ children }: { children: ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useLayoutEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (intersectsViewport(el)) setVisible(true);
    }, []);

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
            className={`transition-opacity duration-700 ease-out ${
                visible ? "opacity-100" : "opacity-0"
            }`}
        >
            {children}
        </div>
    );
}
