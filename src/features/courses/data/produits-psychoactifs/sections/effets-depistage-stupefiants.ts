import type { CourseSection } from "../../../types/course";

export const produitsPsychoactifsEffetsDepistageStupefiantsSection: CourseSection = {
            id: "effets-depistage-stupefiants",
            title: "Effets du cannabis, dépistage et positivité",
            intro: "Le cannabis perturbe l’attention, la concentration, le contrôle de trajectoire, la décision et les réponses en situation d’urgence.",
            blocks: [
                {
                    type: "list-card",
                    id: "effets-cannabis-conduite",
                    title: "Effets du cannabis sur la conduite",
                    items: [
                        "Altération du contrôle de trajectoire.",
                        "Difficulté à partager l’attention lorsque la charge mentale augmente.",
                        "Difficultés de concentration.",
                        "Temps de décision allongé.",
                        "Réponses dégradées en situation d’urgence.",
                        "Contrôle de l’information moins efficace."
                    ]
                },
                {
                    type: "sequence-card",
                    id: "procedure-depistage-stupefiants",
                    title: "Dépistage des stupéfiants",
                    intro: "Les tests au bord de la route recherchent notamment cannabis, cocaïne/crack, opiacés et amphétaminiques.",
                    parts: [
                        {
                            type: "text",
                            title: "Déroulement simplifié",
                            content: [
                                {
                                    type: "list",
                                    ordered: true,
                                    items: [
                                        "Dépistage salivaire ou urinaire, le test salivaire étant le plus utilisé.",
                                        "Si le résultat est négatif, la procédure s’arrête sauf autre infraction.",
                                        "Si le résultat est positif, le permis peut être retenu pour une durée maximale de trois jours.",
                                        "Un second prélèvement salivaire est réalisé.",
                                        "Le conducteur peut demander un prélèvement sanguin pour contre-expertise ou vérification de médicaments psychoactifs.",
                                        "L’analyse est effectuée par un laboratoire agréé.",
                                        "Si la présence est confirmée, l’infraction de conduite après usage de stupéfiants est constituée."
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    type: "table",
                    id: "table-positivite-cannabis",
                    title: "Durées indicatives de positivité du cannabis",
                    caption: "Durées indicatives de positivité du cannabis",
                    columns: [
                        "Support de dépistage",
                        "Usage occasionnel",
                        "Usage régulier ou intensif"
                    ],
                    rows: [
                        [
                            {
                                label: "Urines",
                                strong: true
                            },
                            {
                                label: "Environ 3 à 5 jours.",
                                strong: false
                            },
                            {
                                label: "Environ 30 à 70 jours.",
                                strong: false
                            }
                        ],
                        [
                            {
                                label: "Sang — THC",
                                strong: true
                            },
                            {
                                label: "Environ 2 à 8 heures.",
                                strong: false
                            },
                            {
                                label: "Variations importantes en usage intensif et quotidien.",
                                strong: false
                            }
                        ],
                        [
                            {
                                label: "Sang — THC-COOH",
                                strong: true
                            },
                            {
                                label: "Jusqu’à 72 heures selon le support.",
                                strong: false
                            },
                            {
                                label: "Variable selon les profils.",
                                strong: false
                            }
                        ],
                        [
                            {
                                label: "Salive",
                                strong: true
                            },
                            {
                                label: "Environ 6 à 8 heures.",
                                strong: false
                            },
                            {
                                label: "De 24 heures à 8 jours.",
                                strong: false
                            }
                        ]
                    ]
                }
            ]
        };
