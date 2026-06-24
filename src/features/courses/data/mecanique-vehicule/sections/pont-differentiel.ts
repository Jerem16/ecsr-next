import type { CourseSection } from "../../../types/course";

export const mecaniqueVehiculePontDifferentielSection: CourseSection = {
    "id": "pont-differentiel",
    "title": "Le pont différentiel",
    "intro": "Le pont et le différentiel transmettent le mouvement vers les roues motrices tout en permettant leur adaptation en virage.",
    "blocks": [
        {
            "type": "comparison-card",
            "id": "pont-differentiel-roles",
            "title": "Rôle du pont et du différentiel",
            "intro": "Le pont renvoie le mouvement vers les roues motrices. Le différentiel permet aux roues de tourner à des vitesses différentes.",
            "items": [
                {
                    "title": "Pont",
                    "content": "Le pont renvoie le mouvement de la boîte de vitesses vers les deux roues motrices. Il sert aussi à réduire le mouvement et à augmenter le couple à sa sortie.",
                    "image": {
                        "src": "/cours/mecanique/refined/pont.jpg",
                        "alt": "Schéma du pont recevant le mouvement depuis la boîte de vitesses.",
                        "caption": "Le pont transmet le mouvement aux roues motrices.",
                        "role": "schema"
                    }
                },
                {
                    "title": "Différentiel",
                    "content": "En virage, la roue intérieure tourne moins vite et la roue extérieure tourne plus vite. Le différentiel permet aux deux roues motrices de tourner à des vitesses différentes.",
                    "image": {
                        "src": "/cours/mecanique/refined/differentiel.jpg",
                        "alt": "Schéma du différentiel répartissant le mouvement entre les roues en virage.",
                        "caption": "Le différentiel répartit la vitesse des roues en virage.",
                        "role": "schema"
                    }
                }
            ]
        },
        {
            "type": "list-card",
            "id": "composition-pont",
            "title": "Composition du pont",
            "items": [
                "Boîte plus pont, qui forment un seul bloc sur une voiture.",
                "Pignon d’attaque, qui reçoit le mouvement venant de la boîte de vitesses.",
                "Grande couronne, qui porte le différentiel.",
                "Demi-arbre de roue.",
                "Différentiel."
            ],
            "keywords": [
                "Pont",
                "Différentiel",
                "Pignon",
                "Couronne",
                "Demi-arbre"
            ]
        }
    ]
};
