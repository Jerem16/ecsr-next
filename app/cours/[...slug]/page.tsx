import { notFound } from "next/navigation";
import { NodeCardGrid } from "@/features/navigation/components/NodeCardGrid";
import {
    courseGroups,
    findChildrenByHref,
    findNodeByHref,
    flattenNodes,
} from "@/features/navigation/data/ecsrStructure";

type PageProps = {
    params: Promise<{ slug: string[] }>;
};

export function generateStaticParams() {
    return flattenNodes(courseGroups)
        .filter(
            (node) =>
                node.href.startsWith("/cours/") &&
                ![
                    "/cours/conducteur-conduite/oeil-conduite",
                    "/cours/conducteur-conduite/produits-psychoactifs",
                    "/cours/vehicules/mecanique",
                    "/cours/vehicules/mecanique/moteur-thermique",
                    "/cours/vehicules/mecanique/moteur-electrique",
                    "/cours/vehicules/mecanique/organes-securite",
                ].includes(node.href)
        )
        .map((node) => ({ slug: node.href.replace("/cours/", "").split("/") }));
}

export default async function CoursePlaceholderPage({ params }: PageProps) {
    const { slug } = await params;
    const href = `/cours/${slug.join("/")}`;
    const node = findNodeByHref(courseGroups, href);

    if (!node) {
        notFound();
    }

    const currentNode = node;
    const children = findChildrenByHref(courseGroups, href);

    return (
        <div className="ecsr-page">
            <section className="ecsr-hero" id="top">
                <p className="ecsr-kicker">Cours</p>
                <h1>{currentNode.title}</h1>
                {currentNode.description ? (
                    <p>{currentNode.description}</p>
                ) : null}
            </section>

            <NodeCardGrid
                nodes={children}
                ariaLabel={`Sous-parties du cours ${currentNode.title}`}
                emptyText="La route est prête. Le contenu de ce cours sera intégré à partir des sources HTML, PDF ou DOCX correspondantes."
            />
        </div>
    );
}
