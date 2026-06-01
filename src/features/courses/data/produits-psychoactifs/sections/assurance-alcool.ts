import type { CourseSection } from "../../../types/course";

export const produitsPsychoactifsAssuranceAlcoolSection: CourseSection = {
            id: "assurance-alcool",
            title: "Conséquences pour l’assurance",
            intro: "La conduite sous l’emprise de l’alcool peut entraîner des conséquences humaines, pénales, administratives et financières.",
            blocks: [
                {
                    type: "image-card",
                    id: "consequences-assurance",
                    title: "Garanties refusées, résiliation ou majoration",
                    imagePosition: "left",
                    content: [
                        "Les réparations du véhicule du conducteur peuvent ne pas être prises en charge.",
                        "La garantie conducteur ou la défense peuvent être exclues selon le contrat.",
                        "L’assureur peut résilier ou appliquer une forte majoration de cotisation."
                    ],
                    image: {
                        src: "/cours/produits-psychoactifs/refined/assurance-consequences-alcool.png",
                        alt: "Schéma montrant les conséquences possibles sur l’assurance après conduite sous alcool : réparations, garantie conducteur, défense, résiliation ou majoration.",
                        caption: "Image explicative : conséquences possibles pour l’assurance.",
                        role: "schema"
                    }
                },
                {
                    type: "callout",
                    id: "message-prevention-assurance",
                    title: "Message de prévention",
                    tone: "info",
                    content: "La décision la plus sûre est d’anticiper : conducteur désigné, transports, hébergement ou absence de conduite."
                }
            ]
        };
