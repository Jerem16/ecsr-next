import type { CourseSection } from "../../../types/course";

export const produitsPsychoactifsSanctionsStupefiantsSection: CourseSection = {
            id: "sanctions-stupefiants",
            title: "Sanctions liées aux stupéfiants",
            intro: "La conduite après usage de stupéfiants est un délit. Le cumul stupéfiants + alcool aggrave fortement la situation.",
            blocks: [
                {
                    type: "table",
                    id: "table-sanctions-stupefiants",
                    title: "Conduite après usage de stupéfiants",
                    caption: "Sanctions liées aux stupéfiants",
                    columns: [
                        "Élément",
                        "Conduite après usage de stupéfiants",
                        "Stupéfiants + alcool"
                    ],
                    rows: [
                        [
                            {
                                label: "Qualification",
                                strong: true
                            },
                            {
                                label: "Délit (L235-1)",
                                strong: false
                            },
                            {
                                label: "Délit aggravé (L235-1)",
                                strong: false
                            }
                        ],
                        [
                            {
                                label: "Taux",
                                strong: true
                            },
                            {
                                label: "Pas de seuil : usage confirmé par analyse salivaire ou sanguine.",
                                strong: false
                            },
                            {
                                label: "Stupéfiants + alcoolémie positive.",
                                strong: false
                            }
                        ],
                        [
                            {
                                label: "Peines principales",
                                strong: true
                            },
                            {
                                label: "3 ans d’emprisonnement. 9 000 € d’amende.",
                                strong: false
                            },
                            {
                                label: "5 ans d’emprisonnement. 15 000 € d’amende.",
                                strong: false
                            }
                        ],
                        [
                            {
                                label: "Retrait de points",
                                strong: true
                            },
                            {
                                label: "6 points (L235-1 + L223-2)",
                                strong: false
                            },
                            {
                                label: "9 points, par dérogation spéciale (L235-1 + L223-2)",
                                strong: false
                            }
                        ],
                        [
                            {
                                label: "Complémentaire possible",
                                strong: true
                            },
                            {
                                label: "Suspension du permis jusqu’à 5 ans. Annulation du permis. Interdiction de solliciter un nouveau permis jusqu’à 5 ans. Immobilisation possible. Travail d’intérêt général. Jours-amende en cas de problème financier. Interdiction de conduire certains véhicules, y compris ceux dont le permis n’est pas exigé. Stage de sensibilisation à la sécurité routière. Confiscation du véhicule si propriétaire.",
                                strong: false
                            },
                            {
                                label: "Idem. Confiscation obligatoire du véhicule si le conducteur en est propriétaire, sauf décision spécialement motivée du juge. Immobilisation et mise en fourrière possibles avec autorisation du préfet. Éthylotest antidémarrage jusqu’à 5 ans si seuil délictuel alcool.",
                                strong: false
                            }
                        ],
                        [
                            {
                                label: "Récidive",
                                strong: true
                            },
                            {
                                label: "Confiscation obligatoire du véhicule si le conducteur en est propriétaire. Immobilisation possible pendant 1 an. Annulation de plein droit du permis (L235-4).",
                                strong: false
                            },
                            {
                                label: "Idem",
                                strong: false
                            }
                        ],
                        [
                            {
                                label: "Conséquences et particularités",
                                strong: true
                            },
                            {
                                label: "Si le solde de points reste positif : pas d’invalidation automatique par points, mais suspension ou annulation possible. Si le solde arrive à zéro : invalidation par lettre 48SI.",
                                strong: false
                            },
                            {
                                label: "Retrait de 9 points : conséquence très lourde sur le permis.",
                                strong: false
                            }
                        ]
                    ]
                },
                {
                    type: "callout",
                    id: "refus-verification-stupefiants",
                    title: "Refus de vérification",
                    tone: "warning",
                    content: "Le refus de vérification constitue un délit distinct, proche du refus alcool : 2 ans d’emprisonnement, 4 500 € d’amende et retrait de 6 points selon le support."
                }
            ]
        };
