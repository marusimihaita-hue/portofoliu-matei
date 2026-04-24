import type { StaticImageData } from "next/image";
import type { IconType } from "react-icons";
import cvaldavImage from "@/assets/images/cvaldav.png";
import { RiNextjsFill, RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import {
    SiClerk,
    SiMongodb,
    SiNodedotjs,
    SiSanity,
    SiTypescript,
} from "react-icons/si";
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
        githubUrl: "https://github.com/marusimihaita-hue/cvaldav-store",
        liveDemo: "https://cvaldav-store.vercel.app",
        subtitle:
            "Platformă ecommerce completă — de la catalog de produse la checkout cu plăți integrate Stripe.",
        description: `CValdav Store a început ca o idee simplă: un loc unde produsele să poată fi prezentate curat, fără zgomot vizual, fără distrageri. Am vrut să construiesc ceva care să funcționeze end-to-end — de la prima pagină până la confirmarea plății — fără să depind de soluții externe gata făcute care să ascundă complexitatea.

Procesul de construire a durat aproximativ șase săptămâni, lucrate în paralel cu alte proiecte. Cel mai dificil moment a fost integrarea Stripe împreună cu Clerk — cele două sisteme trebuie să comunice precis pentru ca o comandă să fie înregistrată corect în Sanity după finalizarea checkout-ului. Am rezolvat asta prin webhook-uri server-side care ascultă evenimentele Stripe și scriu automat în baza de date.

Catalogul de produse e gestionat complet din Sanity Studio — un CMS headless care îmi permite să modific conținutul fără să ating codul. Schema e construită în așa fel încât să suporte categorii, variante de produs și imagini multiple per articol. Totul e tipizat cu TypeScript, ceea ce a eliminat o categorie întreagă de bug-uri pe care le-aș fi prins altfel doar în producție.

Platforma e în modul demo în momentul de față — poți naviga, adăuga produse în coș și simula un checkout, dar plățile reale sunt dezactivate. Dacă vrei să o testezi complet, folosește cardul de test Stripe: 4242 4242 4242 4242, orice dată în viitor și orice CVC.`,
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
        title: "Harbor Ping",
        githubUrl: "https://github.com/marusimihaita-hue/harbor-ping",
        liveDemo: "https://harbor-ping.vercel.app",
        subtitle:
            "Dashboard minimal de health-check pentru URL-uri și endpoint-uri pe care le urmărești din colțul ochiului.",
        description: `Harbor Ping e un mic dashboard de health-check pentru URL-uri pe care le urmăresc ocazional: job-uri cron, webhooks vechi, staging-uri uitate. Am vrut ceva fără SaaS — doar o listă, un istoric de status codes și notificări discrete când ceva cade sub 200 prea mult timp.

L-am scos din sertar într-un weekend ploios: polling simplu de pe server, stocare minimală și o pagină care îmi arată ultima eroare în plain text, fără grafice inutile. Încă îl folosesc când vreau să verific rapid dacă „mai respiră” un serviciu, fără să deschid trei tab-uri de monitoring comercial.`,
        frontend: [
            { label: "React", Icon: RiReactjsLine, highlight: true },
            { label: "TypeScript", Icon: SiTypescript, highlight: true },
        ],
        backend: [
            { label: "Node.js", Icon: SiNodedotjs },
            { label: "MongoDB", Icon: SiMongodb },
        ],
        image: cvaldavImage,
        imageAlt:
            "Previzualizare Harbor Ping — listă de endpoint-uri și status",
    },
];

export function getProjectById(id: string): Project | undefined {
    return projects.find((p) => p.id === id);
}
