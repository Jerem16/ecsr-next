import type { CourseSection } from "../../../types/course";

export const mecaniqueVehiculeMotorisationsSection: CourseSection = {
    "id": "motorisations",
    "title": "Les différents types de motorisation",
    "intro": "La motorisation correspond à la manière dont le véhicule produit ou utilise l’énergie nécessaire à son déplacement.",
    "blocks": [
        {
            "type": "text-card",
            "id": "mtci",
            "title": "MTCI : moteur thermique à combustion interne",
            "content": [
                "Le moteur thermique à combustion interne équipe encore une grande partie des voitures particulières.",
                "Il peut fonctionner avec plusieurs carburants : diesel, essence, GPL, GNV ou carburants verts de type éthanol."
            ],
            "keywords": [
                "Diesel",
                "Essence",
                "GPL",
                "GNV",
                "Éthanol"
            ]
        },
        {
            "type": "text-card",
            "id": "vehicules-hybrides",
            "title": "Véhicules hybrides",
            "content": [
                "Un véhicule hybride associe un moteur thermique et un moteur électrique.",
                "Les moteurs alternent leur effort selon les phases de conduite et selon le niveau de charge de la batterie."
            ],
            "keywords": [
                "Hybride",
                "Thermique",
                "Électrique",
                "Recharge"
            ]
        },
        {
            "type": "list-card",
            "id": "niveaux-hybridation",
            "title": "Niveaux d’hybridation à distinguer",
            "items": [
                "Full hybrid : moteur thermique et moteur électrique peuvent participer à la motricité.",
                "Mild-hybrid : hybridation légère, souvent associée au Start and Stop et à une assistance ponctuelle.",
                "Électrique : seul le moteur électrique sert à la motricité et l’énergie utilisée est électrique."
            ],
            "keywords": [
                "Full hybrid",
                "Mild-hybrid",
                "Électrique"
            ]
        },
        {
            "type": "callout",
            "id": "idee-cle-motorisations",
            "title": "Idée clé pour l’élève",
            "tone": "info",
            "content": "La question utile n’est pas seulement « quel moteur ? », mais « quelle énergie est utilisée et comment le mouvement arrive aux roues ? »."
        }
    ]
};
