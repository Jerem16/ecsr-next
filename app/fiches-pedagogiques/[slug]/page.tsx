import { notFound } from "next/navigation";
import {
    fichePedagogiqueItems,
    findNodeByHref,
} from "@/features/navigation/data/ecsrStructure";

type PageProps = {
    params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
    return fichePedagogiqueItems.map((node) => ({
        slug: node.href.replace("/fiches-pedagogiques/", ""),
    }));
}

export default async function FichePlaceholderPage({ params }: PageProps) {
    const { slug } = await params;
    const href = `/fiches-pedagogiques/${slug}`;
    const node = findNodeByHref(fichePedagogiqueItems, href);

    if (!node) {
        notFound();
    }

    const currentNode = node;

    return (
        <div className="ecsr-page">
            <section className="ecsr-hero" id="top">
                <p className="ecsr-kicker">Fiche pédagogique</p>
                <h1>{currentNode.title}</h1>
                <p>
                    Cette fiche est référencée dans la bibliothèque. Le contenu détaillé sera intégré ensuite depuis le fichier source correspondant.
                </p>
            </section>
        </div>
    );
}
