import { NodeCardGrid } from "@/features/navigation/components/NodeCardGrid";
import { courseGroups } from "@/features/navigation/data/ecsrStructure";

export default function CoursPage() {
    return (
        <div className="ecsr-page">
            <section className="ecsr-hero" id="top">
                <p className="ecsr-kicker">Cours</p>
                <h1>Grandes familles de cours ECSR</h1>
                <p>
                    Les cours sont organisés par grands groupes, puis par sous-thèmes. Chaque page peut déjà être ouverte : le contenu détaillé sera intégré progressivement sans modifier la navigation.
                </p>
            </section>

            <NodeCardGrid nodes={courseGroups} ariaLabel="Familles de cours" />
        </div>
    );
}
