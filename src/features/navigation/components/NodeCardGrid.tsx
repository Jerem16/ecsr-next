import Link from "next/link";
import type { NavigationNode } from "@/features/navigation/data/ecsrStructure";

interface NodeCardGridProps {
    nodes: NavigationNode[];
    ariaLabel: string;
    emptyText?: string;
}

export function NodeCardGrid({
    nodes,
    ariaLabel,
    emptyText = "Le contenu détaillé sera intégré ensuite.",
}: NodeCardGridProps) {
    if (nodes.length === 0) {
        return (
            <section className="ecsr-grid" aria-label={ariaLabel}>
                <article className="ecsr-card">
                    <h2>À compléter</h2>
                    <p>{emptyText}</p>
                </article>
            </section>
        );
    }

    return (
        <section className="ecsr-grid ecsr-grid--navigation" aria-label={ariaLabel}>
            {nodes.map((node) => (
                <article className="ecsr-card ecsr-card--nav" id={node.id} key={node.id}>
                    <p className="ecsr-card__status">
                        {node.status === "ready" ? "Cours intégré" : "Trame prête"}
                    </p>
                    <h2>{node.title}</h2>
                    {node.description ? <p>{node.description}</p> : null}
                    {node.children?.length ? (
                        <details className="ecsr-card__details">
                            <summary>Sous-parties</summary>
                            <ul>
                                {node.children.map((child) => (
                                    <li key={child.id}>
                                        <Link className="ecsr-inline-link" href={`${child.href}#top`} prefetch>
                                            {child.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </details>
                    ) : null}
                    <Link href={`${node.href}#top`} prefetch>
                        Ouvrir
                    </Link>
                </article>
            ))}
        </section>
    );
}
