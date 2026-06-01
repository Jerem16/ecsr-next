import type { CourseSection } from "../../../types/course";

export const oeilConduiteLumiereSoleilSection: CourseSection = {
            id: "lumiere-soleil",
            title: "Exemple : lumière, vision et éblouissement",
            intro: "L’exemple de la lumière du soleil permet de montrer qu’une information lumineuse met un temps à parvenir, puis à être transformée et interprétée.",
            blocks: [
                {
                    type: "image-card",
                    id: "photo-eblouissement",
                    title: "Exemple de la lumière du soleil",
                    imagePosition: "right",
                    image: {
                        src: "/cours/oeil-conduite/refined/photo-eblouissement-route-soleil.jpg",
                        alt: "Route vue depuis un véhicule avec un soleil bas qui éblouit le conducteur.",
                        caption:
                            "Image illustrative d’une situation d’éblouissement.",
                        role: "illustration",
                    },
                    content: [
                        "La photo de route face au soleil est conservée comme image illustrative : elle permet d’aborder l’éblouissement, les contrastes et la difficulté à identifier les indices.",
                        "Dans une séance, elle sert surtout à faire verbaliser les conséquences : repérage plus tardif, inconfort visuel, mauvaise lecture des détails.",
                    ],
                },
                {
                    type: "callout",
                    id: "exemple-soleil",
                    title: "Exemple du support",
                    tone: "info",
                    content:
                        "Distance moyenne Terre-Soleil : 149 500 000 km ; vitesse de la lumière : 300 000 km/s ; temps nécessaire : environ 478 secondes, soit environ 8 minutes.",
                },
            ],
        };
