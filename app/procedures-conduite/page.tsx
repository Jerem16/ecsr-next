import { NodeCardGrid } from "@/features/navigation/components/NodeCardGrid";
import { procedureGroups } from "@/features/navigation/data/ecsrStructure";

export default function ProceduresConduitePage() {
    return (
        <div className="ecsr-page">
            <section className="ecsr-hero" id="top">
                <p className="ecsr-kicker">Procédures de conduite</p>
                <h1>Procédures de conduite</h1>
                <p>
                    Les procédures sont organisées autour des compétences du livret de conduite. Le menu garde des titres courts : Compétence 1, Compétence 2, Compétence 3 et Compétence 4.
                </p>
            </section>

            <NodeCardGrid nodes={procedureGroups} ariaLabel="Groupes de procédures de conduite" />
        </div>
    );
}
