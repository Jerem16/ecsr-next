import { NodeCardGrid } from "@/features/navigation/components/NodeCardGrid";
import { fichePedagogiqueItems } from "@/features/navigation/data/ecsrStructure";

export default function FichesPedagogiquesPage() {
    return (
        <div className="ecsr-page">
            <section className="ecsr-hero" id="top">
                <p className="ecsr-kicker">Fiches pédagogiques</p>
                <h1>Index des 62 fiches pédagogiques</h1>
                <p>
                    Les fiches sont volontairement affichées en liste directe, sans sous-groupes. Un moteur de recherche pourra être ajouté plus tard dans le menu et sur cette page.
                </p>
            </section>

            <NodeCardGrid nodes={fichePedagogiqueItems} ariaLabel="Fiches pédagogiques" />
        </div>
    );
}
