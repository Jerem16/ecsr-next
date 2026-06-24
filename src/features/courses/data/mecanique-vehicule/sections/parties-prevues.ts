import type { CourseSection } from "../../../types/course";

export const mecaniqueVehiculePartiesPrevuesSection: CourseSection = {
    "id": "parties-prevues",
    "title": "Parties prévues à développer ensuite",
    "intro": "Le support annonce aussi des thèmes complémentaires. Ils sont conservés dans la structure pour préparer les futures mises à jour.",
    "blocks": [
        {
            "type": "list-card",
            "id": "themes-a-developper",
            "title": "Thèmes mécaniques à compléter",
            "items": [
                "Moteur électrique.",
                "Principe du moteur électrique.",
                "Limites actuelles du moteur électrique.",
                "Freins.",
                "Suspensions.",
                "Pneumatiques.",
                "Direction."
            ],
            "keywords": [
                "Moteur électrique",
                "Freins",
                "Suspensions",
                "Pneumatiques",
                "Direction"
            ]
        },
        {
            "type": "callout",
            "id": "priorite-suite",
            "title": "Priorité pour la suite",
            "tone": "warning",
            "content": "Ces thèmes ne sont pas développés dans l’extrait source principal. Ils pourront être intégrés ensuite sous forme de sections séparées ou de cours complémentaires."
        }
    ]
};
