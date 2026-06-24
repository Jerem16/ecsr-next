import type { CourseSection } from "../../../types/course";

export const droitReglementationAssurancesSourcesDroitSection: CourseSection = {
    "id": "sources-du-droit",
    "title": "Sources du droit",
    "intro": "Les règles applicables à la conduite ne viennent pas d’un seul texte. Elles sont produites par différents niveaux de normes.",
    "blocks": [
        {
            "type": "text-card",
            "id": "definition-sources-droit",
            "title": "Définition utile",
            "content": [
                {
                    "type": "paragraph",
                    "text": "La création des règles de droit est normalement régie par la Constitution. La loi est votée par le Parlement, mais certaines règles proviennent aussi de la coutume, de la jurisprudence ou de textes réglementaires."
                },
                {
                    "type": "key-values",
                    "items": [
                        {
                            "label": "Constitution",
                            "value": "Texte fondamental qui organise les pouvoirs publics."
                        },
                        {
                            "label": "Loi",
                            "value": "Règle écrite, générale et impersonnelle votée par le Parlement."
                        },
                        {
                            "label": "Règlement",
                            "value": "Texte édicté par le pouvoir exécutif ou une autorité administrative."
                        },
                        {
                            "label": "Code",
                            "value": "Regroupement organisé de lois et de règlements par matière."
                        }
                    ]
                }
            ],
            "keywords": [
                "constitution",
                "loi",
                "règlement",
                "code"
            ]
        },
        {
            "type": "table",
            "id": "separation-pouvoirs",
            "title": "Principe de séparation des pouvoirs",
            "caption": "Rôle pédagogique des trois pouvoirs dans la production et l’application des règles.",
            "columns": [
                "Pouvoir",
                "Rôle"
            ],
            "rows": [
                [
                    {
                        "label": "Pouvoir législatif",
                        "strong": true
                    },
                    {
                        "label": "Faire la loi."
                    }
                ],
                [
                    {
                        "label": "Pouvoir exécutif",
                        "strong": true
                    },
                    {
                        "label": "Édicter les règlements et organiser leur application."
                    }
                ],
                [
                    {
                        "label": "Pouvoir judiciaire",
                        "strong": true
                    },
                    {
                        "label": "Contrôler l’application de la loi et sanctionner son non-respect."
                    }
                ]
            ]
        },
        {
            "type": "callout",
            "id": "codes-utiles-route",
            "title": "Codes à connaître",
            "tone": "info",
            "content": [
                {
                    "type": "list",
                    "items": [
                        "Code de la route.",
                        "Code pénal.",
                        "Code civil.",
                        "Code des assurances.",
                        "Code du travail."
                    ]
                },
                {
                    "type": "note",
                    "label": "À retenir",
                    "text": "Pour un ECSR, le Code de la route est central, mais il faut aussi savoir expliquer les liens avec le droit pénal, le droit civil et l’assurance."
                }
            ]
        }
    ]
};
