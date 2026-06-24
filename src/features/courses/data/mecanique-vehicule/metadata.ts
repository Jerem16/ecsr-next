import type { Course } from "../../types/course";

export const mecaniqueVehiculeMeta: Omit<Course, "sections"> = {
    slug: "mecanique",
    title: "Mécanique du véhicule",
    category: "Cours ECSR — Véhicules",
    summary: "Cours modulaire sur le fonctionnement mécanique d’un véhicule : motorisations, chaîne cinématique, moteur thermique, circuits annexes, embrayage, boîte de vitesses et pont différentiel.",
    objectives: [
        "Identifier les grands types de motorisation et leur logique d’utilisation.",
        "Comprendre la chaîne cinématique entre le moteur et les roues motrices.",
        "Expliquer le fonctionnement de base du moteur thermique à quatre temps.",
        "Repérer les principaux circuits et organes annexes du moteur.",
        "Relier embrayage, boîte de vitesses et pont différentiel à la transmission du mouvement."
    ],
    objectivesOrdered: true,
};
