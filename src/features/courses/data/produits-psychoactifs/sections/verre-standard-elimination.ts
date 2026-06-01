import type { CourseSection } from "../../../types/course";

export const produitsPsychoactifsVerreStandardEliminationSection: CourseSection = {
            id: "verre-standard-elimination",
            title: "Verre standard, absorption et élimination",
            intro: "Comprendre les quantités et l’élimination permet de corriger les idées fausses : le corps élimine lentement, et seul le temps fait baisser l’alcoolémie.",
            blocks: [
                {
                    type: "image-card",
                    id: "verre-standard",
                    title: "Le verre standard : environ 10 g d’alcool pur",
                    imagePosition: "right",
                    content: [
                        "Dans un débit de boissons, les doses standards contiennent une quantité proche d’alcool pur.",
                        "Un verre de whisky n’est donc pas forcément « plus fort » qu’un verre de bière s’ils sont servis en dose standard."
                    ],
                    image: {
                        src: "/cours/produits-psychoactifs/refined/schema-verre-standard-10g-alcool.png",
                        alt: "Schéma comparant vin, bière, whisky et apéritif autour de 10 grammes d’alcool pur.",
                        caption: "Image essentielle : équivalence des verres standards.",
                        role: "schema"
                    }
                },
                {
                    type: "table",
                    id: "table-verre-standard",
                    title: "Équivalences d’un verre standard",
                    caption: "Équivalences d’un verre standard",
                    columns: [
                        "Boisson",
                        "Dose standard",
                        "Quantité d’alcool pur"
                    ],
                    rows: [
                        [
                            {
                                label: "Vin",
                                strong: true
                            },
                            {
                                label: "10 cl à 12,5 %",
                                strong: false
                            },
                            {
                                label: "Environ 10 g.",
                                strong: false
                            }
                        ],
                        [
                            {
                                label: "Bière",
                                strong: true
                            },
                            {
                                label: "25 cl à 5 %",
                                strong: false
                            },
                            {
                                label: "Environ 10 g.",
                                strong: false
                            }
                        ],
                        [
                            {
                                label: "Whisky",
                                strong: true
                            },
                            {
                                label: "3 cl à 40 %",
                                strong: false
                            },
                            {
                                label: "Environ 10 g.",
                                strong: false
                            }
                        ],
                        [
                            {
                                label: "Apéritif",
                                strong: true
                            },
                            {
                                label: "8 cl à 16 %",
                                strong: false
                            },
                            {
                                label: "Environ 10 g.",
                                strong: false
                            }
                        ]
                    ]
                },
                {
                    type: "comparison-card",
                    id: "absorption-elimination",
                    title: "Absorption, diffusion et élimination",
                    intro: "Après ingestion, l’alcool passe dans l’appareil digestif, rejoint la circulation sanguine, puis atteint notamment le cerveau.",
                    items: [
                        {
                            title: "Absorption et diffusion",
                            content: "L’alcool passe par l’appareil digestif puis se diffuse par le sang vers l’organisme et le cerveau.",
                            image: {
                                src: "/cours/produits-psychoactifs/refined/schema-absorption-diffusion-alcool.jpg",
                                alt: "Schéma de l’absorption digestive et de la diffusion de l’alcool dans l’organisme.",
                                caption: "Schéma : absorption et diffusion.",
                                role: "schema"
                            }
                        },
                        {
                            title: "Élimination par l’organisme",
                            content: "L’élimination est principalement assurée par le foie ; de petites quantités sont éliminées par l’air expiré, la sueur et les urines.",
                            image: {
                                src: "/cours/produits-psychoactifs/refined/schema-elimination-alcool-organisme.jpg",
                                alt: "Schéma montrant l’élimination de l’alcool par l’organisme, principalement par le foie.",
                                caption: "Schéma : élimination de l’alcool.",
                                role: "schema"
                            }
                        }
                    ],
                    conclusion: "Le café, la douche froide, le sport ou le sommeil court ne suppriment pas l’alcoolémie : seul le temps permet l’élimination progressive."
                }
            ]
        };
