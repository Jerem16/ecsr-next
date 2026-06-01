import { notFound } from "next/navigation";
import { NodeCardGrid } from "@/features/navigation/components/NodeCardGrid";
import {
    findChildrenByHref,
    findNodeByHref,
    flattenNodes,
    procedureGroups,
} from "@/features/navigation/data/ecsrStructure";

type PageProps = {
    params: Promise<{ slug: string[] }>;
};

export function generateStaticParams() {
    return flattenNodes(procedureGroups).map((node) => ({
        slug: node.href.replace("/procedures-conduite/", "").split("/"),
    }));
}

export default async function ProcedurePlaceholderPage({ params }: PageProps) {
    const { slug } = await params;
    const href = `/procedures-conduite/${slug.join("/")}`;
    const node = findNodeByHref(procedureGroups, href);

    if (!node) {
        notFound();
    }

    const currentNode = node;
    const children = findChildrenByHref(procedureGroups, href);

    return (
        <div className="ecsr-page">
            <section className="ecsr-hero" id="top">
                <p className="ecsr-kicker">Procédure de conduite</p>
                <h1>{currentNode.title}</h1>
                {currentNode.description ? <p>{currentNode.description}</p> : null}
            </section>

            <NodeCardGrid
                nodes={children}
                ariaLabel={`Sous-parties de ${currentNode.title}`}
                emptyText="La procédure est référencée. Son contenu détaillé sera intégré ensuite."
            />
        </div>
    );
}
