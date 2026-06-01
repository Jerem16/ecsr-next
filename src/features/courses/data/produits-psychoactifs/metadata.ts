import type { Course } from "../../types/course";

export const produitsPsychoactifsMeta: Omit<Course, "sections"> = {

    slug: "produits-psychoactifs",
    title: "Les produits psychoactifs",
    category: "Conducteur et conduite",
    summary: "Alcool, drogues, médicaments et conduite : comprendre comment les produits psychoactifs modifient la perception, l’analyse, la décision, l’action et le risque réel.",
    objectives: [
        "Identifier les principales familles de produits psychoactifs.",
        "Expliquer pourquoi l’alcool, le cannabis et certains médicaments diminuent les capacités nécessaires à la conduite.",
        "Relier consommation, perception, décision, action et risque d’accident.",
        "Distinguer dépistage, mesure du taux d’alcoolémie et procédures liées aux stupéfiants.",
        "Connaître les principales sanctions et les conséquences possibles pour l’assurance.",
        "Déconstruire les idées fausses fréquentes sur le cannabis et la conduite."
    ]
};
