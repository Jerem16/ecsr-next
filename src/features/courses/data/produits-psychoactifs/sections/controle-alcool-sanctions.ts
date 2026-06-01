import type { CourseSection } from "../../../types/course";

export const produitsPsychoactifsControleAlcoolSanctionsSection: CourseSection = {
            id: "controle-alcool-sanctions",
            title: "Contrôles et sanctions liées à l’alcool",
            intro: "Le contrôle commence par un dépistage. Si le dépistage est positif, une mesure du taux d’alcoolémie est effectuée.",
            blocks: [
                {
                    type: "image-card",
                    id: "controle-alcoolemie",
                    title: "Du dépistage à la mesure",
                    imagePosition: "right",
                    content: [
                        "Le dépistage peut se faire avec un ballon ou un éthylotest.",
                        "La mesure peut être exprimée en g/l de sang ou en mg/l d’air expiré. L’éthylomètre mesure le taux dans l’air expiré."
                    ],
                    image: {
                        src: "/cours/produits-psychoactifs/refined/schema-controles-alcoolemie.jpg",
                        alt: "Schéma présentant le dépistage alcool, le résultat positif puis la mesure du taux d’alcoolémie.",
                        caption: "Image essentielle : procédure de contrôle d’alcoolémie.",
                        role: "schema"
                    }
                },
                {
                    type: "table",
                    id: "table-alcool-contravention",
                    title: "Alcool au volant — contravention",
                    caption: "Alcool au volant — contravention selon le permis",
                    columns: [
                        "Élément",
                        "Conducteur permis normal",
                        "Permis probatoire"
                    ],
                    rows: [
                        [
                            {
                                label: "Taux sang",
                                strong: true
                            },
                            {
                                label: "À partir de 0,50 g/l, jusqu’à 0,79 g/l",
                                strong: false
                            },
                            {
                                label: "À partir de 0,20 g/l, jusqu’à 0,79 g/l",
                                strong: false
                            }
                        ],
                        [
                            {
                                label: "Taux air expiré",
                                strong: true
                            },
                            {
                                label: "À partir de 0,25 mg/l, jusqu’à 0,39 mg/l",
                                strong: false
                            },
                            {
                                label: "À partir de 0,10 mg/l, jusqu’à 0,39 mg/l",
                                strong: false
                            }
                        ],
                        [
                            {
                                label: "Qualification",
                                strong: true
                            },
                            {
                                label: "Contravention de 4e classe, 135 €, pouvant aller jusqu’à 750 €",
                                strong: false
                            },
                            {
                                label: "Idem",
                                strong: false
                            }
                        ],
                        [
                            {
                                label: "Retrait de points",
                                strong: true
                            },
                            {
                                label: "6 points",
                                strong: false
                            },
                            {
                                label: "Idem",
                                strong: false
                            }
                        ],
                        [
                            {
                                label: "Complémentaire possible",
                                strong: true
                            },
                            {
                                label: "Immobilisation du véhicule. Mise en fourrière. Suspension du permis jusqu’à 3 ans. Éthylotest antidémarrage jusqu’à 3 ans.",
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
                                label: "Si le solde de points reste positif, le conducteur conserve son permis. Si le solde arrive à zéro : invalidation du permis par lettre 48SI, obligation de repasser le code, conduite de nouveau autorisée après 6 mois ou 1 an selon les cas.",
                                strong: false
                            },
                            {
                                label: "En première année ou si le solde arrive à zéro : invalidation du permis par lettre 48SI, obligation de repasser le code et la conduite. Si le permis reste valide après retrait : capital points gelé et stage de sensibilisation obligatoire dans les 4 mois après réception de la lettre 48N.",
                                strong: false
                            }
                        ]
                    ]
                },
                {
                    type: "table",
                    id: "table-alcool-delit-refus",
                    title: "Alcool au volant — délit et refus de vérification",
                    caption: "Alcool au volant — délit, permis probatoire et refus de vérification",
                    columns: [
                        "Élément",
                        "Conducteur permis normal",
                        "Permis probatoire",
                        "Refus de vérification"
                    ],
                    rows: [
                        [
                            {
                                label: "Qualification",
                                strong: true
                            },
                            {
                                label: "Délit alcool ou ivresse manifeste (L234-1)",
                                strong: false
                            },
                            {
                                label: "Idem",
                                strong: false
                            },
                            {
                                label: "Délit distinct (L234-8)",
                                strong: false
                            }
                        ],
                        [
                            {
                                label: "Taux sang",
                                strong: true
                            },
                            {
                                label: "À partir de 0,80 g/l",
                                strong: false
                            },
                            {
                                label: "Idem",
                                strong: false
                            },
                            {
                                label: "Non concerné",
                                strong: false
                            }
                        ],
                        [
                            {
                                label: "Taux air expiré",
                                strong: true
                            },
                            {
                                label: "À partir de 0,40 mg/l",
                                strong: false
                            },
                            {
                                label: "Idem",
                                strong: false
                            },
                            {
                                label: "Non concerné",
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
                                label: "Idem",
                                strong: false
                            },
                            {
                                label: "2 ans d’emprisonnement. 4 500 € d’amende.",
                                strong: false
                            }
                        ],
                        [
                            {
                                label: "Rétention",
                                strong: true
                            },
                            {
                                label: "Oui, jusqu’à 72 h.",
                                strong: false
                            },
                            {
                                label: "Idem",
                                strong: false
                            },
                            {
                                label: "Idem",
                                strong: false
                            }
                        ],
                        [
                            {
                                label: "Retrait de points",
                                strong: true
                            },
                            {
                                label: "6 points",
                                strong: false
                            },
                            {
                                label: "Idem",
                                strong: false
                            },
                            {
                                label: "Idem",
                                strong: false
                            }
                        ],
                        [
                            {
                                label: "Complémentaire possible",
                                strong: true
                            },
                            {
                                label: "Suspension du permis jusqu’à 5 ans. Annulation du permis. Interdiction de solliciter un nouveau permis jusqu’à 5 ans. Travail d’intérêt général. Jours-amende en cas de problème financier. Interdiction de conduire certains véhicules, y compris ceux dont le permis n’est pas exigé. Stage de sensibilisation à la sécurité routière ou aux dangers des stupéfiants. Éthylotest antidémarrage jusqu’à 5 ans. Confiscation du véhicule.",
                                strong: false
                            },
                            {
                                label: "Idem",
                                strong: false
                            },
                            {
                                label: "Suspension jusqu’à 3 ans. Interdiction de solliciter un nouveau permis jusqu’à 3 ans. Autres conséquences proches du délit alcool selon les cas.",
                                strong: false
                            }
                        ],
                        [
                            {
                                label: "Récidive",
                                strong: true
                            },
                            {
                                label: "Confiscation obligatoire du véhicule si le conducteur en est propriétaire. Immobilisation possible pendant 1 an. Annulation de plein droit du permis (L234-12 / L234-13).",
                                strong: false
                            },
                            {
                                label: "Idem",
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
                                label: "Idem, avec les particularités du permis probatoire.",
                                strong: false
                            },
                            {
                                label: "Délit constitué même si le taux exact n’est pas établi.",
                                strong: false
                            }
                        ]
                    ]
                },
                {
                    type: "callout",
                    id: "sanction-plus-grave",
                    title: "La sanction la plus grave",
                    tone: "warning",
                    content: "Au-delà de l’amende, des points et du permis, la conséquence la plus grave reste l’accident mortel. La règle juridique protège d’abord la vie."
                }
            ]
        };
