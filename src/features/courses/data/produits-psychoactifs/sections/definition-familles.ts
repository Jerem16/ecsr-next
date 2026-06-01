import type { CourseSection } from "../../../types/course";

export const produitsPsychoactifsDefinitionFamillesSection: CourseSection = {
            id: "definition-familles",
            title: "Définition et grandes familles",
            intro: "Un produit psychoactif agit sur le cerveau : il peut modifier l’état de conscience, la perception, les émotions, les réflexes ou le comportement.",
            blocks: [
                {
                    type: "image-card",
                    id: "plan-support",
                    title: "Logique générale du cours",
                    imagePosition: "right",
                    content: [
                        "Le cours suit une progression simple : définition, alcool, drogues, médicaments, puis synthèse.",
                        "La question centrale en conduite n’est pas seulement le statut légal du produit, mais son effet réel sur les capacités du conducteur."
                    ],
                    image: {
                        src: "/cours/produits-psychoactifs/refined/plan-produits-psychoactifs.png",
                        alt: "Plan du cours : définition, alcool, drogues, médicaments.",
                        caption: "Image de contexte : plan du support d’origine.",
                        role: "contexte"
                    }
                },
                {
                    type: "text-card",
                    id: "definition-produit-psychoactif",
                    title: "Définition simple",
                    content: [
                        "Un produit psychoactif est une substance qui agit sur le cerveau et peut modifier l’état de conscience, la perception, les émotions, les réflexes ou le comportement.",
                        "Une drogue peut être naturelle ou synthétique, légale ou illégale, et présenter un potentiel d’usage nocif, d’abus ou de dépendance."
                    ],
                    keywords: [
                        "Cerveau",
                        "Perception",
                        "Réflexes",
                        "Comportement",
                        "Dépendance"
                    ]
                },
                {
                    type: "image-card",
                    id: "familles-produits",
                    title: "Produits licites, illicites et médicaments",
                    imagePosition: "left",
                    content: [
                        "Le schéma regroupe les familles principales : alcool, tabac, médicaments psychotropes et drogues illicites.",
                        "À retenir : le mot « légal » ne signifie pas « sans danger ». Un produit licite peut être incompatible avec la conduite."
                    ],
                    image: {
                        src: "/cours/produits-psychoactifs/refined/definition-familles-produits-psychoactifs.png",
                        alt: "Schéma regroupant médicaments psychotropes, alcool, tabac et drogues illicites.",
                        caption: "Image essentielle : catégorisation des produits psychoactifs.",
                        role: "schema"
                    }
                },
                {
                    type: "list-card",
                    id: "familles-detaillees",
                    title: "Familles à repérer rapidement",
                    intro: "Pour l’animation, il faut distinguer le statut du produit et son effet sur la conduite.",
                    items: [
                        "Produits licites : alcool, tabac, vente ou usage encadré.",
                        "Médicaments psychoactifs : usage possible sur prescription, mais risque de somnolence, baisse de vigilance ou détournement.",
                        "Produits illicites : cannabis, héroïne, cocaïne, ecstasy, champignons hallucinogènes.",
                        "Produits détournés : colles, solvants, médicaments utilisés hors de leur usage."
                    ]
                }
            ]
        };
