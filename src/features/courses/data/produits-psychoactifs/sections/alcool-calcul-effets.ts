import type { CourseSection } from "../../../types/course";

export const produitsPsychoactifsAlcoolCalculEffetsSection: CourseSection = {
            id: "alcool-calcul-effets",
            title: "Pic d’alcoolémie, calcul et effets sur la conduite",
            intro: "Le taux d’alcoolémie varie selon la quantité consommée, le poids, le sexe, l’âge, l’état général, la fatigue, l’alimentation et les médicaments.",
            blocks: [
                {
                    type: "image-card",
                    id: "calcul-taux-alcoolemie",
                    title: "Calcul indicatif du taux d’alcoolémie",
                    imagePosition: "left",
                    content: [
                        "La formule donne une estimation. Elle ne remplace jamais une mesure officielle.",
                        "Le pic d’alcoolémie est atteint environ une heure après consommation si la personne a mangé, et plus rapidement à jeun."
                    ],
                    image: {
                        src: "/cours/produits-psychoactifs/refined/formule-calcul-taux-alcoolemie.jpg",
                        alt: "Formule d’estimation du taux d’alcoolémie à partir de l’alcool pur ingéré, du poids et d’un coefficient de diffusion.",
                        caption: "Image explicative : formule de calcul du taux d’alcoolémie.",
                        role: "schema"
                    }
                },
                {
                    type: "sequence-card",
                    id: "effets-alcool-pada",
                    title: "Alcool → tâche de conduite",
                    intro: "L’alcool agit sur plusieurs étapes de la conduite : percevoir, analyser, décider et agir.",
                    parts: [
                        {
                            type: "text",
                            title: "Effets principaux",
                            content: [
                                {
                                    type: "list",
                                    items: [
                                        "Vision périphérique diminuée : piétons, cyclistes, deux-roues et angles morts repérés plus tard.",
                                        "Distances et vitesses mal évaluées : freinage tardif, mauvaises distances de sécurité, virage mal anticipé.",
                                        "Temps de réaction augmenté : le passage entre percevoir, analyser, décider et agir est ralenti.",
                                        "Inattention et conduite de nuit plus dangereuse : éblouissement plus gênant et récupération visuelle plus lente.",
                                        "Prise de risque augmentée : confiance excessive alors que les capacités réelles diminuent."
                                    ]
                                }
                            ]
                        },
                        {
                            type: "alert",
                            tone: "warning",
                            content: [
                                {
                                    type: "paragraph",
                                    text: "Le danger vient du cumul : capacités réelles diminuées + confiance excessive + prise de risque = situation impossible à rattraper.",
                                    strong: true
                                }
                            ]
                        }
                    ]
                },
                {
                    type: "table",
                    id: "table-pada-produits-psychoactifs",
                    title: "Lien entre produits psychoactifs et tâche de conduite",
                    caption: "Lien entre produits psychoactifs et tâche de conduite",
                    columns: [
                        "Étape PADA",
                        "Effet possible du produit psychoactif",
                        "Conséquence en conduite"
                    ],
                    rows: [
                        [
                            {
                                label: "Percevoir",
                                strong: true
                            },
                            {
                                label: "Vision périphérique diminuée, éblouissement plus gênant, indices de la route moins bien repérés.",
                                strong: false
                            },
                            {
                                label: "Piéton, cycliste, véhicule arrêté ou signalisation repérés trop tard.",
                                strong: false
                            }
                        ],
                        [
                            {
                                label: "Analyser",
                                strong: true
                            },
                            {
                                label: "Distances, vitesses et dangers mal évalués.",
                                strong: false
                            },
                            {
                                label: "Mauvaise anticipation, freinage tardif, virage ou intersection mal compris.",
                                strong: false
                            }
                        ],
                        [
                            {
                                label: "Décider",
                                strong: true
                            },
                            {
                                label: "Jugement perturbé, prise de risque augmentée, confiance excessive.",
                                strong: false
                            },
                            {
                                label: "Vitesse excessive, dépassement risqué, refus de renoncer.",
                                strong: false
                            }
                        ],
                        [
                            {
                                label: "Agir",
                                strong: true
                            },
                            {
                                label: "Temps de réaction augmenté, gestes moins précis.",
                                strong: false
                            },
                            {
                                label: "Réponse tardive ou inadaptée face à l’imprévu.",
                                strong: false
                            }
                        ]
                    ]
                }
            ]
        };
