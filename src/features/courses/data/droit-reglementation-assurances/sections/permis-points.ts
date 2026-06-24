import type { CourseSection } from "../../../types/course";

export const droitReglementationAssurancesPermisPointsSection: CourseSection = {
    "id": "permis-points",
    "title": "Permis à points",
    "intro": "Le permis à points est un système administratif ajouté au dispositif de sanctions existant.",
    "blocks": [
        {
            "type": "text-card",
            "id": "principes-permis-points",
            "title": "Principes généraux",
            "content": [
                {
                    "type": "list",
                    "items": [
                        "Le permis est normalement affecté de 12 points.",
                        "Le permis probatoire commence avec 6 points.",
                        "Le retrait de points concerne toutes les catégories de permis obtenues.",
                        "Le retrait de points est proportionnel à la gravité de l’infraction.",
                        "Le paiement ou la condamnation définitive permet d’établir la réalité de l’infraction."
                    ]
                },
                {
                    "type": "note",
                    "label": "À retenir",
                    "text": "Le retrait de points est administratif : il intervient après la procédure pénale ou le paiement de l’amende forfaitaire."
                }
            ],
            "keywords": [
                "permis à points",
                "retrait",
                "réalité de l’infraction"
            ]
        },
        {
            "type": "table",
            "id": "bareme-retrait-points",
            "title": "Barème de retrait de points : repères essentiels",
            "caption": "Synthèse des pages 61 à 64.",
            "columns": [
                "Retrait",
                "Exemples cités dans le support"
            ],
            "rows": [
                [
                    {
                        "label": "1 point",
                        "strong": true
                    },
                    {
                        "label": "Excès de vitesse de moins de 20 km/h, chevauchement de ligne continue."
                    }
                ],
                [
                    {
                        "label": "2 points",
                        "strong": true
                    },
                    {
                        "label": "Excès de vitesse de 20 à 29 km/h, accélération par un conducteur sur le point d’être dépassé."
                    }
                ],
                [
                    {
                        "label": "3 points",
                        "strong": true
                    },
                    {
                        "label": "Distances de sécurité, téléphone tenu en main, dépassement dangereux, franchissement de ligne continue."
                    }
                ],
                [
                    {
                        "label": "4 points",
                        "strong": true
                    },
                    {
                        "label": "Refus de priorité, feu rouge ou stop, sens interdit, excès de vitesse de 40 à 49 km/h."
                    }
                ],
                [
                    {
                        "label": "6 points",
                        "strong": true
                    },
                    {
                        "label": "Alcool, stupéfiants, délit de fuite, homicide ou blessures involontaires, excès de vitesse égal ou supérieur à 50 km/h."
                    }
                ]
            ]
        },
        {
            "type": "sequence-card",
            "id": "recuperation-points",
            "title": "Récupération et reconstitution des points",
            "intro": "La récupération peut venir du temps passé sans nouvelle infraction ou d’un stage.",
            "parts": [
                {
                    "type": "text",
                    "title": "Récupération par le temps",
                    "content": [
                        {
                            "type": "list",
                            "items": [
                                "Un point perdu peut être récupéré après 6 mois sans retrait de point.",
                                "Le capital peut être reconstitué après 2 ou 3 ans selon la gravité de l’infraction.",
                                "Certains points peuvent être récupérés automatiquement après 10 ans sous conditions."
                            ]
                        }
                    ]
                },
                {
                    "type": "text",
                    "title": "Stage volontaire",
                    "content": [
                        {
                            "type": "paragraph",
                            "text": "Un stage volontaire permet de récupérer 4 points, dans la limite du plafond affecté au permis, avec une possibilité de stage par an."
                        }
                    ]
                },
                {
                    "type": "figure",
                    "title": "Exemple de récupération",
                    "image": {
                        "src": "/cours/droit-assurances/source/page-074-source.png",
                        "alt": "Exemple source de récupération de points après retrait d’un point.",
                        "caption": "Page source 74 : exemple de récupération de points.",
                        "role": "source"
                    },
                    "content": [
                        {
                            "type": "paragraph",
                            "text": "Les exemples sources sont conservés pour permettre une reprise pédagogique détaillée en fiche."
                        }
                    ]
                }
            ]
        },
        {
            "type": "callout",
            "id": "invalidation-permis",
            "title": "Invalidation pour solde nul",
            "tone": "warning",
            "content": [
                {
                    "type": "list",
                    "items": [
                        "Lettre 48SI adressée par le FNPC.",
                        "Interdiction de conduire pendant 6 mois, ou 1 an en cas de nouvelle invalidation dans un délai de 5 ans.",
                        "Obligation de restituer le permis à la préfecture.",
                        "Examen médical et tests psychotechniques avant nouvelle obtention."
                    ]
                }
            ]
        },
        {
            "type": "table",
            "id": "permis-probatoire",
            "title": "Permis probatoire : points clés",
            "caption": "Synthèse des pages 82 à 87.",
            "columns": [
                "Élément",
                "À retenir"
            ],
            "rows": [
                [
                    {
                        "label": "Durée",
                        "strong": true
                    },
                    {
                        "label": "3 ans en règle générale, 2 ans après apprentissage anticipé de la conduite."
                    }
                ],
                [
                    {
                        "label": "Capital initial",
                        "strong": true
                    },
                    {
                        "label": "6 points."
                    }
                ],
                [
                    {
                        "label": "Progression",
                        "strong": true
                    },
                    {
                        "label": "Le capital augmente en l’absence de retrait de points."
                    }
                ],
                [
                    {
                        "label": "Stage obligatoire",
                        "strong": true
                    },
                    {
                        "label": "Obligatoire en cas d’infraction entraînant un retrait d’au moins 3 points pendant la période probatoire."
                    }
                ]
            ]
        }
    ]
};
