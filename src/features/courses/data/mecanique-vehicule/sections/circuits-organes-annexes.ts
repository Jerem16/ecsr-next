import type { CourseSection } from "../../../types/course";

export const mecaniqueVehiculeCircuitsOrganesAnnexesSection: CourseSection = {
    "id": "circuits-organes-annexes",
    "title": "Les circuits et organes annexes",
    "intro": "Les circuits annexes complètent le fonctionnement du moteur thermique. Ils assurent l’alimentation, le refroidissement, la lubrification, la suralimentation ou l’allumage.",
    "blocks": [
        {
            "type": "list-card",
            "id": "circuits-principaux",
            "title": "Circuits et organes à identifier",
            "items": [
                "Circuit d’injection.",
                "Circuit de refroidissement.",
                "Circuit de lubrification.",
                "Turbocompresseur.",
                "Allumage pour les moteurs essence uniquement."
            ],
            "keywords": [
                "Injection",
                "Refroidissement",
                "Lubrification",
                "Turbo",
                "Allumage"
            ]
        },
        {
            "type": "image-card",
            "id": "injection-composants",
            "title": "Circuit d’injection : composants",
            "imagePosition": "right",
            "content": [
                "Le circuit d’injection sert à injecter le carburant sous haute pression.",
                "Il comprend notamment le réservoir, la pompe électrique, le filtre à carburant, le filtre à air, la tubulure d’admission, le papillon des gaz, le calculateur et les sondes."
            ],
            "image": {
                "src": "/cours/mecanique/refined/injection-composants.jpg",
                "alt": "Schéma des composants du circuit d’injection.",
                "caption": "Circuit d’injection : composants principaux.",
                "role": "schema"
            }
        },
        {
            "type": "image-card",
            "id": "injection-fonctionnement",
            "title": "Fonctionnement de l’injection",
            "imagePosition": "left",
            "content": [
                "Une pompe électrique aspire l’essence du réservoir puis la refoule vers la rampe d’alimentation par l’intermédiaire d’un filtre.",
                "Les injecteurs sont commandés par des impulsions électriques générées par le calculateur d’injection."
            ],
            "image": {
                "src": "/cours/mecanique/refined/injection-fonctionnement.jpg",
                "alt": "Schéma de fonctionnement du circuit d’injection avec pompe, filtre, rampe et injecteurs.",
                "caption": "Fonctionnement du circuit d’injection.",
                "role": "schema"
            }
        },
        {
            "type": "image-card",
            "id": "refroidissement",
            "title": "Circuit de refroidissement",
            "imagePosition": "right",
            "content": [
                "Le circuit de refroidissement maintient la température moteur à un seuil optimum, autour de 80 à 90 °C.",
                "Il comprend notamment le vase d’expansion, le radiateur, les durites, le ventilateur, le thermostat et la pompe à eau."
            ],
            "image": {
                "src": "/cours/mecanique/refined/circuit-refroidissement.jpg",
                "alt": "Schéma du circuit de refroidissement moteur.",
                "caption": "Circuit de refroidissement.",
                "role": "schema"
            }
        },
        {
            "type": "image-card",
            "id": "lubrification",
            "title": "Circuit de lubrification",
            "imagePosition": "left",
            "content": [
                "La lubrification réduit les frottements, améliore l’étanchéité, filtre les résidus et participe au refroidissement.",
                "Les éléments concernés sont notamment la pompe à huile, le filtre à huile, les rampes de lubrification, les paliers et le manocontact de pression."
            ],
            "image": {
                "src": "/cours/mecanique/refined/circuit-lubrification.jpg",
                "alt": "Schéma du circuit de lubrification moteur.",
                "caption": "Circuit de lubrification.",
                "role": "schema"
            }
        },
        {
            "type": "image-card",
            "id": "turbocompresseur",
            "title": "Turbocompresseur",
            "imagePosition": "right",
            "content": [
                "Le turbocompresseur augmente l’admission d’air dans les cylindres afin d’augmenter la puissance moteur.",
                "Pour être efficace, le turbo doit tourner à un régime très élevé, supérieur à 100 000 tr/min."
            ],
            "image": {
                "src": "/cours/mecanique/refined/turbocompresseur.jpg",
                "alt": "Schéma d’un turbocompresseur.",
                "caption": "Turbocompresseur.",
                "role": "schema"
            }
        },
        {
            "type": "image-card",
            "id": "allumage",
            "title": "Allumage",
            "imagePosition": "left",
            "content": [
                "L’allumage concerne les moteurs essence. Son rôle est de fournir des étincelles au bon moment du cycle.",
                "Les principaux éléments sont la batterie, la bobine, le module d’allumage, les capteurs, le distributeur haute tension et les bougies."
            ],
            "image": {
                "src": "/cours/mecanique/refined/allumage.jpg",
                "alt": "Schéma du circuit d’allumage d’un moteur essence.",
                "caption": "Allumage moteur essence.",
                "role": "schema"
            }
        }
    ]
};
