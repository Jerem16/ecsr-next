import type { CourseSection } from "../../../types/course";

export const produitsPsychoactifsAlcoolCultureRisqueSection: CourseSection = {
            id: "alcool-culture-risque",
            title: "Alcool : banalisation culturelle et risque majeur",
            intro: "L’alcool est souvent associé à la convivialité. Le rôle pédagogique est de montrer que cette banalisation peut masquer un danger réel au volant.",
            blocks: [
                {
                    type: "image-card",
                    id: "alcool-culture-prevention",
                    title: "Une place culturelle forte, mais un risque routier réel",
                    imagePosition: "right",
                    content: [
                        "Le support présente des références historiques et publicitaires associant alcool, route et prévention.",
                        "Le cours doit amener l’élève à dépasser l’idée « c’est habituel donc ce n’est pas dangereux »."
                    ],
                    image: {
                        src: "/cours/produits-psychoactifs/refined/alcool-publicites-historique-prevention.jpg",
                        alt: "Collage de références historiques et publicitaires autour de l’alcool et de la prévention routière.",
                        caption: "Image de contexte : alcool, société et prévention.",
                        role: "contexte"
                    }
                },
                {
                    type: "callout",
                    id: "vigilance-banalisation",
                    title: "Point de vigilance pédagogique",
                    tone: "warning",
                    content: "En conduite, le problème n’est pas seulement la quantité consommée : c’est la diminution des capacités à observer, anticiper, décider et réagir."
                }
            ]
        };
