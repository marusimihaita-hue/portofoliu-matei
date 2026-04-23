import type { StaticImageData } from "next/image";
import type { IconType } from "react-icons";
import cvaldavImage from "@/assets/images/cvaldav.png";
import { RiNextjsFill, RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiClerk, SiMongodb, SiNodedotjs, SiSanity, SiTypescript } from "react-icons/si";
import { FaStripe } from "react-icons/fa";

export type StackItem = { label: string; Icon: IconType; highlight?: boolean };

export type Project = {
    id: string;
    title: string;
    description: string;
    link: string;
    frontend: StackItem[];
    backend: StackItem[];
    image: StaticImageData;
    imageAlt: string;
};

export const projects: Project[] = [
    {
        id: "cvaldav",
        title: "CValdav Store",
        description:
            "Platformă ecommerce completă — de la catalog de produse la checkout cu plăți integrate Stripe.",
        link: "#",
        frontend: [
            { label: "Next.js", Icon: RiNextjsFill, highlight: true },
            { label: "React", Icon: RiReactjsLine, highlight: true },
            { label: "Tailwind CSS", Icon: RiTailwindCssFill },
            { label: "TypeScript", Icon: SiTypescript },
        ],
        backend: [
            { label: "Sanity", Icon: SiSanity },
            { label: "Stripe", Icon: FaStripe },
            { label: "Clerk", Icon: SiClerk },
        ],
        image: cvaldavImage,
        imageAlt:
            "Previzualizare CValdav Store — fereastră de browser cu magazinul online",
    },
    {
        id: "second",
        title: "Al doilea proiect",
        description:
            "Descrie al doilea proiect al tău aici — tehnologiile folosite și problema rezolvată.",
        link: "#contact",
        frontend: [
            { label: "React", Icon: RiReactjsLine, highlight: true },
            { label: "TypeScript", Icon: SiTypescript, highlight: true },
        ],
        backend: [
            { label: "Node.js", Icon: SiNodedotjs },
            { label: "MongoDB", Icon: SiMongodb },
        ],
        image: cvaldavImage,
        imageAlt: "Previzualizare proiect",
    },
];
