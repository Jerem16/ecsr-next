import type { CourseSection } from "../../../types/course";

export const droitReglementationAssurancesInfractionsDroitPenalSection: CourseSection = {
    "id": "infractions-droit-penal",
    "title": "Infraction et notions de droit pénal",
    "intro": "Pour comprendre une sanction routière, il faut distinguer la gravité de l’infraction et les éléments qui la constituent.",
    "blocks": [
        {
            "type": "text-card",
            "id": "definition-infraction",
            "title": "Définition de l’infraction",
            "content": [
                {
                    "type": "paragraph",
                    "text": "Une infraction est un acte, ou une omission, interdit par la loi sous la menace d’une sanction. On peut aussi la définir comme le non-respect d’une loi ou d’un règlement."
                },
                {
                    "type": "list",
                    "items": [
                        "Élément légal : le texte qui prévoit l’infraction.",
                        "Élément matériel : le fait, l’acte ou l’omission constaté.",
                        "Élément moral : l’intention ou, selon les cas, la faute imputable à l’auteur."
                    ],
                    "ordered": true
                }
            ],
            "keywords": [
                "infraction",
                "élément légal",
                "élément matériel",
                "élément moral"
            ]
        },
        {
            "type": "table",
            "id": "classification-infractions",
            "title": "Classification des infractions",
            "caption": "Les infractions pénales sont classées selon leur gravité.",
            "columns": [
                "Type",
                "Peines / repères"
            ],
            "rows": [
                [
                    {
                        "label": "Crime",
                        "strong": true
                    },
                    {
                        "label": "Infraction la plus grave, punie de peines criminelles. Il n’y a pas de crime en matière d’infractions routières dans le support source."
                    }
                ],
                [
                    {
                        "label": "Délit",
                        "strong": true
                    },
                    {
                        "label": "Peine délictuelle : emprisonnement, amende d’au moins 3 750 € et peines complémentaires possibles."
                    }
                ],
                [
                    {
                        "label": "Contravention",
                        "strong": true
                    },
                    {
                        "label": "Peine contraventionnelle : amende jusqu’à 3 000 € selon la classe et la récidive."
                    }
                ]
            ]
        },
        {
            "type": "image-card",
            "id": "organisation-justice",
            "title": "Organisation de la justice française",
            "content": [
                {
                    "type": "paragraph",
                    "text": "La justice française distingue l’ordre judiciaire et l’ordre administratif. Pour les infractions routières, les juridictions pénales sont principalement concernées."
                },
                {
                    "type": "note",
                    "label": "À retenir",
                    "text": "Le conducteur peut rencontrer plusieurs niveaux : première instance, appel, puis cassation."
                }
            ],
            "image": {
                "src": "/cours/droit-assurances/images/schema-organisation-justice-francaise.jpg",
                "alt": "Schéma de l’organisation de la justice française entre ordre judiciaire et ordre administratif.",
                "caption": "Schéma source : organisation de la justice française.",
                "role": "schema"
            },
            "imagePosition": "right"
        }
    ]
};
