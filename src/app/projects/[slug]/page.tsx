import Link from "next/link";

type Props = { params: { slug: string } };

export default function ProjectBySlugPage({ params }: Props) {
    return (
        <div className="min-h-screen bg-[var(--bg-dark)] px-8 py-24 text-white">
            <p className="text-sm text-white/50">Proiect</p>
            <h1 className="mt-2 font-display text-3xl font-bold capitalize">
                {params.slug.replace(/-/g, " ")}
            </h1>
            <p className="mt-4 max-w-lg text-sm text-white/45">
                Pagina de studiu de caz pentru acest proiect — înlocuiește acest
                conținut cu layout-ul tău.
            </p>
            <Link
                href="/"
                className="mt-8 inline-block text-sm font-medium text-brand hover:underline"
            >
                ← Înapoi la portofoliu
            </Link>
        </div>
    );
}
