import type { CourseSection } from "../../../types/course";

export const mecaniqueVehiculeIntroductionSection: CourseSection = {
    "id": "introduction-vehicule",
    "title": "Introduction : qu’est-ce qu’un véhicule automobile ?",
    "intro": "Un véhicule automobile se déplace par ses propres moyens. Il possède donc une source d’énergie, un moteur et des organes capables de transmettre le mouvement.",
    "blocks": [
        {
            "type": "image-card",
            "id": "vehicule-automobile",
            "title": "Un véhicule qui se déplace par ses propres moyens",
            "imagePosition": "right",
            "content": [
                "Le mot « automobile » renvoie à l’idée d’un véhicule capable de se déplacer par ses propres moyens.",
                "Dans ce cours, la référence principale est la voiture particulière, avec une attention portée à la motorisation et à la transmission du mouvement."
            ],
            "image": {
                "src": "/cours/mecanique/source/vehicule-coupe-moteur.jpg",
                "alt": "Vue en coupe d’un véhicule montrant l’implantation du moteur et des principaux organes mécaniques.",
                "caption": "Image de contexte : vue générale d’un véhicule et de sa motorisation.",
                "role": "contexte"
            }
        },
        {
            "type": "list-card",
            "id": "evolution-motorisation",
            "title": "Pourquoi les motorisations évoluent",
            "intro": "Les choix techniques répondent à des contraintes d’usage, de coût et d’environnement.",
            "items": [
                "Coût d’utilisation du véhicule.",
                "Pollution sonore.",
                "Pollution gazeuse.",
                "Usages du véhicule.",
                "Évolutions techniques."
            ],
            "keywords": [
                "Coût",
                "Pollution",
                "Usage",
                "Évolution"
            ]
        }
    ]
};
