import type { CourseSection } from "../../../types/course";

export const droitReglementationAssurancesDivisionsDroitSection: CourseSection = {
    "id": "divisions-du-droit",
    "title": "Grandes divisions du droit",
    "intro": "Le droit organise les relations entre les personnes, les entreprises, les administrations et l’État.",
    "blocks": [
        {
            "type": "text-card",
            "id": "definition-droit",
            "title": "Le droit objectif",
            "content": [
                {
                    "type": "paragraph",
                    "text": "Le droit désigne l’ensemble des règles de conduite qui, dans la société, gouvernent les relations des personnes entre elles et s’imposent à elles, au besoin par la contrainte étatique."
                },
                {
                    "type": "list",
                    "items": [
                        "Règle abstraite : générale, impersonnelle et permanente.",
                        "Règle nécessaire : elle répond à une exigence de vie sociale.",
                        "Règle coercitive : elle est obligatoire et sanctionnée par l’État."
                    ]
                }
            ],
            "keywords": [
                "droit objectif",
                "règle de droit",
                "contrainte"
            ]
        },
        {
            "type": "image-card",
            "id": "schema-branches-droit",
            "title": "Les branches principales du droit",
            "content": [
                {
                    "type": "paragraph",
                    "text": "La distinction droit public / droit privé / droits mixtes permet de situer les règles de circulation routière, les infractions et les responsabilités."
                }
            ],
            "image": {
                "src": "/cours/droit-assurances/images/schema-branches-du-droit.jpg",
                "alt": "Schéma présentant le droit public, le droit privé et les droits mixtes avec leurs principales branches.",
                "caption": "Schéma source : principales branches du droit.",
                "role": "schema"
            },
            "imagePosition": "left"
        },
        {
            "type": "table",
            "id": "table-branches-droit",
            "title": "Repères par branche",
            "caption": "Lecture simplifiée des grandes divisions du droit.",
            "columns": [
                "Branche",
                "Contenu utile"
            ],
            "rows": [
                [
                    {
                        "label": "Droit public",
                        "strong": true
                    },
                    {
                        "label": "Organisation de l’État et rapports entre l’État et les particuliers : droit constitutionnel, administratif, finances publiques."
                    }
                ],
                [
                    {
                        "label": "Droit privé",
                        "strong": true
                    },
                    {
                        "label": "Rapports entre particuliers ou personnes privées : droit civil, commercial, travail."
                    }
                ],
                [
                    {
                        "label": "Droits mixtes",
                        "strong": true
                    },
                    {
                        "label": "Domaines qui mêlent logique privée et intervention publique, notamment droit pénal et procédure civile."
                    }
                ]
            ]
        }
    ]
};
