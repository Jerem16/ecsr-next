import type { CourseSection } from "../../../types/course";

export const produitsPsychoactifsAccidentologieAlcoolSection: CourseSection = {
            id: "accidentologie-alcool",
            title: "Accidentologie liée à l’alcool",
            intro: "L’alcool est présent dans environ un tiers des accidents mortels selon le support. Le risque augmente fortement avec le taux d’alcoolémie.",
            blocks: [
                {
                    type: "image-card",
                    id: "courbe-risque-alcool",
                    title: "Risque exponentiel avec le taux d’alcoolémie",
                    imagePosition: "left",
                    content: [
                        "La courbe montre que le risque n’augmente pas de manière linéaire : plus le taux monte, plus le risque s’emballe.",
                        "Ce visuel doit être utilisé pour faire comprendre que « juste un peu plus » peut produire un risque beaucoup plus important."
                    ],
                    image: {
                        src: "/cours/produits-psychoactifs/refined/courbe-alcool-risque-accident-corporel.png",
                        alt: "Courbe montrant l’augmentation du risque d’accident corporel avec le taux d’alcoolémie.",
                        caption: "Image essentielle : lien entre alcoolémie et risque d’accident.",
                        role: "schema"
                    }
                },
                {
                    type: "table",
                    id: "table-risque-alcool",
                    title: "Risque d’être responsable d’un accident mortel",
                    caption: "Risque d’être responsable d’un accident mortel selon le taux d’alcoolémie",
                    columns: [
                        "Taux d’alcoolémie",
                        "Risque indiqué"
                    ],
                    rows: [
                        [
                            {
                                label: "0,5 à 0,8 g/l",
                                strong: true
                            },
                            {
                                label: "Risque multiplié par 6,4.",
                                strong: false
                            }
                        ],
                        [
                            {
                                label: "0,8 à 1,2 g/l",
                                strong: true
                            },
                            {
                                label: "Risque multiplié par 8,3.",
                                strong: false
                            }
                        ],
                        [
                            {
                                label: "1,2 à 2 g/l",
                                strong: true
                            },
                            {
                                label: "Risque multiplié par 24,4.",
                                strong: false
                            }
                        ],
                        [
                            {
                                label: "Au-delà de 2 g/l",
                                strong: true
                            },
                            {
                                label: "Risque multiplié par 44,4.",
                                strong: false
                            }
                        ]
                    ]
                },
                {
                    type: "list-card",
                    id: "chiffres-alcool-a-retenir",
                    title: "Chiffres à retenir pour l’animation",
                    items: [
                        "L’alcool est impliqué dans environ 1 accident mortel sur 3.",
                        "La nuit, l’alcool est présent dans presque 1 accident mortel sur 2.",
                        "Un accident avec alcool est environ 2,5 fois plus mortel qu’un accident sans alcool.",
                        "Les victimes sont très souvent le conducteur alcoolisé et son passager.",
                        "Le risque moyen d’être responsable d’un accident mortel est fortement augmenté chez les conducteurs alcoolisés."
                    ]
                }
            ]
        };
