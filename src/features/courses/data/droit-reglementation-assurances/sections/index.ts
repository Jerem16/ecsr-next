import type { CourseSection } from "../../../types/course";
import { droitReglementationAssurancesPlanCoursSection } from "./plan-cours";
import { droitReglementationAssurancesSourcesDroitSection } from "./sources-du-droit";
import { droitReglementationAssurancesDivisionsDroitSection } from "./divisions-du-droit";
import { droitReglementationAssurancesInfractionsDroitPenalSection } from "./infractions-droit-penal";
import { droitReglementationAssurancesTraitementJudiciaireSection } from "./traitement-judiciaire-infractions";
import { droitReglementationAssurancesTraitementAdministratifSection } from "./traitement-administratif-retrait-permis";
import { droitReglementationAssurancesPermisPointsSection } from "./permis-points";
import { droitReglementationAssurancesAssurancesSection } from "./assurances";
import { droitReglementationAssurancesPagesSourcesSection } from "./pages-sources";

export const droitReglementationAssurancesSections: CourseSection[] = [
    droitReglementationAssurancesPlanCoursSection,
    droitReglementationAssurancesSourcesDroitSection,
    droitReglementationAssurancesDivisionsDroitSection,
    droitReglementationAssurancesInfractionsDroitPenalSection,
    droitReglementationAssurancesTraitementJudiciaireSection,
    droitReglementationAssurancesTraitementAdministratifSection,
    droitReglementationAssurancesPermisPointsSection,
    droitReglementationAssurancesAssurancesSection,
    droitReglementationAssurancesPagesSourcesSection,
];

export { droitReglementationAssurancesPlanCoursSection } from "./plan-cours";
export { droitReglementationAssurancesSourcesDroitSection } from "./sources-du-droit";
export { droitReglementationAssurancesDivisionsDroitSection } from "./divisions-du-droit";
export { droitReglementationAssurancesInfractionsDroitPenalSection } from "./infractions-droit-penal";
export { droitReglementationAssurancesTraitementJudiciaireSection } from "./traitement-judiciaire-infractions";
export { droitReglementationAssurancesTraitementAdministratifSection } from "./traitement-administratif-retrait-permis";
export { droitReglementationAssurancesPermisPointsSection } from "./permis-points";
export { droitReglementationAssurancesAssurancesSection } from "./assurances";
export { droitReglementationAssurancesPagesSourcesSection } from "./pages-sources";
