import type { CourseSection } from "../../../types/course";

export const mecaniqueVehiculeChaineCinematiqueSection: CourseSection = {
    "id": "chaine-cinematique",
    "title": "La chaîne cinématique",
    "intro": "La chaîne cinématique est la chaîne du mouvement : elle regroupe les organes qui transmettent l’énergie du moteur jusqu’aux roues motrices.",
    "blocks": [
        {
            "type": "comparison-card",
            "id": "traction-propulsion",
            "title": "Traction et propulsion",
            "intro": "La différence principale concerne les roues motrices et l’organisation des organes de transmission.",
            "items": [
                {
                    "title": "Véhicule à traction",
                    "content": "Le mouvement est transmis aux roues avant. Les principaux éléments sont placés à l’avant : moteur, embrayage ou convertisseur, boîte de vitesses, pont et roues avant motrices.",
                    "image": {
                        "src": "/cours/mecanique/refined/chaine-cinematique-traction.jpg",
                        "alt": "Schéma d’un véhicule à traction avec moteur, embrayage, boîte de vitesses et pont placés à l’avant.",
                        "caption": "Chaîne cinématique d’un véhicule à traction.",
                        "role": "schema"
                    }
                },
                {
                    "title": "Véhicule à propulsion",
                    "content": "Le mouvement est transmis aux roues arrière. La chaîne comprend le moteur, l’embrayage, la boîte de vitesses, l’arbre de transmission, le pont arrière et les roues arrière motrices.",
                    "image": {
                        "src": "/cours/mecanique/refined/chaine-cinematique-propulsion.jpg",
                        "alt": "Schéma d’un véhicule à propulsion avec moteur, embrayage, boîte, arbre de transmission et pont arrière.",
                        "caption": "Chaîne cinématique d’un véhicule à propulsion.",
                        "role": "schema"
                    }
                }
            ],
            "conclusion": "Dans les deux cas, l’objectif est le même : transmettre le mouvement du moteur vers les roues motrices."
        },
        {
            "type": "table",
            "id": "synthese-chaine-cinematique",
            "title": "Comparaison synthétique",
            "caption": "Repères simples pour distinguer traction et propulsion.",
            "columns": [
                "Élément",
                "Traction",
                "Propulsion"
            ],
            "rows": [
                [
                    {
                        "label": "Roues motrices",
                        "strong": true
                    },
                    {
                        "label": "Roues avant"
                    },
                    {
                        "label": "Roues arrière"
                    }
                ],
                [
                    {
                        "label": "Transmission",
                        "strong": true
                    },
                    {
                        "label": "Éléments regroupés à l’avant"
                    },
                    {
                        "label": "Arbre de transmission vers le pont arrière"
                    }
                ],
                [
                    {
                        "label": "À retenir",
                        "strong": true
                    },
                    {
                        "label": "Mouvement transmis à l’avant"
                    },
                    {
                        "label": "Mouvement transmis à l’arrière"
                    }
                ]
            ]
        }
    ]
};
