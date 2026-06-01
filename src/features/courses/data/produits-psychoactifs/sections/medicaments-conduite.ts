import type { CourseSection } from "../../../types/course";

export const produitsPsychoactifsMedicamentsConduiteSection: CourseSection = {
            id: "medicaments-conduite",
            title: "Médicaments et conduite",
            intro: "Un médicament prescrit ou vendu légalement peut être incompatible avec la conduite.",
            blocks: [
                {
                    type: "image-card",
                    id: "pictogrammes-medicaments",
                    title: "Pictogrammes de danger",
                    imagePosition: "left",
                    content: [
                        "La notice et la boîte du médicament doivent être lues attentivement.",
                        "Les pictogrammes indiquent un niveau de risque pour la conduite : prudence, grande prudence ou interdiction de conduire."
                    ],
                    image: {
                        src: "/cours/produits-psychoactifs/refined/pictogrammes-medicaments-conduite.jpg",
                        alt: "Pictogrammes de médicaments niveau 1, niveau 2 et niveau 3 avec conseils pour la conduite.",
                        caption: "Image essentielle : niveaux de risque des médicaments pour la conduite.",
                        role: "schema"
                    }
                },
                {
                    type: "table",
                    id: "table-pictogrammes-medicaments",
                    title: "Pictogrammes de danger des médicaments",
                    caption: "Pictogrammes de danger des médicaments",
                    columns: [
                        "Niveau",
                        "Message",
                        "Conduite",
                        "Exemples indiqués dans le support"
                    ],
                    rows: [
                        [
                            {
                                label: "Niveau 1",
                                strong: true
                            },
                            {
                                label: "Soyez prudent.",
                                strong: false
                            },
                            {
                                label: "Ne pas conduire sans avoir lu la notice.",
                                strong: false
                            },
                            {
                                label: "Anti-inflammatoires comme l’ibuprofène, le diclofénac ou le kétoprofène.",
                                strong: false
                            }
                        ],
                        [
                            {
                                label: "Niveau 2",
                                strong: true
                            },
                            {
                                label: "Soyez très prudent.",
                                strong: false
                            },
                            {
                                label: "Ne pas conduire sans l’avis d’un professionnel de santé.",
                                strong: false
                            },
                            {
                                label: "Antidépresseurs comme la fluoxétine, l’imipramine, la paroxétine ou la sertraline.",
                                strong: false
                            }
                        ],
                        [
                            {
                                label: "Niveau 3",
                                strong: true
                            },
                            {
                                label: "Attention, danger.",
                                strong: false
                            },
                            {
                                label: "Ne pas conduire. Pour reprendre la conduite, demander l’avis d’un médecin.",
                                strong: false
                            },
                            {
                                label: "Majorité des benzodiazépines comme le clonazépam, le bromazépam ou le diazépam.",
                                strong: false
                            }
                        ]
                    ]
                },
                {
                    type: "callout",
                    id: "doute-medicament",
                    title: "En cas de doute",
                    tone: "info",
                    content: "Il faut demander conseil au médecin ou au pharmacien avant de conduire."
                }
            ]
        };
