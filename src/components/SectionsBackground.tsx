"use client";

import type { ReactNode } from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { cn } from "@/lib/utils";

export type SectionsBackgroundProps = {
    className?: string;
    children: ReactNode;
    withSparkles?: boolean;
};

export function SectionsBackground({
    className,
    children,
    withSparkles = true,
}: SectionsBackgroundProps) {
    if (children == null) {
        return null;
    }

    return (
        <div
            className={cn(
                "relative w-full overflow-hidden border-y border-white/[0.06] bg-[var(--bg-dark)]",
                className,
            )}
        >
            {withSparkles ? (
                <div className="pointer-events-none absolute inset-0 z-0 min-h-full">
                    <SparklesCore
                        className="h-full min-h-full w-full"
                        background="transparent"
                        particleColor="rgba(226, 232, 240, 0.35)"
                        minSize={0.4}
                        maxSize={1}
                        speed={1}
                        particleDensity={10}
                    />
                </div>
            ) : null}
            <div className="relative z-10">{children}</div>
        </div>
    );
}
