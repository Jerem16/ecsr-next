import type { CourseSection } from "../../../types/course";

export const mecaniqueVehiculePlanCoursSection: CourseSection = {
    "id": "plan-cours",
    "title": "Plan du cours",
    "intro": "Le cours suit une progression mécanique simple : comprendre la source du mouvement, puis les organes qui transmettent ce mouvement jusqu’aux roues.",
    "blocks": [
        {
            "type": "list-card",
            "id": "progression-mecanique",
            "title": "Progression proposée",
            "ordered": true,
            "items": [
                "Introduction : qu’est-ce qu’un véhicule automobile ?",
                "Les différents types de motorisation.",
                "La chaîne cinématique : traction et propulsion.",
                "Le moteur thermique à quatre temps.",
                "Les circuits et organes annexes.",
                "L’embrayage.",
                "La boîte de vitesses.",
                "Le pont différentiel.",
                "Parties à développer ensuite : moteur électrique et organes de sécurité."
            ],
            "keywords": [
                "Motorisation",
                "Chaîne cinématique",
                "Moteur thermique",
                "Transmission",
                "Organes"
            ]
        }
    ]
};
