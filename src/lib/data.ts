import type { StaticImageData } from "next/image";
import type { IconType } from "react-icons";
import cvaldavImage from "@/assets/images/cvaldav.png";
import myPortofolioImage from "@/assets/images/myPortofolio.png";
import { RiNextjsFill, RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiClerk, SiSanity, SiTypescript } from "react-icons/si";
import { FaStripe } from "react-icons/fa";

export type StackItem = { label: string; Icon: IconType; highlight?: boolean };

export type Project = {
    id: string;
    title: string;
    subtitle: string;
    githubUrl: string;
    liveDemo: string;
    description: string;
    frontend: StackItem[];
    backend: StackItem[];
    image: StaticImageData;
    imageAlt: string;
};

export const projects: Project[] = [
    {
        id: "cvaldav",
        title: "CValdav Store",
        githubUrl: "https://github.com/marusimihaita-hue?tab=repositories",
        liveDemo: "https://ecommerce-starter-two.vercel.app/",
        subtitle:
            "Full ecommerce platform — from product catalog to checkout with integrated Stripe payments.",
        description: `I built an e-commerce demo platform with editable content, test payments, and order history. Data changes without redeploying, different users have different permissions, and payments are in test mode (Stripe, no real money). The flow is: catalog - product details - cart - authentication - checkout - confirmation - orders.

I split the app into routes using Next.js 16 (App Router): one for shopping, another for admin. This keeps layouts and permissions separate between client and operator. Content (products, images, text) comes from Sanity, using next-sanity with typed queries. The UI uses what I change in the studio, not hardcoded values. The studio is available on a separate route.

For the frontend: Tailwind 4 and a shadcn-style component system (central config, Radix, CVA, clsx, tailwind-merge). I used Embla for the carousel, next-themes for theming, Sonner for notifications. Fonts are from next/font (DM Sans, Cormorant Garamond, Geist Mono) with CSS variables.

Behavior: cart is managed with Zustand (careful with SSR and hydration). Authentication with Clerk (provider in layout, protected routes). Payments with Stripe Checkout and Server Actions, and a webhook saves the order in Sanity.

Code quality: I used Biome (lint and formatting) and enabled React Compiler in Next.

The project connects CMS, authentication, cart, payment, and server APIs. The flow is clear: catalog - cart - checkout - orders.`,
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
        title: "Matei.work",
        githubUrl: "https://github.com/marusimihaita-hue/portofoliu-matei",
        liveDemo: "https://marusi-portfolio.vercel.app/",
        subtitle:
            "Personal portfolio — modern design, intuitive navigation, and projects presented clearly",
        description: `I created it to showcase my work and to explain, project by project, how I approached each solution and which technologies I used.
The website is built from scratch, without using a predefined template. I chose and implemented the application structure myself (App Router from Next.js), the section organization, centralized data management for projects, and the dynamic generation of individual project pages. I used Next.js 15 together with React 18 and TypeScript, integrated with Tailwind CSS (and PostCSS), while fonts are handled using next/font (DM Sans and Syne).
For image optimization, I used Next Image, and style consistency is maintained with the help of clsx, tailwind-merge, and class-variance-authority, especially in reusable components such as carousel buttons.
On the interface side, I started from the shadcn model (configured via components.json), using components from components/ui, such as Embla for the carousel and various UI elements. For icons, I integrated Lucide, and in the stack section I also used react-icons, connected with the data from data.ts.
Animations are implemented using Framer Motion and the motion package (for backgrounds and UI effects), while additional visual effects are handled with tsParticles ("slim" version) in the section backgrounds. In the hero area, I integrated a canvas built with React Three Fiber and Three.js to create a starfield effect. I also added scroll-based animations using IntersectionObserver and CSS transitions (fade-in effects when elements enter the viewport), keeping everything as simple and efficient as possible.
This portfolio is where I brought all these elements together, with a focus on design, consistency, and user experience. Navigation is simple and intuitive, and each project is clearly presented with relevant details and quick access to the live demo or source code. Its purpose is to provide a clear and honest view of how I work and the attention I give to both visual design and implementation.`,
        frontend: [
            { label: "Next.js", Icon: RiNextjsFill, highlight: true },
            { label: "React", Icon: RiReactjsLine, highlight: true },
            { label: "TypeScript", Icon: SiTypescript, highlight: true },
            { label: "Tailwind CSS", Icon: RiTailwindCssFill },
        ],
        backend: [],
        image: myPortofolioImage,
        imageAlt:
            "Previzualizare Matei.work — design modern, navigare intuitivă și proiectele prezentate clar",
    },
];

export function getProjectById(id: string): Project | undefined {
    return projects.find((p) => p.id === id);
}
