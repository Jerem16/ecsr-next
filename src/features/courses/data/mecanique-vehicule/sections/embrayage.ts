import type { CourseSection } from "../../../types/course";

export const mecaniqueVehiculeEmbrayageSection: CourseSection = {
    "id": "embrayage",
    "title": "L’embrayage",
    "intro": "L’embrayage transmet ou interrompt progressivement le couple moteur vers la boîte de vitesses.",
    "blocks": [
        {
            "type": "text-card",
            "id": "role-embrayage",
            "title": "Rôle de l’embrayage",
            "content": [
                "L’embrayage sert à transmettre ou non le couple moteur vers la boîte de vitesses.",
                "Il transmet ce couple de façon progressive, ce qui permet de démarrer grâce au point de patinage et de changer de rapport grâce au débrayage."
            ],
            "keywords": [
                "Couple moteur",
                "Point de patinage",
                "Débrayage"
            ]
        },
        {
            "type": "image-card",
            "id": "embrayage-coupe",
            "title": "Embrayage en coupe",
            "imagePosition": "right",
            "content": [
                "Les principaux éléments d’un embrayage moderne sont le disque d’embrayage, le plateau presseur, l’arbre primaire, la butée, la cloche, la fourchette et le mécanisme à diaphragme."
            ],
            "image": {
                "src": "/cours/mecanique/refined/embrayage-coupe.jpg",
                "alt": "Schéma en coupe d’un embrayage moderne.",
                "caption": "Embrayage en coupe.",
                "role": "schema"
            }
        },
        {
            "type": "image-card",
            "id": "mecanisme-diaphragme",
            "title": "Mécanisme à diaphragme",
            "imagePosition": "left",
            "content": [
                "Le mécanisme à diaphragme comprend le disque d’embrayage, le volant moteur, le diaphragme, le couvercle et le plateau presseur."
            ],
            "image": {
                "src": "/cours/mecanique/refined/embrayage-diaphragme.jpg",
                "alt": "Schéma du mécanisme à diaphragme d’un embrayage.",
                "caption": "Mécanisme à diaphragme.",
                "role": "schema"
            }
        },
        {
            "type": "comparison-card",
            "id": "embraye-debraye",
            "title": "Position débrayée et position embrayée",
            "intro": "Le conducteur agit sur l’embrayage pour interrompre ou rétablir la transmission du couple moteur.",
            "items": [
                {
                    "title": "Position débrayée",
                    "content": "En position débrayée, le couple moteur n’est pas transmis à la boîte de vitesses.",
                    "image": {
                        "src": "/cours/mecanique/refined/embrayage-debraye.jpg",
                        "alt": "Schéma de la position débrayée de l’embrayage.",
                        "caption": "Position débrayée.",
                        "role": "schema"
                    }
                },
                {
                    "title": "Position embrayée",
                    "content": "En position embrayée, le couple moteur est transmis. Le volant moteur, le disque et le plateau de serrage participent à cette transmission.",
                    "image": {
                        "src": "/cours/mecanique/refined/embrayage-embraye.jpg",
                        "alt": "Schéma de la position embrayée de l’embrayage.",
                        "caption": "Position embrayée.",
                        "role": "schema"
                    }
                }
            ]
        }
    ]
};
