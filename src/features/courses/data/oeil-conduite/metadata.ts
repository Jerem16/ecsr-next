import type { Course } from "../../types/course";

export const oeilConduiteMeta: Omit<Course, "sections"> = {

    slug: "oeil-conduite",
    title: "L’œil et la conduite",
    category: "Cours ECSR — Conducteur et conduite",
    summary:
        "Cours complet intégré dans Next.js : contenu éditable, images contextualisées, cartes pédagogiques, tableaux HTML restaurés et pages sources accessibles.",
    objectives: [
        "Comprendre le rôle de la vue dans la tâche de conduite.",
        "Identifier les limites de la perception visuelle.",
        "Relier l’œil, le cerveau, le temps de latence et la distance parcourue.",
        "Expliquer les risques liés à la vitesse, à la nuit, à l’éblouissement, aux feux et aux angles morts.",
    ]
};
