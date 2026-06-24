import type { CourseSection } from "../../../types/course";

export const droitReglementationAssurancesPlanCoursSection: CourseSection = {
    "id": "plan-cours",
    "title": "Plan du cours",
    "intro": "Ce cours regroupe les bases de droit utiles à l’ECSR, le traitement des infractions, les procédures administratives, le permis à points et les assurances automobiles.",
    "blocks": [
        {
            "type": "list-card",
            "id": "plan-modules",
            "title": "Progression générale",
            "intro": "Les modules sont organisés pour passer du cadre juridique général vers les conséquences concrètes pour le conducteur.",
            "ordered": true,
            "items": [
                [
                    {
                        "text": "Sources du droit",
                        "strong": true
                    },
                    {
                        "text": " : Constitution, loi, règlements, arrêtés, circulaires et codes."
                    }
                ],
                [
                    {
                        "text": "Grandes divisions du droit",
                        "strong": true
                    },
                    {
                        "text": " : droit public, droit privé et droits mixtes."
                    }
                ],
                [
                    {
                        "text": "Infraction et droit pénal",
                        "strong": true
                    },
                    {
                        "text": " : crime, délit, contravention et éléments constitutifs."
                    }
                ],
                [
                    {
                        "text": "Traitement judiciaire",
                        "strong": true
                    },
                    {
                        "text": " : constatation, parquet, alternatives aux poursuites et poursuites."
                    }
                ],
                [
                    {
                        "text": "Traitement administratif",
                        "strong": true
                    },
                    {
                        "text": " : rétention, suspension, annulation, invalidation et contrôle médical."
                    }
                ],
                [
                    {
                        "text": "Permis à points",
                        "strong": true
                    },
                    {
                        "text": " : retrait, récupération, stage, invalidation et période probatoire."
                    }
                ],
                [
                    {
                        "text": "Assurances automobiles",
                        "strong": true
                    },
                    {
                        "text": " : responsabilité civile, garanties, sanctions, bonus-malus et constat amiable."
                    }
                ]
            ],
            "keywords": [
                "droit",
                "infractions",
                "permis à points",
                "assurance"
            ]
        },
        {
            "type": "image-card",
            "id": "image-ouverture-circulation",
            "title": "Cadre général : la circulation routière",
            "content": [
                {
                    "type": "paragraph",
                    "text": "Le support est rattaché au chapitre « La circulation routière ». Il sert à comprendre le cadre juridique qui organise les règles, les sanctions et la protection des victimes."
                },
                {
                    "type": "note",
                    "label": "À retenir",
                    "text": "L’objectif n’est pas de réciter des textes, mais de relier une règle à une conséquence pratique pour le conducteur."
                }
            ],
            "image": {
                "src": "/cours/droit-assurances/images/route-circulation.jpg",
                "alt": "Route à chaussées séparées utilisée comme image d’ouverture du chapitre sur la circulation routière.",
                "caption": "Image d’ouverture conservée depuis la source accessible.",
                "role": "contexte"
            },
            "imagePosition": "right"
        }
    ]
};
